import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const AlumniPage = () => {
  const profiles = Array(7).fill({
    name: "Elon Musk",
    position: "Chief Manager, NVidia",
    location: "Based at Austin, Texas"
  });

  return (
    <div className="min-h-screen w-full bg-[#010409] flex flex-col lg:flex-row relative">
      <div className="p-6 text-white lg:fixed lg:left-12 lg:mt-36 w-full lg:w-auto">
        <h1 className="text-3xl lg:text-4xl font-semibold mb-4 font-sans-code">Alumni</h1>
        <hr className="border-t-[3px] border-[#30363D] mb-6 w-full lg:w-[108%]" />
        <p className="text-base font-semibold mb-6 text-[#9198A1] font-sans-code">
          Lorem ipsum about seniors and<br />
          superseniors Lorem ipsum about<br />
          seniors and superseniors
        </p>
        <h2 className="text-xl lg:text-2xl mt-6 lg:mt-10 font-sans-code">Domains of our Alumni</h2>

        <div className="mt-5 w-full lg:w-[110%] max-w-4xl h-3 bg-gray-800 flex rounded-lg overflow-hidden gap-x-1">
          <div className="flex-[5] bg-[#F5502A]"></div>
          <div className="flex-[4] bg-[#6541B2]"></div>
          <div className="flex-[3] bg-[#FFB249]"></div>
          <div className="flex-[1] bg-[#54A3FF]"></div>
        </div>

        <div className="grid grid-cols-2 gap-y-2 mt-2">
          <div className="flex items-center">
            <span className="w-3 h-3 mr-3 rounded-full bg-[#F5502A]"></span>
            <span className="text-sm font-semibold font-sans-code">Proj1</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 mr-3 rounded-full bg-[#6541B2]"></span>
            <span className="text-sm font-semibold font-sans-code">Proj2</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 mr-3 rounded-full bg-[#FFB249]"></span>
            <span className="text-sm font-semibold font-sans-code">Proj3</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 mr-3 rounded-full bg-[#54A3FF]"></span>
            <span className="text-sm font-semibold font-sans-code">Proj4</span>
          </div>
        </div>
      </div>

      <div className="w-[96%] lg:w-[65%] h-[45vh] lg:h-[calc(80vh-3rem)] border-[3px] border-[#30363D] rounded-md bg-[#010409] overflow-hidden mt-4 lg:mt-0 lg:fixed lg:right-24 lg:top-32 mx-2 lg:mx-0">
        <div className="h-full overflow-y-auto scrollbar-hide">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className={`p-3 lg:p-8 relative ${
                index !== profiles.length - 1 ? 'border-b-2 border-[#30363D]' : ''
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 lg:gap-4">
                <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-gray-300 flex-shrink-0"></div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-lg lg:text-2xl font-normal text-white font-sans-code">{profile.name}</h3>
                  <p className="text-sm lg:text-base text-[#9198A1] font-sans-code">{profile.position}</p>
                  <p className="text-sm lg:text-base text-[#9198A1] font-sans-code">{profile.location}</p>
                </div>

                <div className="flex gap-1.5 lg:gap-4">
                  <button className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400 hover:text-white transition-colors">
                    <FaGithub className="w-full h-full" />
                  </button>
                  <button className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400 hover:text-white transition-colors">
                    <FaLinkedin className="w-full h-full" />
                  </button>
                  <button className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400 hover:text-white transition-colors">
                    <FaXTwitter className="w-full h-full" />
                  </button>
                  <button className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400 hover:text-white transition-colors">
                    <FaFacebook className="w-full h-full" />
                  </button>
                  <button className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400 hover:text-white transition-colors">
                    <FaInstagram className="w-full h-full" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniPage;