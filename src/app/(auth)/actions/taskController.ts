import { PrismaClient, SubDomain } from '@prisma/client';
import { handlePrismaError } from '@/helpers/prismaerror';
import {z} from 'zod';
import { submitTaskSchema,
  subDomainSchema,
  getTaskIdSchema
 } from '@/lib/tasks';
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
 
export async function submitTask(data: { userId: string; task: string[]; subDomain: SubDomain }) {
    const parsed=submitTaskSchema.safeParse(data);
    if(!parsed.success)
    {
      return{status:400, error: parsed.error.format()}
    }
    return handlerequest(async()=>{
      const taskSubmission=await prisma.attemptedTask.create({data});
      if(!taskSubmission)
        throw new Error("Task not Submitted")
      return taskSubmission;
    });
  }

export async function getTasksBySubDomain(subDomain: SubDomain) {
  const parsed=subDomainSchema.safeParse(subDomain);
    if (!parsed.success ) {
        return { status: 400, error: parsed.error.format() };
      }
      return handlerequest(async () => {
        const tasks = await prisma.task.findMany({
          where: { subDomain },
        });
    
        if (!tasks || tasks.length === 0) {
          throw new Error("No tasks found for the given subdomain");
        }
    
        return tasks;
      });
}

export async function getTaskById(id: string) {
  const parsed = getTaskIdSchema.safeParse(id);
  if (!parsed.success) {
    return { status: 400, error: parsed.error.flatten() };
  }
  return handlerequest(async () => {
    const task = await prisma.task.findUnique({ where: { id } });
    if (!task) {
      throw new Error("Task not found");
    }
    return task;
  });
}
