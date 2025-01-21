import SocialMediaLink from "./socialMediaLink";
import githubLogo from "@/app/domains/assets/gitHubLogo.svg";
import linkedInLogo from "@/app/domains/assets/linkedinLogo.svg";
import instagramLogo from "@/app/domains/assets/instagramLogo.svg";
import xLogo from "@/app/domains/assets/xLogo.svg";

export default function Footer() {
  return (
    <footer className="flex flex-row min-w-full bg-slate-800 py-6 mt-auto">
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
      <div className="flex flex-col flex-grow text-center justify-center">
        <p className="text-2xl">When we build, it matters.</p>
        <p className="text-slate-500">© 2025. Made with 🤍 @CSI</p>
      </div>
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
    </footer>
  );
}
