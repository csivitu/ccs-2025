import React from 'react';
import { BookMarked, Star, Network } from 'lucide-react';

const ProjectPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#010409] flex">
      <div className="fixed left-12 p-6 text-white mt-32">
        <h1 className="text-6xl font-bold mb-6">Projects</h1>
        <hr className="border-t-2 border-gray-500 mb-6" />
        <p className="text-xl mb-6">
          Lorem ipsum about projects karo<br /> projects 
          lorem nahi ipsum nahi projects <br />lorem ipsum
        </p>
        <h2 className="text-4xl mt-10">Our Projects</h2>

        <div className="mt-5 w-[110%] max-w-4xl h-3 bg-gray-800 flex rounded-lg overflow-hidden gap-x-2 relative">
          <div className="flex-[5] bg-[#F5502A]"></div>
          <div className="flex-[4] bg-[#6541B2]"></div>
          <div className="flex-[3] bg-[#FFB249]"></div>
          <div className="flex-[1] bg-[#54A3FF]"></div>
        </div>

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

      <div className="fixed right-12 top-32 my-6 w-[65%] h-[calc(80vh-3rem)] border-4 border-gray-700 rounded-lg bg-[#010409] overflow-hidden">
        <div className="h-full overflow-y-auto scrollbar-hide">
          {[...Array(7)].map((_, index) => (
            <div 
              key={index}
              className={`p-10 relative ${index !== 6 ? 'border-b-4 border-gray-700' : ''}`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-grow">
                  <span className="text-[rgba(88,166,255,1)] text-2xl flex items-center">
                    <BookMarked className="mr-2 text-gray-500" />
                    projectTitle / <span className="font-semibold">projectName</span>
                  </span>
                  <p className="text-gray-500 text-xl mt-2">
                    project description ipsum content name
                  </p>
                  
                  <div className="flex items-center mt-6">
                    <span className="w-3 h-3 mr-3 rounded-full" style={{ backgroundColor: 'rgba(218, 91, 11, 1)' }}></span>
                    <span className="text-xl text-gray-500">Tech Domain</span>

                    <Star className="ml-10 text-gray-500" />
                    <span className="ml-1 text-xl text-gray-500">Popular</span>

                    <Network className="ml-10 text-gray-500" />
                    <span className="ml-1 text-xl text-gray-500">HTML CSS React</span>

                    <div className="ml-10 flex items-center text-xl text-gray-500">
                      <span>Built By: Raju Rastogi</span>
                      <img 
                        src="/git.webp" 
                        alt="Raju Rastogi" 
                        className="w-8 h-8 rounded-full ml-3"
                      />
                    </div>
                  </div>
                </div>
                
                <img 
                  src="giticon.webp" 
                  alt="Project Preview"
                  className="w-[10%] h-auto rounded-lg  ml-4"
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
