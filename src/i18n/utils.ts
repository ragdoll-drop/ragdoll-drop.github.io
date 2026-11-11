/**
 * i18n helpers.
 *
 * All helpers are aware of the GitHub Pages base path, so they work both in
 * development (`/`) and on a project page (`/repo/`).
 */

import { BASE_PATH, href } from '../config/site';
import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** Remove the deployment base path from a pathname. */
export function stripBase(pathname: string): string {
  if (BASE_PATH === '/') return pathname;
  const stripped = pathname.startsWith(BASE_PATH) ? pathname.slice(BASE_PATH.length) : pathname;
  return stripped.startsWith('/') ? stripped : `/${stripped}`;
}

/** Extract the current language from the URL pathname. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = stripBase(url.pathname).split('/');
  if (first && first in ui) return first as Lang;
  return defaultLang;
}

/** Returns a translation function for the given language. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)?.[key] ?? ui[defaultLang][key];
  };
}

/**
 * Build a link for a language.
 * - en (default): `/how-to-play/`
 * - es: `/es/how-to-play/`
 * Both are prefixed with the deployment base path.
 */
export function localizedHref(lang: Lang, path = '/'): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  // Single-locale site: every language resolves to the same path. Kept as a
  // function so adding a locale later only touches this file.
  if (lang === defaultLang) return href(p);
  return href(p === '/' ? `/${lang}` : `/${lang}${p}`);
}

/** Language-independent path of the current URL, without base or locale. */
export function currentPathWithoutLocale(url: URL): string {
  const path = stripBase(url.pathname);
  const locale = (Object.keys(ui) as Lang[]).find(
    (lang) => lang !== defaultLang && new RegExp(`^/${lang}(?=/|$)`).test(path)
  );
  const stripped = locale ? path.replace(new RegExp(`^/${locale}`), '') : path;
  return stripped === '' ? '/' : stripped;
}

/** Alternates for hreflang tags: the same page in every language. */
export function alternatesFor(url: URL): { lang: Lang; href: string }[] {
  const path = currentPathWithoutLocale(url);
  return (Object.keys(ui) as Lang[]).map((lang) => ({
    lang,
    href: localizedHref(lang, path),
  }));
}

/** Map a language code to the value expected by hreflang. */
export function hreflangCode(lang: Lang): string {
  switch (lang) {
    case 'en':
    default:
      return 'en-US';
  }
}
