export interface NavigationItem {
  href: string
  title: string
  description?: string
}

export interface NavigationGroup {
  title: string
  items: NavigationItem[]
}

export type GlobalNavigation = (NavigationItem | NavigationGroup)[]

export const globalNavigation: GlobalNavigation = [
  {
    title: 'Produkt',
    items: [
      {
        href: '/de/funktion/',
        title: "So funktioniert's",
        description:
          'Beschreibung, wie das Bestellen und Bezahlen mit Gaston funktioniert.',
      },
      {
        href: '/de/offers/',
        title: 'Funktionsumfang',
        description: 'Detaillierte Auflistung aller Funktionen von Gaston.',
      },
    ],
  },
  {
    title: 'Über',
    items: [
      {
        href: '/de/about/',
        title: 'Team',
        description: 'Wer versteckt sich hinter der Persona?',
      },
      {
        href: '/de/blog/',
        title: 'Blog',
        description: 'Der neuste Gossip, der gerade die Runden macht.',
      },
    ],
  },
  {
    title: 'Angebot',
    href: '/de/offers/',
  },
  {
    href: '/de/contact/',
    title: 'Kontakt',
    description:
      'Looking for inspiration? Explore these awesome sites built with Astro.',
  },
]
