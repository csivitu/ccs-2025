import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { domainCardProps } from "@/types/domain-card-props";

const DomainCard: FC<domainCardProps> = ({
  domainName,
  domainIcon,
  description,
  buttonLabel,
  onClick,
  disabled,
}) => {
  return (
    <div className="border-4 border-[#30363D] rounded-[6px] shadow-md p-4">
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src={domainIcon}
          alt="logo"
          width={50}
          height={50}
          className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <span className="text-[24px] lg:text-[28px] text-[#C9D1D9] font-sans-code font-semibold leading-[20px] text-center">
          {domainName}
        </span>
      </div>
      <p className="text-[14px] text-[#9198A1] font-sans-code font-normal leading-[18px] ml-1 -mt-2">
        {description}
      </p>
      <Link href={`/domains/${domainName}/question`}>
        <button className="mt-4 py-1.5 px-5 w-full  lg:max-w-[200px] h-[40px] border border-[rgba(240,246,252,0.10)] bg-[#21262D] rounded-[6px] transition-colors duration-150 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 text-[13px] text-[#C9D1D9] font-sans font-medium leading-[20px] text-center">
          {buttonLabel}
        </button>
      </Link>
    </div>
  );
};

export default DomainCard;
