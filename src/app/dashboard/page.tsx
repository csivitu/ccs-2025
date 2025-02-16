import Image from "next/image";
import { Github, Globe, Mail, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <SidebarProvider>
        <div className="p-4 md:mx-4 lg:mx-32">
          {/* Header */}
          <div className="flex flex-row items-center gap-4 mb-4 mt-2 md:flex-row">
  <Image
    src="/logo.png"
    alt="CSI Logo"
    width={120}
    height={120}
    className="mt-[-120px] md:mt-2 rounded-lg w-24 h-24 md:w-[120px] md:h-[120px]"
  />
  <div className="flex flex-col justify-between h-auto text-left">
    <div>
      <h1 className="mt-2 text-[20px] md:text-[24px] font-[600] text-white font-sans-code">
        Computer Society of India - VIT University
      </h1>
      <p className="text-[16px] md:text-[18px] text-[#9198A1] font-sans-code font-normal">
        When we build, it matters.
      </p>
    </div>
    <div className="ml-20 lg:ml-20 flex flex-wrap justify-between items-center gap-3 md:gap-6 text-base text-zinc-400 mt-4 md:mt-8">
  {/* First Row: Followers & Location */}
  <div className="flex items-center gap-4 md:gap-6 mr-20">
    <div className="ml-[-180px] lg:ml-[-80px] flex items-center gap-2">
      <Users className="h-4 w-4" />
      <span className="font-sans-code text-white text-[14px]">4.2k Followers</span>
    </div>
    <div className="flex items-center gap-2">
      <MapPin className="h-4 w-4" />
      <span className="font-sans-code text-white text-[14px]">Vellore, India</span>
    </div>
  </div>

  {/* Second Row: Links */}
  <div className="ml-[-180px] lg:ml-[-80px] flex flex-wrap justify-start items-center gap-4 md:gap-6">
    <a
      href="https://csvit.com"
      className="hover:text-white transition-colors flex items-center gap-2"
      aria-label="Website"
    >
      <Globe className="h-4 w-4" />
      <span className="font-sans-code text-white text-[14px]">csvit.com</span>
    </a>
    <a
      href="https://github.com/csivitu"
      className="hover:text-white transition-colors flex items-center gap-2"
      aria-label="GitHub"
    >
      <Github className="h-4 w-4" />
      <span className="font-sans-code text-white text-[14px]">github.com/csivitu</span>
    </a>
    <a
      href="mailto:outreach@csivit.com"
      className="hover:text-white transition-colors flex items-center gap-2"
      aria-label="Email"
    >
      <Mail className="h-4 w-4" />
      <span className="font-sans-code text-white text-[14px]">outreach@csivit.com</span>
    </a>
  </div>

    </div>
  </div>

          </div>

          <div className="w-full md:w-[1250px] h-[3px] bg-[#30363D] my-4 mt-4 md:mt-[-2px] mb-8"></div>

          <div className="flex flex-col lg:flex-row lg:gap-4 text-white">
            <main className="flex-1 space-y-4">
              <Card className="border-[3px] border-[#30363D] rounded-[6px] bg-[#0D1117] max-w-full md:max-w-[920px] mx-auto">
                <div className="p-4 md:p-6 space-y-4">
                  <h2 className="text-[18px] font-[400] text-white font-apro">
                    README.md
                  </h2>
                  <div className="relative w-full h-auto md:h-96 z-0">
                    <Image
                      src="/test.png"
                      alt="Test Image"
                      width={1000}
                      height={300}
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="prose prose-invert max-w-none px-4 md:px-20">
                    <h1 className="text-[24px] md:text-[28px] mt-8 md:mt-28 font-[400] text-center text-white font-sans-code">
                      Computer Society of India - VIT University
                    </h1>
                    <div className="w-full md:w-3/4 mx-auto md:ml-24 border-t-4 border-gray-800 my-4 mt-2 font-sans-code"></div>
                    <p className="text-[24px] md:text-[28px] text-center text-white mt-[-4px]">
                      When we build, it matters.
                    </p>
                    <p className="mt-4 text-[16px] md:text-[18px] text-center md:text-left md:ml-8 font-sans-code">
                      We are the largest association of computer professionals
                      in India, composed of skilled designers, developers, and
                      tech enthusiasts. Our workshops, conferences, events, and
                      competitions drive technological innovation.
                    </p>
                    <div className="w-full md:w-[95%] border-t-4 border-gray-800 my-4 md:ml-6 mt-4"></div>
                    <p className="mt-6 text-center md:text-left md:ml-8 text-lg md:text-xl">
                      Visit{" "}
                      <a href="https://csivit.com" className="underline">
                        csivit.com
                      </a>{" "}
                      to learn more!
                    </p>
                  </div>
                </div>
              </Card>
            </main>

            <aside className="mt-6 lg:mt-0 lg:w-[400px] lg:mr-">
              <div className="border-zinc-800 bg-zinc-900/50 p-2">
                <SidebarHeader>
                  <h2 className="text-[18px] font-sans-code text-white font-[600]">Our Team</h2>
                </SidebarHeader>
                <SidebarContent>
                  <div className="mt-[-12px] ml-[-10px] grid grid-cols-4 md:grid-cols-6 gap-2 p-4">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-12 md:w-14 h-12 md:h-14 aspect-square rounded-full bg-[#D9D9D9]"
                      />
                    ))}
                  </div>
                  <div className="w-[92%] ml-2 border-t-4 border-[#30363D] my-4 mt-[-2px]"></div>

                  <SidebarGroup>
                    <SidebarGroupLabel className="text-[18px] ml-[-8px] mt-[-12px] font-sans-code font-[600]">
                      Our Projects
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                      <div className="mt-2 w-full max-w-sm h-2.5 bg-gray-800 flex rounded-lg overflow-hidden gap-x-1">
                        <div className="flex-[5] bg-[#F5502A] rounded-l-[6px]"></div>
                        <div className="flex-[4] bg-[#6541B2]"></div>
                        <div className="flex-[3] bg-[#FFB249]"></div>
                        <div className="flex-[1] bg-[#54A3FF] rounded-r-[6px]"></div>
                      </div>
                      <div className="flex flex-wrap mt-2 gap-y-2">
                        {["Proj1", "Proj2", "Proj3", "Proj4"].map((proj, index) => (
                          <div key={proj} className="flex items-center w-1/2">
                            <span className="w-3 h-3 mr-2 rounded-full" 
                                  style={{
                                    backgroundColor: 
                                      index === 0 ? "#F5502A" :
                                      index === 1 ? "#6541B2" :
                                      index === 2 ? "#FFB249" : "#54A3FF"
                                  }}></span>
                            <span className="text-sm text-[#9198A1] font-sans-code">{proj}</span>
                          </div>
                        ))}
                      </div>
                      <div className="w-[96%] ml-[-1px] border-t-4 border-[#30363D] my-4 mt-6"></div>
                    </SidebarGroupContent>
                  </SidebarGroup>

                  <SidebarGroup>
                    <SidebarGroupLabel className="text-[18px] mt-[-20px] ml-[-6px] font-sans-code font-600">
                      Most recent events
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                      <div className="flex flex-wrap gap-2">
                        {["ForkThis!", "LaserTag", "DevSpace", "CodeBank", "Riddler"].map(
                          (event) => (
                            <span
                              key={event}
                              className="rounded-[24px] mt-2 bg-zinc-800 px-4 py-2 text-[14px] md:text-[16px] text-sans-code text-zinc-400"
                            >
                              {event}
                            </span>
                          )
                        )}
                      </div>
                      <div className="w-[96%] ml-[-1px] border-t-4 border-[#30363D] my-4 mt-6"></div>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </div>
            </aside>
          </div>
        </div>
      </SidebarProvider>

      <div className="w-full bg-zinc-950 p-4 md:p-8 text-center mt-8">
        <div className="flex justify-center items-center">
          <Image
            src="/hooter.png"
            alt="Party popper emoji"
            width={120}
            height={120}
            className="w-24 h-24 md:w-[120px] md:h-[120px] mb-4 mt-[-60px]"
          />
        </div>
        <h2 className="text-lg md:text-xl mb-1 font-semibold text-white font-sans-code">
          That's CSI for you!
        </h2>
        <p className="text-zinc-400 font-sans-code">Buckle up for some think tank period.</p>
        <a href="/domains" className="text-blue-400 hover:text-blue-300 text-sm font-sans-code">
          Click here for taking the test
        </a>
      </div>
      
      <div className="mt-[-70px]">
        <Footer />
      </div>
    </div>
  );
}