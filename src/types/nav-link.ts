import { StaticImageData } from "next/image";

export interface navLinkProps {
  id: string;
  label: string;
  Icon: string | StaticImageData;
  isActive: boolean;
  onLinkClick: ()=>void;
}