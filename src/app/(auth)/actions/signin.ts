"use client";

import {auth, signIn} from "../auth";
import {useRouter} from 'next/navigation';

export default async function Signin() {
    const session = await auth();
    const router = useRouter();

    if (session?.user) {
        return;
    } else {
        await signIn("google");
        router.push('/dashboard');
    }
}