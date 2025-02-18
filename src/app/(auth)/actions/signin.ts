"use client";

import { auth, signIn } from "../auth";
import { redirect } from 'next/navigation';

export default async function Signin() {
    const session = await auth();
    if (!session?.user) {
        await signIn("google");
    }
    redirect('/dashboard');
}