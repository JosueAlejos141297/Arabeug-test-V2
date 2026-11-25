import { BUSINESS_INFO } from '../data/businessData';
import { BrandLogo } from './BrandLogo';
import type { LegalTab } from './LegalSection';

interface FooterProps {
  onSelectLegalTab: (tab: LegalTab) => void;
}

export function Footer({ onSelectLegalTab }: FooterProps) {
  const handleLegalJump = (tab: LegalTab) => {
    onSelectLegalTab(tab);
    const section = document.getElementById('privacidad');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-gold-500/40 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-gold-500/20">
          {/* Column 1: Brand & Exact Legal Address */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <BrandLogo size="sm" />
              <p className="font-serif font-bold text-gold-100 text-base tracking-wide">
                {BUSINESS_INFO.legalName}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed max-w-md">
              {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.neighborhood},{' '}
              <span className="font-mono tabular-nums">{BUSINESS_INFO.address.postalCode}</span>,{' '}
              {BUSINESS_INFO.address.municipality}, {BUSINESS_INFO.address.cityStateCountry}.
            </p>
            <p className="text-xs text-slate-400">
              {BUSINESS_INFO.address.crossStreets} · {BUSINESS_INFO.airportContext}
            </p>
          </div>

          {/* Column 2: Navigation & Legal Documents */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-wider text-gold-300">
              Navegación y legal
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-slate-300 hover:text-gold-300 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-300 hover:text-gold-300 transition-colors">
                  Servicios y divisas
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="text-slate-300 hover:text-gold-300 transition-colors">
                  Ubicación y contacto
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLegalJump('privacidad')}
                  className="text-slate-300 hover:text-gold-300 transition-colors cursor-pointer text-left"
                >
                  Aviso de Privacidad Integral
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLegalJump('terminos')}
                  className="text-slate-300 hover:text-gold-300 transition-colors cursor-pointer text-left"
                >
                  Términos y Condiciones
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLegalJump('corporativo')}
                  className="text-slate-300 hover:text-gold-300 transition-colors cursor-pointer text-left"
                >
                  Ficha Corporativa
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold tracking-wider text-gold-300">
              Canales oficiales de contacto
            </p>
            <div className="space-y-2 text-sm">
              <p>
                Teléfono:{' '}
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="font-mono font-semibold text-gold-100 hover:text-gold-300 transition-colors tabular-nums"
                >
                  +52 {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>
              {BUSINESS_INFO.emails.map((item) => (
                <p key={item.address}>
                  <a
                    href={`mailto:${item.address}`}
                    className="text-slate-200 hover:text-gold-300 transition-colors break-all"
                  >
                    {item.address}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Quiet Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.legalName}. Todos los derechos reservados.
          </p>
          <p>
            {BUSINESS_INFO.activity} · Ciudad de México, México
          </p>
        </div>
      </div>
    </footer>
  );
}
