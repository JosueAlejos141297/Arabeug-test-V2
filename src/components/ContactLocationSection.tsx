import { useState, type FormEvent } from 'react';
import { Check, Copy, ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react';
import { BUSINESS_INFO, CURRENCIES } from '../data/businessData';

interface FormState {
  name: string;
  email: string;
  phone: string;
  currency: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactLocationSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    currency: 'USD',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = async (text: string, fieldKey: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldKey);
      window.setTimeout(() => {
        setCopiedField((current) => (current === fieldKey ? null : current));
      }, 2200);
    } catch {
      // Clipboard API unavailable in restricted iframe; fail gracefully without crashing
    }
  };

  const validate = (values: FormState): FormErrors => {
    const nextErrors: FormErrors = {};
    if (values.name.trim().length < 3) {
      nextErrors.name = 'Ingrese su nombre completo (mínimo 3 caracteres).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = 'Ingrese un correo electrónico válido.';
    }
    const digits = values.phone.replace(/\D/g, '');
    if (digits.length < 10) {
      nextErrors.phone = 'Ingrese un número telefónico de al menos 10 dígitos.';
    }
    if (values.message.trim().length < 8) {
      nextErrors.message = 'Describa brevemente su consulta o divisa de interés.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(formState);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      `Consulta de divisas (${formState.currency}) — ${formState.name.trim()}`
    );
    const body = encodeURIComponent(
      `Nombre: ${formState.name.trim()}\nCorreo: ${formState.email.trim()}\nTeléfono: ${formState.phone.trim()}\nDivisa de interés: ${formState.currency}\n\nConsulta:\n${formState.message.trim()}`
    );
    return `mailto:${BUSINESS_INFO.emails[0].address}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="ubicacion"
      className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <p className="text-xs font-semibold tracking-wider text-gold-700 mb-2">
            Información oficial y contacto directo
          </p>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-navy-950 tracking-tight">
            Ubicación legal en el AICM y canales de atención
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Verifique nuestros datos oficiales de domicilio, teléfono y correos electrónicos institucionales de{' '}
            <strong className="font-semibold text-navy-950">{BUSINESS_INFO.legalName}</strong>.
          </p>
        </div>

        {/* 2-Column Equal-Height Grid */}
        <div
          id="contacto"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch scroll-mt-24"
        >
          {/* Left Column: Official Verifiable Business Details */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-7">
              {/* Entity Legal Name */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">
                  Denominación / Razón Social
                </p>
                <p className="font-serif font-bold text-xl text-navy-950">
                  {BUSINESS_INFO.legalName}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Servicios de {BUSINESS_INFO.activity} · {BUSINESS_INFO.airportContext}
                </p>
              </div>

              {/* Legal Address */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-navy-900 mb-2">
                    <MapPin className="w-4 h-4 text-gold-700 shrink-0" aria-hidden="true" />
                    <span>Domicilio legal y sucursal</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(BUSINESS_INFO.address.fullInline, 'address')}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-navy-950 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    aria-label="Copiar domicilio legal"
                  >
                    {copiedField === 'address' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                        <span className="text-emerald-700">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>

                <address className="not-italic text-sm sm:text-[15px] text-slate-800 leading-relaxed space-y-1">
                  <p className="font-semibold text-navy-950">{BUSINESS_INFO.address.street}</p>
                  <p>
                    {BUSINESS_INFO.address.neighborhood},{' '}
                    <span className="font-mono tabular-nums">{BUSINESS_INFO.address.postalCode}</span>
                  </p>
                  <p>
                    {BUSINESS_INFO.address.municipality}, {BUSINESS_INFO.address.cityStateCountry}
                  </p>
                  <p className="text-xs text-slate-500 pt-1.5">
                    Referencia: {BUSINESS_INFO.address.crossStreets} ({BUSINESS_INFO.airportContext})
                  </p>
                </address>

                <div className="mt-4">
                  <a
                    href={BUSINESS_INFO.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-700 transition-colors"
                  >
                    <span>Abrir ubicación en Google Maps</span>
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Official Telephone */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-navy-900 mb-2">
                  <Phone className="w-4 h-4 text-gold-700 shrink-0" aria-hidden="true" />
                  <span>Teléfono oficial de atención</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="font-mono text-xl sm:text-2xl font-semibold text-navy-950 hover:text-gold-700 transition-colors tabular-nums"
                  >
                    +52 {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(BUSINESS_INFO.phoneRaw, 'phone')}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-navy-950 transition-colors cursor-pointer"
                    aria-label="Copiar teléfono"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                        <span className="text-emerald-700">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copiar número</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Official Emails */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-navy-900 mb-3">
                  <Mail className="w-4 h-4 text-gold-700 shrink-0" aria-hidden="true" />
                  <span>Correos electrónicos oficiales</span>
                </div>
                <ul className="space-y-3">
                  {BUSINESS_INFO.emails.map((item) => (
                    <li
                      key={item.address}
                      className="flex flex-wrap items-center justify-between gap-2 text-sm"
                    >
                      <div>
                        <a
                          href={`mailto:${item.address}`}
                          className="font-semibold text-navy-900 hover:text-gold-700 transition-colors break-all"
                        >
                          {item.address}
                        </a>
                        <p className="text-xs text-slate-500">{item.label}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(item.address, item.address)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-navy-950 transition-colors cursor-pointer shrink-0"
                        aria-label={`Copiar ${item.address}`}
                      >
                        {copiedField === item.address ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                            <span className="text-emerald-700">Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Inquiry Form */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-serif font-bold text-xl text-navy-950">
                Enviar consulta o solicitud de cotización
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Si desea confirmar disponibilidad de una divisa específica antes de acudir al Local E 13 PB en el
                AICM, complete el siguiente formulario o comuníquese directamente a nuestros canales oficiales.
              </p>

              {submitted ? (
                <div
                  role="status"
                  className="mt-8 p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-4"
                >
                  <div className="flex items-center gap-2.5 text-navy-950 font-semibold">
                    <span className="w-7 h-7 rounded-full bg-navy-900 text-gold-300 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <span>Solicitud preparada correctamente</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Gracias, <strong className="text-navy-950">{formState.name}</strong>. Para garantizar una
                    respuesta directa desde nuestro correo oficial, haga clic en el botón inferior para enviar su
                    mensaje a{' '}
                    <span className="font-medium text-navy-900">{BUSINESS_INFO.emails[0].address}</span> o llame
                    al <span className="font-mono font-medium text-navy-900">{BUSINESS_INFO.phoneDisplay}</span>.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={buildMailtoHref()}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 rounded-lg transition-colors whitespace-nowrap"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      Abrir correo con mi consulta
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({
                          name: '',
                          email: '',
                          phone: '',
                          currency: 'USD',
                          message: '',
                        });
                      }}
                      className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-navy-950 transition-colors cursor-pointer"
                    >
                      Nueva consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Nombre completo
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      value={formState.name}
                      onChange={(e) => {
                        setFormState({ ...formState, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="Ej. María Fernanda López"
                      className={`w-full h-11 px-3.5 rounded-lg border text-sm text-navy-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-800/25 ${
                        errors.name ? 'border-red-500 bg-red-50/40' : 'border-slate-300 bg-white focus:border-navy-800'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-700" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Correo electrónico
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        value={formState.email}
                        onChange={(e) => {
                          setFormState({ ...formState, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="nombre@correo.com"
                        className={`w-full h-11 px-3.5 rounded-lg border text-sm text-navy-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-800/25 ${
                          errors.email ? 'border-red-500 bg-red-50/40' : 'border-slate-300 bg-white focus:border-navy-800'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-700" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Teléfono
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        autoComplete="tel"
                        value={formState.phone}
                        onChange={(e) => {
                          setFormState({ ...formState, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="55 0000 0000"
                        className={`w-full h-11 px-3.5 rounded-lg border font-mono text-sm text-navy-950 placeholder:text-slate-400 tabular-nums focus:outline-none focus:ring-2 focus:ring-navy-800/25 ${
                          errors.phone ? 'border-red-500 bg-red-50/40' : 'border-slate-300 bg-white focus:border-navy-800'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-700" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-currency" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Divisa de interés
                    </label>
                    <select
                      id="contact-currency"
                      value={formState.currency}
                      onChange={(e) => setFormState({ ...formState, currency: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 bg-white text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-navy-800/25 focus:border-navy-800 cursor-pointer"
                    >
                      {CURRENCIES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code} — {c.name}
                        </option>
                      ))}
                      <option value="Otra divisa">Otra divisa / Consulta general</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Mensaje o consulta
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={formState.message}
                      onChange={(e) => {
                        setFormState({ ...formState, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Indique si desea comprar o vender divisa y el monto aproximado."
                      className={`w-full p-3.5 rounded-lg border text-sm text-navy-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-800/25 resize-y ${
                        errors.message
                          ? 'border-red-500 bg-red-50/40'
                          : 'border-slate-300 bg-white focus:border-navy-800'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-700" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Al enviar sus datos acepta nuestro{' '}
                      <a href="#privacidad" className="text-navy-900 font-semibold underline hover:text-gold-700">
                        Aviso de Privacidad
                      </a>
                      .
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-800 focus-visible:ring-offset-2"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Preparar consulta
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
