import { DomainType, PrismaClient } from '@prisma/client';
import { handlePrismaError } from '@/helpers/prismaerror';
import {z} from 'zod'
import { 
  domainSchema, 
  questionIdSchema, 
  userIdSchema, 
  answerSchema, 
  submitSchema 
} from '@/lib/questions';
const prisma = new PrismaClient();

const handlerequest=async<T>(operation:()=>Promise<T>)=>
{
  try{
    return{status:200,data:await operation()}
  }
  catch(error){
    return handlePrismaError(error)
  }
}

export async function getQuestionsByDomain(domain: DomainType) {
  const parsed=questionIdSchema.safeParse(domain);
  if (!parsed.success) {
    return { status: 400, error: parsed.error.format() };
  }

  return handlerequest(() => prisma.question.findMany({ where: { domain } }));
  
}

export async function getQuestionById(id: string) {
  const parsed=questionIdSchema.safeParse(id);
  if(!parsed.success)
    return {status:400, error: parsed.error.format()};
  return handlerequest(async()=>{
    const question=await prisma.question.findUnique({where:{id}})
    if(!question)
      throw new Error("Question not found")
    return question;
  });
}

export async function submitQuestion(data: { questionId: string; userId: string; answer: string }) {
  const parsed=submitSchema.safeParse(data);
  if(!parsed.success)
    return{status:400, error:parsed.error.format()};
  return handlerequest(async()=>{
    const [question,attempt]=await Promise.all([
      prisma.question.findUnique({ where: { id: data.questionId } }),
      prisma.attempedQuestion.findUnique({
        where: { questionId_userId: { questionId: data.questionId, userId: data.userId } },
      }),
    ]);
    if (!question) throw new Error('Question not found');
    if (attempt) throw new Error('Attempt already exists');
    return prisma.attempedQuestion.create({ data });
  });
}

export function autoSaveAnswer(userId: string, questionId: string, answer: string) {
  setTimeout(() => {
    handlerequest(() =>
      prisma.attempedQuestion.upsert({
        where: { questionId_userId: { questionId, userId } },
        update: { answer },
        create: { questionId, userId, answer },
      })
    );
  }, 10000);
};

export async function verifyUserSession(userId: string)
{
const parsed = userIdSchema.safeParse(userId);
  if (!parsed.success) {
    return { status: 400, error: parsed.error.format() };
  }

  return handlerequest(async () => {
    const session = await prisma.session.findFirst({ where: { userId } });
    if (!session) throw new Error("Session not found");
    return session;
  });
};