import ActionResponse from "@/lib/action-response";
import { Prisma } from "@prisma/client";


export function handlePrismaError(error:unknown)
{
    if(error instanceof Prisma.PrismaClientKnownRequestError){
        return ActionResponse.error(500, error.message, `Database error: ${error.message}`);
    }
    if(error instanceof Prisma.PrismaClientUnknownRequestError){
        return ActionResponse.error(500, error.message, "Unknown Database error")
    }
    if (error instanceof Prisma.PrismaClientValidationError) {
        return ActionResponse.error(400, error.message, "Invalid data provided");
    }
    if(error instanceof Error){
        return ActionResponse.error(500, error.message, "An unknown error occured");
    }
    return ActionResponse.error(500, "", "An unknown error occured");
}