import Image from 'next/image';
import SlNavbar from '../components/slNavbar';
import Link from "next/link";

export default function Login() {
  return (
    <div className="h-screen bg-black sticky overflow-hidden flex flex-col">
      <SlNavbar />
      <div className="relative flex flex-col items-center justify-center h-full space-y-6 px-4">
        <div className="absolute left-0 bottom-20 sm:bottom-7 transform origin-bottom-left sm:scale-100 scale-75 -z-10">
          <Image 
            src="/cat_left.webp" 
            alt="Left Cat" 
            width={400} 
            height={300} 
            className="w-[70vw] max-w-[400px] h-auto" 
          />
        </div>
        <div className="absolute right-0 bottom-20 sm:top-0 transform origin-top-right sm:scale-100 scale-75 -z-10">
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
          <h2 className="text-white text-2xl sm:text-4xl font-semibold text-center px-4">
            Sign up for Core-Committee Selection
          </h2>
        </div>
        <div className="w-full max-w-[630px] bg-[#151B23] border border-gray-600 rounded-[10px] flex flex-col items-center p-6">
          <div className="w-full space-y-3">
            <div className="flex flex-col">
              <label className="text-white mb-2 text-lg">Email Address*</label>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full h-[50px] bg-black text-white px-4 rounded-[10px] border border-gray-600 focus:outline-none" 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2 text-lg">Password*</label>
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full h-[50px] bg-black text-white px-4 rounded-[10px] border border-gray-600 focus:outline-none" 
              />
              <a href="#" className="text-[#1F6FEB] text-sm mt-1 self-end">Forgot Password?</a>
            </div>
          </div>
        </div>
        <Link href="/dashboard">
          <button className="w-full max-w-[630px] h-[60px] bg-[#238636] border border-gray-600 text-white font-semibold rounded-[10px] mt-4 mb-2">
            Sign In
          </button>
        </Link>
        
        <p className="text-white text-lg">
          New to CSI? 
          <a href="./signup.tsx" className="text-[#1F6FEB] ml-1">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}
