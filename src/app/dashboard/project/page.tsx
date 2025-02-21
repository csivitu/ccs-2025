import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoMdGitNetwork } from "react-icons/io";
import { projects, Languages } from "@/data/projects";
import Link from "next/link";

const ProjectPage = () => {
   function getLanguageColor(language: string) {
     switch (language) {
       case Languages.JAVASCRIPT:
         return "rgba(218, 91, 11, 1)";
       case Languages.TYPESCRIPT:
         return "rgba(0, 122, 209, 1)";
       case Languages.PYTHON:
         return "rgba(255, 193, 7, 1)";
       case Languages.GO:
         return "rgba(0, 122, 209, 1)";
       default:
         return "rgba(255, 193, 7, 1)";
     }
   }
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A]">
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row px-4 lg:px-10 mt-6 md:mt-12">
        <div className="ml-2 lg:w-1/4 text-white lg:sticky lg:top-0 md:h-screen">
          <h1 className="text-white font-sans-code text-2xl lg:text-[36px] font-semibold leading-[30px] mb-2 lg:mb-4">
            Projects
          </h1>
          <hr className="w-[306.08px] h-[3px] bg-[#30363D] border-none mb-2 lg:mb-4" />
          <p className="text-[14px] lg:text-[16px] leading-[19px] text-[#9198A1] font-normal font-sans-code mb-4 lg:mb-6">
            {/* TODO@jrs : Replace this content pleasssseee ::::D */}
            Our members work together to make <br className="hidden lg:block" />{" "}
            projects both for events and for the sake{" "}
            <br className="hidden lg:block" /> of sharpening their skills. Here
            we have <br className="hidden lg:block" /> listed our finest works!
          </p>

          <div className="mt-2 lg:mt-2 w-[90%] lg:w-[85%] max-w-sm lg:max-w-4xl h-3 lg:h-2.5 bg-gray-800 flex rounded-lg overflow-hidden gap-x-1">
            <div className="flex-[5] bg-[#F5502A] rounded-l-[6px]" />
            <div className="flex-[4] bg-[#6541B2]" />
            <div className="flex-[3] bg-[#FFB249]" />
            <div className="flex-[1] bg-[#54A3FF] rounded-r-[6px]" />
          </div>
          <div className="flex flex-wrap mt-2">
            <div className="flex items-center w-1/2 lg:w-auto lg:mr-24">
              <span className="w-3 h-3 mr-2 rounded-full bg-[#F5502A]" />
              <span className="text-sm text-[#9198A1] font-sans-code">
                Praying website doesn't crash
              </span>
            </div>
            <div className="flex items-center w-1/2 lg:w-auto">
              <span className="w-3 h-3 mr-2 rounded-full bg-[#6541B2]" />
              <span className="text-sm text-[#9198A1] font-sans-code">
                Fixing what we just broke
              </span>
            </div>
          </div>

          <div className="flex flex-wrap mt-1">
            <div className="flex items-center w-1/2 lg:w-auto lg:mr-24">
              <span className="w-3 h-3 mr-2 rounded-full bg-[#FFB249]" />
              <span className="text-sm text-[#9198A1] font-sans-code">
                Coding
              </span>
            </div>
            <div className="flex items-center w-1/2 lg:w-auto">
              <span className="w-3 h-3 mr-2 rounded-full bg-[#54A3FF]" />
              <span className="text-sm text-[#9198A1] font-sans-code">
                Planning
              </span>
            </div>
          </div>
        </div>

        <div className="lg:w-[70%]  lg:mt-[-8px] h-screen lg:h-[calc(100vh-10rem)]">
          <div className="border-[3px] border-[#30363D] rounded-[6px] ">
            <div className="h-full">
              {projects.map((project, index) => (
                <div
                  key={project.projectTitle}
                  className={`p-2 lg:p-3 relative border-gray-700 ${
                    index !== 6 ? "border-b-2 lg:border-b-3 w-full" : ""
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 lg:gap-3">
                    <div className="flex-grow relative">
                      <div className="flex justify-between items-start">
                        <Link
                          href={project.repoLink}
                          className="text-[19px] text-[rgba(88,166,255,1)] flex items-center font-sans-code font-normal leading-[25px]"
                        >
                          <img
                            src="/bookmark.webp"
                            alt="Bookmark"
                            className="mt-2 w-4 h-4 lg:w-6 lg:h-6 mr-2"
                          />
                          <span className="mt-1 font-normal text-lg">
                            {project.projectTitle}
                          </span>
                        </Link>
                      </div>
                      <p className="text-xs md:text-[13px] text-[#8B949E] font-normal leading-[21px] md:mt-1 font-sans-code">
                        {project.projectDescription}
                      </p>
                      <div className="flex flex-wrap items-center mt-2 md:mt-1 gap-2">
                        <div className="flex items-center">
                          <span
                            className="w-2 h-2 mr-1 rounded-full"
                            style={{ backgroundColor: getLanguageColor(project.language) }}
                          />
                          <span className="text-[12px] text-[#8B949E] font-sans-code">
                            {project.language}
                          </span>
                        </div>
                        <div className="flex items-center text-[12px] text-[#8B949E] font-sans-code">
                          <img
                            src="/github.webp"
                            alt="Raju Rastogi"
                            className="w-4 h-4 lg:w-13 lg:h-13 rounded-full mr-2"
                          />
                          <span>Built By: {project.builtBy}</span>
                        </div>
                      </div>
                    </div>
                    {/* <img
              src="/giticon.webp"
              alt="Project Preview"
              className="hidden lg:block lg:w-[84px] lg:h-[84px] rounded-[10px] mt-1 lg:self-start"
            /> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
