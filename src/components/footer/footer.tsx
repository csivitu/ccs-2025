import SocialMediaLink from "./socialMediaLink";
import githubLogo from "public/logos/gitHubLogo.svg";
import linkedInLogo from "public/logos/linkedinLogo.svg";
import instagramLogo from "public/logos/instagramLogo.svg";
import xLogo from "public/logos/xLogo.svg";

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
