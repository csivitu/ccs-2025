import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const AlumniPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#010409] flex">
      {/* Left Section */}
      <div className="fixed left-12 p-6 text-white mt-48">
        <h1 className="text-5xl font-semibold mb-6">Alumni</h1>
        <hr className="border-t-2 border-gray-500 mb-6" />
        <p className="text-xl mb-6 text-gray-400">
          Lorem ipsum about seniors and<br />
          superseniors Lorem ipsum about<br />
          seniors and superseniors
        </p>
        <h2 className="text-3xl mt-10">Domains of our Alumni</h2>

        {/* Single Rectangle Divided into Unequal Parts with Rounded Corners and Gaps Between */}
        <div className="mt-4 w-[110%] max-w-4xl h-3 bg-gray-800 flex rounded-lg overflow-hidden gap-x-1 relative">
          <div className="flex-[5] bg-[#F5502A]"></div>
          <div className="flex-[4] bg-[#6541B2]"></div>
          <div className="flex-[3] bg-[#FFB249]"></div>
          <div className="flex-[1] bg-[#54A3FF]"></div>
        </div>

        {/* Bullet points for Proj 1 and Proj 2 side by side */}
        <div className="flex items-center mt-6">
          <div className="flex items-center mr-24">
            <span className="w-3 h-3 mr-3 rounded-full bg-[#F5502A]"></span>
            <span className="text-xl">Proj1</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 mr-3 rounded-full bg-[#6541B2]"></span>
            <span className="text-xl">Proj2</span>
          </div>
        </div>
        <div className="flex items-center mt-1">
          <div className="flex items-center mr-24">
            <span className="w-3 h-3 mr-3 rounded-full bg-[#FFB249]"></span>
            <span className="text-xl">Proj3</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 mr-3 rounded-full bg-[#54A3FF]"></span>
            <span className="text-xl">Proj4</span>
          </div>
        </div>
      </div>

      {/* Right Section - Rectangular Box with invisible scrollbar */}
      <div className="fixed right-12 top-40 my-6 w-[65%] h-[calc(80vh-3rem)] border-4 border-gray-700 rounded-lg bg-[#010409] overflow-hidden">
        <div className="h-full overflow-y-auto scrollbar-hide">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className={`p-10 relative ${index !== 6 ? 'border-b-4 border-gray-700' : ''}`}
            >
              <div className="flex justify-between items-start">
                {/* Left Circle */}
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-20 h-20 rounded-full bg-gray-300"></div>

                {/* Rectangle Content */}
                <div className="flex-grow">
                  <h3 className="text-xl text-gray-300 ml-24">Elon Musk </h3>
                  <p className="text-gray-400 ml-24">Chief Manager, NVidia</p>
                  <p className="text-gray-400 ml-24">Based at Austin, Texas</p>
                </div>

                {/* Instagram Icon on the right */}
                <img
                    alt="Instagram"
                    src="/insta.webp"
                    className="w-8 h-8 ml-4 mt-5"
                  />
                <img
                    alt="Github"
                    src="/github.webp"
                    className="w-8 h-8 ml-4 mt-5"
                  />
                  <img
                    alt="Github"
                    src="/facebook.webp"
                    className="w-8 h-8 ml-4 mt-5"
                  />
                  <img
                    alt="Github"
                    src="/linkedIn.webp"
                    className="w-8 h-8 ml-4 mt-5"
                  />
                  <img
                    alt="Github"
                    src="/twitter.webp"
                    className="w-8 h-8 ml-4 mt-5"
                  />
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniPage;
