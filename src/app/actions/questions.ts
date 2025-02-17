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

export async function startOrResumeDomainQuiz(domain: DomainType) {
  return requestHandler(async () => {
    const session = await auth();
    if (!session?.user) {
      redirect("/login");
    }

    // Find existing quiz session
    let quizSession = await prisma.quizSession.findUnique({
      where: {
        userId_domain: {
          userId: session.user.id,
          domain
        }
      },
      include: {
        answers: true
      }
    });

    // If completed, return early
    if (quizSession?.status === 'COMPLETED') {
      return { isCompleted: true };
    }

    // Get questions
    const questions = await prisma.question.findMany({ where: { domain } });
    if (!questions.length) {
      throw new Error("No questions found");
    }

    // Create new session if none exists
    if (!quizSession) {
      quizSession = await prisma.quizSession.create({
        data: {
          userId: session.user.id,
          domain,
        },
        include: {
          answers: true
        }
      });
    }

    // Map existing answers
    const answers = questions.map(q => {
      const existingAnswer = quizSession!.answers.find(a => a.questionId === q.id);
      return existingAnswer?.answer || "";
    });

    return {
      questions,
      answers,
      sessionId: quizSession.id,
      isCompleted: false
    };
  });
}

export async function getQuestionById(id: string) {
  return requestHandler(async () => {
    const session = await auth();
    if (!session?.user) {
      //todo redirect to login
      //redirect("/unprotected");
      return;
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

export async function submitQuestion(data: { questionId: string, answer: string, sessionId: string }) {
  return requestHandler(async () => {
    const session = await auth();
    if (!session?.user) {
      redirect("/login");
    }

    const quizSession = await prisma.quizSession.findUnique({
      where: { id: data.sessionId },
      include: { answers: true }
    });

    if (!quizSession || quizSession.status === 'COMPLETED') {
      throw new Error("Invalid or completed quiz session");
    }

    const questionAttempt = await prisma.attempedQuestion.upsert({
      where: {
        userId_questionId: {
          questionId: data.questionId,
          userId: session.user.id,
        },
      },
      update: {
        answer: data.answer,
        quizSessionId: data.sessionId
      },
      create: {
        questionId: data.questionId,
        userId: session.user.id,
        answer: data.answer,
        quizSessionId: data.sessionId
      },
    });

    // Check if this was the last question
    const allQuestions = await prisma.question.count({ where: { domain: quizSession.domain } });
    const answeredQuestions = await prisma.attempedQuestion.count({
      where: { quizSessionId: data.sessionId }
    });

    if (allQuestions === answeredQuestions) {
      await prisma.quizSession.update({
        where: { id: data.sessionId },
        data: {
          status: 'COMPLETED',
          completedAt: new Date()
        }
      });
    }

    return questionAttempt;
  });
}