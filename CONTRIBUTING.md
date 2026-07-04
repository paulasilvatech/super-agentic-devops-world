# Contributing to Super Agentic DevOps World

First off — thank you for wanting to help! 🎮 This project teaches Agentic DevOps
and AI Agents through Super Mario World analogies so that **anyone** can learn,
regardless of background. Contributions that keep it accurate, welcoming, and
jargon-free are hugely appreciated.

By participating, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 🗺️ Repository layout

| Path | What it is |
|:--|:--|
| [`en/`](en/) | English guide — the source of truth for EN content (8 worlds, ~70 levels) |
| [`pt-br/`](pt-br/) | Portuguese (Brazil) guide — must stay in parity with `en/` |
| [`diagrams/svg/`](diagrams/svg/) | Shared SVG diagrams (language-neutral) |
| [`website/`](website/) | Docusaurus site published to GitHub Pages |
| [`website/docs/`](website/docs/) | Docusaurus mirror of the guide (currently EN) |
| [`BRAND_GUIDE.md`](BRAND_GUIDE.md) | Colors, fonts, and visual identity |

---

## 🧩 Ways to contribute

- **Fix content** — typos, broken links, outdated facts, unclear explanations.
- **Improve analogies** — make a Mario metaphor land better.
- **Translate / sync** — keep `en/` and `pt-br/` in sync, or improve a translation.
- **Diagrams** — improve or add SVG diagrams (professional quality, see the brand guide).
- **Website** — Docusaurus components, styling, search, accessibility.

> [!TIP]
> Not sure where to start? Look for issues labeled
> [`good first issue`](https://github.com/paulasilvatech/super-agentic-devops-world/labels/good%20first%20issue).

---

## ✍️ Content conventions

1. **Explain every concept with an analogy.** No jargon without a plain-language
   explanation. Every developer starts at World 1‑1.
2. **Bilingual parity.** If you change a level in `en/`, apply the equivalent
   change to the matching file in `pt-br/` (and vice‑versa). If you can only do
   one language, say so in your PR so a maintainer can follow up.
3. **Keep frontmatter valid.** Every level file starts with YAML frontmatter:

   ```yaml
   ---
   title: "Level X-Y — ..."
   description: "One-sentence summary."
   author: "Your Name | Optional Role"
   date: "YYYY-MM-DD"
   version: "1.0.0"
   status: "draft" # or "review" / "published"
   tags: ["agentic-devops", "mario", "world-N", "topic"]
   ---
   ```

4. **Use relative links** between guide files so they work on GitHub and on the site.
5. **Images and icons are SVG** whenever possible (crisp at any size).
6. **Never fabricate data.** Metrics, statistics, ROI, or research claims must
   cite a credible source with a link. If there is no source, omit the claim or
   mark it clearly as an assumption. Add sources to a **References** section.

---

## 💻 Working on the website

Node.js 20+ is required (see [`.nvmrc`](.nvmrc)). This repo uses **npm**.

```bash
cd website
npm ci            # install exactly from package-lock.json
npm start         # local dev server with hot reload
npm run build     # production build (must succeed before you open a PR)
npm run typecheck # TypeScript validation
```

CI runs `npm run build` and `npm run typecheck` on every pull request that
touches `website/**` — please make sure both pass locally first.

---

## 🔀 Pull request process

1. **Fork** the repo and create a branch from `main`
   (e.g. `fix/world-3-docker-typo` or `feat/world-9-idea`).
2. Make your change, keeping EN/PT‑BR in parity.
3. If you touched the website, run `npm run build` and `npm run typecheck`.
4. Open a PR and fill in the template. Link any related issue
   (e.g. `Closes #123`).
5. A maintainer will review. CI must be green before merge.

### Commit messages

We loosely follow [Conventional Commits](https://www.conventionalcommits.org/):

```text
type(scope): short summary

fix(world-3): correct Docker layer explanation
feat(website): add copy-to-clipboard on code blocks
docs(pt-br): sync world-5 with english updates
```

Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`, `ci`.

---

## 🐛 Reporting issues

Use the [issue templates](https://github.com/paulasilvatech/super-agentic-devops-world/issues/new/choose):

- **Content issue** — something is wrong, unclear, or a link is broken.
- **Translation** — EN/PT‑BR mismatch or a translation improvement.
- **Website bug** — the site is broken or renders incorrectly.
- **New level / topic** — suggest something to add.

For anything security‑related, follow [SECURITY.md](SECURITY.md) instead of
opening a public issue.

---

Thanks again for helping make tech education more accessible. **Press START.** 🍄
