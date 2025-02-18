import { StaticImageData } from "next/image";

export interface domainCardProps {
  domainName: string;
  domainIcon: StaticImageData;
  description: string;
  buttonLabel: string;
  disabled: boolean; 
}
