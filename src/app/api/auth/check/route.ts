"use server";

import { auth } from "@/app/(auth)/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
    const session = await auth();
    let authenticated = false
    let onboardingCompleted = false
    
    if (session?.user) {
        authenticated = true
        const user = await prisma.user.findUnique({
            where: {
                id: session?.user.id
            }
        })
    
        if (user?.gender != null && user?.aboutUs != null && user?.phoneNumber != null) {
            onboardingCompleted = true
        }
    }

    return NextResponse.json({
        authenticated: authenticated,
        onboardingCompleted: onboardingCompleted
    });
}
