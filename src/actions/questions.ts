import { PrismaClient, SubDomain } from '@prisma/client';

const prisma = new PrismaClient();

export async function getQuestions() {
  try {
    const questions = await prisma.question.findMany();
    return { status: 200, data: questions };
  } catch (error: any) {
    return { status: 500, error: error.message };
  }
}

export async function getQuestion(id: string) {
  if (!id) {
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
  const missingFields = [];
  if (!data.questionId) missingFields.push('questionId');
  if (!data.ccsUserId) missingFields.push('ccsUserId');
  if (!data.answer) missingFields.push('answer');
  if (missingFields.length > 0) {
    return { status: 400, error: `Missing fields: ${missingFields.join(', ')}` };
  }
  try {
    const questionAttempt = await prisma.questionAttempt.create({
      data,
    });
    return { status: 201, data: questionAttempt };
  } catch (error: any) {
    return { status: 500, error: error.message };
  }
}

export async function submitTask(data: { ccsUserId: string; task: string; subdomain: SubDomain }) {
  const missingFields = [];
  if (!data.ccsUserId) missingFields.push('ccsUserId');
  if (!data.task) missingFields.push('task');
  if (!data.subdomain) missingFields.push('subdomain');
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
