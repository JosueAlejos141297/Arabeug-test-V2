import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onNavigateLegal?: (tab: 'privacidad' | 'terminos' | 'corporativo') => void;
}

export function Header({ onNavigateLegal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePrivacyClick = () => {
    setMobileMenuOpen(false);
    onNavigateLegal?.('privacidad');
  };

  return (
    <header className="sticky top-0 z-50 bg-navy-950/95 backdrop-blur-md border-b border-gold-500/25">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single clean brand wordmark */}
        <a
          href="#inicio"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-md"
          aria-label={BUSINESS_INFO.legalName}
        >
          <BrandLogo size="sm" />
          <span className="font-serif font-bold text-gold-100 text-sm sm:text-base tracking-wide whitespace-nowrap shrink-0">
            Centro Cambiario Arabeug
          </span>
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-200"
        >
          <a
            href="#servicios"
            className="hover:text-gold-300 transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-gold-400/70"
          >
            Servicios
          </a>
          <a
            href="#divisas"
            className="hover:text-gold-300 transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-gold-400/70"
          >
            Divisas
          </a>
          <a
            href="#ubicacion"
            className="hover:text-gold-300 transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-gold-400/70"
          >
            Ubicación
          </a>
          <a
            href="#privacidad"
            onClick={handlePrivacyClick}
            className="hover:text-gold-300 transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-gold-400/70"
          >
            Privacidad
          </a>
        </nav>

        {/* Zone 3: Single primary action (desktop) or mobile menu toggle */}
        <div className="flex items-center shrink-0">
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-navy-950 bg-gold-400 hover:bg-gold-300 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
          >
            Contacto
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-gold-100 hover:bg-navy-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950 border-t border-gold-500/20 px-4 py-4">
          <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 text-sm font-medium text-slate-100 hover:text-gold-300 hover:bg-navy-900/70 rounded-lg transition-colors"
            >
              Servicios
            </a>
            <a
              href="#divisas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 text-sm font-medium text-slate-100 hover:text-gold-300 hover:bg-navy-900/70 rounded-lg transition-colors"
            >
              Divisas
            </a>
            <a
              href="#ubicacion"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 text-sm font-medium text-slate-100 hover:text-gold-300 hover:bg-navy-900/70 rounded-lg transition-colors"
            >
              Ubicación
            </a>
            <a
              href="#privacidad"
              onClick={handlePrivacyClick}
              className="px-3 py-3 text-sm font-medium text-slate-100 hover:text-gold-300 hover:bg-navy-900/70 rounded-lg transition-colors"
            >
              Aviso de Privacidad
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-navy-950 bg-gold-400 hover:bg-gold-300 rounded-lg transition-colors"
            >
              Contacto directo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
