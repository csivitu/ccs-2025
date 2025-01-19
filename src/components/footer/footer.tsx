import SocialMediaLink from "./socialMediaLink";

export default function Footer() {
  return (
    <footer className="flex flex-row min-w-full bg-slate-800 py-10 mt-auto">
      <SocialMediaLink />
      <SocialMediaLink />
      <div className="flex flex-col flex-grow text-center">
        <p className="text-2xl">When we build, it matters.</p>
        <p className="text-slate-500">© 2025. Made with 🤍 @CSI</p>
      </div>
      <SocialMediaLink />
      <SocialMediaLink />
    </footer>
  );
}
