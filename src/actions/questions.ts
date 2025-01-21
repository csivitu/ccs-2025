import { PrismaClient, SubDomain } from '@prisma/client';

const prisma = new PrismaClient();

export async function getQuestions() {
  if (!prisma.question) {
    return { status: 500, error: 'Question model is not available' };
  }
  try {
    const questions = await prisma.question.findMany();
    return { status: 200, data: questions };
  } catch (error: any) {
    return { status: 500, error: error.message };
  }
}

export async function getQuestion(id: string) {
  if (!prisma.question) {
    return { status: 500, error: 'Question model is not available' };
  }
  if (!id || id.trim() === '') {
    return { status: 400, error: 'Question ID is required' };
  }
  try {
    const question = await prisma.question.findUnique({
      where: {
        quesId: parseInt(id),
      },
    });
    return { status: 200, data: question };
  } catch (error: any) {
    return { status: 500, error: error.message };
  }
}

export async function submitQuestion(data: { questionId: string; ccsUserId: string; answer: string }) {
  if (!prisma.question) {
    return { status: 500, error: 'Question model is not available' };
  }
  const missingFields = [];
  if (!data.questionId || data.questionId.trim() === '') missingFields.push('questionId');
  if (!data.ccsUserId || data.ccsUserId.trim() === '') missingFields.push('ccsUserId');
  if (!data.answer || data.answer.trim() === '') missingFields.push('answer');
  if (missingFields.length > 0) {
    return { status: 400, error: `Missing fields: ${missingFields.join(', ')}` };
  }
  try {
    const question = await prisma.question.findUnique({ where: { quesId: parseInt(data.questionId) } });
    if (!question) {
      return { status: 404, error: 'Question not found' };
    }
    const attempt = await prisma.questionAttempt.findUnique({ where: { questionId_ccsUserId: { questionId: data.questionId, ccsUserId: data.ccsUserId } } });
    if (attempt) {
      return { status: 409, error: 'Attempt already exists' };
    }
    const questionAttempt = await prisma.questionAttempt.create({
      data,
    });
    return { status: 201, data: questionAttempt };
  } catch (error: any) {
    return { status: 500, error: error.message };
  }
}

export async function submitTask(data: { ccsUserId: string; task: string; subdomain: SubDomain }) {
  if (!prisma.question) {
    return { status: 500, error: 'Question model is not available' };
  }
  const missingFields = [];
  if (!data.ccsUserId || data.ccsUserId.trim() == '') missingFields.push('ccsUserId');
  if (!data.task || data.task.trim()== '') missingFields.push('task');
  if (!data.subdomain || data.subdomain.trim()== '') missingFields.push('subdomain');
  if (missingFields.length > 0) {
    return { status: 400, error: `Missing fields: ${missingFields.join(', ')}` };
  }
  try {
    const taskSubmission = await prisma.taskSubmission.create({
      data,
    });
    return { status: 201, data: taskSubmission };
  } catch (error: any) {
    return { status: 500, error: error.message };
  }
}
