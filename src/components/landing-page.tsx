"use client";
import Image from "next/image";
import dynamic from 'next/dynamic';
import Particles from "@/components/particles";
import Signin from "@/app/(auth)/actions/signin";
import SignOut from "@/app/(auth)/actions/signout";
import { useSession } from "next-auth/react";
import { LoadingSpinner } from "./ui/loading-spinner";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Globe = dynamic(() => import('../components/globe'), { ssr: true });

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main className="min-h-screen w-full bg-[#000000] relative overflow-hidden">
      <div className="absolute inset-0">
        <Particles
          className="relative top-0 left-0 w-screen h-screen"
          quantity={750}
        />
      </div>

      <div className="relative min-h-screen flex flex-col justify-between">
        <div className="tab:p-4 mobile:p-2 flex flex-col">
          <nav className="flex flex-col sm:flex-row mobile:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex tab:items-center">
              <svg
                height="48"
                aria-hidden="true"
                viewBox="0 0 24 24"
                version="1.1"
                width="48"
                data-view-component="true"
                fill="white"
                className="aspect-square mobile:w-[32px] tab:w-[48px]"
              >
                <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
              </svg>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex gap-2">
                <button className="text-white px-3 sm:px-4 py-1  hover:bg-white/10 transition-colors text-sm sm:text-base font-medium  bg-transparent whitespace-nowrap duration-500 rounded-[2px]">
                  About us
                </button>
                {status === "loading" ? (
                  <LoadingSpinner height={30} width={30} />
                ) : status === "authenticated" ? (
                  <>
                    <Link href="/dashboard" className="text-white px-3 sm:px-4 py-1 hover:bg-white/20 transition-colors text-sm sm:text-base font-medium bg-transparent whitespace-nowrap duration-500 rounded-[2px]">
                      Dashboard
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="text-white px-3 sm:px-4 py-1 hover:bg-white/20 transition-colors text-sm sm:text-base font-medium bg-transparent whitespace-nowrap duration-500 rounded-[2px]"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => signIn()}
                    className="text-white px-3 sm:px-4 py-1 hover:bg-white/20 transition-colors text-sm sm:text-base font-medium bg-transparent whitespace-nowrap duration-500 rounded-[2px]"
                  >
                    Sign in
                  </button>
                )}
              </div>
              <Image
                src="/csivitu.png"
                alt="CSI Logo"
                width={50}
                height={25}
                className="aspect-square h-[32px] mobile:hidden tab:block"
              />
            </div>
          </nav>

          <div className="text-right sm:text-right mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-[#B9B8EF] glow-text">
            When we build,
            <br />
            it matters.
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] md:w-[350px] md:h-[350px] xl:w-[450px] xl:h-[450px]">
          <Globe />
        </div>

        <div className="flex flex-col items-center sm:items-start px-4  pb-8 sm:px-8  mt-auto">
          <p className="text-3xl mobile:text-left mobile:w-full  max-w-xl text-[#B9B8EF] font-bold text-center tab:text-5xl sm:pr-[50px] glow-text mb-4 mobile:text-3xl">
            Welcome
          </p>
          <p className="mobile:text-left mobile:text-md text-lg sm:text-xl md:text-2xl max-w-xl text-[#7675A1] text-center sm:text-left leading-relaxed">
            Make sure to Sign Up and create an account to start your journey—
            choose your domain, answer key questions and take the first step
            toward joining our committee.
          </p>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[120px] sm:w-[200px] md:w-[250px] aspect-square"></div>
      </div>
    </main>
  );
}