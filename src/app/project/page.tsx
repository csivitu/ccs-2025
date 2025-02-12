import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoMdGitNetwork } from "react-icons/io";

const ProjectPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#010409]">
      <div className="lg:fixed lg:left-12 p-6 text-white lg:mt-36 mt-4 w-full lg:w-auto">
        <h1 className="text-3xl lg:text-4xl font-semibold mb-4 font-sans-code px-4 lg:px-0">Projects</h1>
        <hr className="border-t-[3px] border-[#30363D] mb-6 w-full lg:w-[108%]" />
        <p className="text-sm lg:text-base text-[#9198A1] font-semibold mb-6 font-sans-code px-4 lg:px-0">
          Lorem ipsum about projects karo <br className="hidden lg:block" /> 
          projects lorem nahi ipsum nahi projects <br className="hidden lg:block" /> 
          lorem ipsum
        </p>
        <h2 className="text-xl lg:text-2xl mt-6 lg:mt-10 font-sans-code px-4 lg:px-0">Our Projects</h2>

        <div className="mt-5 w-[90%] lg:w-[110%] mx-4 lg:mx-0 max-w-sm lg:max-w-4xl h-3 lg:h-3 bg-gray-800 flex rounded-lg overflow-hidden gap-x-0">
          <div className="flex-[5] bg-[#F5502A]"></div>
          <div className="flex-[4] bg-[#6541B2]"></div>
          <div className="flex-[3] bg-[#FFB249]"></div>
          <div className="flex-[1] bg-[#54A3FF]"></div>
        </div>

        <div className="flex flex-wrap px-4 lg:px-0">
          <div className="flex items-center mt-2 w-1/2 lg:w-auto lg:mr-24">
            <span className="w-2 lg:w-3 h-2 lg:h-3 mr-2 lg:mr-3 rounded-full bg-[#F5502A]"></span>
            <span className="text-xs lg:text-sm font-semibold font-sans-code">Proj1</span>
          </div>
          <div className="flex items-center mt-2 w-1/2 lg:w-auto">
            <span className="w-2 lg:w-3 h-2 lg:h-3 mr-2 lg:mr-3 rounded-full bg-[#6541B2]"></span>
            <span className="text-xs lg:text-sm font-semibold font-sans-code">Proj2</span>
          </div>
        </div>
        <div className="flex flex-wrap px-4 lg:px-0">
          <div className="flex items-center mt-1 w-1/2 lg:w-auto lg:mr-24">
            <span className="w-2 lg:w-3 h-2 lg:h-3 mr-2 lg:mr-3 rounded-full bg-[#FFB249]"></span>
            <span className="text-xs lg:text-sm font-semibold font-sans-code">Proj3</span>
          </div>
          <div className="flex items-center mt-1 w-1/2 lg:w-auto">
            <span className="w-2 lg:w-3 h-2 lg:h-3 mr-2 lg:mr-3 rounded-full bg-[#54A3FF]"></span>
            <span className="text-xs lg:text-sm font-semibold font-sans-code">Proj4</span>
          </div>
        </div>
      </div>

      <div className="lg:fixed lg:right-24 lg:top-36 lg:w-[65%] w-[92%] mx-auto lg:mx-0 lg:p-0 lg:my-6 h-[calc(100vh-28rem)] lg:h-[calc(75vh-3rem)] border-[3px] border-[#30363D] rounded-[3px] bg-[#010409] overflow-hidden mt-6 lg:mt-0">
        <div className="h-full overflow-y-auto scrollbar-hide">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className={`p-3 lg:p-6 relative ${index !== 6 ? "border-b-2 lg:border-b-4 border-gray-700" : ""}`}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 lg:gap-4">
                <div className="flex-grow relative"> 
                  <div className="flex justify-between items-start"> 
                    <span className="text-[rgba(88,166,255,1)] text-sm lg:text-[19px] flex items-center font-sans-code">
                      <img
                        src="/bookmark.webp"
                        alt="Bookmark"
                        className="mt-3 w-3 h-3 lg:w-4 lg:h-4 mr-2"
                      />
                      projectTitle / <span className="font-semibold">projectName</span>
                    </span>
                    
                    <img
                      src="/giticon.webp"
                      alt="Project Preview"
                      className="w-10 lg:hidden h-auto rounded-[10px] ml-2"
                    />
                  </div>

                  <p className="text-gray-500 text-xs lg:text-[13px] font-semibold mt-1 lg:mt-2 font-sans-code">
                    project description lorem ipsum content name
                  </p>

                  <div className="flex flex-wrap items-center mt-2 gap-2">
                    <div className="flex items-center">
                      <span
                        className="w-2 h-2 mr-1 lg:mr-2 rounded-full"
                        style={{ backgroundColor: "rgba(218, 91, 11, 1)" }}
                      ></span>
                      <span className="text-[10px] lg:text-xs text-[#8B949E] font-sans-code">Tech Domain</span>
                    </div>

                    <div className="flex items-center">
                      <FaRegStar size={12} className="lg:size-4 text-gray-500" />
                      <span className="ml-1 text-[10px] lg:text-sm text-[#8B949E] font-sans-code">Popular</span>
                    </div>

                    <div className="flex items-center">
                      <IoMdGitNetwork size={12} className="lg:size-4 text-[#8B949E]" />
                      <span className="ml-1 text-[10px] lg:text-sm text-[#8B949E] font-sans-code">HTML CSS React</span>
                    </div>

                    <div className="flex items-center text-[10px] lg:text-sm text-[#8B949E] font-sans-code">
                      <span>Built By: Raju Rastogi</span>
                      <img
                        src="/github.webp"
                        alt="Raju Rastogi"
                        className="w-4 h-4 lg:w-6 lg:h-6 rounded-full ml-2"
                      />
                    </div>
                  </div>
                </div>

                <img
                  src="/giticon.webp"
                  alt="Project Preview"
                  className="hidden lg:block lg:w-[8%] h-auto rounded-[10px] lg:self-start"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;