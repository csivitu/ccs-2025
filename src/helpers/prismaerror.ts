import { Prisma } from "@prisma/client";


export function handlePrismaError(error:unknown)
{
    if(error instanceof Prisma.PrismaClientKnownRequestError){
        return { status: 500, error: `Database error: ${error.message}` };
    }
    if(error instanceof Prisma.PrismaClientUnknownRequestError){
        return{status:500, error:"Unknown database error"}
    }
    if (error instanceof Prisma.PrismaClientValidationError) {
        return { status: 400, error: "Invalid data provided" };
    }
    if(error instanceof Error){
        return {status:500, error:error.message};
    }
    return {status:500,error:'an unknown error occured'}
}