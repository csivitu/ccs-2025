import Image from "next/image";
import { navLinkProps } from "@/types/nav-link";

export default function NavLink({
  id,
  label,
  Icon,
  isActive,
  onLinkClick,
}: navLinkProps) {
  const style = `text-base flex items-center space-x-2  ${
    isActive
      ? "text-[#C9D1D9]"
      : "text-[#C9D1D9] hover:text-white transition-colors"
  }`;
  return (
    <div className="relative ">
      <a href={`#${id}`} className={style} onClick={onLinkClick}>
        <Image
          src={Icon}
          alt={id}
          style={{ width: "1.25em", height: "1.25em" }}
          color={isActive ? "rgba(139, 148, 158, 1)" : "rgba(139, 148, 158, 1)"}
          className="mr-1" // Added margin-right to the icon
        />
        <span className="relative">
          {label}
          <div
            className={`absolute -bottom-1 left-0 w-full h-0.5 transform transition-all duration-300 ${
              isActive
                ? "bg-[rgba(247,129,102,1)] scale-x-110"
                : "bg-transparent scale-x-100"
            }`}
          />
        </span>
      </a>
    </div>
  );
}