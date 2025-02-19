import Image from 'next/image';
import SlNavbar from './slNavbar';
export default function Signup() {
  
  return (
    <div className="h-screen bg-black sticky overflow-auto flex flex-col">
      <div className="relative flex flex-col items-center pt-8 space-y-6 px-4 sm:px-0 flex-1">      
        <div className="flex flex-col items-center space-y-3 text-center">
          <Image
            src="/git.webp"
            alt="GitHub Icon"
            width={70}
            height={70}
            className="mb-3 sm:w-[70px] sm:h-[70px]"
          />
          <h2 className="text-white text-2xl sm:text-4xl font-semibold">
            Details
          </h2>
        </div>
        <div className="w-full max-w-[630px] bg-[#151B23] border border-gray-600 rounded-[10px] flex flex-col items-center p-6 space-y-4">
          <div className="w-full space-y-4">
            <div className="flex flex-col">
              <label className="text-white mb-2 text-lg">Gender</label>
              <input
                type="text"
                placeholder="Gender"
                className="w-full h-[50px] bg-black text-white px-4 rounded-[10px] border border-gray-600 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2 text-lg">One Liner about you</label>
              <input
                type="text"
                placeholder="One Liner about you"
                className="w-full h-[50px] bg-black text-white px-4 rounded-[10px] border border-gray-600 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2 text-lg">Phone Number</label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full h-[50px] bg-black text-white px-4 rounded-[10px] border border-gray-600 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <button className="w-full max-w-[630px] h-[50px] bg-black border border-gray-600 text-white font-semibold rounded-[10px] mt-4 mb-40">
          Continue
        </button>
      </div>
    </div>
  );
}
