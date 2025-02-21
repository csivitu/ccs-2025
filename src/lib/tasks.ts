import { DomainType, SubDomain } from '@prisma/client'
import { z } from 'zod'

export const userIdSchema = z.string().min(1, 'UserId missing')
export const taskschema = z.string().min(1, 'Task not found')
export const subDomainSchema = z
  .string()
  .min(1, 'SubDomain not found') as unknown as z.ZodType<SubDomain>
export const getTaskSubmissionSchema = z.string().min(1, 'Domain is required')
export const getTaskIdSchema = z.string().min(1, 'TaskID is required')
export const submitTaskSchema = z.object({
  userId: userIdSchema,
  task: taskschema,
  subDomain: subDomainSchema,
})
