# Swaraj Chandra Biswas — Portfolio (Angular)

A professional, single-page developer portfolio built with **Angular 19** (standalone components + signals) and ready to deploy to **GitHub Pages**.

Live (once deployed): https://Swaraj44.github.io/Portfolio/

## Sections

- **Hero** — Intro, CTAs, social links, and résumé download
- **About Me** — Background, education, and headline stats
- **Experience** — Roles at Millennium Information Solution Ltd. and Shanghai BDCOM
- **Skills** — Languages, web tech, databases, tools & ML
- **Projects** — Featured projects with tech tags and GitHub/demo links
- **Contact** — mailto form and contact details

## Tech Stack

- Angular 19 (standalone APIs, signals, built-in `@for`/`@if` control flow)
- TypeScript, SCSS
- Font Awesome 6 (via CDN)
- Inter font (Google Fonts)

## Prerequisites

- Node.js 18.19+ (tested on Node 22)

## Getting Started

```bash
# install dependencies
npm install

# run the dev server (http://localhost:4200)
npm start
```

## Building for Production

```bash
npm run build
```

Output is written to `dist/portfolio-angular/browser/`. The production build uses
`baseHref: /Portfolio/` (configured in `angular.json`), which matches a project site at
`https://<user>.github.io/Portfolio/`.

## Deploying to GitHub Pages

The quickest path is the included one-command deploy (builds, then publishes the `browser/`
output to the `gh-pages` branch via [`angular-cli-ghpages`](https://github.com/angular-schule/angular-cli-ghpages)):

```bash
# make sure you are authenticated with GitHub (gh / git credentials)
npm run deploy:gh
```

Manual alternative:

```bash
npm run build
# then publish dist/portfolio-angular/browser to your gh-pages branch
npx angular-cli-ghpages --dir=dist/portfolio-angular/browser
```

> If your repository is a **user/organization site** (named `<user>.github.io`) instead of a
> project site, change `baseHref` in `angular.json` from `/Portfolio/` to `/`.

## Customizing Content

All copy and data live in one place — edit **`src/app/data/portfolio.data.ts`** to update your
profile, about text, stats, experience, skills, and projects. Images live under `public/assets/`
(`images/profile`, `images/projects`, `docs`, `icons`).

## Project Structure

```
portfolio-angular/
├── src/
│   ├── index.html               # Title, meta, base href, CDN links
│   ├── main.ts                  # Bootstrap entry
│   ├── styles.scss              # Global styles (all sections)
│   └── app/
│       ├── app.component.*      # Composes all sections
│       ├── app.config.ts        # Providers
│       ├── data/
│       │   └── portfolio.data.ts# ← edit content here
│       ├── models/              # TypeScript interfaces
│       ├── services/
│       │   └── scroll.service.ts# Smooth section scrolling
│       └── components/
│           ├── navbar/
│           ├── hero/
│           ├── about/
│           ├── experience/
│           ├── skills/
│           ├── projects/
│           ├── contact/
│           └── footer/
├── public/
│   └── assets/                  # Images, icons, résumé PDF
└── angular.json                 # baseHref + build config
```

## Author

**Swaraj Chandra Biswas** — [GitHub](https://github.com/Swaraj44) · [LinkedIn](https://www.linkedin.com/in/swaraj-chandra-biswas/)

## License

MIT
