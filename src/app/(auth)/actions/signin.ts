"use server";

import {auth, signIn} from "../auth";

export default async function Signin() {
    const session = await auth();
    if (session?.user) {
        return;
    }
    await signIn("google");
}