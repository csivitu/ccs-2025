'use server'

import { SubDomain } from '@prisma/client'
import { submitTaskSchema, subDomainSchema, getTaskIdSchema } from '@/lib/tasks'
import { prisma } from '@/lib/db'
import ActionResponse from '@/lib/action-response'
import { auth } from '../(auth)/auth'
import { redirect } from 'next/navigation'
import { requestHandler } from '@/helpers/request-handler'

export async function submitTask(data: {
  userId: string
  task: string[]
  taskId: string
}) {
  return requestHandler(async () => {
    const session = await auth()
    if (!session?.user) {
      //todo redirect to login
      redirect('/unprotected')
    }
    const parsed = submitTaskSchema.safeParse(data)
    if (!parsed.success) {
      throw new Error('Invalid data')
    }

    const taskSubmission = await prisma.attemptedTask.upsert({
      where: {
        userId_taskId: {
          userId: data.userId,
          taskId: data.taskId,
        },
      },
      update: {
        taskSubmission: data.task,
      },
      create: {
        userId: data.userId,
        taskId: data.taskId,
        taskSubmission: data.task,
      },
    })

    return taskSubmission
  })
}

export async function getTaskById(id: string) {
  return requestHandler(async () => {
    const session = await auth()
    if (!session?.user) {
      //todo redirect to login
      redirect('/unprotected')
    }
    const parsed = getTaskIdSchema.safeParse(id)
    if (!parsed.success) {
      throw new Error('Invalid data')
    }
    const task = await prisma.task.findUnique({ where: { id } })
    if (!task) {
      throw new Error('Task not found')
    }
    return task
  })
}

export async function getTasksBySubDomain(subDomain: SubDomain) {
  return requestHandler(async () => {
    const session = await auth()
    if (!session?.user) {
      //todo redirect to login
      redirect('/unprotected')
    }
    const parsed = subDomainSchema.safeParse(subDomain)
    if (!parsed.success) {
      throw new Error('Invalid data')
    }
    const tasks = await prisma.task.findMany({
      where: { subDomain },
    })

    if (!tasks || tasks.length === 0) {
      throw new Error('Tasks not found')
    }

    return tasks
  })
}
