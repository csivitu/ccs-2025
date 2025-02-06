import { DomainType, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getQuestionsByDomain(domain: DomainType) {
  if (!domain || domain.trim() === '') {
    return { status: 400, error: 'Domain is required' };
  }
  try {
    const questions = await prisma.question.findMany({
      where: {
        domain
      }
    });
    return { status: 200, data: questions };
  } catch (error: any) {
    return { status: 500, error: error.message };
  }
}

export async function getQuestionById(id: string) {
  if (!id || id.trim() === '') {
    return { status: 400, error: 'Question ID is required' };
  }
  try {
    const question = await prisma.question.findUnique({
      where: {
        id: id,
      },
    });
    return { status: 200, data: question };
  } catch (error: any) {
    return { status: 500, error: error.message };
  }
}

export async function submitQuestion(data: { questionId: string; userId: string; answer: string }) {
  const missingFields = [];
  if (!data.questionId || data.questionId.trim() === '') missingFields.push('questionId');
  if (!data.userId || data.userId.trim() === '') missingFields.push('UserId');
  if (!data.answer || data.answer.trim() === '') missingFields.push('answer');
  if (missingFields.length > 0) {
    return { status: 400, error: `Missing fields: ${missingFields.join(', ')}` };
  }
  try {
    const question = await prisma.question.findUnique({ where: { id: data.questionId } });
    if (!question) {
      return { status: 404, error: 'Question not found' };
    }
    const attempt = await prisma.attempedQuestion.findUnique({ where: { questionId_userId: { questionId: data.questionId, userId: data.userId } } });
    if (attempt) {
      return { status: 409, error: 'Attempt already exists' };
    }
    const questionAttempt = await prisma.attempedQuestion.create({
      data,
    });
    return { status: 201, data: questionAttempt };
  } catch (error: any) {
    return { status: 500, error: error.message };
  }
}
