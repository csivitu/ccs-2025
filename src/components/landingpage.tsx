"use client";
import Image from "next/image";
import dynamic from 'next/dynamic';
import Particles from "@/components/particles";

const Globe = dynamic(() => import('../components/globe'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#070B14] relative overflow-hidden">
      
      <div className="absolute inset-0">
        <Particles className="relative top-0 left-0 w-screen h-screen" quantity={1000}/>
      </div>

      <div className="relative min-h-screen flex flex-col justify-between">
        <div className="p-4 flex flex-col">
          <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex items-center">
              <Image
                src="/csigit.webp"
                alt="CSI VIT Github"
                width={155}
                height={62}
                className="w-[120px] sm:w-[155px] h-auto"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex gap-2">
                <button className="text-white px-3 sm:px-4 py-1 rounded-xl hover:bg-white/10 transition-colors text-sm sm:text-base font-medium border border-white bg-transparent whitespace-nowrap">
                  About us
                </button>
                <button className="text-white px-3 sm:px-4 py-1 rounded-xl hover:bg-white/20 transition-colors text-sm sm:text-base font-medium border border-white bg-transparent whitespace-nowrap">
                  Sign in
                </button>
              </div>
              <Image
                src="/csilogo.webp"
                alt="CSI Logo"
                width={250}
                height={50}
                className="w-[200px] sm:w-[250px] h-auto"
              />
            </div>
          </nav>

          <div className="text-center sm:text-right mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold sm:pr-[50px] font-kodchasan text-[#B9B8EF] glow-text">
            When we build,
            <br />
            it matters.
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
          <Globe />
        </div>

        <div className="flex flex-col items-center sm:items-start px-4 pb-8 sm:px-8 font-kodchasan mt-auto">
          <p className="text-3xl sm:text-5xl max-w-xl text-[#B9B8EF] font-bold text-center sm:text-left sm:pr-[50px] glow-text mb-4">
            Welcome
          </p>
          <p className="text-lg sm:text-xl md:text-2xl max-w-xl text-[#7675A1] text-center sm:text-left leading-relaxed">
            Make sure to Sign Up and create an account to start your journey— choose your domain, answer key questions and take the first step toward joining our committee.
          </p>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[120px] sm:w-[200px] md:w-[250px] aspect-square">
        </div>
      </div>
    </main>
  );
}