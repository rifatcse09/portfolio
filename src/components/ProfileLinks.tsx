import { SiFacebook, SiFiverr, SiGithub, SiLinkedin, SiMedium, SiUpwork } from "react-icons/si";
import { SITE } from "@/data/site";

const profiles = [
  {
    href: SITE.links.linkedin,
    label: "LinkedIn",
    Icon: SiLinkedin,
    className: "bg-[#0a66c2]/15 text-[#0a66c2]",
  },
  {
    href: SITE.links.upwork,
    label: "Upwork",
    Icon: SiUpwork,
    className: "bg-[#14a800]/15 text-[#14a800]",
  },
  {
    href: SITE.links.facebook,
    label: "Facebook",
    Icon: SiFacebook,
    className: "bg-[#1877f2]/15 text-[#1877f2]",
  },
  {
    href: SITE.links.github,
    label: "GitHub",
    Icon: SiGithub,
    className: "bg-foreground/15 text-foreground",
  },
  {
    href: SITE.links.fiverr,
    label: "Fiverr",
    Icon: SiFiverr,
    className: "bg-[#1dbf73]/15 text-[#1dbf73]",
  },
  {
    href: SITE.links.medium,
    label: "Medium",
    Icon: SiMedium,
    className: "bg-foreground/15 text-foreground",
  },
] as const;

const ProfileLinks = ({ className = "justify-center" }: { className?: string }) => {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {profiles.map(({ href, label, Icon, className }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold shadow-[inset_0_0_0_1px_currentColor] ${className}`}
        >
          <Icon className="h-5 w-5" />
          {label}
        </a>
      ))}
    </div>
  );
};

export default ProfileLinks;
