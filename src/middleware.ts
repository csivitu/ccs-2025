import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    
    // // if (process.env.CCS_PROCCESS_COMPLETION === "true") {
    // //     return NextResponse.redirect(new URL("/ccs-ended", request.url));
    // // }
    // // console.log("Middleware applied to:", request.nextUrl.pathname);

    // const authCheckResponse = await fetch(`${request.nextUrl.origin}/api/auth/check`, {
    //     method: "GET",
    //     headers: { Cookie: request.headers.get("Cookie") || "" },
    // });

    // const { authenticated, onboardingCompleted } = await authCheckResponse.json();


    // if (!authenticated && !request.nextUrl.pathname.startsWith('/unprotected')) {
    //     return NextResponse.redirect(new URL("/unprotected", request.url));
    // }

    // if (!onboardingCompleted) {
    //     return NextResponse.redirect(new URL("/onboarding", request.url));
    // }

    // return NextResponse.next();
}

// 🔥 Apply middleware to protected routes only
export const config = {
    matcher: ["/dashboard", "/domains", "/questions", "/tasks", "/details"], 
};