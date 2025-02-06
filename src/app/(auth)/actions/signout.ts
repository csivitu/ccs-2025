"use server";

import { auth, signOut } from "../auth";

export default async function SignOut() {
    const session = await auth();
    console.log("Signing out" + session)
    if (session && session.user) {
        await signOut();
    }
}