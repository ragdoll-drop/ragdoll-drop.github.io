# Ragdoll Drop Online

<https://ragdoll-drop.github.io/> — a static Astro site that plays Ragdoll Drop
in the browser, plus written guides to the launch, the scoring, the shop and the
fifteen levels.

## The game

Ragdoll Drop is developed by [Ericetto](https://poki.com/en/developer/ericetto)
and listed on [Poki](https://poki.com/en/g/ragdoll-drop).

This repository **does not host the game build**. The player embeds a public CDN
copy of the original Unity WebGL scene in an iframe (see `GAME_EMBED_URL` in
`src/config/site.ts`), which keeps the site small and means patches are picked up
automatically. The trade-off: the player needs a live connection to that CDN, and
the public build ships with Russian interface menus (the guides translate them).

If the embed ever stops loading, the build hash inside `GAME_EMBED_URL` has
changed. Find a current public embed of the same game and update that one
constant.

This site is unofficial and not affiliated with or endorsed by the studio.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the built output
```

Node 22.23+ is required (`engines` in `package.json`).

## Structure

```
src/
  config/site.ts        brand, origin, game embed URLs, href() helpers
  i18n/                 UI strings + lang helpers (English only today)
  data/pages.ts         all long-form copy: home + guide/privacy/terms pages
  components/game/      click-to-load player
  components/layout/    header, footer
  components/ui/        steps, tables, feature grid, FAQ accordion
  layouts/              BaseLayout (head/SEO), PageLayout (article frame)
  pages/                index + [slug] dynamic route + 404
public/                 poster, OG image, icons, robots.txt, llms.txt, .nojekyll
```

Pages are generated from `src/data/pages.ts`: add an entry there and it appears
at `/<slug>/`, in the sitemap and in the nav if you also add it to `Header` and
`PAGE_SLUGS`.

## Deployment

GitHub Pages serves this repository from the `main` branch root with Jekyll
disabled by `public/.nojekyll` (which becomes `dist/.nojekyll`).

- `main` holds the **built site** (what GitHub Pages serves).
- `source` holds the Astro source.

To publish a change:

```bash
git checkout source
# edit, then
npm run build
# copy dist/ over the main branch and push
```

## Licence

Site code: AGPL-3.0 (see `LICENSE`). Game name, artwork and build belong to
Ericetto; the poster illustration on this site is original.
