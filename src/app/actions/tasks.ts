"use server"

import { SubDomain } from '@prisma/client';
import { submitTaskSchema,
  subDomainSchema,
  getTaskIdSchema
 } from '@/lib/tasks';
import { prisma } from '@/lib/db'
import ActionResponse from '@/lib/action-response';
import { auth } from '../(auth)/auth';
import { revalidatePath } from 'next/cache';

export async function submitTask(data: { userId: string; task: string[]; taskId: string }) {
  try {
    const session = await auth();
    if (!session?.user) {
      //todo redirect to auth page
    }
    const parsed=submitTaskSchema.safeParse(data);
    if(!parsed.success)
    {
      return ActionResponse.error(400, parsed.error.message);
    }
  
    const taskSubmission = await prisma.attemptedTask.upsert({
      where: {
        userId_taskId: {
          userId: data.userId,
          taskId: data.taskId,
        },
      },
      update: {
        taskSubmission: data.task
      },
      create: {userId:data.userId, taskId: data.taskId, taskSubmission:data.task },
    })
    
    return ActionResponse.success(taskSubmission, 201);
  } catch (err) {
    const error = err as Error;
    return ActionResponse.error(500, error?.message, "Error submitting task");
  }
}

export async function getTaskById(id: string) {
  try {
    const session = await auth();
    if (!session?.user) {
      //todo redirect to auth page
    }
    const parsed = getTaskIdSchema.safeParse(id);
    if (!parsed.success) {
      return ActionResponse.error(400, parsed.error.message);
    }
    const task = await prisma.task.findUnique({ where: { id } });
    if (!task) {
      return ActionResponse.error(404, "Task not found");
    }
    return ActionResponse.success(task, 200);
  } catch (err) {
    const error = err as Error;
    return ActionResponse.error(500, error?.message, "Error fetching task");
  }
}

export async function getTasksBySubDomain(subDomain: SubDomain) {
  try {
    const session = await auth();
    if (!session?.user) {
      //todo redirect to auth page
    }
    const parsed=subDomainSchema.safeParse(subDomain);
    if (!parsed.success ) {
        return { success:false, error: parsed.error.format() };
      }
    const tasks = await prisma.task.findMany({
      where: { subDomain },
    });

    if (!tasks || tasks.length === 0) {
      return ActionResponse.error(404, "Tasks not found");
    }

    return ActionResponse.success(tasks, 200);
  } catch (err) {
    const error = err as Error;
    return ActionResponse.error(500, error?.message, "Error fetching tasks");
    
  }
}


