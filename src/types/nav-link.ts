import { StaticImageData } from "next/image";

export interface navLinkProps {
  id: string;
  label: string;
  Icon: StaticImageData;
  isActive: boolean;
  onLinkClick: ()=>void;
}