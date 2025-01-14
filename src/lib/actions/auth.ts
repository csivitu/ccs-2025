// FILE: auth.ts - Server actions
"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function login() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  return session;
}

export async function logout() {
  redirect("/api/auth/signout");
}