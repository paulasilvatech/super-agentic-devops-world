# AGENTS.md

Guidance for AI coding agents (GitHub Copilot, and any tool that reads
`AGENTS.md`) working in this repository. Humans should read
[CONTRIBUTING.md](CONTRIBUTING.md) instead.

## What this project is

**Super Agentic DevOps World** is a bilingual (English + Brazilian Portuguese)
educational guide that teaches Agentic DevOps, AI Agents, and modern software
development through **Super Mario World analogies**. It is content-first, with a
[Docusaurus](https://docusaurus.io/) website that publishes to GitHub Pages.

## Repository map

| Path | Purpose |
|:--|:--|
| `en/` | English guide — source of truth for EN (8 worlds, ~70 levels) |
| `pt-br/` | Portuguese guide — must stay in parity with `en/` |
| `diagrams/svg/` | Shared, language-neutral SVG diagrams |
| `website/` | Docusaurus app (config, sidebars, React components) |
| `website/docs/` | Docusaurus mirror of the guide content (currently EN) |
| `BRAND_GUIDE.md` | Colors, fonts, visual identity |

## Golden rules

1. **Keep the two languages in parity.** A change to a level in `en/` must be
   mirrored in the matching `pt-br/` file, and vice versa. If you can only do
   one, state that explicitly in your summary.
2. **Every concept needs a plain-language analogy.** Never introduce jargon
   without explaining it. Assume the reader is a total beginner starting at
   World 1‑1.
3. **Never fabricate data.** Metrics, statistics, ROI figures, market data, and
   research claims must cite a credible source (Gartner, Forrester, IDC,
   McKinsey, Microsoft Learn, official vendor docs) with a hyperlink. If no
   source exists, omit the claim or clearly mark it as an assumption. Every
   document that makes data claims needs a **References** section.
4. **Preserve frontmatter.** Level files begin with YAML frontmatter
   (`title`, `description`, `author`, `date`, `version`, `status`, `tags`).
   Keep it valid.
5. **Images and icons are SVG** whenever possible (crisp, professional).
6. **Use relative links** between guide files so they resolve both on GitHub and
   on the built site.

## Build & validate

Node.js 20+ (see [`.nvmrc`](.nvmrc)). This repo uses **npm** with a committed
`package-lock.json`.

```bash
cd website
npm ci             # install from lockfile
npm start          # local dev server
npm run build      # production build — MUST pass before opening a PR
npm run typecheck  # TypeScript validation
```

Markdown is linted with [`.markdownlint.json`](.markdownlint.json). Run it with:

```bash
npx --yes markdownlint-cli2 "**/*.md" "#website/node_modules"
```

## CI expectations

Pull requests are validated by GitHub Actions:

- **`ci.yml`** — builds the website and runs `typecheck` when `website/**`
  changes.
- **`markdownlint.yml`** — lints Markdown when `**/*.md` changes.
- **`links.yml`** — a scheduled link check (opens an issue on failure).
- **`deploy.yml`** — deploys to GitHub Pages on push to `main`.

Make sure the relevant checks pass locally before proposing changes.

## Things NOT to do

- Do not break internal cross-links between levels.
- Do not edit only one language and leave the other stale.
- Do not add unexplained acronyms or vendor jargon.
- Do not invent numbers, benchmarks, or quotes.
- Do not commit `node_modules/` or the `website/build/` output.
- Do not change the deployment owner/URL config (`paulasilvatech`) unless the
  repository actually moves.
