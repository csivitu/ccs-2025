import SocialMediaLink from "./socialMediaLink";

export default function Footer() {
  return (
    <div className="flex flex-row min-w-full bg-slate-700 py-10 align-bottom ">
      <SocialMediaLink />
      <SocialMediaLink />
      <div className="flex flex-col flex-grow text-center">
        <p>When we build, it matters.</p>
        <p>© 2025. Made with 🤍 @CSI</p>
      </div>
      <SocialMediaLink />
      <SocialMediaLink />
    </div>
  );
}
