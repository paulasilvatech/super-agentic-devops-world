# Copilot Instructions — Super Agentic DevOps World

These are repository-wide instructions for GitHub Copilot. They apply to all
chat and code-generation requests in this repo.

## What this repo is

A **bilingual (English + Brazilian Portuguese) educational guide** that teaches
Agentic DevOps and AI Agents through **Super Mario World analogies**, plus a
[Docusaurus](https://docusaurus.io/) website deployed to GitHub Pages. It is
content-first — most files are Markdown lessons ("levels") organized into 8
"worlds".

## Structure

- `en/` — English guide (source of truth for EN).
- `pt-br/` — Portuguese guide (keep in parity with `en/`).
- `diagrams/svg/` — shared, language-neutral SVG diagrams.
- `website/` — Docusaurus app; `website/docs/` mirrors the guide (EN for now).

## How to write content here

- **Teach with analogies.** Explain every concept in plain language, as if to a
  beginner on World 1‑1. Never use jargon or acronyms without explaining them.
- **Stay bilingual.** When you edit a level in `en/`, make the equivalent edit in
  the matching `pt-br/` file (and vice versa). If you only do one language, say so.
- **Keep frontmatter valid.** Level files start with YAML frontmatter:
  `title`, `description`, `author`, `date`, `version`, `status`, `tags`.
- **Use relative links** between guide files.
- **Prefer SVG** for images, icons, and diagrams.
- **Match the playful-but-precise tone** already used in the worlds (Mario
  framing, but technically correct).

## Never fabricate data

Do **not** invent metrics, statistics, ROI, benchmarks, market data, or quotes.
Any data claim must cite a credible source (Microsoft Learn, official vendor
docs, Gartner, Forrester, IDC, McKinsey) with a hyperlink. If there is no
source, omit the claim or mark it clearly as an assumption, and add a
**References** section.

## Website / code changes

- Node.js 20+, **npm** (there is a `package-lock.json`; do not switch to yarn/pnpm).
- Validate with `cd website && npm run build && npm run typecheck`.
- Follow `.editorconfig` (LF, UTF-8, 2-space indent) and `.markdownlint.json`.

## Don't

- Don't break internal cross-links between levels.
- Don't leave EN and PT-BR out of sync.
- Don't commit `node_modules/` or `website/build/`.
- Don't change the deployment owner/URL (`paulasilvatech`) unless the repo moves.
