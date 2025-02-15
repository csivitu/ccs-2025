// ProfileContent.tsx
import React from 'react';
import Image from 'next/image';

const Profile = () => {
  const today = new Date();
  const contributionDate = new Date('2025-01-13');
  const formattedDate = today.toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="bg-[#1E2124] text-[#C9D1D9] font-sans">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Side */}
          <div className="col-span-1 flex flex-col items-center lg:items-start">
            <div className="mb-4 rounded-full overflow-hidden w-40 h-40">
              <Image
                src="/raju_rastogi_profile.webp"
                alt="Raju Rastogi"
                width={160}
                height={160}
              />
            </div>
            <h1 className="text-2xl font-semibold">Raju Rastogi</h1>
            <p className="text-sm mb-4">24BCE0556</p>
            <button className="bg-transparent border border-[#30363D] rounded-md py-2 px-4 mb-6 hover:bg-[#30363D]">
              Edit profile
            </button>

            <div className="w-full border border-[#30363D] rounded-md mb-4">
              <div className="p-3">
                <h2 className="text-lg font-semibold mb-2">Achievements</h2>
                <div className="flex items-center">
                  <Image
                    src="/badge.webp"
                    alt="Achievement Badge"
                    width={32}
                    height={32}
                    className="mr-2"
                  />
                  <span className="text-sm text-[#3FB950]">You chose CSI</span>
                </div>
              </div>
            </div>

            <div className="w-full border border-[#30363D] rounded-md">
              <div className="p-3">
                <h2 className="text-lg font-semibold mb-2">Organizations</h2>
                <Image
                  src="/org.webp"
                  alt="Organization Logo"
                  width={64}
                  height={32}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-span-1 lg:col-span-3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">
                42 contributions in the last year
              </h2>
              <span className="text-sm">Contribution settings</span>
            </div>

            {/* Contribution Chart (Placeholder) */}
            <div className="mb-6">
              <Image src="/contri.webp" width={500} height={100} alt="Contribution Chart" />
              <p className="text-xs">Learn how we count contributions</p>
            </div>

            <div className="mb-6">
              <h3 className="text-md font-semibold">Contribution activity</h3>
              <p className="text-sm">{formattedDate}</p>
            </div>

            {/* Questions Section */}
            <div className="mb-4 p-4 border border-[#30363D] rounded-md">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                    </svg>
                  </span>
                  <h4 className="text-md font-semibold">
                    Questions completed in Design Domain
                  </h4>
                </div>
                <span className="text-sm">Public</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(10)].map((_, i) => (
                  <span
                    key={i}
                    className={`w-4 h-4 rounded-full mr-1 ${
                      i < 5 ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  ></span>
                ))}
              </div>
              <p className="text-sm">Questions left: 5/10</p>
              <p className="text-sm">Last Date: Jan 20</p>
            </div>

            {/* Questions Section */}
            <div className="mb-4 p-4 border border-[#30363D] rounded-md">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                    </svg>
                  </span>
                  <h4 className="text-md font-semibold">
                    Questions completed in Tech Domain
                  </h4>
                </div>
                <span className="text-sm">Public</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(10)].map((_, i) => (
                  <span
                    key={i}
                    className={`w-4 h-4 rounded-full mr-1 ${
                      i < 3 ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  ></span>
                ))}
              </div>
              <p className="text-sm">Questions left: 3/10</p>
              <p className="text-sm">Last Date: Jan 20</p>
            </div>
             {/* Questions Section */}
             <div className="mb-4 p-4 border border-[#30363D] rounded-md">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                    </svg>
                  </span>
                  <h4 className="text-md font-semibold">
                    Questions completed in Management
                  </h4>
                </div>
                <span className="text-sm">Public</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(10)].map((_, i) => (
                  <span
                    key={i}
                    className={`w-4 h-4 rounded-full mr-1 ${
                      i < 3 ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  ></span>
                ))}
              </div>
              <p className="text-sm">Questions left: 3/10</p>
              <p className="text-sm">Last Date: Jan 20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
