import ActionResponse from '@/lib/action-response'
import { handlePrismaError } from './prismaerror'

export const requestHandler = async <T>(operation: () => Promise<T>) => {
  try {
    return ActionResponse.success(await operation(), 200)
  } catch (error) {
    return handlePrismaError(error)
  }
}
