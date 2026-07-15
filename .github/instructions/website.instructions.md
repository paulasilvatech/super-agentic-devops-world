---
applyTo: "website/**/*.{ts,tsx,js,jsx,css}"
description: "Coding rules for the Docusaurus website."
---

# Website coding rules

These rules apply to the Docusaurus app under `website/`.

- **Runtime:** Node.js 20+. Use **npm** only — there is a committed
  `package-lock.json`. Do not introduce yarn or pnpm.
- **Validate before finishing:** run `npm run typecheck` and `npm run build`;
  both must pass. CI runs the same on every PR that touches `website/**`.
- **TypeScript first.** Prefer typed React function components and hooks. Avoid
  `any`; type props and Docusaurus theme APIs properly.
- **Follow `.editorconfig`:** LF line endings, UTF-8, 2-space indentation.
- **Assets are SVG** whenever possible (crisp at any resolution).
- **Accessibility:** provide `alt` text for images, keep semantic HTML, and
  preserve keyboard navigation.
- **Don't hardcode the deployment identity.** The site owner/URL
  (`paulasilvatech`, base URL `/super-agentic-devops-world/`) lives in
  `docusaurus.config.ts`; don't scatter it elsewhere.
- **Don't commit build output** (`website/build/`, `website/.docusaurus/`) or
  `node_modules/`.
