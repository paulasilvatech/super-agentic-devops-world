# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

> Node.js 20+ is required (see [`.nvmrc`](../.nvmrc)). This project uses **npm** with a committed `package-lock.json`.

## Installation

```bash
npm ci
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static content hosting service. Run `npm run typecheck` to validate TypeScript.

## Deployment

Deployment is **automated** via GitHub Actions: every push to `main` that touches `website/**` triggers [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages at <https://paulasilvatech.github.io/super-agentic-devops-world/>.

To preview a production build locally:

```bash
npm run build && npm run serve
```
