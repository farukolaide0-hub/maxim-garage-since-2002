/**
 * MAXIM GARAGE — SITE CONTENT
 * ---------------------------------------------------------------------------
 * Every piece of business-specific content lives in this file: copy, contact
 * details, services, images, colours, events, forms and SEO.
 * Pages and components only read from here.
 *
 * Editing rules
 *  - Publish only verified facts (sources: docs/business-data.md).
 *  - Unknown or unverified? Set it to null / [] and the element disappears.
 *  - Last verified against https://www.maxgarage.ca/ and https://vsccc.ca/
 *    on 2026-10-12.
 */

const UNSPLASH = (id, width = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&fm=jpg&w=${width}&q=78`

/* ===========================================================================
 * BRAND
 * ======================================================================== */
export const brand = {
  name: 'Maxim Garage',
  legalName: 'Maxim Garage Inc.',
  established: '2002', // printed on the official logo ("Est. 2002")
  website: 'https://www.maxgarage.ca/',
  timezone: 'America/Edmonton',
  logo: {
    src: '/images/maxim-garage-logo.png',
    alt: 'Maxim Garage — Est. 2002',
    width: 480,
    height: 399,
  },
  /**
   * Colours: strictly monochrome (black, white and greys). The full palette
   * lives in src/styles/global.css; these values set the accent roles.
   * Photographs and map embeds keep their natural colour.
   */
  colors: {
    accent: '#FFFFFF', // primary buttons and active states on dark backgrounds
    accentBright: '#FFFFFF', // icons and accent text on dark backgrounds
    accentInk: '#050505', // text on accent (white) buttons
  },
}

/* ===========================================================================
 * CONTACT & LOCATIONS
 * ======================================================================== */
export const contact = {
  // Promoted in the official homepage hero and supplied for this redesign.
  primaryPhone: { display: '403-401-6963', tel: '+14034016963' },
  email: 'garagemaxims@gmail.com',
  whatsapp: null, // not published by the business
  // The official Wix booking form. See docs/implementation-notes.md before launch.
  externalBookingUrl: 'https://www.maxgarage.ca/appointment',
  googleReviewUrl: 'https://g.page/r/CSvrEKcXxbw6EAE/review',
  amvicUrl:
    'https://amvic.ca.thentiacloud.net/webs/amvic/register/#/facility/maxim%20garage/0/10/67520590865752c4043b97eb',
}

// One schedule is published for the whole business.
export const hours = [
  { days: 'Monday – Friday', short: 'Mon–Fri', time: '9:00 AM – 6:00 PM', dayNumbers: [1, 2, 3, 4, 5], opens: '09:00', closes: '18:00' },
  { days: 'Saturday', short: 'Sat', time: '9:00 AM – 4:00 PM', dayNumbers: [6], opens: '09:00', closes: '16:00' },
  { days: 'Sunday', short: 'Sun', time: 'Closed', dayNumbers: [0], opens: null, closes: null },
]
export const closedDays = [0] // used by the appointment date validation

export const locations = [
  {
    id: 'calgary',
    name: 'Calgary',
    area: 'Northeast Calgary',
    street: '521 35 Ave NE',
    city: 'Calgary',
    region: 'AB',
    postalCode: 'T2E 2K9',
    phone: { display: '403-667-5947', tel: '+14036675947' },
    mapsUrl: 'https://g.co/kgs/HyazDmX',
    mapQuery: '521 35 Ave NE, Calgary, AB T2E 2K9',
  },
  {
    id: 'rocky-view',
    name: 'Rocky View County',
    area: 'Frontier Rd · Bay 2',
    street: 'Bay 2 – 285127 Frontier Rd',
    city: 'Rocky View County',
    region: 'AB',
    postalCode: 'T1X 0N2',
    phone: { display: '403-401-6963', tel: '+14034016963' },
    mapsUrl: 'https://maps.app.goo.gl/k5xTm4yj5af2qb3X6',
    mapQuery: '285127 Frontier Rd, Calgary, AB T1X 0N2',
  },
]

export const social = [
  { id: 'instagram', label: 'Instagram', handle: '@maxims.garage', url: 'https://www.instagram.com/maxims.garage' },
  { id: 'facebook', label: 'Facebook', handle: 'Maxim.Garage', url: 'https://www.facebook.com/calgary.garage' },
  // YouTube: the official site links to an incomplete URL (youtube.com/user/). Omitted until verified.
]

/* ===========================================================================
 * IMAGES — genuine Maxim Garage photos are marked `genuine: true`.
 * Everything else is an illustrative Unsplash photo and is never captioned
 * as the business's own work.
 * ======================================================================== */
export const images = {
  bayDoor: {
    src: '/images/rocky-view-bay-door.jpg',
    alt: 'Maxim Garage piston logo on the white service bay door at the Rocky View County location',
    genuine: true,
  },
  bmwProgramming: {
    src: '/images/bmw-ecu-programming.jpg',
    alt: 'Laptop running module programming software connected to a BMW X5 at Maxim Garage',
    genuine: true,
  },
  heroUnderHood: {
    src: UNSPLASH('1625047509248-ec889cbff17f', 2000),
    alt: 'Technician working under the open hood of a car in a dim service bay',
  },
  mechanicsUnderHood: {
    src: UNSPLASH('1625047509168-a7026f36de04', 1400),
    alt: 'Two technicians inspecting an engine bay under bright workshop lights',
  },
  engineInspection: {
    src: UNSPLASH('1625047509252-ab38fb5c7343', 1400),
    alt: 'Technician leaning into the engine bay of a grey hatchback',
  },
  engineBay: {
    src: UNSPLASH('1486262715619-67b85e0b08d3', 1400),
    alt: 'Close-up of an engine with belts and pulleys',
  },
  oilService: {
    src: UNSPLASH('1487754180451-c456f719a1fc', 1400),
    alt: 'Fresh engine oil being poured into an engine',
  },
  wrenchEngine: {
    src: UNSPLASH('1615906655593-ad0386982a0f', 1400),
    alt: 'Mechanic working on an engine with a wrench',
  },
  handsEngineDark: {
    src: UNSPLASH('1619642751034-765dfdf7c58e', 1400),
    alt: 'Hands tightening a component in a dark engine bay',
  },
  wheelImpact: {
    src: UNSPLASH('1613214149922-f1809c99b414', 1400),
    alt: 'Impact wrench removing the wheel nuts from an alloy wheel',
  },
  batteryCables: {
    src: UNSPLASH('1597766325363-f5576d851d6a', 1400),
    alt: 'Red and black test clamps connected to a car battery',
  },
  circuitBoard: {
    src: UNSPLASH('1581092918056-0c4c3acd3789', 1400),
    alt: 'Hands working on an electronic circuit board',
  },
  tachometer: {
    src: UNSPLASH('1517026575980-3e1e2dedeab4', 1400),
    alt: 'Illuminated tachometer on a dark dashboard',
  },
  toolWall: {
    src: UNSPLASH('1530124566582-a618bc2615dc', 1400),
    alt: 'Wall of wrenches and hand tools in a workshop',
  },
  toolRack: {
    src: UNSPLASH('1530046339160-ce3e530c7d2f', 1400),
    alt: 'Workshop with racks of tools and equipment',
  },
  bmwCoupe: {
    src: UNSPLASH('1580273916550-e323be2ae537', 1400),
    alt: 'Grey BMW coupe at dusk',
  },
  bmwSedan: {
    src: UNSPLASH('1601362840469-51e4d8d58785', 1400),
    alt: 'Grey BMW 7 Series parked by the water',
  },
  mercedesGarage: {
    src: UNSPLASH('1590362891991-f776e747a588', 1400),
    alt: 'White Mercedes-Benz in a garage lit in red and teal',
  },
  mercedesGrille: {
    src: UNSPLASH('1514316454349-750a7fd3da3a', 1400),
    alt: 'Front grille and headlight of a grey Mercedes-AMG',
  },
  rangeRover: {
    src: UNSPLASH('1563720223185-11003d516935', 1400),
    alt: 'Black Range Rover Sport in front of a dark garage door',
  },
  audiLight: {
    src: UNSPLASH('1542282088-fe8426682b8f', 1400),
    alt: 'Blue-lit headlight of a silver Audi in the dark',
  },
  porscheGt: {
    src: UNSPLASH('1580274455191-1c62238fa333', 1400),
    alt: 'Black Porsche 911 GT3 parked at night',
  },
  porscheClassic: {
    src: UNSPLASH('1588258219511-64eb629cb833', 2000),
    alt: 'Red classic Porsche 911 parked on a street',
  },
}

/* ===========================================================================
 * NAVIGATION
 * ======================================================================== */
export const nav = {
  links: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'About Us', to: '/about' },
    { label: 'Reviews', to: '/reviews' },
    { label: 'Specials', to: '/specials' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact', to: '/contact' },
  ],
  cta: { label: 'Book an Appointment', to: '/appointment' },
  quoteCta: { label: 'Get a Quote', to: '/get-a-quote' },
  menuLabel: 'Open menu',
  closeLabel: 'Close menu',
  topBar: {
    areas: 'Calgary & Rocky View County',
    hours: 'Mon–Fri 9–6 · Sat 9–4 · Sun closed',
  },
}

/* ===========================================================================
 * SERVICES
 * icon: Lucide icon name (see src/components/ui/Icon.jsx)
 * Every service below is advertised on maxgarage.ca. Detail-page copy is
 * built from the official service pages; "problems" lists describe common
 * symptoms customers notice, not business claims.
 * ======================================================================== */
export const services = [
  {
    slug: 'vehicle-diagnostics',
    title: 'Vehicle Diagnostics',
    icon: 'ScanSearch',
    summary: 'Computer diagnostics with fault-code reading, using original dealer-grade equipment.',
    image: images.tachometer,
    featured: true,
    intro:
      'A warning light or an intermittent fault needs a proper diagnosis before any parts are replaced. We connect to your vehicle’s control units, read and interpret stored fault codes, and confirm the cause before recommending a repair.',
    problems: [
      'A check-engine or other warning light is on',
      'An intermittent fault that comes and goes',
      'Poor running, rough idle or loss of power',
      'Another shop could not find the cause',
    ],
    offering: [
      'Computer diagnostics with fault-code reading and a printout',
      'Original dealer-grade diagnostic equipment from the major automotive brands',
      'Live data from engine and transmission control units',
      'Instrumental tests where needed — such as engine compression, oil and fuel pressure',
    ],
    related: ['electrical-repair', 'ecu-reprogramming', 'engine-repair'],
  },
  {
    slug: 'electrical-repair',
    title: 'Electrical Repair',
    icon: 'Zap',
    summary: 'Wiring, CAN-bus and control-unit faults — our main specialism.',
    image: images.circuitBoard,
    featured: true,
    intro:
      'Electrical work is where Maxim Garage is strongest. For over 25 years the team has specialised in automotive electronics: diagnosing, restoring and repairing engine control units and solving complex electrical faults.',
    problems: [
      'Control-unit failure after water damage, a short circuit or a voltage spike',
      'CAN-bus communication errors between modules',
      'ABS/ESP, airbag (SRS) or body-control warnings',
      'Power windows, alarm or central locking not working',
    ],
    offering: [
      'Professional repair of engine control units (ECU)',
      'Fault detection and repair of wiring and CAN-bus systems',
      'Restoration after short circuits, water damage or voltage surges',
      'Recovering data from damaged control units',
      'Comfort electrics: power windows, alarms, central locking and more',
      'Soldering, diagnostic and data-extraction equipment in-house',
    ],
    related: ['ecu-reprogramming', 'vehicle-diagnostics', 'mechanical-repair'],
  },
  {
    slug: 'ecu-reprogramming',
    title: 'ECU Reprogramming & BMW Coding',
    shortTitle: 'ECU Reprogramming',
    icon: 'Cpu',
    summary: 'Module programming, adaptation, flashing and BMW coding.',
    image: images.bmwProgramming,
    featured: true,
    intro:
      'Modern vehicles rely on dozens of electronic modules. After a repair or a replacement, many of them need to be programmed, adapted or updated before they work correctly. We carry out module programming and BMW coding with dealer-grade tools.',
    problems: [
      'A replacement module that needs programming or adaptation',
      'Software faults or outdated module firmware',
      'Retrofitting additional equipment to a vehicle',
      'Key or control-unit cloning after a failure',
    ],
    offering: [
      'Diagnostics, reprogramming and adaptation of electronic modules',
      'Module flashing',
      'BMW coding',
      'Equipment for cloning keys and control units',
      'Retrofitting vehicles with additional equipment',
    ],
    related: ['electrical-repair', 'vehicle-diagnostics', 'pre-purchase-inspection'],
  },
  {
    slug: 'oil-change',
    title: 'Oil Change & Regular Maintenance',
    shortTitle: 'Oil & Maintenance',
    icon: 'Droplets',
    summary: 'Manufacturer-schedule servicing with quality consumables, including Liqui Moly.',
    image: images.oilService,
    featured: true,
    intro:
      'Scheduled maintenance is the set of service procedures your manufacturer recommends to keep the vehicle working properly for longer. It helps prevent major breakdowns, keeps you safe, extends the vehicle’s life and maintains the manufacturer’s warranty.',
    problems: [
      'Your oil-service reminder is on',
      'You are around 10,000–15,000 km since the last service',
      'It has been a year since your last service',
      'You want a check-over before a long trip',
    ],
    offering: [
      'Engine oil and oil-filter change — we partner with Liqui Moly',
      'Air, cabin and fuel filter replacement',
      'Spark plugs, coolant and brake fluid',
      'Inspection of brakes, suspension, electronics, battery and tire pressure',
    ],
    note: 'Service intervals depend on make and model, mileage (usually every 10,000–15,000 km), operating conditions and time.',
    related: ['brake-repair', 'vehicle-diagnostics', 'mechanical-repair'],
  },
  {
    slug: 'brake-repair',
    title: 'Brake Repair & Inspection',
    shortTitle: 'Brakes',
    icon: 'Disc3',
    summary: 'Pads, discs, fluid and parking-brake checks and repairs.',
    image: images.wheelImpact,
    featured: true,
    intro:
      'Brake pads and discs directly affect your safety. We recommend checking them at every visit — wear sensors do not always reflect the real condition — and we look after the rest of the system too, from brake fluid to the parking brake.',
    problems: [
      'Squeaking or grinding when braking',
      'Longer braking distances or a soft, dipping pedal',
      'Vibration under heavy braking',
      'Uneven pad wear or a noisy parking brake',
    ],
    offering: [
      'Brake pad and disc inspection and replacement',
      'Brake fluid replacement (we recommend every two years) and bleeding',
      'Parking brake and control-unit checks',
      'Advice on bedding-in new pads: drive calmly for the first 100–200 km',
    ],
    note: 'On average, brake discs last about twice as long as pads; original discs typically last 40,000–50,000 km.',
    related: ['oil-change', 'mechanical-repair', 'pre-purchase-inspection'],
  },
  {
    slug: 'engine-repair',
    title: 'Engine Repair',
    icon: 'Cog',
    summary: 'Diagnosis and repair of engine faults, from leaks to loss of power.',
    image: images.wrenchEngine,
    featured: true,
    intro:
      'Engine problems are some of the most expensive to get wrong, so we diagnose before we repair. That means reading the engine control unit, checking for leaks and, where needed, measuring compression, oil pressure and fuel pressure.',
    problems: [
      'Oil leaks or unusual oil consumption',
      'Misfires, rough running or loss of power',
      'Unusual noises from the engine',
      'Overheating or warning lights',
    ],
    offering: [
      'Engine diagnostics with control-unit data',
      'Compression, oil-pressure and fuel-pressure testing where needed',
      'Leak inspection in the engine bay and under the vehicle',
      'Engine repair on most makes and models',
    ],
    related: ['vehicle-diagnostics', 'mechanical-repair', 'oil-change'],
  },
  {
    slug: 'mechanical-repair',
    title: 'Mechanical Repair',
    icon: 'Wrench',
    summary: 'Suspension, steering, transmission service and general mechanical work.',
    image: images.engineInspection,
    featured: false,
    intro:
      'From suspension and steering to transmission service, we handle the mechanical side of keeping your vehicle safe and running well — on European, domestic, diesel, hybrid and gasoline vehicles.',
    problems: [
      'Knocks, creaks or play in the suspension',
      'Steering that pulls or feels loose',
      'Rough or delayed gear changes',
      'Noise from the exhaust system',
    ],
    offering: [
      'Suspension and steering inspection on a lift',
      'Transmission service',
      'Exhaust system checks',
      'General mechanical repair on all makes and models',
    ],
    related: ['brake-repair', 'engine-repair', 'vehicle-diagnostics'],
  },
  {
    slug: 'pre-purchase-inspection',
    title: 'Pre-Purchase Inspection',
    icon: 'ClipboardCheck',
    summary: 'Know what you are buying — from $119 on our lift, or $149 mobile.',
    image: images.bmwCoupe,
    featured: true,
    intro:
      'The used-car market includes plenty of damaged and faulty vehicles. A pre-purchase inspection protects you from expensive surprises: we check fault codes, mileage, suspension, leaks, fluids, tires, battery and paintwork before you commit.',
    problems: [
      'You are about to buy a used vehicle',
      'You want to know whether the mileage is genuine',
      'You want to know about past body repairs',
      'You need an independent opinion on a private sale',
    ],
    offering: [
      'Computer diagnostics with fault-code reading and printout',
      'Odometer check: mileage read from several control units and compared',
      'Mileage and history check through the official dealer database (AIR portal)',
      'Suspension, brake and steering diagnostics on a lift',
      'Paint-thickness measurement for hidden body repairs',
      'Engine and transmission checks, with compression tests if needed',
    ],
    note: 'Our team includes BMW specialists who previously worked in dealerships.',
    related: ['vehicle-diagnostics', 'alberta-insurance-inspection', 'ecu-reprogramming'],
    pricingLink: true,
  },
  {
    slug: 'alberta-insurance-inspection',
    title: 'Alberta Insurance Inspection',
    icon: 'FileCheck',
    summary: 'The Alberta Automobile Insurance Motor Vehicle Inspection Report.',
    image: images.mercedesGrille,
    featured: false,
    intro:
      'Before a vehicle can be insured and driven on Alberta roads, it may need the Alberta Automobile Insurance Motor Vehicle Inspection Report. It is a multi-point inspection with more points than a regular check.',
    problems: [
      'You are insuring a vehicle that requires an inspection report',
      'You bought a vehicle that needs to be inspected before insurance',
    ],
    offering: [
      'Multi-point inspection for the insurance report',
      'Advice on anything that needs attention before the vehicle can pass',
    ],
    checklistTitle: 'Before you arrive, check that',
    checklist: [
      'There are no leaks or drips',
      'All lights are working',
      'The windshield has no damage in the driver’s line of sight',
      'The wipers work',
      'There is no unusual noise from the exhaust or the vehicle',
    ],
    related: ['pre-purchase-inspection', 'mechanical-repair', 'brake-repair'],
  },
]

// Advertised on maxgarage.ca without enough published detail for their own page.
export const additionalServices = ['Transmission service', 'Auto glass repair', 'Tire rotation', 'Tune-ups']

export const servicesPage = {
  path: '/services',
  eyebrow: 'Our services',
  title: 'Auto repair, diagnostics & electrical',
  text: 'Every job starts with an inspection and a clear explanation. We work on all makes and models — European, domestic, diesel, hybrid and gasoline.',
  image: images.toolRack,
  additionalTitle: 'Also available',
  additionalText: 'Ask us about these when you book or request a quote.',
  detail: {
    problemsTitle: 'When to book',
    offeringTitle: 'What we do',
    relatedTitle: 'Related services',
    ctaTitle: 'Book this service',
    ctaText: 'Book online or call the shop closest to you. Prefer a price first? Ask for a quote.',
    pricingLabel: 'See inspection packages and prices',
    allServicesLabel: 'All services',
  },
  cardLinkLabel: 'Learn more',
}

/* ===========================================================================
 * HOME
 * ======================================================================== */
export const home = {
  hero: {
    eyebrow: 'Mechanic near me — Serving Calgary & Area',
    titleLines: ['Expert auto repair', 'near me in Calgary'],
    accentLine: 1, // index of the line shown in the accent colour
    text: 'Diagnostics, electrical and ECU work, maintenance and mechanical repair for European, domestic, diesel, hybrid and gasoline vehicles — with an inspection and a clear quote before work begins.',
    image: images.heroUnderHood,
    trust: [
      { icon: 'BadgeCheck', label: 'AMVIC licensed business' },
      { icon: 'MapPin', label: 'Calgary & Rocky View County' },
      { icon: 'Clock', label: 'Open Monday to Saturday' },
    ],
  },
  servicesIntro: {
    eyebrow: 'What we do',
    title: 'Services built around diagnosis',
    text: 'We find the cause first, then fix it properly.',
    linkLabel: 'All services',
  },
  specialism: {
    eyebrow: 'Our specialism',
    title: 'Electronics & control units',
    text: 'For over 25 years the team has specialised in automotive electronics — ECU repair, CAN-bus faults, module programming and BMW coding — using original dealer-grade diagnostic equipment.',
    points: ['ECU repair and data recovery', 'Module programming and flashing', 'BMW coding', 'Key and control-unit cloning'],
    image: images.bmwProgramming,
    caption: 'Module programming on a BMW X5 in our shop',
    link: { label: 'Electrical repair', to: '/services/electrical-repair' },
  },
  about: {
    eyebrow: 'About Maxim Garage',
    title: 'A family business, now in Alberta',
    text: 'Maxim Garage is a small family business, established in 2002. After more than twenty years of automotive work in our home country, we brought those skills to Canada and now run two shops: Northeast Calgary and Rocky View County.',
    image: images.bayDoor,
    caption: 'Our Rocky View County shop',
    link: { label: 'About us', to: '/about' },
  },
  reviews: {
    eyebrow: 'Customer reviews',
    title: 'What drivers say',
    link: { label: 'All reviews', to: '/reviews' },
  },
  gallery: {
    eyebrow: 'Gallery',
    title: 'From the workshop',
    link: { label: 'View gallery', to: '/gallery' },
    count: 6,
  },
  locations: {
    eyebrow: 'Visit us',
    title: 'Two shops, one team',
    text: 'Call the location closest to you or book online.',
  },
}

/* ===========================================================================
 * ABOUT PAGE
 * ======================================================================== */
export const aboutPage = {
  path: '/about',
  eyebrow: 'About us',
  title: 'Family-run auto repair since 2002',
  text: 'A small family business with two Alberta shops and a particular strength in automotive electronics.',
  image: images.bayDoor,
  story: {
    eyebrow: 'Our story',
    title: 'From our home country to Alberta',
    paragraphs: [
      'Maxim Garage is a small family business, established in 2002. After more than twenty years of experience in our home country, we brought all our skills and expertise to our new home — Canada.',
      'Today we run two locations in Alberta, in Northeast Calgary and in Rocky View County, and we are committed to developing high-quality automotive service in the province.',
    ],
  },
  approach: {
    eyebrow: 'How we work',
    title: 'What you can expect',
    items: [
      { icon: 'ScanSearch', title: 'Inspection first', text: 'Every service includes an inspection, so recommendations are based on what we actually find.' },
      { icon: 'MessageSquare', title: 'Clear communication', text: 'We explain what your vehicle needs and why, and give an upfront quote before work begins.' },
      { icon: 'Cpu', title: 'Dealer-grade equipment', text: 'Original diagnostic equipment from the major automotive brands, plus soldering and data-extraction tools.' },
      { icon: 'Droplets', title: 'Quality consumables', text: 'For servicing we partner with Liqui Moly, the German oil and additives brand.' },
    ],
  },
  team: {
    eyebrow: 'Our team',
    title: 'Specialists, not generalists',
    paragraphs: [
      'Our team includes BMW specialists who previously worked in dealership service centres, diagnostic technicians who read wiring diagrams and repair at board level, and service advisors who plan each repair and keep you informed.',
      'Electronics is our specialism: the team has more than 25 years of experience repairing and programming automotive control units.',
    ],
    image: images.bmwProgramming,
    caption: 'Module programming in our shop',
    link: { label: 'Join the team', to: '/careers' },
  },
  licence: {
    title: 'AMVIC licensed',
    text: 'Maxim Garage is a licensed Alberta automotive business. The Alberta Motor Vehicle Industry Council keeps a public registry of licensed businesses.',
    link: { label: 'View the AMVIC registry', href: contact.amvicUrl },
  },
}

/* ===========================================================================
 * REVIEWS
 * Only add reviews copied word-for-word from an official listing, with the
 * reviewer's public name, rating, date, location and a source link:
 *   { quote, name, rating, date, locationId, sourceUrl }
 * Review cards stay hidden while the list is empty.
 * ======================================================================== */
export const reviews = {
  items: [],
}

export const reviewsPage = {
  path: '/reviews',
  eyebrow: 'Reviews',
  title: 'Customer reviews',
  text: 'Our reviews live on our Google Business Profiles. Read them there, or leave one after your visit.',
  image: images.mercedesGarage,
  listingsTitle: 'Read our reviews on Google',
  listingLabel: 'Open Google listing',
  writeTitle: 'Been in recently?',
  writeText: 'Reviews help other drivers find an honest shop. It only takes a minute.',
  writeLabel: 'Write a Google review',
  socialTitle: 'Follow the work',
  socialText: 'Recent jobs and updates from the shop.',
  sourceLabel: 'Read on Google',
  homeFallback: {
    text: 'Read what customers say about both our shops on Google — and leave your own review after your visit.',
  },
}

/* ===========================================================================
 * SPECIALS — only offers published by the business.
 * ======================================================================== */
export const specialsPage = {
  path: '/specials',
  eyebrow: 'Specials',
  title: 'Current offers',
  text: 'Offers published by Maxim Garage. Prices in Canadian dollars — please confirm when you book.',
  image: images.porscheGt,
  offers: [
    {
      id: 'pre-purchase',
      eyebrow: 'Special offer',
      title: 'Pre-Purchase Vehicle Inspection',
      intro: 'For anyone buying a vehicle who wants to be confident in its reliability. Choose one of three inspections:',
      packages: [
        {
          name: 'Standard',
          where: 'On our lift',
          price: '$119',
          items: [
            'Fault codes read and interpreted, with detailed analysis',
            'All suspension components checked for wear',
            'Leak check in the engine bay and under the vehicle',
            'Brake fluid, transmission fluid and engine oil condition',
            'Tires: manufacture year, wear pattern, tread and mounting',
            'Battery: capacity, condition, wear and charge',
          ],
        },
        {
          name: 'Premium',
          where: 'On our lift',
          price: '$189',
          highlight: 'Most complete',
          items: [
            'Everything in Standard',
            'Control modules checked for odometer tampering',
            'Paintwork inspection for repainting and body repairs',
            'Printed Carfax report',
          ],
        },
        {
          name: 'Mobile',
          where: 'At your location',
          price: '$149',
          items: [
            'Fault codes read and interpreted, with detailed analysis',
            'Suspension check (if a lift is available)',
            'Leak, fluid, tire and battery checks',
            'Paintwork inspection available as an extra',
          ],
        },
      ],
      cta: { label: 'Book an inspection', to: '/appointment?service=pre-purchase-inspection' },
      validity: 'Prices as published on maxgarage.ca in October 2026. No end date is published.',
    },
  ],
  noMoreTitle: 'Looking for something else?',
  noMoreText: 'There are no other published offers at the moment. Ask for a quote and we will price your job before any work begins.',
  noMoreCta: { label: 'Get a Quote', to: '/get-a-quote' },
}

/* ===========================================================================
 * GALLERY — category ids must match `galleryPage.categories`.
 * ======================================================================== */
export const galleryPage = {
  path: '/gallery',
  eyebrow: 'Gallery',
  title: 'Workshop & vehicles',
  text: 'Photos marked “Maxim Garage” are from our own shop. The others are illustrative photography of the kind of work and vehicles we look after.',
  image: images.toolWall,
  allLabel: 'All',
  filterLabel: 'Filter photos',
  categories: [
    { id: 'workshop', label: 'Workshop' },
    { id: 'repairs', label: 'Repairs' },
    { id: 'diagnostics', label: 'Diagnostics' },
    { id: 'european', label: 'European vehicles' },
  ],
  genuineLabel: 'Maxim Garage',
  illustrativeLabel: 'Illustrative',
  openLabel: (caption) => `Open photo: ${caption}`,
  lightbox: { label: 'Photo viewer', close: 'Close', previous: 'Previous photo', next: 'Next photo', counter: (i, n) => `${i} / ${n}` },
  items: [
    { ...images.bayDoor, category: 'workshop', caption: 'Our Rocky View County shop, Bay 2' },
    { ...images.bmwProgramming, category: 'diagnostics', caption: 'Module programming on a BMW X5' },
    { ...images.mechanicsUnderHood, category: 'repairs', caption: 'Engine bay inspection' },
    { ...images.toolWall, category: 'workshop', caption: 'Hand tools' },
    { ...images.tachometer, category: 'diagnostics', caption: 'Live engine data' },
    { ...images.mercedesGarage, category: 'european', caption: 'Mercedes-Benz' },
    { ...images.wheelImpact, category: 'repairs', caption: 'Wheel and brake work' },
    { ...images.circuitBoard, category: 'diagnostics', caption: 'Board-level electronics repair' },
    { ...images.bmwSedan, category: 'european', caption: 'BMW 7 Series' },
    { ...images.toolRack, category: 'workshop', caption: 'Workshop equipment' },
    { ...images.handsEngineDark, category: 'repairs', caption: 'Mechanical repair' },
    { ...images.rangeRover, category: 'european', caption: 'Range Rover Sport' },
    { ...images.batteryCables, category: 'diagnostics', caption: 'Battery and charging-system test' },
    { ...images.porscheGt, category: 'european', caption: 'Porsche 911 GT3' },
    { ...images.engineBay, category: 'repairs', caption: 'Engine ancillaries' },
    { ...images.audiLight, category: 'european', caption: 'Audi lighting' },
  ],
}

/* ===========================================================================
 * EVENT — European Classic Car Meet 2026
 * Sources: vsccc.ca (sponsor list, 2026 ECCM page), the event poster shown
 * on maxgarage.ca, and the Global News community event listing.
 * ======================================================================== */
export const event = {
  path: '/events/european-classic-car-show-2026',
  status: 'past', // 'upcoming' | 'past' — the event took place on 2026-07-18
  statusLabel: 'Past event',
  eyebrow: 'Event recap · July 18, 2026',
  title: 'European Classic Car Meet 2026',
  subtitle: 'Maxim Garage was a Silver Sponsor of the Vintage Sports Car Club of Calgary’s annual European Classic Car Meet at Stanley Park.',
  image: images.porscheClassic,
  imageNote: 'Illustrative photo — not taken at the event.',
  date: '2026-07-18',
  venue: 'Stanley Park',
  venueAddress: '416 Park Ave SW, Calgary, AB',
  organizer: 'Vintage Sports Car Club of Calgary',
  organizerUrl: 'https://vsccc.ca/',
  factsTitle: 'At a glance',
  facts: [
    { icon: 'CalendarDays', label: 'Date', value: 'Saturday, July 18, 2026' },
    { icon: 'Clock', label: 'Time', value: 'Public show 10 AM – 4 PM' },
    { icon: 'MapPin', label: 'Venue', value: 'Stanley Park, 416 Park Ave SW, Calgary' },
    { icon: 'Users', label: 'Presented by', value: 'Vintage Sports Car Club of Calgary & Continental Auto Service' },
    { icon: 'Flag', label: 'Theme', value: 'Celebrating 100 years of Mercedes-Benz' },
    { icon: 'HeartHandshake', label: 'Charity', value: 'Veterans Association Food Bank' },
    { icon: 'Award', label: 'Maxim Garage', value: 'Silver Sponsor' },
  ],
  recap: {
    eyebrow: 'The day',
    title: 'A scorching success',
    paragraphs: [
      'The 2026 meet filled Stanley Park with close to 300 European cars and motorcycles, old and new, according to the Vintage Sports Car Club of Calgary.',
      'Spectators attended free of charge, car registration was $20, and the day raised funds for the Veterans Association Food Bank.',
      'Maxim Garage joined as a Silver Sponsor and invited drivers to meet the team in person, talk about their cars and repairs, and take part in a giveaway of service gift certificates.',
    ],
  },
  linksTitle: 'Photos & official information',
  links: [
    { label: '2026 ECCM photos and winners', source: 'vsccc.ca', href: 'https://vsccc.ca/page-18180' },
    { label: 'Vintage Sports Car Club of Calgary', source: 'vsccc.ca', href: 'https://vsccc.ca/' },
    { label: 'Community event listing', source: 'Global News', href: 'https://globalnews.ca/event/11943317/european-classic-car-meet-supported-by-qr-calgary/' },
  ],
  photoCredit: 'Official 2026 event photos are by @exposure404photography and published by the club on vsccc.ca.',
  nextYear: 'Dates for the next meet will be announced by the Vintage Sports Car Club of Calgary.',
  homeFeature: {
    eyebrow: 'Community · July 2026',
    title: 'European Classic Car Meet',
    text: 'Close to 300 European classics filled Stanley Park on July 18, 2026. Maxim Garage was proud to be a Silver Sponsor.',
    link: { label: 'Read the recap', to: '/events/european-classic-car-show-2026' },
  },
}

/* ===========================================================================
 * CAREERS — vacancies as listed on maxgarage.ca/careers (October 2026)
 * ======================================================================== */
export const careersPage = {
  path: '/careers',
  eyebrow: 'Careers',
  title: 'Join Maxim Garage',
  text: 'We are looking for experienced, passionate professionals to help us grow — including at future locations.',
  image: images.mechanicsUnderHood,
  intro:
    'Our team is the foundation of our company. If you share our vision and are ready to fully immerse yourself in this business, we want to meet you. Did not find a suitable vacancy? Get in touch anyway.',
  vacanciesTitle: 'Open positions',
  listedNote: 'Vacancies as listed on our website in October 2026.',
  conditions: {
    title: 'What we offer',
    items: [
      'Work schedule 5/2 or 6/1, 8-hour workday',
      'Bi-weekly official payment',
      'Competitive salary based on interview results',
      'Paid vacation and uniform provided',
      'Corporate events and meal discounts',
      'Discounts on repairs for your own vehicle',
      'Opportunities for career growth within the company',
    ],
  },
  vacancies: [
    {
      title: 'Automotive Service Technician / Mechanic',
      summary: 'Diagnose and repair vehicles, perform routine maintenance and work with the service advisor on additional repairs.',
      lists: [
        {
          title: 'Duties',
          items: [
            'Examine vehicles to identify repairs or maintenance not on the repair order',
            'Routine maintenance and repairs: oil changes, brakes, tire rotations',
            'Diagnose mechanical issues using schematics and technical manuals',
            'Keep a clean, organized workspace',
          ],
        },
        {
          title: 'Requirements',
          items: [
            'Proven experience as an automotive mechanic',
            'Strong knowledge of engines, transmissions, brakes and electrical systems',
            'Proficient with hand tools, power tools and diagnostic equipment',
            'Valid driver’s licence and clean driving record',
          ],
        },
      ],
    },
    {
      title: 'Administrator-Consultant (Service Advisor)',
      summary: 'Schedule appointments, prepare quotes, plan repairs and coordinate the work of the mechanics.',
      lists: [
        {
          title: 'Responsibilities',
          items: [
            'Scheduling service appointments; answering calls and website enquiries',
            'Preparing quotes, invoicing and accepting payments',
            'Receiving and releasing vehicles; creating repair plans',
            'Selecting and ordering parts; working in the CRM',
          ],
        },
        {
          title: 'Requirements',
          items: [
            'Deep knowledge of car construction; able to read diagrams',
            'English language proficiency',
            'Customer service and time-management skills',
            'Dealership experience is a plus',
          ],
        },
      ],
    },
    {
      title: 'Diagnostic Technician / Apprentice',
      summary: 'Diagnose and repair electrical issues, interpret fault codes and repair wiring.',
      lists: [
        {
          title: 'Responsibilities',
          items: [
            'Diagnosing and repairing electrical issues',
            'Retrofitting vehicles with additional equipment',
            'Interpreting dashboard and stored error codes',
            'Soldering and repairing wiring',
          ],
        },
        {
          title: 'Requirements',
          items: [
            'Ability to read wiring diagrams (required)',
            'Soldering and hand-tool skills; diagnostic equipment',
            'Understanding of vehicle electrical systems',
            'For apprentice positions, not all requirements apply',
          ],
        },
      ],
    },
  ],
  formTitle: 'Apply or ask a question',
  formText: 'Your email app will open with your details filled in, so you can attach your résumé before sending.',
}

/* ===========================================================================
 * CONTACT PAGE
 * ======================================================================== */
export const contactPage = {
  path: '/contact',
  eyebrow: 'Contact',
  title: 'Get in touch',
  text: 'Call the shop closest to you, book online, or send us a message.',
  image: images.rangeRover,
  locationsTitle: 'Our locations',
  hoursTitle: 'Business hours',
  callLabel: 'Call',
  directionsLabel: 'Directions',
  emailTitle: 'Email',
  socialTitle: 'Social',
  formTitle: 'Send a message',
  formText: 'Need a price? Use the quote form so we get your VIN.',
  mapTitle: (name) => `Map of Maxim Garage ${name}`,
  todayLabel: 'Today',
}

/* ===========================================================================
 * FORMS
 * Delivery: while `endpoint` is null, a valid form opens the visitor's email
 * app with the message prefilled (nothing is sent automatically).
 * Set `endpoint` to a form-handling URL (e.g. Formspree) to POST instead.
 * ======================================================================== */
const lowerLabel = (label) => (/^[A-Z]+$/.test(label) ? label : label.toLowerCase())

export const forms = {
  endpoint: null,
  recipient: contact.email,
  vinHint: '17 characters — on your registration, insurance card, or the driver’s side of the dashboard.',
  requiredNote: 'Fields marked * are required.',
  labels: {
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    vin: 'VIN',
    service: 'Service',
    location: 'Preferred location',
    date: 'Preferred date',
    details: 'Additional details',
    message: 'Message',
    position: 'Position',
  },
  placeholders: {
    details: 'Year, make, model and what you need done',
    message: 'How can we help?',
    vin: '17-character VIN',
    careers: 'Your experience and the role you are interested in',
  },
  servicePlaceholder: 'Choose a service',
  locationAny: 'Either location',
  positionPlaceholder: 'Choose a position',
  otherService: 'Something else',
  positions: ['Technician / Mechanic', 'Diagnostic Technician / Apprentice', 'Service Consultant / Admin', 'General enquiry'],
  errors: {
    required: (label) => `Please enter your ${lowerLabel(label)}.`,
    choose: (label) => `Please choose a ${lowerLabel(label)}.`,
    email: 'Please enter a valid email address.',
    phone: 'Please enter a phone number with at least 10 digits.',
    vinLength: (n) => `A VIN has 17 characters — this one has ${n}.`,
    vinChars: 'A VIN uses only letters and numbers, and never the letters I, O or Q.',
    datePast: 'Please choose a date from today onward.',
    dateClosed: 'We are closed on Sundays — please choose Monday to Saturday.',
    details: 'Please add a few details (at least 10 characters).',
    send: 'Your request could not be sent. Please call us or email garagemaxims@gmail.com.',
  },
  submitMailto: 'Prepare my email',
  submitEndpoint: 'Send request',
  sending: 'Sending…',
  notices: {
    mailto:
      'Your email app should now be open with your request filled in. Press send there to reach us — nothing has been sent yet. If no email app opened, email garagemaxims@gmail.com or call 403-401-6963.',
    success: 'Thanks — your request has been sent. We will contact you to confirm.',
  },
  fallback: 'Prefer to talk? Rocky View County 403-401-6963 · Calgary 403-667-5947',
  subjects: {
    appointment: 'Appointment request',
    quote: 'Quote request',
    contact: 'Website message',
    careers: 'Careers enquiry',
  },
}

export const appointmentPage = {
  path: '/appointment',
  eyebrow: 'Mechanic near me — Serving Calgary & Area',
  title: 'Book an Appointment',
  text: 'Choose a service, location and preferred date. We will contact you to confirm a time — your booking is not confirmed until we do.',
  image: images.mechanicsUnderHood,
  stepsTitle: 'How booking works',
  steps: [
    { title: 'Send your request', text: 'Include your VIN and a preferred date.' },
    { title: 'We check availability', text: 'We look up parts and procedures for your vehicle.' },
    { title: 'We confirm with you', text: 'We call or email you to confirm the appointment.' },
  ],
  externalBooking: {
    text: 'You can also use our existing online booking form.',
    label: 'Booking form on maxgarage.ca',
  },
}

export const quotePage = {
  path: '/get-a-quote',
  eyebrow: 'Get a quote',
  title: 'Request a quote',
  text: 'Tell us about your vehicle and the work you need. A quote is an estimate for your enquiry — not a booking or a guaranteed final price.',
  image: images.engineBay,
  whyVinTitle: 'Why we ask for your VIN',
  whyVinText:
    'The Vehicle Identification Number tells us the exact engine, transmission and parts fitted to your vehicle, so the quote is accurate.',
  nextTitle: 'What happens next',
  nextText: 'We review your request and reply with a quote. If you accept it, we book you in.',
}

/* ===========================================================================
 * PRIVACY — reflects what this website actually does.
 * ======================================================================== */
export const privacyPage = {
  path: '/privacy',
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  updatedLabel: 'Last updated',
  updated: 'October 12, 2026',
  sections: [
    {
      title: 'Who we are',
      body: [
        'This website is operated by Maxim Garage Inc. (“we”), an automotive repair business in Calgary and Rocky View County, Alberta. We respect your privacy and handle personal information in line with Canadian privacy law.',
      ],
    },
    {
      title: 'What we collect',
      body: [
        'When you use the appointment, quote, contact or careers forms, you provide your name, email address and phone number, and may provide your vehicle identification number (VIN), the service you need, a preferred location and date, and any details you choose to include.',
        'This website does not use analytics, advertising cookies or tracking pixels, and it does not require an account.',
      ],
    },
    {
      title: 'How the forms work',
      body: [
        'Our forms check your entries in your browser and then open your own email app with the message prepared. Your information reaches us only when you send that email. It is then held in our email account and in our shop records.',
      ],
    },
    {
      title: 'How we use your information',
      body: [
        'We use it only to respond to your enquiry, schedule and carry out work on your vehicle, prepare quotes and invoices, and meet legal and regulatory obligations. We do not sell or rent your personal information.',
      ],
    },
    {
      title: 'Third-party services',
      body: [
        'Some parts of this site load content from other companies, which may receive your IP address and browser information when the page loads: Google Maps (location maps), Google Fonts (typography) and Unsplash (some photographs). Links to Google, Facebook, Instagram and other websites are governed by those companies’ own privacy policies.',
      ],
    },
    {
      title: 'Retention and security',
      body: [
        'We keep personal information only as long as needed for the purposes above or as required by law, and we take reasonable steps to protect it. No transmission over the internet is completely secure.',
      ],
    },
    {
      title: 'Your rights',
      body: [
        'You may ask to access, correct or delete the personal information we hold about you, or withdraw your consent, by contacting us using the details below. We may need to confirm your identity first.',
      ],
    },
    {
      title: 'Contact',
      body: ['Email garagemaxims@gmail.com or call 403-401-6963.'],
    },
  ],
}

export const notFoundPage = {
  eyebrow: 'Error 404',
  title: 'Wrong turn',
  text: 'The page you are looking for has moved or does not exist.',
  links: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ],
}

/* ===========================================================================
 * SHARED CTA BAND, BREADCRUMBS & FOOTER
 * ======================================================================== */
export const ctaBand = {
  eyebrow: 'Ready when you are',
  title: 'Book your visit at either location',
  text: 'Book online, request a quote, or call the shop.',
}

export const breadcrumbs = { label: 'Breadcrumb', home: 'Home', services: 'Services', events: 'Events' }

export const footer = {
  blurb: 'Family-run auto repair in Northeast Calgary and Rocky View County. Diagnostics, electrical, ECU and mechanical work on all makes and models.',
  columns: {
    explore: 'Explore',
    services: 'Services',
    visit: 'Visit',
    hours: 'Hours',
  },
  extraLinks: [
    { label: 'Careers', to: '/careers' },
    { label: 'ECCM 2026', to: '/events/european-classic-car-show-2026' },
    { label: 'Privacy Policy', to: '/privacy' },
  ],
  amvicLabel: 'AMVIC licensed business',
  copyright: (year) => `© 2002–${year} Maxim Garage Inc. All rights reserved.`,
  skipLink: 'Skip to content',
  newTab: '(opens in a new tab)',
}

/* ===========================================================================
 * SEO — used at runtime (usePageMeta) and at build time (vite.config.js) to
 * write per-route HTML, sitemap.xml and robots.txt.
 * ======================================================================== */
export const seo = {
  siteUrl: 'https://www.maxgarage.ca',
  siteName: 'Maxim Garage',
  locale: 'en_CA',
  themeColor: '#050505',
  favicon: '/images/favicon.png',
  defaultImage: '/images/rocky-view-bay-door.jpg',
  titleSuffix: ' | Maxim Garage',
  pages: {
    '/': {
      title: 'Maxim Garage | Auto Repair & Mechanic in Calgary',
      description:
        'Family-run auto repair in Northeast Calgary and Rocky View County. Diagnostics, electrical and ECU repair, BMW coding, maintenance, brakes and pre-purchase inspections.',
    },
    '/services': {
      title: 'Auto Repair Services in Calgary',
      description:
        'Diagnostics, electrical repair, ECU programming, oil changes, brakes, engine and mechanical repair, pre-purchase and Alberta insurance inspections.',
    },
    '/about': {
      title: 'About Us',
      description: 'A family business established in 2002, now with two Alberta shops in Northeast Calgary and Rocky View County. AMVIC licensed.',
    },
    '/reviews': {
      title: 'Customer Reviews',
      description: 'Read Maxim Garage customer reviews on Google for our Calgary and Rocky View County shops, or leave your own.',
    },
    '/specials': {
      title: 'Specials — Pre-Purchase Inspection from $119',
      description: 'Pre-purchase vehicle inspections in Calgary: Standard $119, Premium $189 with Carfax report, or Mobile $149 at your location.',
    },
    '/gallery': {
      title: 'Gallery',
      description: 'Photos from the Maxim Garage workshop, diagnostics and the European vehicles we work on.',
    },
    '/contact': {
      title: 'Contact & Locations',
      description: 'Contact Maxim Garage: 521 35 Ave NE, Calgary (403-667-5947) and Bay 2 – 285127 Frontier Rd, Rocky View County (403-401-6963).',
    },
    '/appointment': {
      title: 'Book an Appointment',
      description: 'Request an auto repair appointment at Maxim Garage in Calgary or Rocky View County. Choose a service, location and preferred date.',
    },
    '/get-a-quote': {
      title: 'Get a Quote',
      description: 'Request an auto repair quote from Maxim Garage. Send your VIN and the work you need and we will price it before any work begins.',
    },
    '/careers': {
      title: 'Careers',
      description: 'Automotive technician, diagnostic technician and service advisor positions at Maxim Garage in Calgary.',
    },
    '/privacy': {
      title: 'Privacy Policy',
      description: 'How Maxim Garage handles personal information submitted through this website.',
    },
    [event.path]: {
      title: 'European Classic Car Meet 2026',
      description: 'Maxim Garage was a Silver Sponsor of the 2026 European Classic Car Meet at Stanley Park, Calgary, on July 18, 2026.',
      image: event.image.src,
    },
  },
  servicePage: (s) => ({
    title: `${s.title} in Calgary`,
    description: `${s.title} at Maxim Garage in Calgary and Rocky View County. ${s.summary}`,
    image: s.image.src,
  }),
  notFound: { title: 'Page Not Found', description: 'This page could not be found.' },
}
