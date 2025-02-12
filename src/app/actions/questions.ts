"use server"

import { DomainType, PrismaClient } from '@prisma/client';
import {
  domainSchema,
  questionIdSchema,
  userIdSchema,
  answerSchema,
  submitSchema
} from '@/lib/questions';
import { auth } from '../(auth)/auth';
import { redirect } from 'next/navigation';
import ActionResponse from '@/lib/action-response';
import { prisma } from '@/lib/db';

export async function getQuestionsByDomain(domain: DomainType) {
  try {
    const session = await auth();
    if (!session?.user) {
      //todo redirect to login
      redirect("/unprotected");
    }
    const parsed = questionIdSchema.safeParse(domain);
    if (!parsed.success) {
      return ActionResponse.error(400, parsed.error.message, "Invalid domain");
    }

    const questions = await prisma.question.findMany({ where: { domain } });

    return ActionResponse.success(questions, 200);
  } catch (err) {
    const error = err as Error;
    return ActionResponse.error(500, error?.message, "Error fetching questions");
  }
}

export async function getQuestionById(id: string) {
  try {
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
      return ActionResponse.error(404, "Question not found");
    }
  
    return ActionResponse.success(question, 200);
  } catch (err) {
    const error = err as Error;
    return ActionResponse.error(500, error?.message, "Error fetching question");
  }
}

export async function submitQuestion(data:{questionId: string, answer: string}) {
  try {
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
      return ActionResponse.error(404, "Question not found");
    }

    const questionAttempt = await prisma.attempedQuestion.upsert({
      where: {
        userId_questionId: {
          questionId: data.questionId,
          userId: userId,
        },
      },
      update: { answer: data.answer },
      create: { questionId: data.questionId, userId: userId, answer: data.answer },
    })

    return ActionResponse.success(questionAttempt, 200);
  } catch (err) {
    const error = err as Error;
    return ActionResponse.error(500, error?.message, "Error submitting question");
  }
}