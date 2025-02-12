"use client";
import Image from "next/image";
import dynamic from 'next/dynamic';
import Particles from "@/components/particles";

const Globe = dynamic(() => import('../components/globe'), { ssr: false });

export default function Home() {
  return (
    <main className="h-screen w-full bg-[#070B14] relative overflow-hidden">
      
      <div className="absolute inset-0">
        <Particles className="relative top-0 left-0 w-screen h-screen" quantity={1000}/>
      </div>

      <div className="relative h-full flex flex-col justify-between">
        <div className="p-4 flex flex-col">
          <nav className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Image
                src="/csigit.webp"
                alt="CSI VIT Github"
                width={155}
                height={62}
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="text-white px-4 py-1 rounded-xl hover:bg-white/10 transition-colors text-base font-medium border border-white bg-transparent">
                About us
              </button>
              <button className="text-white px-4 gap-2 py-1 rounded-xl hover:bg-white/20 transition-colors text-base font-medium border border-white bg-transparent">
                Sign in
              </button>
              <Image
                src="/csilogo.webp"
                alt="CSI Logo"
                width={250}
                height={50}
                className="gap-5"
              />
            </div>
          </nav>

          <div className="text-right mt-6 sm:mt-4 text-4xl sm:text-5xl font-bold pr-[50px] font-kodchasan text-[#B9B8EF] glow-text">
            When we build,
            <br />
            it matters.
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
          <Globe />
        </div>

        <div className="flex flex-col items-start px-4 pb-8 sm:px-8 font-kodchasan">
          <p className="text-5xl sm:text-3xl max-w-xl text-[#B9B8EF] font-bold pr-[50px] glow-text">
            Welcome
          </p>
          <p className="text-5xl sm:text-lg max-w-xl text-[#7675A1]">
            Make sure to Sign Up and <br />create an account to start
            <br />your journey— choose your
            <br />domain, answer key questions
            <br />and take the first step toward
            <br />joining our committee.
          </p>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[150px] sm:w-[200px] md:w-[250px] aspect-square">
        </div>
      </div>
    </main>
  );
}
