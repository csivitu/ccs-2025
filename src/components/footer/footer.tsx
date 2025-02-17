import SocialMediaLink from "./socialMediaLink";
import githubLogo from "../../../public/logos/githubLogo.svg";
import linkedInLogo from "../../../public/logos/linkedinLogo.svg";
import instagramLogo from "../../../public/logos/instagramLogo.svg";
import xLogo from "../../../public/logos/xLogo.svg";

export default function Footer() {
  return (
    <footer className="relative flex flex-col sm:flex-row min-w-full bg-slate-800 py-4 lg:py-6 mt-auto items-center px-4 h-[160px] lg:h-[80px] ">
      {/* Left social links */}
      <div className="flex flex-row gap-4 justify-center w-full sm:w-auto mb-6 -mt-10 sm:mt-4 lg:ml-10">
        <SocialMediaLink
          name="@csivitu"
          href="https://www.instagram.com/csivitu/"
          icon={instagramLogo}
        />
        <SocialMediaLink
          name="@csivitu"
          href="https://x.com/csivitu"
          icon={xLogo}
        />
      </div>

      {/* Center content */}
      <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 text-center mb-6 sm:mb-0 order-first sm:order-none">
        <p className="text-[18px] text-white font-sans-code font-[400] leading-tight">
          When we build, it matters.
        </p>
        <p className="text-[#727477] font-sans-code text-[14px] font-[400] leading-tight text-center mt-1">
          © 2025. Made with 🤍 @CSI
        </p>
      </div>

      {/* Right social links */}
      <div className="flex flex-row gap-3 justify-center w-full sm:w-auto sm:ml-auto -mt-16 lg:mt-0 -ml-8 lg:ml-[760px]">
        <SocialMediaLink
          name="@csivitu"
          href="https://github.com/csivitu"
          icon={githubLogo}
        />
        <SocialMediaLink
          name="CSI"
          href="https://www.linkedin.com/company/csivitu/posts/"
          icon={linkedInLogo}
        />
      </div>
    </footer>
  );
}