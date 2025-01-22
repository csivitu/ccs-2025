import Image from "next/image";
import { StaticImageData } from "next/image";

export default function SocialMediaLink({
  name,
  href,
  icon,
}: {
  name: string;
  href: string;
  icon: StaticImageData;
}) {
  return (
    <a
      href={href}
      className={`flex flex-row gap-2 
        items-center m-4 px-4 py-2 
        rounded-md opacity-75 hover:bg-slate-700 transition-colors`}
      target="__blank"
    >
      <Image src={icon} alt="logo" width={24} height={24} />
      <span className="text-slate-500">{name}</span>
    </a>
  );
}
