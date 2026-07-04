---
mode: agent
description: "Scaffold a new bilingual level (EN + PT-BR) following the guide's conventions."
---

# Create a new level

Create a new learning level for **both** languages, keeping English (`en/`) and
Portuguese (`pt-br/`) in parity.

Ask me for (if not already provided):

1. The **world** it belongs to (e.g. World 3 — Sky).
2. The **level number and topic** (e.g. `3-12` — "Feature Flags").
3. The **core concept** to teach.

Then:

1. Create the English file under the correct `en/world-*/` folder and the
   matching Portuguese file under `pt-br/world-*/`, using the world's existing
   naming pattern.
2. Add valid YAML frontmatter to each: `title`, `description`, `author`, `date`
   (today), `version` (`1.0.0`), `status` (`draft`), `tags`.
3. Structure each level to match the surrounding levels in that world — open
   with a Super Mario World analogy, then teach the real concept in plain
   language, and include a Table of Contents and Change Log if the world uses
   them.
4. Use relative links to related levels. Prefer SVG for any diagram.
5. **Do not fabricate data.** If you cite a metric or fact, link a credible
   source and add a **References** section. Otherwise omit the claim.
6. Report which files you created and confirm EN and PT-BR are in parity.

Follow the repository's [content style instructions](../instructions/content-style.instructions.md).
