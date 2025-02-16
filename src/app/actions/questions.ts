"use server"

import { DomainType } from '@prisma/client';
import {
  questionIdSchema,
  submitSchema
} from '@/lib/questions';
import { auth } from '../(auth)/auth';
import { redirect } from 'next/navigation';
import ActionResponse from '@/lib/action-response';
import { prisma } from '@/lib/db';
import { requestHandler } from '@/helpers/request-handler';

export async function getQuestionsByDomain(domain: DomainType) {
  return requestHandler(async () =>{
    const session = await auth();
    if (!session?.user) {
      //todo redirect to login
      redirect("/unprotected");
    }
    const parsed = questionIdSchema.safeParse(domain);
    if (!parsed.success) {
      throw new Error("Invalid Domain");
    }
    const questions = await prisma.question.findMany({ where: { domain } });
    return questions;
  })
}

export async function getQuestionById(id: string) {
  return requestHandler(async () => {
    const session = await auth();
    if (!session?.user) {
      //todo redirect to login
      redirect("/unprotected");
    }
    const parsed = questionIdSchema.safeParse(id);
    if (!parsed.success)
      return { status: 400, error: parsed.error.format() };
  
    const question = await prisma.question.findUnique({ where: { id } })
  
    if (!question) {
      throw new Error("Question not found");
    }
  
    return question
  })
}

export async function submitQuestion(data:{questionId: string, answer: string}) {
  return requestHandler(async () => {
    const session = await auth();
    if (!session?.user) {
      //todo redirect to login
      redirect("/unprotected");
    }
    const userId = session?.user.id || '';
    const parsed = submitSchema.safeParse(data);
    if (!parsed.success)
      return ActionResponse.error(400, parsed.error.message, "Invalid data");

    const question = await prisma.question.findUnique({ where: { id: data.questionId } });

    if (!question) {
      throw new Error("Question not found");
    }

    const questionAttempt = await prisma.attempedQuestion.upsert({
      where: {
        questionId_userId: {
          questionId: data.questionId,
          userId: userId,
        },
      },
      update: { answer: data.answer },
      create: { questionId: data.questionId, userId: userId, answer: data.answer },
    })

    return questionAttempt;
  })
}