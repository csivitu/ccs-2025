import Image from "next/image";
import { StaticImageData } from "next/image";
import Logo from "@/app/domains/assets/designLogo.svg";

export default function SocialMediaLink({
  name = "test",
  href = "https://github.com/csivitu/ccs-2025/tree/dev",
  icon = Logo,
}: {
  name: string;
  href: string;
  icon: StaticImageData;
}) {
  return (
    <a href={href} className="flex flex-row gap-2 items-center m-4 px-4 opacity-75">
      <Image src={icon} alt="logo" width={24} height={24} />
      <span>{name}</span>
    </a>
  );
}
