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
import { Footer } from "@/components/Footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <SidebarProvider>
        <div className="p-4 mx-32">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <Image
              src="/logo.png"
              alt="CSI Logo"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <div className="flex flex-col justify-between h-[150px]">
              <div>
                <h1 className="text-4xl font-semibold text-white">
                  Computer Society of India - VIT University
                </h1>
                <p className="text-xl text-zinc-400">
                  When we build, it matters.
                </p>
              </div>
              <div className="flex items-center gap-6 text-base text-zinc-400">
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  <span>4.2k Followers</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  <span>Vellore, India</span>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://csvit.com"
                    className="hover:text-white transition-colors flex items-center gap-2"
                    aria-label="Website"
                  >
                    <Globe className="h-6 w-6" />
                    <span>https://csvit.com</span>
                  </a>
                  <a
                    href="https://github.com/csivitu"
                    className="hover:text-white transition-colors flex items-center gap-2"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6" />
                    <span>github.com/csivitu</span>
                  </a>
                  <a
                    href="mailto:outreach@csivit.com"
                    className="hover:text-white transition-colors flex items-center gap-2"
                    aria-label="Email"
                  >
                    <Mail className="h-6 w-6" />
                    <span>outreach@csivit.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-gray-800 my-4"></div>

          <div className="flex flex-col lg:flex-row lg:gap-4 text-white">
            <main className="flex-1 space-y-4">
              {/* Main Content */}
              <Card className="border-zinc-800 bg-zinc-900/50">
                <div className="p-4 space-y-4">
                  <h2 className="text-lg font-semibold text-white">
                    README.md
                  </h2>
                  <div className="relative w-full h-96">
                    {" "}
                    {/* Set a fixed height for the container */}
                    <Image
                      src="/test.png"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="prose prose-invert max-w-none px-20">
                    <h1 className="text-4xl mt-8 font-bold text-center text-white">
                      Computer Society of India - VIT University
                    </h1>
                    <div className="w-full border-t-4 border-gray-800 my-4"></div>
                    <p className="text-3xl text-center text-zinc-400">
                      When we build, it matters.
                    </p>
                    <p className="mt-8 text-lg">
                      We are the largest association of computer professionals
                      in India, composed of skilled designers, developers, and
                      tech enthusiasts. Our workshops, conferences, events, and
                      competitions drive technological innovation.We are the
                      largest association of computer professionals in India,
                      composed of skilled designers, developers, and tech
                      enthusiasts. Our workshops, conferences, events, and
                      competitions drive technological innovation.
                    </p>
                    <div className="w-full border-t-4 border-gray-800 my-4"></div>
                    <p className="mt-12 text-xl">
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

            {/* Sidebar */}
            <aside className="lg:w-[320px] lg:ml-4">
              <div className="border-zinc-800 bg-zinc-900/50 p-4">
                <SidebarHeader>
                  <h2 className="text-lg font-semibold text-white">Our Team</h2>
                </SidebarHeader>
                <SidebarContent>
                  <div className="grid grid-cols-4 gap-2 p-4">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-full bg-zinc-800"
                      />
                    ))}
                  </div>

                  <SidebarGroup>
                    <SidebarGroupLabel>Our Projects</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <div className="space-y-2">
                        {[
                          { name: "Proj1", width: "80%", color: "bg-red-500" },
                          {
                            name: "Proj2",
                            width: "60%",
                            color: "bg-purple-500",
                          },
                          {
                            name: "Proj3",
                            width: "40%",
                            color: "bg-orange-500",
                          },
                          { name: "Proj4", width: "20%", color: "bg-blue-500" },
                        ].map((project) => (
                          <div key={project.name} className="space-y-1">
                            <div className="text-sm text-zinc-400">
                              {project.name}
                            </div>
                            <div className="h-2 rounded-full bg-zinc-800">
                              <div
                                className={`h-full rounded-full ${project.color}`}
                                style={{ width: project.width }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </SidebarGroupContent>
                  </SidebarGroup>

                  <SidebarGroup>
                    <SidebarGroupLabel>Most recent events</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <div className="flex flex-wrap gap-2 ">
                        {["Workshop", "Hackathon", "Conference"].map(
                          (event) => (
                            <span
                              key={event}
                              className="rounded bg-zinc-800 px-2 py-1 text-sm text-zinc-400"
                            >
                              {event}
                            </span>
                          )
                        )}
                      </div>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </div>
            </aside>
          </div>
        </div>
      </SidebarProvider>
      <div className="w-full bg-zinc-950 p-8 text-center">
        <Image
          src="/hooter.png"
          alt="Party popper emoji"
          width={120}
          height={120}
          className="mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold text-white mb-2">That's CSI for you!</h2>
        <p className="text-zinc-400 mb-2">Buckle up for some think tank period.</p>
        <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
          Click here for taking the test
        </a>
      </div>
      <Footer/>
    </div>
  );
}
