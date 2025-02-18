import { StaticImageData } from "next/image";

export enum DomainStatus {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export interface domainCardProps {
  domainName: string;
  domainIcon: StaticImageData;
  description: string;
  status: DomainStatus;
  get buttonLabel(): string;
  get disabled(): boolean;
}
