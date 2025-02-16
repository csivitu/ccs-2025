"use server";

import SignIn from "@/app/(auth)/actions/signin";
import SignOut from "../(auth)/actions/signout";

export default async function Unprotected() {
    return (
        <div>
            <button onClick={SignIn}>Sign in</button>
            <button onClick={SignOut}>Sign Out</button>
        </div>
    )
}