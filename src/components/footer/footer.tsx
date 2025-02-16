import SocialMediaLink from "./socialMediaLink";
import githubLogo from "../../../public/logos/githubLogo.svg";
import linkedInLogo from "../../../public/logos/linkedinLogo.svg";
import instagramLogo from "../../../public/logos/instagramLogo.svg";
import xLogo from "../../../public/logos/xLogo.svg";

export default function Footer() {
  return (
    <footer className="relative flex flex-row min-w-full bg-slate-800 py-6 mt-24 items-center">
      <div className="flex flex-row gap-4">
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

      <div className="absolute left-1/2 -translate-x-1/2 text-center">
        <p className="text-[21.6px] text-white font-sans-code font-[400] leading-normal">When we build, it matters.</p>
        <p className="text-[#727477] font-sans-code text-[18px] font-[400] leading-[27px] text-center mr-2">© 2025. Made with 🤍 @CSI</p>
      </div>

      <div className="flex flex-row gap-4 ml-auto">
        <SocialMediaLink
          name="@csivitu"
          href="https://github.com/csivitu"
          icon={githubLogo}
        />
        <SocialMediaLink
          name="Computer Society of India"
          href="https://www.linkedin.com/company/csivitu/posts/"
          icon={linkedInLogo}
        />
      </div>
    </footer>
  );
}