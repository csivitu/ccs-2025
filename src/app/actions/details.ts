import { requestHandler } from "@/helpers/request-handler";
import { auth } from "../(auth)/auth";
import { redirect } from "next/navigation";
import { Gender } from "@prisma/client";
import { prisma } from "@/lib/db";

export async function updateUserDetails(gender: Gender, aboutUs: string) {
    return requestHandler(async () => {
        const session = await auth()
        if (!session?.user) {
            //todo redirect to login
            redirect("/unprotected");
        }

        const user = await prisma.user.update({
            where: {
                id: session.user.id
            },
            data: {
                gender: gender,
                aboutUs: aboutUs
            }
        })
        
        return user
    })
}

export async function getUserDetails() {
    return requestHandler(async () => {
        const session = await auth()
        if (!session?.user) {
            redirect("/");
        }

        const user = await prisma.user.findUnique({
            where: {
                id: session.user.id
            },
        })
        
        return user
    })
}
