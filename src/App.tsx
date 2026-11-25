import { useState } from 'react';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { MotionConfig, motion } from 'motion/react';
import { BUSINESS_INFO } from './data/businessData';
import { Header } from './components/Header';
import { ExchangeShowcaseVisual } from './components/ExchangeShowcaseVisual';
import { CurrencySection } from './components/CurrencySection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { LegalSection, type LegalTab } from './components/LegalSection';
import { Footer } from './components/Footer';

export default function App() {
  const [legalTab, setLegalTab] = useState<LegalTab>('privacidad');

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Header onNavigateLegal={setLegalTab} />

        {/* Hero Section */}
        <section
          id="inicio"
          className="hero-navy-surface text-white border-b border-gold-500/40"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16">
            {/* Balanced 2-Column Hero Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              {/* Left Column: Brand Statement & Primary CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 flex flex-col justify-center"
              >
                <p className="text-xs sm:text-sm font-medium text-gold-300 tracking-wide">
                  {BUSINESS_INFO.airportContext} · Local E 13 PB · Entre puertas 2 y 3
                </p>

                <h1 className="mt-4 font-serif font-bold text-[clamp(2.15rem,4vw,3.5rem)] leading-[1.12] tracking-wide text-white max-w-2xl">
                  CENTRO CAMBIARIO{' '}
                  <span className="text-gold-300">ARABEUG</span>
                </h1>

                <div className="w-28 gold-hairline my-6" aria-hidden="true" />

                <p className="text-base sm:text-lg text-slate-200/95 leading-relaxed max-w-xl">
                  Más de 10 años de experiencia y confianza en la compra y venta de divisas en efectivo dentro del
                  Ambulatorio Nacional del Aeropuerto Internacional de la Ciudad de México. Atención presencial
                  directa, comprobante en cada operación y respaldo normativo.
                </p>

                {/* Primary CTA + Secondary Text Link */}
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm sm:text-base font-semibold text-navy-950 bg-gold-400 hover:bg-gold-300 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                  >
                    <span>Consultar ubicación y contacto</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>

                  <a
                    href="#divisas"
                    className="inline-flex items-center gap-2 py-2 text-sm sm:text-base font-medium text-gold-100 hover:text-gold-300 transition-colors duration-150 border-b border-gold-400/50 hover:border-gold-300 whitespace-nowrap shrink-0"
                  >
                    Ver divisas operadas
                  </a>
                </div>

                {/* Unboxed direct contact metadata line */}
                <div className="mt-8 pt-6 border-t border-gold-500/20 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="inline-flex items-center gap-2 hover:text-gold-300 transition-colors font-mono tabular-nums"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" aria-hidden="true" />
                    <span>+52 {BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                  <span className="text-gold-500/50 hidden sm:inline" aria-hidden="true">
                    ·
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" aria-hidden="true" />
                    <span>Col. Peñón de los Baños, C.P. 15520, CDMX</span>
                  </span>
                </div>
              </motion.div>

              {/* Right Column: Official Emblem & Currency Exchange Visual */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 flex"
              >
                <ExchangeShowcaseVisual />
              </motion.div>
            </div>

            {/* Full-Width 4-Column Institutional Key Fact Strip below the hero split */}
            <div className="mt-12 pt-8 border-t border-gold-500/25 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div>
                <p className="text-xs text-gold-300/90 font-medium">Razón social oficial</p>
                <p className="mt-1 text-sm sm:text-base font-semibold text-white">
                  {BUSINESS_INFO.legalName}
                </p>
              </div>
              <div>
                <p className="text-xs text-gold-300/90 font-medium">Trayectoria comprobada</p>
                <p className="mt-1 text-sm sm:text-base font-semibold text-white">
                  Más de 10 años de experiencia
                </p>
              </div>
              <div>
                <p className="text-xs text-gold-300/90 font-medium">Sucursal verificada</p>
                <p className="mt-1 text-sm sm:text-base font-semibold text-white">
                  Local E 13 PB · Entre puertas 2 y 3
                </p>
              </div>
              <div>
                <p className="text-xs text-gold-300/90 font-medium">Teléfono de atención</p>
                <p className="mt-1 font-mono text-sm sm:text-base font-semibold text-white tabular-nums">
                  +52 {BUSINESS_INFO.phoneDisplay}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Flow */}
        <main className="flex-grow">
          <CurrencySection />
          <ContactLocationSection />
          <LegalSection activeTab={legalTab} onTabChange={setLegalTab} />
        </main>

        <Footer onSelectLegalTab={setLegalTab} />
      </div>
    </MotionConfig>
  );
}
