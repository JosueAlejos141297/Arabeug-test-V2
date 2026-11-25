import { useState } from 'react';
import { BUSINESS_INFO } from '../data/businessData';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function BrandLogo({ size = 'md', className = '' }: BrandLogoProps) {
  const [imgError, setImgError] = useState(false);

  const dimensions = {
    sm: 'w-14 h-9',
    md: 'w-44 h-26',
    lg: 'w-64 sm:w-80 aspect-[16/9.6]',
  }[size];

  const ringClass = {
    sm: 'border border-gold-500/80',
    md: 'border-2 border-gold-500/85 shadow-lg',
    lg: 'border-[3px] border-gold-500/90 shadow-2xl',
  }[size];

  if (imgError) {
    return (
      <div
        className={`relative rounded-[50%] overflow-hidden bg-navy-900 flex items-center justify-center ${dimensions} ${ringClass} ${className}`}
        role="img"
        aria-label={`Logotipo oficial ${BUSINESS_INFO.legalName}`}
      >
        <svg viewBox="0 0 400 230" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="ccaFallbackBg" cx="50%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#1A56A8" />
              <stop offset="55%" stopColor="#06225C" />
              <stop offset="100%" stopColor="#031338" />
            </radialGradient>
          </defs>
          <rect width="400" height="230" fill="url(#ccaFallbackBg)" />
          <text
            x="200"
            y="134"
            textAnchor="middle"
            fontFamily="Cinzel, Georgia, serif"
            fontWeight="800"
            fontSize="94"
            fill="#EFE1B5"
            letterSpacing="4"
          >
            CCA
          </text>
          <text
            x="200"
            y="176"
            textAnchor="middle"
            fontFamily="Cinzel, Georgia, serif"
            fontWeight="700"
            fontSize="15.5"
            fill="#E5C158"
            letterSpacing="0.5"
          >
            CENTRO CAMBIARIO ARABEUG
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-[50%] overflow-hidden bg-navy-900 select-none ${dimensions} ${ringClass} ${className}`}
    >
      <img
        src={BUSINESS_INFO.logoPath}
        alt={`Logotipo oficial de ${BUSINESS_INFO.legalName}`}
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
        className="w-full h-full object-cover scale-[1.095]"
      />
    </div>
  );
}
