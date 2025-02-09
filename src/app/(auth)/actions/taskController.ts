import { PrismaClient, SubDomain } from '@prisma/client';
import { handlePrismaError } from '@/helpers/prismaerror';
const prisma = new PrismaClient();

export async function submitTask(data: { userId: string; task: string[]; subDomain: SubDomain }) {
    const missingFields = [];
    if (!data.userId || data.userId.trim() == '') missingFields.push('ccsUserId');
    if (!data.task || data.task.length==0) missingFields.push('task');
    if (!data.subDomain || data.subDomain.trim()== '') missingFields.push('subDomain');
    if (missingFields.length > 0) {
      return { status: 400, error: `Missing fields: ${missingFields.join(', ')}` };
    }
    try {
      const taskSubmission = await prisma.attemptedTask.create({
        data,
      });
      return { status: 201, data: taskSubmission };
    } catch (error) {
      return (handlePrismaError(error));
    }
  }

export async function getTasksBySubDomain(subDomain: SubDomain) {
    if (!subDomain ) {
        return { status: 400, error: 'Domain is required' };
      }
    try {
        const tasks = await prisma.task.findMany({
            where: { subDomain },
        });
        return { status: 200, data: tasks };
    } catch (error) {
        return (handlePrismaError(error));
    }
}

export async function getTaskById(id: string) {
    if (!id || id.trim() == '') {
        return { status: 400, error: 'Task ID is required' };
    }
    try {
        const task = await prisma.task.findUnique({
            where: {
                id: id,
            },
        });
        return { status: 200, data: task };
    } catch (error) {
        console.error("Error fetching task",error);
        return (handlePrismaError(error));
    }
}