"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import DomainCard from "@/components/domain-page/domainCard";
import { domainCardProps } from "@/types/domain-card-props";
import techLogo from "public/logos/techLogo.svg";
import designLogo from "public/logos/designLogo.svg";
import videoLogo from "public/logos/videoLogo.svg";
import managementLogo from "public/logos/managementLogo.svg";
import csiLogo from "public/logos/csiLogoOnDark.svg";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/Navbar";
import { getUserDomains, selectDomain } from "@/app/actions/domains";
import { DomainType } from "@prisma/client";

export default function DomainsPage() {
  const [selectedDomains, setSelectedDomains] = useState<DomainType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDomains() {
      const userDomains = await getUserDomains();
      if (userDomains) {
        setSelectedDomains(userDomains?.data?.map((domain) => domain.domain) || []); 
      }
    }
    fetchDomains();
  }, []);

  const handleSelectDomain = async (domain: DomainType) => {
    setLoading(true);
    try {
      const selected = await selectDomain(domain);
      if (selected) {
        setSelectedDomains((prev) => [...prev, domain]);
      }
    } catch (error) {
      console.error("Error selecting domain:", error);
    }
    setLoading(false);
  };

  const content: domainCardProps[] = [
    {
      domainName: "Tech",
      domainIcon: techLogo,
      description: "Tech domain lorem ipsum...",
      buttonLabel: selectedDomains.includes("TECH") ? "Go to Test" : "Let's Start Coding",
      onClick: () => handleSelectDomain("TECH"),
      disabled: selectedDomains.includes("TECH") || selectedDomains.length >= 2,
    },
    {
      domainName: "Design",
      domainIcon: designLogo,
      description: "Design domain lorem ipsum...",
      buttonLabel: selectedDomains.includes("DESIGN") ? "Go to Test" : "Dive Into Design",
      onClick: () => handleSelectDomain("DESIGN"),
      disabled: selectedDomains.includes("DESIGN") || selectedDomains.length >= 2,
    },
    {
      domainName: "Management",
      domainIcon: managementLogo,
      description: "Management domain lorem ipsum...",
      buttonLabel: selectedDomains.includes("MANAGEMENT") ? "Go to Test" : "Get those finances right",
      onClick: () => handleSelectDomain("MANAGEMENT"),
      disabled: selectedDomains.includes("MANAGEMENT") || selectedDomains.length >= 2,
    },
    {
      domainName: "Video",
      domainIcon: videoLogo,
      description: "Video domain lorem ipsum...",
      buttonLabel: selectedDomains.includes("VIDEO") ? "Go to Test" : "Live. Camera. Action.",
      onClick: () => handleSelectDomain("VIDEO"),
      disabled: selectedDomains.includes("VIDEO") || selectedDomains.length >= 2,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:gap-6 my-8 sm:my-12 text-center">
          <Image src={csiLogo} alt="CSI Logo" width={480} height={92} className="w-[280px] sm:w-[380px] md:w-[480px] mt-8 sm:mt-12" priority />
          <h1 className="text-white font-sans-code text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-normal sm:leading-relaxed px-2">
            Welcome to CSI! Let's get started.
          </h1>
          <p className="text-[#9198A1] font-sans-code text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-3xl px-2">
            Choose your domains and start answering the questions. Remember, once chosen you can't pause. Max 2 domains can be selected.
          </p>
        </div>

        <p className="text-xl sm:text-4xl text-[#9198A1] font-sans-code font-[600] text-center mb-8">
          Choose a domain
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 max-w-[1000px] mx-auto px-2 sm:px-4 mb-[-30px] sm:mb-12">
          {content.map((domain) => (
            <div key={domain.domainName} className="w-full max-w-[480px] mx-auto">
              <DomainCard {...domain} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
