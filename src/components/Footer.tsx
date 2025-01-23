import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#151B23] py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 text-base text-zinc-400 md:flex-row">
          <div className="flex items-center gap-4">
            <Link href="https://instagram.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaInstagram className="h-8 w-8" />
              <span className="text-xl">@csivitu</span>
            </Link>
            <Link href="https://twitter.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaTwitter className="h-8 w-8" />
              <span className="text-xl">@csivitu</span>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-1 md:flex-col md:gap-2">
            <span className="text-xl font-bold">When we build, it matters.</span>
            <span className="text-xl">
              © 2025, Made with <span className="text-red-500">♥</span> @CSI
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://github.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaGithub className="h-8 w-8" />
              <span className="text-xl">@csivitu</span>
            </Link>
            <Link href="https://linkedin.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaLinkedin className="h-8 w-8" />
              <span className="text-xl">Computer Society of India</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}