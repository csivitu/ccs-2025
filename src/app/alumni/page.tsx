import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/footer";

const AlumniPage = () => {
  return (
    <div className="min-h-screen w-full ">
      <div className="fixed top-0 left-0 w-full  bg-opacity-90 z-50 backdrop-blur-md">
        <Navbar />
      </div>
      <div className="lg:flex px-4 lg:px-10 mt-24 lg:mt-44">
        <div className="ml-2 lg:w-1/4 text-white lg:sticky lg:top-0 h-auto lg:h-screen mb-6 lg:mb-0">
          <h1 className="text-white font-sans-code text-[28px] lg:text-[36px] font-semibold leading-[30px] mb-4">
            Alumni
          </h1>
          <hr className="w-[306.08px] h-[3px] bg-[#30363D] border-none mb-4" />
          <p className="text-[16px] leading-[19px] text-[#9198A1] font-normal font-sans-code mb-6">
            Lorem ipsum about seniors and <br className="hidden lg:block"/> superseniors Lorem ipsum about <br className="hidden lg:block"/> seniors and superseniors
          </p>
          <h2 className="text-[24px] text-white font-normal font-sans-code mt-6 lg:mt-10">
            Domains of our Alumni
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
              <span className="w-3 h-3 mr-2 rounded-full bg-[#FFB2]"></span>
              <span className="text-sm text-[#9198A1] font-sans-code">Proj3</span>
            </div>
            <div className="flex items-center w-1/2 lg:w-auto">
              <span className="w-3 h-3 mr-2 rounded-full bg-[#54A3FF]"></span>
              <span className="text-sm text-[#9198A1] font-sans-code">Proj4</span>
            </div>
          </div>
        </div>

        <div className="lg:w-[70%] mt-3 lg:mt-[-8px]">
          <div className="border-[3px] border-[#30363D] rounded-[6px]  h-auto lg:h-[calc(140vh-3rem)]">
            <div className="h-full">
              {[...Array(7)].map((_, index) => (
                <div
                  key={index}
                  className={`p-2 lg:p-4 relative border-gray-700 ${
                    index !== 6 ? "border-b-2 lg:border-b-3 w-full" : "pb-4 lg:pb-8"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 lg:gap-4">
                    {/* Left Section (Profile Info) */}
                    <div className="flex-grow relative">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center p-2">
                        <div className="flex items-center gap-x-4">
  <div className="w-[60px] h-[60px] lg:w-[75px] lg:h-[75px] bg-[#D9D9D9] rounded-full flex-shrink-0 flex justify-center items-center"></div>
  <div>
    <div className="text-white font-sans-code text-[20px] lg:text-[24px] font-normal leading-[24px] lg:leading-[30px]">
      Elon Musk
    </div>
    <div className="text-[#9198A1] font-sans-code text-[14px] lg:text-[16px] font-normal leading-[20px] lg:leading-[30px]">
      Chief Manager, NVidia.
    </div>
    <div className="text-[#9198A1] font-sans-code text-[14px] lg:text-[16px] font-normal leading-[20px] lg:leading-[30px]">
      Based at Austin, Texas.
    </div>
  </div>
</div>
                      </div>
                    </div>

                    {/* Right Section (Social Icons) */}
                    <div className="p-2 lg:p-8 mt-2 flex gap-x-3 text-[#727477] w-full lg:w-fit min-w-[160px] flex-grow-0 justify-center items-center">
                      <FaInstagram className="w-[22px] h-[22px] lg:w-[27px] lg:h-[27px] cursor-pointer hover:text-[#E1306C]" />
                      <FaFacebook className="w-[22px] h-[22px] lg:w-[27px] lg:h-[27px] cursor-pointer hover:text-[#1877F2]" />
                      <FaLinkedin className="w-[22px] h-[22px] lg:w-[27px] lg:h-[27px] cursor-pointer hover:text-[#0077B5]" />
                      <FaGithub className="w-[22px] h-[22px] lg:w-[27px] lg:h-[27px] cursor-pointer hover:text-gray-400" />
                      <FaXTwitter className="w-[22px] h-[22px] lg:w-[27px] lg:h-[27px] cursor-pointer hover:text-gray-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px] lg:mt-[80px]">
        <Footer />
      </div>
    </div>
  );
};

export default AlumniPage;