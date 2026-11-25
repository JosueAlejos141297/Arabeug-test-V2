export type CurrencyRegion = 'América' | 'Europa' | 'Asia y Oceanía' | 'Metales';

export interface CurrencyItem {
  code: string;
  name: string;
  region: CurrencyRegion;
  note?: string;
}

export const BUSINESS_INFO = {
  legalName: 'CENTRO CAMBIARIO ARABEUG',
  commercialName: 'Centro Cambiario Arabeug',
  shortName: 'CCA',
  activity: 'Compra y Venta de Divisas',
  airportContext: 'Aeropuerto Internacional de la Ciudad de México (AICM) · Terminal 1',
  phoneDisplay: '55 2599 0466',
  phoneRaw: '5525990466',
  phoneHref: 'tel:+525525990466',
  emails: [
    {
      address: 'ccarabeug@gmail.com',
      label: 'Atención principal y consultas',
    },
    {
      address: 'cc_arabeug@hotmail.com',
      label: 'Correo institucional alternativo',
    },
  ],
  address: {
    street: 'Boulevard Capitán Carlos León González S/N, Local E 13 PB Ambulatorio Nacional',
    neighborhood: 'Colonia Peñón de los Baños',
    postalCode: 'C.P. 15520',
    municipality: 'Alcaldía Venustiano Carranza',
    cityStateCountry: 'Ciudad de México, México',
    crossStreets: 'Entre puertas 2 y 3 del AICM',
    fullInline:
      'Boulevard Capitán Carlos León González S/N, Local E 13 PB Ambulatorio Nacional, Colonia Peñón de los Baños, C.P. 15520, Alcaldía Venustiano Carranza, Ciudad de México, México',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Boulevard+Capitan+Carlos+Leon+Gonzalez+Local+E+13+PB+Ambulatorio+Nacional+Penon+de+los+Banos+15520+Ciudad+de+Mexico',
  },
  logoPath: `${import.meta.env.BASE_URL}assets/aistudio/WhatsApp_Image_2026-11-21_at_11.26.43_AM_2cd63a0e.jpeg`,
} as const;

export const CURRENCIES: CurrencyItem[] = [
  { code: 'USD', name: 'Dólar americano', region: 'América' },
  { code: 'EUR', name: 'Euro', region: 'Europa' },
  { code: 'CAD', name: 'Dólar canadiense', region: 'América' },
  { code: 'GBP', name: 'Libra esterlina', region: 'Europa' },
  { code: 'BRL', name: 'Real brasileño', region: 'América' },
  { code: 'CHF', name: 'Franco suizo', region: 'Europa' },
  { code: 'CLP', name: 'Peso chileno', region: 'América' },
  { code: 'CNY', name: 'Yuan chino', region: 'Asia y Oceanía' },
  { code: 'COP', name: 'Peso colombiano', region: 'América' },
  { code: 'CRC', name: 'Colón costarricense', region: 'América' },
  { code: 'DKK', name: 'Corona danesa', region: 'Europa' },
  { code: 'GTQ', name: 'Quetzal', region: 'América' },
  { code: 'HKD', name: 'Dólar de Hong Kong', region: 'Asia y Oceanía' },
  { code: 'INR', name: 'Rupia india', region: 'Asia y Oceanía' },
  { code: 'JPY', name: 'Yen japonés', region: 'Asia y Oceanía' },
  { code: 'KRW', name: 'Won surcoreano', region: 'Asia y Oceanía' },
  { code: 'PEN', name: 'Sol peruano', region: 'América' },
  { code: 'RUB', name: 'Rublo ruso', region: 'Europa' },
  { code: 'SEK', name: 'Corona sueca', region: 'Europa' },
  { code: 'THB', name: 'Baht tailandés', region: 'Asia y Oceanía' },
  { code: 'TRY', name: 'Lira turca', region: 'Europa' },
  { code: 'AED', name: 'Dirham de Emiratos Árabes', region: 'Asia y Oceanía' },
  { code: 'ARS', name: 'Peso argentino', region: 'América' },
  { code: 'AUD', name: 'Dólar australiano', region: 'Asia y Oceanía' },
  {
    code: 'CENT',
    name: 'Centenario',
    region: 'Metales',
    note: 'Operación por pieza. Sujeto a revisión física: sin manchas ni rayones.',
  },
];

export const WHY_CHOOSE_ARABEUG = [
  {
    number: '01.',
    title: 'Más de 10 años de experiencia y respaldo',
    description:
      'Más de una década de trayectoria continua en la compra y venta de divisas dentro del Aeropuerto Internacional de la Ciudad de México, respaldados por la confianza y preferencia constante de nuestros clientes.',
  },
  {
    number: '02.',
    title: 'Ubicación estratégica entre puertas 2 y 3 del AICM',
    description:
      'Nos encontramos en el Local E 13 Planta Baja del Ambulatorio Nacional (Terminal 1), de fácil acceso para viajeros nacionales e internacionales antes de abordar o al llegar a la Ciudad de México.',
  },
  {
    number: '03.',
    title: 'Amplio catálogo de divisas internacionales',
    description:
      'Operamos 24 divisas de América, Europa, Asia, Medio Oriente y Oceanía —además de Centenario— para cubrir las necesidades cambiarias de sus viajes de negocios o turismo en un solo lugar.',
  },
  {
    number: '04.',
    title: 'Transparencia y cumplimiento normativo',
    description:
      'Cada operación se realiza en ventanilla con atención personalizada, emisión de comprobante y estricto apego a la normatividad financiera mexicana y protección de datos personales (LFPDPPP).',
  },
] as const;
