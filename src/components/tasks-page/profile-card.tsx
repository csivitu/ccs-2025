import { StaticImageData } from "next/image";
import Image from "next/image";

interface profileCardProps {
  image: StaticImageData;
  name: string;
  regno: string;
  domains: ("Tech" | "Design" | "Management" | "Video")[];
}

export default function ProfileCard({
  name,
  image,
  regno,
  domains,
}: profileCardProps) {
  return (
    <section>
      <div className="flex sm:flex-col flex-row gap-4 my-2">
        <div className="flex justify-center sm:w-fit w-20">
          <Image
            src={image}
            alt="profile"
            width={296}
            className="rounded-full"
          />
        </div>

        <div className="my-2 sm:my-4">
          <h1 className="font-bold sm:text-4xl text-2xl">{name}</h1>
          <p className="font-xl font-light uppercase text-[#8B949E] sm:text-base text-sm">
            {regno}
          </p>
        </div>
      </div>

      <ul className="flex sm:flex-col sm:gap-3 flex-row gap-2">
        {domains.map((domain) => (
          <li className="text-center w-full border border-[#515254] rounded-[6px] bg-[#21262D] text-[#C9D1D9] py-1">
            {domain}
          </li>
        ))}
      </ul>
    </section>
  );
}
