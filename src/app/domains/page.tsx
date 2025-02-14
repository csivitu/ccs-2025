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

const content: domainCardProps[] = [
  {
    domainName: "Tech",
    domainIcon: techLogo,
    description:
      "Tech domain lorem ipsum Tech domain lorem ipsumTech domain lorem ipsumTech domain lorem ipsumTech domain lorem ipsumTech domain lorem ipsum",
    buttonLabel: "Let's Start Coding",
  },
  {
    domainName: "Design",
    domainIcon: designLogo,
    description:
      "Design domain lorem ipsum Tech domain lorem ipsumTech domain lorem ipsumTech domain lorem ipsumTech domain lorem ipsumTech domain lorem ipsum",
    buttonLabel: "Dive Into Design",
  },
  {
    domainName: "Management",
    domainIcon: managementLogo,
    description:
      "Management domain lorem ipsum Tech domain lorem ipsumTech domain lorem ipsumTech domain lorem ipsumTech domain lorem ipsumTech domain lorem ipsum",
    buttonLabel: "Get those finances right",
  },
  {
    domainName: "Video",
    domainIcon: videoLogo,
    description:
      "Video domain lorem ipsum Tech domain lorem ipsumTech domain lorem ipsumTech domain lorem ipsumTech domain lorem ipsumTech domain lorem ipsum",
    buttonLabel: "Live. Camera. Action.",
  },
];

export default function DomainsPage() {
  return (

    <div className="bg-[#0D1117] min-w-full">
      <Navbar/>

      <div className="flex flex-col items-center gap-2 my-12 mx-4 text-center">
        <Image
          src={csiLogo}
          alt="CSI Logo"
          width={480}
          height={92}
          className="md:pb-8 pb-4 mt-12"
        />
        <h1 className="text-white font-sans-code text-[36px] font-[600] leading-[21px] mt-2">
          Welcome to CSI! Let's get started.
        </h1>
        <p className="text-[#9198A1] font-sans-code text-[24px] font-normal leading-[21px] mb-6 mt-4">
  Choose your domains and start answering the questions. Remember once chosen you can't pause. Max 2 domains to be chosen.
</p>

      </div>

      <p className="text-[24px] text-[#9198A1] font-sans-code font-normal leading-[21px] flex justify-center">
  Choose a domain
</p>

      <div
        className={`grid justify-center justify-items-center 
          lg:grid-cols-[repeat(2,480px)] md:grid-cols-[repeat(2,1fr)] gridgrid-cols-1 
          md:gap-10  gap-y-4 m-8`}
      >
        {content.map((domain) => (
          <DomainCard key={domain.domainName} {...domain} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
