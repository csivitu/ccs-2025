import React from "react";
import { FaLinkedin } from 'react-icons/fa';
//import { FaXTwitter } from "react-icons/fa6";
import Footer from "@/components/footer/footer";
import { alumniData } from "@/data/alumni";
import Link from "next/link";

const AlumniPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A]">
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row px-4 lg:px-10 mt-6 md:mt-12">
        <div className="ml-2 lg:w-1/4 text-white lg:sticky lg:top-0 h-auto lg:h-screen mb-6 lg:mb-0">
          <h1 className="text-white font-sans-code text-[28px] lg:text-[36px] font-semibold leading-[30px] mb-2 lg:mb-4">
            Alumni
          </h1>
          <hr className="w-[306.08px] h-[3px] bg-[#30363D] border-none mb-2 lg:mb-4" />
          <p className="text-[14px] lg:text-[16px] leading-[19px] text-[#9198A1] font-normal font-sans-code lg:mb-6">
            {/* TODO@jrs : Replace this description ::D */}
            CSI VIT alumni continue to excel as <br className="hidden lg:block" /> innovators, leaders, and mentors, making <br className="hidden lg:block" /> significant contributions to the tech <br className="hidden lg:block" /> industry while maintaining strong ties with our community.    
          </p>
        </div>
        <div className="lg:w-[70%] mt-3 lg:mt-[-8px]">
          <div className="border-[3px] border-[#30363D] rounded-[6px] ">
          {alumniData.map((alumni, index) => (
                <div
                  key={index}
                  className={`p-2 lg:p-4 relative border-gray-700 ${index !== 6 ? "border-b-2 lg:border-b-3 w-full" : "pb-4 lg:pb-8"
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
                              {alumni.name}
                            </div>
                            <div className="text-[#9198A1] font-sans-code text-[14px] lg:text-[16px] font-normal leading-[20px] lg:leading-[30px]">
                              {alumni.company} 
                            </div>
                            <div className="text-[#9198A1] font-sans-code text-[14px] lg:text-[16px] font-normal leading-[20px] lg:leading-[30px]">
                            {alumni.position} - {alumni.expertise}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={alumni.linkedin}
                      className="p-2 lg:p-8 mt-2 flex gap-x-3 text-[#727477] w-full lg:w-fit min-w-[160px] flex-grow-0 justify-center items-center"
>
                      <span className="text-[14px] lg:text-[16px] cursor-pointer hover:text-[#0077B5] flex items-center gap-1">
                      <FaLinkedin className="text-[28px] lg:text-[36px] -mt-4 lg:-mt-2" /> 
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
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