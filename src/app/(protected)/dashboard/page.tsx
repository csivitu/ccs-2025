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
import Footer from "@/components/footer/footer";
import { teamData } from "@/data/team";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <SidebarProvider>
        <div className="p-4 w-full md:w-4/5 mx-auto">
          {/* Header */}
          <div className="flex flex-row items-center w-full gap-4 mb-4 mt-2">
  <Image
    src="/logo.png"
    alt="CSI Logo"
    width={120}
    height={120}
    className="mt-[-120px] md:mt-2 rounded-lg w-20 aspect-square md:w-[120px] md:h-[120px]"
  />
  <div className="flex flex-col justify-between h-auto text-left">
    <div>
      <h1 className="md:mt-2 text-[1.125rem] md:text-[24px] font-[600] text-white font-sans-code">
        Computer Society of India - VIT University
      </h1>
      <p className="text-sm md:text-[18px] text-[#9198A1] font-sans-code font-normal">
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

          <div className="w-full md:w-full h-[3px] bg-[#30363D] my-4 mt-4 md:mt-[-2px] mb-4 md:mb-8"></div>

          <div className="flex flex-col md:flex-row md:gap-4 text-white">
            <main className="flex-1 space-y-4 w-full">
              <Card className="border-[2px] border-[#30363D] rounded-[6px] bg-[#0D1117] max-w-full w-full mx-auto">
                <div className="p-4 md:p-6 space-y-4 w-full">
                  <h2 className="text-[1rem] lg:text-[1.325rem] font-[400] text-white font-apro font-semibold">
                    README.md
                  </h2>
                    <Image
                      src="/csi-banner-min.gif"
                      alt="Test Image"
                      width={1000}
                      height={600}
                      className=" w-full h-auto"
                      style={{borderRadius:"5px"}}
                    />
                  <div className="w-full md:w-4/5 mx-auto">
                    <h1 className="text-base md:text-[2rem] my-8 font-semibold text-center text-white font-sans-code">
                      Computer Society of India - VIT University
                    </h1>
                    <div className="w-full md:w-full mx-auto border-t-4 border-gray-800 my-4 mt-1 lg:mt-2 font-sans-code mb-6 md:mb-12"></div>
                    <p className="text-sm md:text-[1.25rem]  font-semibold text-center text-white -mt-2 lg:mt-[-4px] italic">
                      When we build, it matters.
                    </p>
                    <p className="mt-1 lg:mt-4 text-xs md:text-base text-justify md:text-center md:text-left font-sans-code">
                      We are the largest association of computer professionals
                      in India, composed of skilled designers, developers, and
                      tech enthusiasts. Our workshops, conferences, events, and
                      competitions drive technological innovation.
                    </p>
                    <div className="w-full md:w-full border-t-4 border-gray-800 my-4 mt-2 lg:mt-12"></div>
                    <p className="-mt-2 lg:mt-6 text-center text-sm md:text-xl">
                      Visit{" "}
                      <a href="https://csivit.com" className="underline text-blue-300 underline-offset-4">
                        csivit.com
                      </a>{" "}
                      to learn more!
                    </p>
                  </div>
                </div>
              </Card>
            </main>
            <aside className="mt-6 lg:mt-0 lg:w-[400px] h-full border-[2px] border-[#30363D] rounded-[6px] lg:mr-">
              <div className="border-zinc-800 bg-zinc-900/50 p-2">
                <SidebarHeader>
                  <h2 className=" lg:mt-0 text-[1rem] lg:text-[1.325rem] font-sans-code text-white  font-semibold">Our Team</h2>
                </SidebarHeader>
                <SidebarContent>
                  <div className="-mt-2 lg:mt-[-12px] ml-[-10px] grid grid-cols-6 gap-y-2 md:gap-y-1  lg:gap-2 p-4">
                  {teamData.map((member) => <div className="w-8 md:w-12 h-8 md:h-12 aspect-square rounded-full overflow-hidden" key={member.alt}>
                    <Image
                      src={member.src}
                      alt="Team Member"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>)}
                  </div>
                
                  <div className="w-[92%] ml-2 border-t-4 border-[#30363D] my-4 mt-[-2px] -mt-2 lg:mt-0 " ></div>

                  <SidebarGroup>
                    <SidebarGroupLabel className="text-[1rem] lg:text-[1.325rem] ml-[-8px] -mt-6 lg:mt-[-12px] font-sans-code font-[600]">
                      CSI Stack
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                      <div className="mt-2 w-full max-w-sm h-2.5 bg-gray-800 flex rounded-lg overflow-hidden gap-x-1">
                        <div className="flex-[6] bg-[#F5502A] rounded-l-[6px]"></div>
                        <div className="flex-[4] bg-[#6541B2]"></div>
                        <div className="flex-[3] bg-[#FFB249]"></div>
                        <div className="flex-[1] bg-[#54A3FF] rounded-r-[6px]"></div>
                      </div>
                      <div className="flex flex-wrap mt-2 gap-y-2 gap-[2%] w-full">
                        {["Praying website doesn't crash","Fixing what we just broke", "Coding", "Planning"].map((proj, index) => (
                          <div key={proj} className="flex items-center w-[49%]">
                            <span className="w-3 h-3 mr-2 rounded-full" 
                                  style={{
                                    backgroundColor: 
                                      index === 0 ? "#F5502A" :
                                      index === 1 ? "#6541B2" :
                                      index === 2 ? "#FFB249" : "#54A3FF"
                                  }}></span>
                            <span className="text-xs text-[#9198A1] font-sans-code">{proj}</span>
                          </div>
                        ))}
                      </div>
                      <div className="w-[96%] ml-[-1px] border-t-4 border-[#30363D] my-4 mt-6"></div>
                    </SidebarGroupContent>
                  </SidebarGroup>

                  <SidebarGroup>
                    <SidebarGroupLabel className="text-[1rem] font-semibold lg:text-[1.325rem] -mt-8 lg:mt-[-20px] ml-[-6px] font-sans-code font-600">
                      Most recent events
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                    <div className="flex flex-wrap gap-1 md:gap-2 mt-2" >
  {["ForkThis!", "LaserTag", "DevSpace", "CodeBank", "Riddler"].map(
    (event) => (
      <span
        key={event}
        className="rounded-[24px] mt-0 bg-zinc-800 px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm text-sans-code text-zinc-400"
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

      <div className="w-full bg-zinc-950 p-4 md:p-8 text-center ">
        <div className="flex justify-center items-center">
          <Image
            src="/hooter.png"
            alt="Party popper emoji"
            width={120}
            height={120}
            className="w-20 h-20 md:w-[120px] md:h-[120px] mb-4 left-4 relative"
          />
        </div>
        <h2 className="text-base sm:text-lg md:text-2xl mb-1 font-semibold text-white font-sans-code">
  That's CSI for you!
</h2>
<p className="text-sm sm:text-base text-zinc-400 font-sans-code">
  Buckle up for some think tank period.
</p>
<a href="/domains" className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 font-sans-code underline underline-offset-4">
  Click here for taking the test
</a>

      </div>
      
      <div className="lg:mt-2">
        <Footer />
      </div>
    </div>
  );
}