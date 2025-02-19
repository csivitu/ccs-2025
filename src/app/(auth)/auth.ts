import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db";
import { findUserByEmail, getUserPhoneNumber } from "@/lib/sqlite";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    trustHost: true,
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: 'https://accounts.google.com/o/oauth2/auth?response_type=code&hd=vitstudent.ac.in'
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                const email = user.email;
                if (!email){
                    return false
                }
                const userExists = await findUserByEmail(email);
                if (!userExists) {
                    return false;
                }
            }
            return true;
        },

        async session({ session, user }) {
            // if (session.user) {
            //     const phoneNo = await getUserPhoneNumber(session.user.email);
            //     if(!phoneNo) return session
            //     await prisma.user.update({
            //         where: { id: user.id },
            //         data: {
            //             phoneNumber: String(phoneNo),
            //         }
            //     });
            // }
            return session;
        }
    }
});
