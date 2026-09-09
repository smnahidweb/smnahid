import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function ReactIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className} {...props}>
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextjsIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" fill="none" className={className} {...props}>
      <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
        <circle cx="90" cy="90" fill="black" r="90" />
      </mask>
      <g mask="url(#mask0)">
        <circle cx="90" cy="90" data-circle="true" fill="currentColor" r="90" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="var(--background)" />
        <rect fill="var(--background)" height="72" width="12" x="115" y="54" />
      </g>
    </svg>
  );
}

export function TypescriptIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 8h6m-3 0v8" />
      <path d="M14 15.5c.5.5 1.5.8 2.2.4.6-.4.8-1.2.3-1.8-.4-.4-1.2-.7-1.8-1-.6-.3-.9-.9-.7-1.6.2-.7 1-1.1 1.8-.9.7.2 1.2.6 1.4 1.1" />
    </svg>
  );
}

export function JavascriptIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 12v3.5a1.5 1.5 0 0 1-3 0" />
      <path d="M14 15.5c.5.5 1.5.8 2.2.4.6-.4.8-1.2.3-1.8-.4-.4-1.2-.7-1.8-1-.6-.3-.9-.9-.7-1.6.2-.7 1-1.1 1.8-.9.7.2 1.2.6 1.4 1.1" />
    </svg>
  );
}

export function NodejsIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" />
      <path d="M12 6.5l5 3v5l-5 3-5-3v-5l5-3z" />
    </svg>
  );
}

export function ExpressIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M4 6h16M4 12h10M4 18h14" />
    </svg>
  );
}

export function PostgresIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function PrismaIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M4 20l7.5-17 8.5 13-9.5 4-6.5 0z" />
      <path d="M11.5 3l4.5 14-9.5-3" />
    </svg>
  );
}

export function MongoIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M12 2C12 2 7 8 7 13.5C7 17.5 9.5 20.5 12 22C14.5 20.5 17 17.5 17 13.5C17 8 12 2 12 2Z" />
      <path d="M12 2v20" />
    </svg>
  );
}

export function TailwindIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M6 12c.5-2 2-3 4-3 3 0 3 3 5 3 2 0 3-1 3.5-2.5-.5 2-2 3-4 3-3 0-3-3-5-3-2 0-3 1-3.5 2.5z" />
      <path d="M2 17c.5-2 2-3 4-3 3 0 3 3 5 3 2 0 3-1 3.5-2.5-.5 2-2 3-4 3-3 0-3-3-5-3-2 0-3 1-3.5 2.5z" />
    </svg>
  );
}

export function ShadcnIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" className={className} {...props}>
      <line x1="208" y1="128" x2="128" y2="208" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="192" y1="40" x2="40" y2="192" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RadixIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="7" cy="7" r="3" />
      <rect width="6" height="6" x="14" y="4" rx="1" />
      <path d="M4 14h6a3 3 0 0 1 3 3v3H4v-6z" />
    </svg>
  );
}

export function GitIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
      <path d="M6 9v6" />
    </svg>
  );
}
