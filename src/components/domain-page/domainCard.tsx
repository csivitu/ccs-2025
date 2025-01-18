"use client";

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
    <div className="border-4 border-gray-700 rounded-md shadow-md p-4">
      <div className="flex items-center space-x-2">
        <Image src={domainIcon} alt="logo" width={56} height={56} />
        <span className="text-2xl font-bold">{domainName}</span>
      </div>
      <p className="text-sm text-gray-300 mt-2">{description}</p>
      <button className="mt-4 py-1.5 px-5  border-grey-600 bg-gray-700 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400">
        {buttonLabel}
      </button>
    </div>
  );
};

export default DomainCard;
