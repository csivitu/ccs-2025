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
import { getAttemptedDomains } from "@/app/actions/domains";
import { AttemptedDomain } from "@prisma/client";
import { DomainStatus } from "@/types/domain-card-props";

const MAX_DOMAIN_ATTEMPTS = 2;

export default function DomainsPage() {
  const [selectedDomains, setSelectedDomains] = useState<AttemptedDomain[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDomains() {
      setLoading(true);
      const attmptedDomains = await getAttemptedDomains();
      setSelectedDomains(attmptedDomains?.data || []);
      setLoading(false);
    }
    fetchDomains();
  }, []);

  const getDomainStatus = (domainName: string): DomainStatus => {
    const domainAttempt = selectedDomains.find(
      (domain) => domain.domain === domainName
    );

    if (!domainAttempt) return DomainStatus.NOT_STARTED;
    if (domainAttempt.submitted) return DomainStatus.COMPLETED;
    return DomainStatus.IN_PROGRESS;
  };

  const getButtonLabel = (
    status: DomainStatus,
    defaultLabel: string
  ): string => {
    switch (status) {
      case DomainStatus.IN_PROGRESS:
        return "Continue Test";
      case DomainStatus.COMPLETED:
        return "Test Finished";
      default:
        return defaultLabel;
    }
  };

  const isDisabled = (status: DomainStatus): boolean => {
    return (
      status === DomainStatus.COMPLETED ||
      (selectedDomains.filter((d) => !d.submitted).length >=
        MAX_DOMAIN_ATTEMPTS &&
        status === DomainStatus.NOT_STARTED)
    );
  };

  const content: domainCardProps[] = [
    {
      domainName: "Tech",
      domainIcon: techLogo,
      description:
        "Docker, Node, Express, React—if these words mean anything to you, consider joining the Tech domain, the invisible team behind all our projects. Many sleepless nights of debugging await those who dare enter.",
      status: getDomainStatus("TECH"),
      get buttonLabel() {
        return getButtonLabel(this.status, "Let's Start Coding");
      },
      get disabled() {
        return isDisabled(this.status);
      },
    },
    {
      domainName: "Design",
      domainIcon: designLogo,
      description:
        "Ever struggled to center a div? Or maybe Blender keeps crashing at the worst possible moment? Dive into design and learn the ins and outs of making things look good (without losing your mind). ",
      status: getDomainStatus("DESIGN"),
      get buttonLabel() {
        return getButtonLabel(this.status, "Dive Into Design");
      },
      get disabled() {
        return isDisabled(this.status);
      },
    },
    {
      domainName: "Management",
      domainIcon: managementLogo,
      description:
        "The glue that holds everything together—where would we be without the Management domain? Want to organize events or enjoy the thrill of shouting at vendors (professionally, of course), this might be for you.",
      status: getDomainStatus("MANAGEMENT"),
      get buttonLabel() {
        return getButtonLabel(this.status, "Get those finances right");
      },
      get disabled() {
        return isDisabled(this.status);
      },
    },
    {
      domainName: "Video",
      domainIcon: videoLogo,
      description:
        "Ready to unleash your inner director? Join the select few in Video who have mastered Adobe, crafting eye-catching reels and bringing stories to life. This is your stage to shine!",
      status: getDomainStatus("VIDEO"),
      get buttonLabel() {
        return getButtonLabel(this.status, "Live. Camera. Action.");
      },
      get disabled() {
        return isDisabled(this.status);
      },
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:gap-6 text-center">
          <Image
            src={csiLogo}
            alt="CSI Logo"
            width={480}
            height={92}
            className="w-52 md:w-80 mt-8 my-4 mb-8"
            priority
          />
          <h1 className="text-white font-sans-code text-lg sm:text-2xl lg:text-3xl font-semibold leading-normal sm:leading-relaxed px-2">
            Welcome to CSI! Let's get started.
          </h1>
          <p className="text-[#9198A1] font-sans-code text-sm -mt-4 sm:text-base lg:text-lg font-normal leading-relaxed max-w-3xl px-2">
            Choose your domains and start answering the questions. Remember once
            chosen you can't pause. Max 2 domains to be chosen.
          </p>
        </div>

        <p className="text-lg  sm:text-3xl text-[#9198A1] font-sans-code font-[600] text-center my-8">
          Select your domain.
        </p>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-10 max-w-[1000px] mx-auto px-2 sm:px-4 ">
          {content.map((domain) => (
           
                <DomainCard {...domain} loading={loading}  key={domain.domainName}/>
    
          ))}
        </div>
      </main>

      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
}
