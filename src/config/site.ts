/**
 * Central site configuration.
 *
 * Everything that depends on where the site is deployed lives here, so a
 * rename of the GitHub repository (or a move to a custom domain) is a one-line
 * change instead of a find-and-replace across the codebase.
 */

/** Sub-path the site is served from on GitHub Pages (no trailing slash).
 *  '/' for a user/organization page (ragdoll-drop.github.io). */
export const BASE_PATH = '/';

/** Origin of the deployment. Keep in sync with `site` in astro.config.mjs. */
export const SITE_ORIGIN = 'https://ragdoll-drop.github.io';

export const SITE = {
  name: 'Ragdoll Drop Online',
  /** Used inside <title> when the page title is not the brand itself. */
  tagline: 'Play Ragdoll Drop Free in Your Browser',
  description:
    'Play Ragdoll Drop online for free — a physics arcade game where you launch a floppy ragdoll down 15 trap-filled levels, chain bone-breaking impacts and spend the coins on crazier vehicles. No download, no login.',
  locale: 'en_US',
  twitter: '@ragdolldrop',
  /** Date of the game build the player currently streams. */
  gameUpdated: 'November 2026',
  /** Studio behind the game. */
  author: 'Ericetto',
  authorUrl: 'https://poki.com/en/developer/ericetto',
  themeColor: '#140f1d',
  /** Descriptive tags reused by cards and structured data. */
  genres: ['Arcade', 'Physics', 'Action', 'Simulation'],
  /** Age rating shown on the official listing. */
  ageRating: '10+',
} as const;

/**
 * The game itself. This repository does not host the build: the player embeds
 * the original Ericetto Unity WebGL scene, streamed from the CDN that mirrors
 * the release, so the site stays small and patches arrive on their own.
 *
 * The URL contains a build hash. If the player ever stops loading, find a
 * current public embed of the same game and update this one constant — the
 * rest of the site only ever reads GAME_SRC.
 */
export const GAME_EMBED_URL =
  'https://cdn.unblocked-games-free.com/games/5488/ohWNxTR0IUQpVGb1/449299/i993hx3a278c0nuusix2xhww83j3vuhm/index.html';

/** Official listing, also used as the fallback player and the credit link. */
export const GAME_OFFICIAL_URL = 'https://poki.com/en/g/ragdoll-drop';

/** Studio page for the developer. */
export const GAME_DEVELOPER_URL = 'https://poki.com/en/developer/ericetto';

/**
 * Prefix a site-relative path with the deployment base path and normalise the
 * trailing slash so internal links never trigger a GitHub Pages redirect.
 *
 *   href('/about')  -> '/about/'      (root deployment)
 *   href('/about')  -> '/repo/about/' (project-page deployment)
 *   href('/play?x') -> '/play/?x'
 */
export function href(path = '/'): string {
  const [pathname, ...rest] = path.split(/(?=[?#])/);
  let p = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (!p.endsWith('/') && !/\.[a-z0-9]+$/i.test(p)) p = `${p}/`;
  const withBase = BASE_PATH === '/' ? p : p === '/' ? `${BASE_PATH}/` : `${BASE_PATH}${p}`;
  return rest.length ? `${withBase}${rest.join('')}` : withBase;
}

/** Same as `href()` but never appends a trailing slash (files, iframes). */
export function asset(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return BASE_PATH === '/' ? p : `${BASE_PATH}${p}`;
}

/** Absolute URL for canonical tags, Open Graph and structured data. */
export function absolute(path = '/'): string {
  return new URL(href(path), SITE_ORIGIN).toString();
}

/** Absolute URL for a static asset. */
export function absoluteAsset(path: string): string {
  return new URL(asset(path), SITE_ORIGIN).toString();
}

/** The game entry point used by the player iframe. */
export const GAME_SRC = GAME_EMBED_URL;
