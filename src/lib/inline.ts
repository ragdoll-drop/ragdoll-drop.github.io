/**
 * Minimal inline renderer for the copy stored in src/data/pages.ts.
 *
 * Supports one construct — `[anchor](/path)` — which is escaped, resolved
 * against the deployment base path, and turned into a real link. Everything
 * else is treated as text and HTML-escaped, so no page copy can inject markup.
 */

import { href } from '../config/site';

const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function inlineToHtml(input: string): string {
  const escaped = escapeHtml(input);
  return escaped.replace(LINK_PATTERN, (_match, text: string, url: string) => {
    const target = url.startsWith('http') ? url : href(url);
    const external = url.startsWith('http');
    const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a href="${target}"${attrs}>${text}</a>`;
  });
}
