import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string };

const IconBase = ({ children, size = 24, ...props }: { children: ReactNode } & IconProps) => (
  <svg
    aria-hidden
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {children}
  </svg>
);

export const ArrowRight = (props: IconProps) => (
  <IconBase {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </IconBase>
);

export const Lock = (props: IconProps) => (
  <IconBase {...props}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M9 11V7a3 3 0 0 1 6 0v4" />
    <circle cx="12" cy="16" r="1" />
  </IconBase>
);

export const Users = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="9" cy="8" r="3" />
    <path d="M2 19a6 6 0 0 1 12 0" />
    <circle cx="17" cy="9" r="2" />
    <path d="M14.5 19a4.5 4.5 0 0 1 7.5 0" />
  </IconBase>
);

export const Share2 = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="M8.6 10.7 15.4 7.3" />
    <path d="M8.6 13.3 15.4 16.7" />
  </IconBase>
);

export const Code = (props: IconProps) => (
  <IconBase {...props}>
    <polyline points="8 7 3 12 8 17" />
    <polyline points="16 7 21 12 16 17" />
  </IconBase>
);

export const ShieldCheck = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M12 3 5 6v6c0 4 3.5 6.5 7 9 3.5-2.5 7-5 7-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </IconBase>
);

export const Globe = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15 15 0 0 0 0 20a15 15 0 0 0 0-20Z" />
  </IconBase>
);

export const MessageCircle = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M21 11.5a8.5 8.5 0 0 1-11.4 7.9L5 21l1.6-3.2A8.5 8.5 0 1 1 21 11.5Z" />
  </IconBase>
);

export const ExternalLink = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M15 3h6v6" />
    <path d="m10 14 11-11" />
    <path d="M21 10v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10" />
  </IconBase>
);

export const Cpu = (props: IconProps) => (
  <IconBase {...props}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
    <path d="M12 2v2m0 16v2m8-10h-2M6 12H4m12-8v2M8 4v2m8 12v2m-8-2v2m12-8h2m-2 4h2M2 8h2M2 16h2" />
  </IconBase>
);

export const Target = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1" />
  </IconBase>
);

export const Menu = (props: IconProps) => (
  <IconBase {...props}>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </IconBase>
);

export const CalendarRange = (props: IconProps) => (
  <IconBase {...props}>
    <rect x="4" y="5" width="16" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M4 11h16" />
    <path d="M8 15h2v2H8zM14 15h2v2h-2z" />
  </IconBase>
);

export const FolderGit2 = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M3 7h6l2 2h10v8a2 2 0 0 1-2 2H3z" />
    <circle cx="9" cy="13" r="1" />
    <circle cx="15" cy="17" r="1" />
    <path d="M9 14v3l6-1v-2" />
  </IconBase>
);

export const X = (props: IconProps) => (
  <IconBase {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </IconBase>
);

export default {
  ArrowRight,
  Lock,
  Users,
  Share2,
  Code,
  ShieldCheck,
  Globe,
  MessageCircle,
  ExternalLink,
  Cpu,
  Target,
  Menu,
  CalendarRange,
  FolderGit2,
  X
};
