'use server'

import { requestHandler } from '@/helpers/request-handler'
import type {
  AttemptedDomain,
  AttemptedTask,
  AttempedQuestion,
  DomainType,
  User,
  QuizSession,
  Portfolio,
} from '@prisma/client'
import { prisma } from '@/lib/db'
import { auth } from '../(auth)/auth'
import { redirect } from 'next/navigation'

// list all domains of user by getUserDomains
// if the domains include the domain  render button "go to test" of something like that, then redirect to the question page
// if not render button "start test"
// when clicked on start test call selectDomain action and pass the domaintype selected

export async function getAttemptedDomains() {
  return requestHandler(async () => {
    const session = await auth()
    if (!session?.user) {
      //todo redirect to login
      //redirect("/unprotected");
      return
    }
    const attemptedDomains = await prisma.attemptedDomain.findMany({
      where: {
        userId: session.user.id,
      },
    })

    return attemptedDomains
  })
}

export async function selectDomain(domain: DomainType) {
  return requestHandler(async () => {
    const session = await auth()
    if (!session?.user) {
      //todo redirect to login
      //redirect("/unprotected");
      return
    }

    const existingAttempt = await prisma.attemptedDomain.findFirst({
      where: {
        domain: domain,
        userId: session.user.id,
      },
    })

    if (existingAttempt) {
      return existingAttempt
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      include: {
        attemptedDomains: true,
      },
    })

    if (!user) {
      throw new Error('User not found')
    }

    if (user?.attemptedDomains.length >= 2) {
      throw new Error('Cannot select more than two domains')
    }

    const selectedDomain = await prisma.attemptedDomain.create({
      data: {
        domain: domain,
        userId: user.id,
        status: 'QUESTION_ROUND',
      },
    })

    return selectedDomain
  })
}

export interface UserStats extends User {
  attemptedTasks: AttemptedTask[]
  attemptedDomains: AttemptedDomain[]
  quizSessions: QuizSession[]
  portfolios: Portfolio[]
}

export async function getUserStats() {
  return requestHandler(async () => {
    const session = await auth()
    if (!session?.user) {
      redirect('/')
    }

    const user: UserStats | null = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      include: {
        attemptedTasks: true,
        attemptedDomains: true,
        quizSessions: true,
        portfolios: true,
      },
    })

    if (!user) {
      throw new Error('User not found')
    }

    return user
  })
}
