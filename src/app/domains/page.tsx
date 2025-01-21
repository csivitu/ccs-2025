import Image from "next/image";
import DomainCard from "@/components/domain-page/domainCard";

import { domainCardProps } from "@/types/domain-card-props";
import techLogo from "@/app/domains/assets/techLogo.svg";
import designLogo from "@/app/domains/assets/designLogo.svg";
import videoLogo from "@/app/domains/assets/videoLogo.svg";
import managementLogo from "@/app/domains/assets/managementLogo.svg";
import csiLogo from "@/app/domains/assets/csiLogoOnDark.svg";
import Footer from "@/components/footer/footer";

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
      <div className="flex flex-row min-h-full justify-center">
        NavBar Comes Here
      </div>

      <div className="flex flex-col items-center gap-2 my-12 mx-4 text-center">
        <Image
          src={csiLogo}
          alt="CSI Logo"
          width={480}
          height={92}
          className="md:pb-8 pb-4"
        />
        <h1 className="md:text-3xl text-xl font-semibold ">
          Welcome to CSI! Let's get started.
        </h1>
        <p className="text-slate-500 md:text-xl text-md mb-6">
          Choose your domains and start answering the questions. Remember once
          chosen you <span className="text-slate-300">CAN NOT</span> pause. Max
          2 domains to be chosen.
        </p>
      </div>

      <p className="text-2xl text-slate-500 flex justify-center">
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
