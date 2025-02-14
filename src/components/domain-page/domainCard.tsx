import { FC } from "react";
import Image from "next/image";
import { domainCardProps } from "@/types/domain-card-props";

const DomainCard: FC<domainCardProps> = ({
  domainName,
  domainIcon,
  description,
  buttonLabel,
}) => {
  return (
    <div className="border-4 border-[#30363D] rounded-[6px] shadow-md p-4">
      <div className="flex items-center space-x-4 mb-4">
        <Image src={domainIcon} alt="logo" width={50} height={50} />
        <span className="text-[28px] text-[#C9D1D9] font-sans-code font-semibold leading-[20px] text-center">{domainName}</span>
      </div>
      <p className="text-[14px] text-[#9198A1] font-sans-code font-normal leading-[18px] ml-1">{description}</p>
      <button className="mt-4 py-1.5 px-5 border border-[rgba(240,246,252,0.10)] bg-[#21262D] rounded-[6px] transition-colors duration-150 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 text-[13px] text-[#C9D1D9] font-sans font-medium leading-[20px] text-center">
        {buttonLabel}
      </button>
    </div>
  );
};

export default DomainCard;
