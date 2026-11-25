import { BUSINESS_INFO } from '../data/businessData';

export type LegalTab = 'privacidad' | 'terminos' | 'corporativo';

interface LegalSectionProps {
  activeTab: LegalTab;
  onTabChange: (tab: LegalTab) => void;
}

export function LegalSection({ activeTab, onTabChange }: LegalSectionProps) {
  return (
    <section id="privacidad" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-gold-700 mb-2">
              Marco legal y protección de datos · LFPDPPP
            </p>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navy-950 tracking-tight">
              Aviso de Privacidad y Documentación Oficial
            </h2>
          </div>

          {/* Interactive Legal Document Selector */}
          <div
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200/80 self-start"
            role="tablist"
            aria-label="Documentos legales e institucionales"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'privacidad'}
              onClick={() => onTabChange('privacidad')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'privacidad'
                  ? 'bg-navy-900 text-white shadow-xs font-semibold'
                  : 'text-slate-700 hover:text-navy-950'
              }`}
            >
              Aviso de Privacidad
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'terminos'}
              onClick={() => onTabChange('terminos')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'terminos'
                  ? 'bg-navy-900 text-white shadow-xs font-semibold'
                  : 'text-slate-700 hover:text-navy-950'
              }`}
            >
              Términos y Condiciones
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'corporativo'}
              onClick={() => onTabChange('corporativo')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'corporativo'
                  ? 'bg-navy-900 text-white shadow-xs font-semibold'
                  : 'text-slate-700 hover:text-navy-950'
              }`}
            >
              Datos Corporativos
            </button>
          </div>
        </div>

        {/* Document Container */}
        <div className="bg-slate-50/70 rounded-xl border border-slate-200 p-6 sm:p-10">
          {/* Tab 1: Aviso de Privacidad Integral (Default visible in DOM for Meta & search crawlers) */}
          <div
            role="tabpanel"
            hidden={activeTab !== 'privacidad'}
            className="max-w-4xl space-y-5 text-sm sm:text-[15px] text-slate-700 leading-relaxed"
          >
            <div className="pb-5 border-b border-slate-200 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif font-bold text-xl text-navy-950">
                Aviso de Privacidad Integral
              </h3>
              <span className="text-xs text-slate-500 font-mono">
                LFPDPPP · Vigente 2026
              </span>
            </div>

            <p>
              <strong className="text-navy-950">{BUSINESS_INFO.legalName}</strong>, con domicilio legal
              en <strong className="text-navy-950">{BUSINESS_INFO.address.fullInline}</strong>, es responsable del
              tratamiento, uso y protección de sus datos personales de conformidad con lo establecido en la Ley
              Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y demás
              disposiciones aplicables en los Estados Unidos Mexicanos.
            </p>

            <div>
              <h4 className="font-semibold text-navy-950 text-base mb-2">
                1. Finalidades del Tratamiento de Datos
              </h4>
              <p className="mb-2.5">
                Los datos personales que recabamos de forma directa en ventanilla o a través de nuestros medios
                oficiales de contacto serán utilizados exclusivamente para las siguientes finalidades primarias y
                necesarias para el servicio solicitado:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                <li>
                  Identificación y verificación de identidad de usuarios y clientes en operaciones presenciales de
                  compra y venta de divisas en efectivo.
                </li>
                <li>
                  Cumplimiento estricto de las disposiciones legales aplicables en materia de prevención de
                  operaciones con recursos de procedencia ilícita (PLD/FT) y regulación cambiaria vigente en México.
                </li>
                <li>
                  Emisión de comprobantes de operación, atención de consultas, cotizaciones y seguimiento mediante
                  teléfono o correo electrónico oficial.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-navy-950 text-base mb-2">
                2. Datos Personales Recabados
              </h4>
              <p>
                Para cumplir con las finalidades descritas, podremos solicitar datos de identificación oficial vigente
                (como credencial para votar INE o pasaporte), datos de contacto (nombre completo, teléfono, correo
                electrónico y domicilio) y la documentación comprobatoria exigida por la normatividad cambiaria
                aplicable según el monto y naturaleza de la operación.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-navy-950 text-base mb-2">
                3. Derechos ARCO y Medios de Contacto
              </h4>
              <p>
                Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las
                condiciones del uso que les damos (Acceso), solicitar la corrección de su información personal en
                caso de que esté desactualizada, sea inexacta o incompleta (Rectificación), solicitar su eliminación
                de nuestros registros cuando considere que no está siendo utilizada adecuadamente (Cancelación), así
                como oponerse al uso de sus datos personales para fines específicos (Oposición). Para ejercer
                cualquiera de los derechos ARCO, puede enviar su solicitud directamente a los correos electrónicos{' '}
                <a
                  href={`mailto:${BUSINESS_INFO.emails[0].address}`}
                  className="text-navy-900 font-semibold underline hover:text-gold-700"
                >
                  {BUSINESS_INFO.emails[0].address}
                </a>{' '}
                o{' '}
                <a
                  href={`mailto:${BUSINESS_INFO.emails[1].address}`}
                  className="text-navy-900 font-semibold underline hover:text-gold-700"
                >
                  {BUSINESS_INFO.emails[1].address}
                </a>
                , o comunicarse al teléfono{' '}
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="text-navy-900 font-mono font-semibold underline hover:text-gold-700 tabular-nums"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
                .
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-navy-950 text-base mb-2">
                4. Cambios al Aviso de Privacidad
              </h4>
              <p>
                El presente Aviso de Privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de
                nuevos requerimientos legales o de nuestras propias necesidades operativas, las cuales estarán
                disponibles en todo momento en este sitio web oficial y en nuestra sucursal ubicada en el Aeropuerto
                Internacional de la Ciudad de México.
              </p>
            </div>
          </div>

          {/* Tab 2: Términos y Condiciones */}
          <div
            id="terminos"
            role="tabpanel"
            hidden={activeTab !== 'terminos'}
            className="max-w-4xl space-y-5 text-sm sm:text-[15px] text-slate-700 leading-relaxed"
          >
            <div className="pb-5 border-b border-slate-200 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif font-bold text-xl text-navy-950">
                Términos y Condiciones de Servicio
              </h3>
              <span className="text-xs text-slate-500 font-mono">
                Operación presencial en sucursal
              </span>
            </div>

            <p>
              El presente sitio web tiene carácter informativo e institucional para los clientes y usuarios de{' '}
              <strong className="text-navy-950">{BUSINESS_INFO.legalName}</strong>. El acceso y uso de este portal
              implica la aceptación de las siguientes condiciones generales:
            </p>

            <div>
              <h4 className="font-semibold text-navy-950 text-base mb-2">
                1. Naturaleza Presencial de las Operaciones
              </h4>
              <p>
                Todas las operaciones de compra y venta de divisas en efectivo se celebran y liquidan exclusivamente de
                manera presencial en ventanilla en nuestra sucursal ubicada en{' '}
                <strong className="text-navy-950">{BUSINESS_INFO.address.street}</strong>, dentro del Aeropuerto
                Internacional de la Ciudad de México (AICM). Este sitio web no procesa pagos en línea, transferencias
                electrónicas ni reservas vinculantes de efectivo.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-navy-950 text-base mb-2">
                2. Tipos de Cambio y Disponibilidad
              </h4>
              <p>
                El tipo de cambio aplicable y la disponibilidad de billetes en cada divisa están sujetos a las
                condiciones vigentes del mercado cambiario y se confirman únicamente al momento de realizar la
                operación en ventanilla o mediante consulta telefónica al{' '}
                <span className="font-mono tabular-nums font-semibold text-navy-950">
                  {BUSINESS_INFO.phoneDisplay}
                </span>
                . En operaciones con Centenario, la compra y venta se realiza por pieza sujeta a revisión física
                (sin manchas ni rayones).
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-navy-950 text-base mb-2">
                3. Identificación y Cumplimiento Normativo
              </h4>
              <p>
                En cumplimiento de la normatividad aplicable a los Centros Cambiarios en México,{' '}
                {BUSINESS_INFO.legalName} podrá solicitar identificación oficial vigente con fotografía y datos
                adicionales de identificación de acuerdo con los umbrales establecidos por la autoridad financiera,
                entregando siempre el comprobante correspondiente de la operación realizada.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-navy-950 text-base mb-2">
                4. Atención a Clientes y Aclaraciones
              </h4>
              <p>
                Cualquier duda, solicitud de información o aclaración relacionada con nuestros servicios será atendida
                directamente en el teléfono{' '}
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="text-navy-900 font-mono font-semibold underline hover:text-gold-700"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>{' '}
                o en los correos electrónicos oficiales{' '}
                <a
                  href={`mailto:${BUSINESS_INFO.emails[0].address}`}
                  className="text-navy-900 font-semibold underline hover:text-gold-700"
                >
                  {BUSINESS_INFO.emails[0].address}
                </a>{' '}
                y{' '}
                <a
                  href={`mailto:${BUSINESS_INFO.emails[1].address}`}
                  className="text-navy-900 font-semibold underline hover:text-gold-700"
                >
                  {BUSINESS_INFO.emails[1].address}
                </a>
                .
              </p>
            </div>
          </div>

          {/* Tab 3: Ficha Corporativa para Verificación */}
          <div
            role="tabpanel"
            hidden={activeTab !== 'corporativo'}
            className="max-w-4xl"
          >
            <div className="pb-5 border-b border-slate-200 flex flex-wrap items-baseline justify-between gap-2 mb-6">
              <h3 className="font-serif font-bold text-xl text-navy-950">
                Ficha de Identidad Corporativa
              </h3>
              <span className="text-xs text-slate-500 font-mono">
                Información pública oficial
              </span>
            </div>

            <dl className="divide-y divide-slate-200 text-sm">
              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-semibold text-slate-600">Razón social</dt>
                <dd className="sm:col-span-2 font-semibold text-navy-950">{BUSINESS_INFO.legalName}</dd>
              </div>
              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-semibold text-slate-600">Nombre comercial</dt>
                <dd className="sm:col-span-2 text-slate-900">{BUSINESS_INFO.commercialName} ({BUSINESS_INFO.shortName})</dd>
              </div>
              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-semibold text-slate-600">Actividad económica</dt>
                <dd className="sm:col-span-2 text-slate-900">
                  Centro Cambiario · Compra y venta de divisas en efectivo al menudeo
                </dd>
              </div>
              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-semibold text-slate-600">Domicilio legal</dt>
                <dd className="sm:col-span-2 text-slate-900 leading-relaxed">
                  {BUSINESS_INFO.address.fullInline} ({BUSINESS_INFO.address.crossStreets})
                </dd>
              </div>
              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-semibold text-slate-600">Teléfono verificado</dt>
                <dd className="sm:col-span-2 font-mono tabular-nums text-navy-950 font-semibold">
                  +52 {BUSINESS_INFO.phoneDisplay} ({BUSINESS_INFO.phoneRaw})
                </dd>
              </div>
              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-semibold text-slate-600">Correos electrónicos</dt>
                <dd className="sm:col-span-2 text-slate-900 space-y-1">
                  <div>{BUSINESS_INFO.emails[0].address}</div>
                  <div>{BUSINESS_INFO.emails[1].address}</div>
                </dd>
              </div>
              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-semibold text-slate-600">Ubicación operativa</dt>
                <dd className="sm:col-span-2 text-slate-900">{BUSINESS_INFO.airportContext}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
