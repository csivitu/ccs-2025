import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoMdGitNetwork } from "react-icons/io";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/footer";

const ProjectPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#010409]">
      <div className="fixed top-0 left-0 w-full bg-[#010409] bg-opacity-90 z-50 backdrop-blur-md">
        <Navbar />
      </div>
      <div className="lg:flex px-4 lg:px-10 mt-44">
        <div className="lg:w-1/4 text-white lg:sticky lg:top-0 h-screen">
          <h1 className="text-white font-sans-code text-[36px] font-semibold leading-[30px] mb-4">
            Projects
          </h1>
          <hr className="w-[306.08px] h-[3px] bg-[#30363D] border-none mb-4" />
          <p className="text-[16px] leading-[19px] text-[#9198A1] font-normal font-sans-code mb-6">
            Lorem ipsum about projects karo <br className="hidden lg:block" />
            projects lorem nahi ipsum nahi projects <br className="hidden lg:block" />
            lorem ipsum
          </p>
          <h2 className="text-[24px] text-white font-normal font-sans-code mt-6 lg:mt-10">
            Our Projects
          </h2>

          <div className="mt-2 w-[90%] lg:w-[85%] max-w-sm lg:max-w-4xl h-3 lg:h-2.5 bg-gray-800 flex rounded-lg overflow-hidden gap-x-1">
            <div className="flex-[5] bg-[#F5502A] rounded-l-[6px]"></div>
            <div className="flex-[4] bg-[#6541B2]"></div>
            <div className="flex-[3] bg-[#FFB249]"></div>
            <div className="flex-[1] bg-[#54A3FF] rounded-r-[6px]"></div>
          </div>

          <div className="flex flex-wrap mt-2">
            <div className="flex items-center w-1/2 lg:w-auto lg:mr-24">
              <span className="w-3 h-3 mr-2 rounded-full bg-[#F5502A]"></span>
              <span className="text-sm text-[#9198A1] font-sans-code">Proj1</span>
            </div>
            <div className="flex items-center w-1/2 lg:w-auto">
              <span className="w-3 h-3 mr-2 rounded-full bg-[#6541B2]"></span>
              <span className="text-sm text-[#9198A1] font-sans-code">Proj2</span>
            </div>
          </div>

          <div className="flex flex-wrap mt-1">
            <div className="flex items-center w-1/2 lg:w-auto lg:mr-24">
              <span className="w-3 h-3 mr-2 rounded-full bg-[#FFB249]"></span>
              <span className="text-sm text-[#9198A1] font-sans-code">Proj3</span>
            </div>
            <div className="flex items-center w-1/2 lg:w-auto">
              <span className="w-3 h-3 mr-2 rounded-full bg-[#54A3FF]"></span>
              <span className="text-sm text-[#9198A1] font-sans-code">Proj4</span>
            </div>
          </div>
        </div>

        {/* Right Section - Scrollable */}
        <div className="lg:w-[70%] mt-6 lg:mt-[-8px]  h-screen lg:h-[calc(100vh-10rem)]">
          <div className="border-[3px] border-[#30363D] rounded-[6px] bg-[#010409]">
            <div className="h-full">
              {[...Array(7)].map((_, index) => (
                <div
                  key={index}
                  className={`p-3 lg:p-4 relative border-gray-700 ${index !== 6 ? "border-b-2 lg:border-b-3 w-full" : ""}`}
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 lg:gap-4">
                    <div className="flex-grow relative">
                      <div className="flex justify-between items-start">
                        <span className="text-[19px] text-[rgba(88,166,255,1)] flex items-center font-sans-code font-normal leading-[25px]">
                          <img
                            src="/bookmark.webp"
                            alt="Bookmark"
                            className="mt-4 w-3 h-3 lg:w-6 lg:h-6 mr-2"
                          />
                          <span className="mt-4 font-normal">projectTitle</span>
                          <span className="mt-4 mx-1">/</span>
                          <span className="mt-4 font-semibold">projectName</span>
                        </span>
                        <img
                          src="/giticon.webp"
                          alt="Project Preview"
                          className="w-10 lg:hidden h-auto rounded-[10px] ml-2"
                        />
                      </div>
                      <p className="text-[13px] text-[#8B949E] font-normal leading-[21px] mt-1 font-sans-code">
                        project description lorem ipsum content name
                      </p>
                      <div className="flex flex-wrap items-center mt-2 gap-6">
                        <div className="flex items-center">
                          <span className="w-2 h-2 mr-1 rounded-full" style={{ backgroundColor: "rgba(218, 91, 11, 1)" }}></span>
                          <span className="mt-1 text-[12px] text-[#8B949E] font-sans-code">Tech Domain</span>
                        </div>
                        <div className="flex items-center">
                          <FaRegStar size={16} className="text-gray-500" />
                          <span className="ml-1 mt-1 text-[12px] text-[#8B949E] font-sans-code">Popular</span>
                        </div>
                        <div className="flex items-center">
                          <IoMdGitNetwork size={16} className="text-[#8B949E]" />
                          <span className="ml-1 mt-1 text-[12px] text-[#8B949E] font-sans-code">HTML CSS React</span>
                        </div>
                        <div className="flex items-center mt-1 text-[12px] text-[#8B949E] font-sans-code">
                          <span>Built By: Raju Rastogi</span>
                          <img
                            src="/github.webp"
                            alt="Raju Rastogi"
                            className="w-4 h-4 lg:w-13 lg:h-13 rounded-full ml-2"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      src="/giticon.webp"
                      alt="Project Preview"
                      className="hidden lg:block lg:w-[84px] lg:h-[84px] rounded-[10px] mt-2 lg:self-start"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-[180px]">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectPage;
