---
applyTo: "en/**/*.md,pt-br/**/*.md"
description: "Writing rules for the bilingual Super Mario World learning guide (levels/worlds)."
---

# Content style — guide levels

These rules apply to every level in `en/` and `pt-br/`.

## Voice & teaching

- Teach with **Super Mario World analogies**, but stay technically correct.
- Explain every concept in plain language for a complete beginner. Never use an
  acronym or jargon term without expanding and explaining it the first time.
- Keep the tone playful but precise — the reader should learn the real thing,
  not just the metaphor.

## Structure of a level

- Start with valid YAML frontmatter: `title`, `description`, `author`, `date`,
  `version`, `status`, `tags`.
- Follow the existing pattern used across the worlds (intro hook → sections →
  recap). Where levels include a **Table of Contents** and a **Change Log**,
  keep them.
- Use relative links to other levels so they work on GitHub and on the site.
- Prefer SVG for any diagram or icon.

## Bilingual parity (required)

- Every change to an English level must be mirrored in the matching
  `pt-br/` file, and vice versa.
- File names differ per world; match the **equivalent** level, not the literal
  filename.
- If you can only update one language, state that clearly so a maintainer can
  finish the other side.

## Never fabricate data

- Do not invent metrics, statistics, ROI, benchmarks, market data, or quotes.
- Any data claim must link to a credible source (Microsoft Learn, official
  vendor docs, Gartner, Forrester, IDC, McKinsey).
- If there is no source, omit the claim or clearly mark it as an assumption, and
  add a **References** section with the source links.
