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
        rounded-xl opacity-75 hover:bg-slate-700 transition-colors`}
      target="__blank"
    >
      <Image src={icon} alt="logo" width={37.447} height={37.447} />
      <span className="text-[16px] text-[#a7aaaf] text-center font-[400] leading-[30px] font-sans-code">{name}</span>
    </a>
  );
}
