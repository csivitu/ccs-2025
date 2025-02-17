import Image from 'next/image';
import Navbar from '@/components/Navbar'
import SlNavbar from '../components/slNavbar';
export default function Signup() {
  return (
    <div className="h-screen bg-black sticky overflow-auto flex flex-col">
  
      <div className="relative flex flex-col items-center pt-8 space-y-6 px-4 sm:px-0 flex-1"> 
        <SlNavbar />
        <div className="absolute left-0 bottom-7 transform origin-bottom-left sm:scale-100 scale-75 hidden sm:block">
          <Image 
            src="/cat_left.webp" 
            alt="Left Cat" 
            width={400} 
            height={300} 
            className="w-[50vw] max-w-[300px] h-auto" 
          />
        </div>
        <div className="absolute right-0 top-0 transform origin-top-right sm:scale-100 scale-75 hidden sm:block">
          <Image 
            src="/cat_right.webp" 
            alt="Right Cat" 
            width={400} 
            height={300} 
            className="w-[50vw] max-w-[300px] h-auto" 
          />
        </div>
        <div className="flex flex-col items-center space-y-3 text-center">
          <Image 
            src="/git.webp" 
            alt="GitHub Icon" 
            width={70} 
            height={70} 
            className="mb-3"
          />
          <h2 className="text-white text-2xl sm:text-4xl font-semibold">
            Sign up for Core-Committee Selection
          </h2>
        </div>
        <div className="w-full max-w-[630px] bg-[#151B23] border border-gray-600 rounded-[10px] flex flex-col items-center p-6 space-y-4">
          <div className="w-full space-y-4">
            <div className="flex flex-col">
              <label className="text-white mb-2 text-lg">Name</label>
              <input 
                type="name" 
                placeholder="Name" 
                className="w-full h-[50px] bg-black text-white px-4 rounded-[10px] border border-gray-600 focus:outline-none" 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2 text-lg">Gender</label>
              <input 
                type="gender" 
                placeholder="Gender" 
                className="w-full h-[50px] bg-black text-white px-4 rounded-[10px] border border-gray-600 focus:outline-none" 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2 text-lg">About us</label>
              <input 
                type="about us" 
                placeholder="About Us" 
                className="w-full h-[50px] bg-black text-white px-4 rounded-[10px] border border-gray-600 focus:outline-none" 
              />
            </div>
          </div>
        </div>
        <button className="w-full max-w-[630px] h-[50px] bg-black border border-gray-600 text-white font-semibold rounded-[10px] mt-4 mb-2">
          Continue
        </button>
        <a href="#" className="text-[#1F6FEB] text-lg sm:text-2xl underline">
          Sign in →
        </a>
      </div>
    </div>
  );
}