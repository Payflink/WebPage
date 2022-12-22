import type {
  CallToAction,
  SiteMapGroup,
  I18nSiteMap,
  Language,
  MetaData,
  Product,
  I18nFooterInfo,
  FooterInfo,
} from './types'

const productDe: Product = {
  description: 'Self-Order|Pay für Gastro',
  claim: 'Ihre Gäste bestellen und bezahlen ohne Wartezeit.',
  name: 'Payflink',
  image: '/assets/logo/Payflink_free.svg',
}

const productFr: Product = {
  description: 'Self-Order|Pay pour la Gastronomie',
  claim: 'Vos clients commandent et paient sans attendre.',
  name: 'Payflink',
  image: '/assets/logo/Payflink_free.svg',
}

const productEn: Product = {
  description: 'Self-Order|Pay for Gastronomy',
  claim: 'Your guests order and pay without waiting.',
  name: 'Payflink',
  image: '/assets/logo/Payflink_free.svg',
}
const productIt: Product = {
  description: 'Self-Order|Pay for Gastronomy',
  claim: 'Your guests order and pay without waiting.',
  name: 'Payflink',
  image: '/assets/logo/Payflink_free.svg',
}
export const metaData: MetaData = {
  de: productDe,
  fr: productFr,
  en: productEn,
  it: productIt,
}

export const callToActionLinks: Record<Language, CallToAction[]> = {
  de: [
    { href: '/de/demo/', text: 'Demo ausprobieren' },
    // { href: '/de/preise/', text: 'Unverbindliches Angebot' },
  ],
  fr: [
    { href: '/fr/démo/', text: 'Essayez la démo' },
  ],
  en: [
    { href: '/en/demo/', text: 'Try demo' },
    // { href: '/en/contact/', text: 'Request a quote' },
  ],
  it: [],
}

export const generalTitle = ({ name }: Product) => `${name}`

export interface NavigationItem {
  href: string
  title: string
  description?: string
}

export interface NavigationGroup {
  title: string
  items: NavigationItem[]
}

export type NavigationTree = (NavigationItem | NavigationGroup)[]

export type Navigation = Record<Language, NavigationTree>

const navigationDe: NavigationTree = [
  {
    title: 'Produkt',
    items: [
      {
        title: 'Digitale Speisekarte',
        href: '/de/digitale-speisekarte/',
        description:
          'Präsentieren Sie mit unserer digitalen Speisekarte Ihr Angebot im besten Licht.',
      },
      {
        title: 'Bestell-App',
        href: '/de/restaurant-bestell-app/',
        description: 'Entdecken Sie unsere Restaurant Bestell App.',
      },
      {
        href: '/de/funktionsumfang/',
        title: 'Funktionsumfang',
        description: 'Detaillierte Auflistung aller Funktionen von Payflink.',
      },
      {
        href: '/de/blog/',
        title: 'Blog',
        description: 'Der neuste Gossip, der gerade die Runden macht.',
      },
      // {
      //   href: '/de/demo/',
      //   title: 'Demo',
      //   description:
      //     'Machen Sie eine Bestellung und erfahren dabei den Zahlungsablauf.',
      // },
    ],
  },
  // {
  //   title: 'Über',
  //   items: [
  //     {
  //       title: 'Uns',
  //       href: '/de/ueber-uns/',
  //       description: 'Was treibt uns an? Worauf legen wir wert?',
  //     },
  //     {
  //       href: '/de/team/',
  //       title: 'Team',
  //       description: 'Wer versteckt sich hinter der Persona?',
  //     },
  //     {
  //       href: '/de/blog/',
  //       title: 'Blog',
  //       description: 'Der neuste Gossip, der gerade die Runden macht.',
  //     },
  //   ],
  // },
  //{
    //title: 'Preise',
    //href: '/de/preise/',
  //},
  {
    href: '/de/demo/', 
    title: 'Demo ausprobieren',
  },
  {
    href: '/de/termin/',
    title: 'Termin vereinbaren',
  },
  {
    href: '/de/kontakt/',
    title: 'Kontakt',
  },
]

const navigationFr: NavigationTree = [
  {
    title: 'Produit',
    items: [
      {
        title: 'Menu Numérique',
        href: '/fr/digitale-speisekarte/',
        description:
          'Présentez votre offre sous son meilleur avec notre menu digital.',
      },
      {
        title: 'application de commande',
        href: '/fr/restaurant-bestell-app/',
        description: 'Découvrez notre application de commande de restaurant.',
      },
      {
        href: '/fr/funktionsumfang/',
        title: 'Gamme de fonctions',
        description: 'Liste détaillée de toutes les fonctionnalités de Payflink.',
      },
      // {
      //   href: '/de/blog/',
      //   title: 'Blog',
      //   description: 'Der neuste Gossip, der gerade die Runden macht.',
      // },
      // {
      //   href: '/de/demo/',
      //   title: 'Demo',
      //   description:
      //     'Machen Sie eine Bestellung und erfahren dabei den Zahlungsablauf.',
      // },
    ],
  },
  // {
  //   title: 'Über',
  //   items: [
  //     {
  //       title: 'Uns',
  //       href: '/de/ueber-uns/',
  //       description: 'Was treibt uns an? Worauf legen wir wert?',
  //     },
  //     {
  //       href: '/de/team/',
  //       title: 'Team',
  //       description: 'Wer versteckt sich hinter der Persona?',
  //     },
  //     {
  //       href: '/de/blog/',
  //       title: 'Blog',
  //       description: 'Der neuste Gossip, der gerade die Runden macht.',
  //     },
  //   ],
  // },
  //{
    //title: 'Preise',
    //href: '/de/preise/',
  //},
  {
    href: '/fr/démo/', 
    title: 'Essayez la démo',
  },
  {
    href: '/fr/termin/',
    title: 'Prendre rendez-vous',
  },
  {
    href: '/fr/kontakt/',
    title: 'Contacter',
  },
]

const navigationEn: NavigationTree = [
  {
    title: 'Demo',
    href: '/en/demo/',
  },
  // {
  //   title: 'About',
  //   items: [
  //     {
  //       title: 'Team',
  //       href: '/en/team/',
  //       description: 'Who is hiding behind the persona?',
  //     },
  //     {
  //       title: 'Blog',
  //       href: '/en/blog/',
  //       description: 'The latest gossip doing the rounds.',
  //     },

  //     {
  //       title: 'Mission',
  //       href: '/en/mission/',
  //       description: 'What is our mission? What drives us?',
  //     },
  //   ],
  // },
  { title: 'Contact', href: '/en/contact/' },
]

export const globalNavigation: Navigation = {
  de: navigationDe,
  fr: navigationFr,
  en: navigationEn,
  it: []
}

const siteMapDe: SiteMapGroup[] = [
  {
    title: 'Produkt',
    items: [
      {
        title: 'Digitale Speisekarte',
        href: '/de/digitale-speisekarte/',
      },
      {
        title: 'Restaurant Bestell App',
        href: '/de/restaurant-bestell-app/',
      },
      {
        title: 'Funktionsumfang',
        href: '/de/funktionsumfang/',
      },
      //{
        //title: 'Preise',
        //href: '/de/preise/',
      //},
      {
        href: '/de/demo/',
        title: 'Demo',
      },
    ],
  },
  // {
  //   title: 'Über',
  //   items: [
  //     {
  //       title: 'Uns',
  //       href: '/de/ueber-uns/',
  //     },
  //     {
  //       href: '/de/team/',
  //       title: 'Team',
  //     },
  //     {
  //       href: '/de/blog/',
  //       title: 'Blog',
  //     },
  //     {
  //       href: '/de/kontakt/',
  //       title: 'Kontakt',
  //     },
  //   ],
  // },
  {
    title: 'Highlights',
    items: [
      {
        title: 'Take Away und Delivery',
        href: '/de/takeaway-delivery/',
      },
      {
        title: 'Online Speisekarte',
        href: '/de/online-speisekarte/',
      },
      {
        title: 'Gäste-Rufsystem',
        href: '/de/gaeste-rufsystem/',
      },
      {
        title: 'Payflink oder Orderman',
        href: '/de/orderman/',
      },
    ],
  },
  {
    title: 'Dokumentation',
    items: [
      {
        title: 'Bestell- und Zahlungsablauf',
        href: '/de/bestell-und-zahlungs-ablauf-gastro-betriebe/',
      },
      {
        title: 'Inbetriebnahme von Payflink',
        href: '/de/dokumentation/inbetriebnahme-payflink/',
      },
      {
        title: 'Speisekarte bearbeiten',
        href: '/de/dokumentation/speisekarten-angebot-bearbeiten/',
      },
      {
        title: 'Online Speisekarte erstellen',
        href: '/de/dokumentation/online-speisekarte-erstellen/',
      },
      {
        title: 'Online Speisekarte gestalten',
        href: '/de/dokumentation/online-speisekarte-gestalten/',
      },
    ],
  },
]

export const siteMap: I18nSiteMap = {
  de: siteMapDe,
  fr: siteMapDe,
  en: [],
  it: [],
}

const footerDe: FooterInfo = {
  aProductOf: 'Ein Produkt von',
  city: 'Luzern • Schweiz',
  inquiries: 'Anfragen',
  newsletter: 'Newsletter abonnieren',
  or: 'oder',
  appointment: {
    title: 'Termin buchen',
    url: '/de/termin/',
  },
}

const footerEn: FooterInfo = {
  aProductOf: 'A product of',
  city: 'Lucerne • Switzerland',
  inquiries: 'Inquiries',
  newsletter: 'Subscribe to newsletter',
  or: 'or',
  appointment: {
    title: 'book an appointment',
    url: '/en/appointment/',
  },
}

export const footer: I18nFooterInfo = {
  de: footerDe,
  fr: footerDe,
  en: footerEn,
  it: footerEn,
}
