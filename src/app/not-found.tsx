"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import Particles from "@/components/particles";

const Globe = dynamic(() => import("@/components/globe"), { ssr: false });

export default function NotFoundPage() {
  return (
    <main className="min-h-screen w-full bg-[#070B14] relative overflow-hidden">
      <div className="absolute inset-0">
        <Particles className="relative top-0 left-0 w-screen h-screen" quantity={750} />
      </div>

      <div className="relative min-h-screen flex flex-col justify-between">
        <div className="p-4 flex flex-col">
          <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 px-4">
            <div className="flex items-center">
              <Image
                src="/csilogo.webp"
                alt="CSI Logo"
                width={250}
                height={50}
                className="w-[200px] sm:w-[250px] h-auto"
              />
            </div>
          </nav>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] xl:w-[500px] xl:h-[500px]">
          <Globe />
        </div>

        <div className="flex flex-col items-center sm:items-center px-4 pb-8 sm:px-8 font-kodchasan mt-auto ml-12">
          <p className="text-3xl sm:text-5xl max-w-xl text-[#B9B8EF] font-semi-bold text-center sm:text-center sm:pr-[50px] glow-text mb-4">
            404
            <br />
            PAGE NOT FOUND  
          </p>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[120px] sm:w-[200px] md:w-[250px] aspect-square"></div>
      </div>
    </main>
  );
}
