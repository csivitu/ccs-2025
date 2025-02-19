import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import type{ domainCardProps } from "@/types/domain-card-props";

const DomainCard: FC<domainCardProps & { loading: boolean }> = ({
  domainName,
  domainIcon,
  description,
  buttonLabel,
  disabled,
  loading
}) => {
  return (
    <div className="border-4 border-[#30363D] rounded-[6px] shadow-md p-4 flex flex-col h-full justify-between">
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
      <Link
        href={disabled ? "#" : `/dashboard/domains/${domainName.toLowerCase()}/question`}
      >
        {loading ? (
          <div className="mt-4 h-[40px] w-full lg:max-w-[200px] bg-gray-700 rounded-[6px] animate-pulse" />
        ) : (
          <button
            disabled={disabled}
            type="button"
            className={`mt-4 py-1.5 px-5 w-full h-[40px] border border-[rgba(240,246,252,0.10)] rounded-[6px] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-gray-400 text-[13px] font-sans font-medium leading-[20px] text-center
              ${
                disabled
                  ? "bg-[#21262D]/50 text-[#C9D1D9]/50 cursor-not-allowed hover:bg-[#21262D]/50"
                  : "bg-[#21262D] text-[#C9D1D9] hover:bg-gray-700"
              }`}
          >
            {buttonLabel}
          </button>
        )}
      </Link>
    </div>
  );
};

export default DomainCard;
