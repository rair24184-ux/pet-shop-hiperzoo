import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...p,
});

export const WhatsAppIcon = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.5 4c1.7.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3Z" />
  </svg>
);

export const InstagramIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const PinIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s-7-6.3-7-11.5a7 7 0 0 1 14 0C19 14.7 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.6" />
  </svg>
);

export const ClockIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const StarIcon = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9Z" />
  </svg>
);

export const BathIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z" />
    <path d="M6 12V6.5A2.5 2.5 0 0 1 8.5 4H9a2 2 0 0 1 2 2" />
    <path d="M7 19l-1 2M17 19l1 2" />
  </svg>
);

export const ScissorsIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="6" cy="18" r="2.5" />
    <path d="M8.2 7.5 20 18M8.2 16.5 20 6" />
  </svg>
);

export const SparklesIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 7c.6 2.6 2.4 4.4 5 5-2.6.6-4.4 2.4-5 5-.6-2.6-2.4-4.4-5-5 2.6-.6 4.4-2.4 5-5Z" />
  </svg>
);

export const ToothIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M7.5 3C5 3 4 5 4 7.5c0 2 1 3.5 1.5 5.5.6 2.6.8 8 2.5 8s1.8-5 4-5 2.3 5 4 5 1.9-5.4 2.5-8c.5-2 1.5-3.5 1.5-5.5C20 5 19 3 16.5 3 14.5 3 13.5 4 12 4s-2.5-1-4.5-1Z" />
  </svg>
);

export const PawIcon = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <ellipse cx="6.5" cy="9.5" rx="1.9" ry="2.5" />
    <ellipse cx="17.5" cy="9.5" rx="1.9" ry="2.5" />
    <ellipse cx="9.8" cy="6" rx="1.9" ry="2.5" />
    <ellipse cx="14.2" cy="6" rx="1.9" ry="2.5" />
    <path d="M12 11c-3 0-5.5 2.6-5.5 5.2 0 1.6 1.1 2.8 2.6 2.8 1.1 0 1.8-.6 2.9-.6s1.8.6 2.9.6c1.5 0 2.6-1.2 2.6-2.8C17.5 13.6 15 11 12 11Z" />
  </svg>
);

export const ArrowIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </svg>
);

export const serviceIcons = {
  bath: BathIcon,
  scissors: ScissorsIcon,
  star: StarIcon,
  sparkles: SparklesIcon,
  tooth: ToothIcon,
  paw: PawIcon,
} as const;
