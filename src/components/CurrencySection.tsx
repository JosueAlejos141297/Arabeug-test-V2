import { useMemo, useState } from 'react';
import { Phone, Search } from 'lucide-react';
import {
  BUSINESS_INFO,
  CURRENCIES,
  WHY_CHOOSE_ARABEUG,
  type CurrencyRegion,
} from '../data/businessData';

type RegionFilter = 'Todas' | CurrencyRegion;

const REGION_FILTERS: RegionFilter[] = [
  'Todas',
  'América',
  'Europa',
  'Asia y Oceanía',
  'Metales',
];

export function CurrencySection() {
  const [regionFilter, setRegionFilter] = useState<RegionFilter>('Todas');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCurrencies = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    return CURRENCIES.filter((item) => {
      const matchesRegion = regionFilter === 'Todas' || item.region === regionFilter;
      if (!matchesRegion) return false;
      if (!normalizedQuery) return true;
      return (
        item.code.toLowerCase().includes(normalizedQuery) ||
        item.name.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [regionFilter, searchQuery]);

  const centenario = CURRENCIES.find((c) => c.code === 'CENT');

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-wider text-gold-700 mb-2">
            Más de 10 años de experiencia · AICM Terminal 1
          </p>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-navy-950 tracking-tight">
            ¿Por qué elegir a Centro Cambiario Arabeug?
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            La confianza de nuestros clientes durante más de una década respalda cada operación. Ofrecemos servicio
            cambiario seguro, transparente y ágil entre las puertas 2 y 3 del Aeropuerto Internacional de la Ciudad
            de México.
          </p>
        </div>

        {/* Asymmetric 12-column grid: Why Choose Arabeug + Full Operated Currencies Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Why Choose Arabeug */}
          <div className="lg:col-span-5 space-y-7">
            {WHY_CHOOSE_ARABEUG.map((pillar, index) => (
              <div
                key={pillar.number}
                className={index > 0 ? 'pt-7 border-t border-slate-200' : ''}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold text-gold-700 tabular-nums shrink-0">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-950 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Regulatory requirement note separated by hairline divider */}
            <div className="pt-7 border-t border-slate-200">
              <p className="text-xs font-semibold text-navy-900 mb-1.5">
                Requisitos para operar en ventanilla
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Para cumplir con las disposiciones mexicanas vigentes en prevención de operaciones con recursos de
                procedencia ilícita, se solicita identificación oficial vigente (INE o Pasaporte) conforme al monto
                de su operación.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Directory of Operated Currencies (No buy/sell reference prices) */}
          <div
            id="divisas"
            className="lg:col-span-7 bg-slate-50 rounded-xl border border-slate-200/90 p-6 sm:p-8 scroll-mt-24"
          >
            <div className="pb-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h3 className="font-serif font-bold text-xl text-navy-950">
                  Divisas operadas en ventanilla
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Consulte el listado completo de monedas internacionales y Centenario disponibles para compra y
                  venta presencial.
                </p>
              </div>
              <p className="font-mono text-xs font-semibold text-navy-900 tabular-nums whitespace-nowrap shrink-0">
                {filteredCurrencies.length} de {CURRENCIES.length} activas
              </p>
            </div>

            {/* Filter & Search Bar */}
            <div className="py-5 border-b border-slate-200 flex flex-col gap-4">
              <div className="relative">
                <Search
                  className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar por código o nombre (ej. USD, Euro, Yen, Centenario)..."
                  aria-label="Buscar divisa operada"
                  className="w-full h-11 pl-10 pr-4 bg-white border border-slate-300 rounded-lg text-sm text-navy-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-800/25 focus:border-navy-800"
                />
              </div>

              <div
                className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-lg self-start"
                role="group"
                aria-label="Filtrar divisas por región"
              >
                {REGION_FILTERS.map((region) => (
                  <button
                    key={region}
                    type="button"
                    onClick={() => setRegionFilter(region)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      regionFilter === region
                        ? 'bg-navy-900 text-white shadow-xs font-semibold'
                        : 'text-slate-700 hover:text-navy-950'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            {/* Clean 2-Column Currency List without buy/sell rates */}
            {filteredCurrencies.length === 0 ? (
              <div className="py-10 text-center">
                <p className="text-sm font-medium text-navy-950">
                  No se encontraron divisas que coincidan con «{searchQuery}».
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setRegionFilter('Todas');
                  }}
                  className="mt-3 text-xs font-semibold text-navy-900 underline hover:text-gold-700 cursor-pointer"
                >
                  Mostrar todas las divisas
                </button>
              </div>
            ) : (
              <ul className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 divide-y sm:divide-y-0">
                {filteredCurrencies.map((currency) => (
                  <li
                    key={currency.code}
                    className="py-3 border-b border-slate-200/80 flex items-baseline justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2.5">
                        <span className="font-mono text-sm font-semibold text-navy-900 tabular-nums shrink-0 w-11">
                          {currency.code}
                        </span>
                        <span className="text-sm font-medium text-slate-800 truncate">
                          {currency.name}
                        </span>
                      </div>
                      {currency.note && (
                        <p className="mt-1 pl-[3.375rem] text-xs text-slate-500 leading-snug">
                          {currency.note}
                        </p>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-500 whitespace-nowrap shrink-0">
                      {currency.region}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Specific Centenario observation & Counter quote CTA */}
            <div className="mt-4 pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-600 leading-relaxed max-w-md space-y-1">
                <p>
                  Cotización y disponibilidad sujetas al momento de la operación directamente en ventanilla.
                </p>
                {centenario?.note && (
                  <p className="text-slate-500">
                    Centenario ({centenario.code}): {centenario.note}
                  </p>
                )}
              </div>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-navy-900 hover:bg-navy-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                Cotizar al {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
