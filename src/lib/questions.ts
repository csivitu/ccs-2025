import { DomainType } from '@prisma/client'
import { z } from 'zod'

export const domainSchema = z
  .string()
  .min(1, 'Domain is required') as unknown as z.ZodType<DomainType>
export const questionIdSchema = z.string().min(1, 'Question Id is required')
export const userIdSchema = z.string().min(1, 'User ID is required')
export const answerSchema = z.string().min(1, 'Answer is required')

export const submitSchema = z.object({
  questionId: questionIdSchema,
  userId: userIdSchema,
  answer: answerSchema,
})
