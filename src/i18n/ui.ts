/**
 * UI strings for the site chrome (navigation, footer, game player).
 * Long-form page copy lives in src/data/pages.ts.
 *
 * The site ships in English only; the dictionary is still keyed by language so
 * adding a locale later is a matter of adding one entry to `languages` plus a
 * matching block below.
 */

export const languages = {
  en: 'English',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.home': 'Play',
    'nav.howToPlay': 'How to Play',
    'nav.controls': 'Controls',
    'nav.tips': 'Tips & Tricks',
    'nav.unblocked': 'Unblocked',
    'nav.about': 'About',
    'nav.more': 'More',
    'nav.menu': 'Menu',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.mainNav': 'Main navigation',
    'nav.mobileNav': 'Mobile navigation',

    'cta.playNow': 'Play Now',
    'cta.playFree': 'Play Ragdoll Drop',
    'cta.browseGuides': 'Browse the guides',

    'game.frameTitle': 'Ragdoll Drop game',
    'game.posterAlt':
      'A floppy cartoon ragdoll on a skateboard tumbling down a staircase towards a spinning blade',
    'game.play': 'Play Ragdoll Drop',
    'game.playHint':
      'The game loads in the page. Hold the round button to charge the launch, release to drop, tap again to jump.',
    'game.loading': 'Loading Ragdoll Drop…',
    'game.loadingNote':
      'The first load pulls the full 3D scene from the CDN, so give it a few seconds on a slow connection.',
    'game.fullscreen': 'Fullscreen',
    'game.exitFullscreen': 'Exit fullscreen',
    'game.failed': 'The game could not start. Reload the page, or open it on the official listing.',
    'game.openTab': 'Open in a new tab',
    'game.reload': 'Reload game',
    'game.hostedNote':
      'The game is streamed from a public CDN copy of the release. Ragdoll Drop is made by',

    'common.home': 'Home',
    'common.updated': 'Last updated',
    'common.readGuide': 'Read the full guide',
    'common.relatedPages': 'Keep reading',
    'common.onThisPage': 'On this page',
    'common.backToGame': 'Back to the game',
    'common.faqTitle': 'Frequently asked questions',

    'footer.about': 'About Ragdoll Drop Online',
    'footer.aboutText':
      'A free browser home for Ragdoll Drop, the physics arcade game about launching a floppy ragdoll down fifteen trap-filled levels. No download, no account, no install.',
    'footer.game': 'Game',
    'footer.guides': 'Guides',
    'footer.site': 'Site',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.credit':
      'Ragdoll Drop is developed by Ericetto. This site is an unofficial fan page and is not affiliated with or endorsed by the studio.',
    'footer.official': 'Official listing:',
    'footer.builtWith': 'Built with Astro',

    'notFound.title': 'Page not found',
    'notFound.text':
      'That page does not exist — but the ragdoll is still one click away. Head back to the game.',
    'notFound.cta': 'Play Ragdoll Drop',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
