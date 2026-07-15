# Security Policy

## Project scope

**Super Agentic DevOps World** is primarily an educational content project plus a
static [Docusaurus](https://docusaurus.io/) website published to GitHub Pages.
There is no backend, database, or user data. The most relevant security surface
is therefore:

- **Build/CI dependencies** of the website (`website/package.json`).
- **GitHub Actions workflows** in [`.github/workflows/`](.github/workflows/).
- Any embedded links or content that could point somewhere unsafe.

## Supported versions

Only the latest state of the `main` branch (and the site it deploys) is
supported. We do not backport fixes to older tags.

| Version | Supported |
|:--|:--:|
| `main` (latest) | ✅ |
| older tags / forks | ❌ |

## Reporting a vulnerability

**Please do not open a public issue for security problems.**

Instead, report privately using GitHub's built‑in private vulnerability
reporting:

1. Go to the **[Security → Advisories](https://github.com/paulasilvatech/super-agentic-devops-world/security/advisories/new)** page.
2. Click **"Report a vulnerability"** and provide:
   - a description of the issue and its impact,
   - steps to reproduce (or a proof of concept),
   - affected files, dependencies, or workflows.

You can also reach the maintainer via
[GitHub (@paulanunes85)](https://github.com/paulanunes85).

### What to expect

- We aim to acknowledge reports within a few business days.
- We will investigate, keep you updated on progress, and credit you in the fix
  (unless you prefer to remain anonymous).
- Please give us a reasonable window to address the issue before any public
  disclosure.

## Dependencies

Dependency updates are automated via
[Dependabot](.github/dependabot.yml). If you spot a vulnerable dependency that
Dependabot has not flagged, please report it using the process above.

Thank you for helping keep this project and its readers safe. 🛡️
