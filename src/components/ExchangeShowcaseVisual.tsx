import { BrandLogo } from './BrandLogo';

/**
 * Architectural currency exchange visual artwork built exclusively in
 * Centro Cambiario Arabeug's navy and champagne gold brand palette.
 * Integrates the authentic official CCA oval logo over precision meridian
 * globe geometry and subtle international banknote motifs.
 */
export function ExchangeShowcaseVisual() {
  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[400px] rounded-xl overflow-hidden border border-gold-500/30 bg-[#051B4B] flex flex-col justify-between p-6 sm:p-8">
      {/* Architectural meridian & banknote precision grid background */}
      <svg
        viewBox="0 0 640 480"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="showcaseGlow" cx="50%" cy="46%" r="62%">
            <stop offset="0%" stopColor="#14499E" stopOpacity="0.65" />
            <stop offset="60%" stopColor="#06225C" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#04153B" stopOpacity="0.95" />
          </radialGradient>
          <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EFE1B5" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.52" />
            <stop offset="100%" stopColor="#B59224" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="noteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B357A" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#04153B" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        <rect width="640" height="480" fill="url(#showcaseGlow)" />

        {/* Subtle longitude / latitude globe arcs echoing the CCA world emblem */}
        <g fill="none" stroke="url(#goldLine)" strokeWidth="1">
          <circle cx="320" cy="230" r="195" strokeOpacity="0.45" />
          <circle cx="320" cy="230" r="145" strokeDasharray="3 5" strokeOpacity="0.38" />
          <ellipse cx="320" cy="230" rx="195" ry="74" strokeOpacity="0.35" />
          <ellipse cx="320" cy="230" rx="92" ry="195" strokeOpacity="0.32" />
          <line x1="60" y1="230" x2="580" y2="230" strokeOpacity="0.25" />
          <line x1="320" y1="25" x2="320" y2="435" strokeOpacity="0.25" />
        </g>

        {/* Stylized layered architectural banknote cards in navy & gold */}
        <g transform="translate(52, 292) rotate(-8)">
          <rect
            x="0"
            y="0"
            width="156"
            height="86"
            rx="6"
            fill="url(#noteGrad)"
            stroke="#D4AF37"
            strokeOpacity="0.38"
            strokeWidth="1.2"
          />
          <rect
            x="8"
            y="8"
            width="140"
            height="70"
            rx="3"
            fill="none"
            stroke="#EFE1B5"
            strokeOpacity="0.2"
            strokeWidth="0.8"
          />
          <circle cx="78" cy="43" r="19" fill="none" stroke="#D4AF37" strokeOpacity="0.35" strokeWidth="1" />
          <text
            x="78"
            y="49"
            textAnchor="middle"
            fontFamily="Cinzel, Georgia, serif"
            fontSize="17"
            fontWeight="700"
            fill="#EFE1B5"
            fillOpacity="0.72"
          >
            $
          </text>
          <text
            x="18"
            y="24"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="10"
            fill="#E5C158"
            fillOpacity="0.65"
          >
            USD
          </text>
        </g>

        <g transform="translate(432, 286) rotate(8)">
          <rect
            x="0"
            y="0"
            width="156"
            height="86"
            rx="6"
            fill="url(#noteGrad)"
            stroke="#D4AF37"
            strokeOpacity="0.38"
            strokeWidth="1.2"
          />
          <rect
            x="8"
            y="8"
            width="140"
            height="70"
            rx="3"
            fill="none"
            stroke="#EFE1B5"
            strokeOpacity="0.2"
            strokeWidth="0.8"
          />
          <circle cx="78" cy="43" r="19" fill="none" stroke="#D4AF37" strokeOpacity="0.35" strokeWidth="1" />
          <text
            x="78"
            y="49"
            textAnchor="middle"
            fontFamily="Cinzel, Georgia, serif"
            fontSize="17"
            fontWeight="700"
            fill="#EFE1B5"
            fillOpacity="0.72"
          >
            €
          </text>
          <text
            x="118"
            y="24"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="10"
            fill="#E5C158"
            fillOpacity="0.65"
          >
            EUR
          </text>
        </g>

        {/* Subtle corner drafting registration marks */}
        <g stroke="#D4AF37" strokeOpacity="0.45" strokeWidth="1">
          <path d="M20 34 V20 H34" fill="none" />
          <path d="M606 20 H620 V34" fill="none" />
          <path d="M20 446 V460 H34" fill="none" />
          <path d="M606 460 H620 V446" fill="none" />
        </g>
      </svg>

      {/* Top metadata line (unboxed, clean typographic separators) */}
      <div className="relative z-10 flex items-center justify-between text-xs text-gold-100/80 font-mono tracking-wide">
        <span>AICM · Terminal 1</span>
        <span>Local E 13 PB · Puertas 2 y 3</span>
      </div>

      {/* Central Official Oval Emblem */}
      <div className="relative z-10 flex flex-col items-center justify-center my-6">
        <BrandLogo size="lg" />
      </div>

      {/* Bottom currency corridor bar */}
      <div className="relative z-10 pt-4 border-t border-gold-500/25 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-200/90">
        <span className="font-mono tracking-wider text-gold-300 tabular-nums">
          USD · EUR · CAD · GBP · CHF · JPY · CENT
        </span>
        <span className="text-slate-300">24 divisas y Centenario</span>
      </div>
    </div>
  );
}
