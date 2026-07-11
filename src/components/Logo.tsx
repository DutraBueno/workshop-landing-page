import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Visual Icon Symbol */}
      <div className="relative h-11 w-11 shrink-0">
        <svg
          className="h-full w-full text-foreground"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Focus corners [ ] */}
          <path
            d="M 6,14 V 6 H 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 34,6 H 42 V 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 6,34 V 42 H 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 34,42 H 42 V 34"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Overlapping V & A glyphs */}
          {/* V - Left Stem */}
          <path
            d="M 13,15 L 21.5,33.5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* V - Right / A - Left Shared Stem */}
          <path
            d="M 21.5,33.5 L 30,15"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* A - Right Stem */}
          <path
            d="M 30,15 L 35,33.5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* A - Horizontal crossbar */}
          <path
            d="M 23.5,27.5 H 31.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* A - Play Icon concept (inside the hollow triangle of A) */}
          <path
            d="M 25.5,19.5 L 25.5,23.5 L 28.5,21.5 Z"
            fill="currentColor"
          />

          {/* Top Right Recording Dot */}
          <circle cx="33" cy="15" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* Brand Text Labels */}
      {showText && (
        <div className="flex flex-col justify-center leading-none text-left">
          <span className="font-display text-sm font-black tracking-[0.1em] text-white">VIVENDO</span>
          <span className="font-display text-[9px] font-bold tracking-[0.15em] text-muted-foreground mt-0.5">
            DE AUDIOVISUAL
          </span>
          <span className="font-sans text-[6px] font-bold tracking-[0.2em] text-white/50 mt-0.5 uppercase">
            Workshop 100% Prático
          </span>
        </div>
      )}
    </div>
  );
}
