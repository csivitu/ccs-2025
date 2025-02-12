import Image from 'next/image';
import SlNavbar from '../components/slNavbar';

export default function Signup() {
  return (
    <div className="h-screen bg-black sticky overflow-hidden">
      <SlNavbar />
      <div className="relative h-full flex flex-col items-center pt-8 space-y-6"> 
        <div className="absolute left-0 bottom-7 transform origin-bottom-left sm:scale-100 scale-75">
          <Image 
            src="/cat_left.webp" 
            alt="Left Cat" 
            width={400} 
            height={300} 
            className="w-[70vw] max-w-[400px] h-auto" 
          />
        </div>
        <div className="absolute right-0 top-0 transform origin-top-right sm:scale-100 scale-75">
          <Image 
            src="/cat_right.webp" 
            alt="Right Cat" 
            width={400} 
            height={300} 
            className="w-[70vw] max-w-[400px] h-auto" 
          />
        </div>
        <div className="flex flex-col items-center space-y-3">
          <Image 
            src="/git.webp" 
            alt="GitHub Icon" 
            width={70} 
            height={70} 
            className="mb-3"
          />
          <h2 className="text-white text-3xl sm:text-4xl font-semibold text-center">
            Sign up for Core-Committee Selection
          </h2>
        </div>
        <div className="w-[90%] sm:w-[630px] bg-[#151B23] border border-gray-600 rounded-[10px] flex flex-col items-center p-6 space-y-3">
          <div className="w-full space-y-3">
            <div className="flex flex-col">
              <label className="text-white mb-3 text-lg">Email*</label>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full h-[50px] bg-black text-white px-4 rounded-[10px] border border-gray-600 focus:outline-none" 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-3 text-lg">Password*</label>
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full h-[50px] bg-black text-white px-4 rounded-[10px] border border-gray-600 focus:outline-none" 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2 text-lg">Confirm Password*</label>
              <input 
                type="password" 
                placeholder="Confirm password" 
                className="w-full h-[50px] bg-black text-white px-4 rounded-[10px] border border-gray-600 focus:outline-none" 
              />
            </div>
          </div>
        </div>
        <button className="w-[90%] sm:w-[630px] h-[60px] bg-black border border-gray-600 text-white font-semibold rounded-[10px] mt-4 mb-2">
          Continue
        </button>
        <a href="#" className="text-[#1F6FEB] text-xl sm:text-2xl underline">
          Sign in →
        </a>
      </div>
    </div>
  );
}
