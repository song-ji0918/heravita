<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Architecture rules
- The user's original site lives unmodified under src/original; iterate by adding, not rewriting, because the user requires their existing code to stay the base.
- `react-router-dom` is aliased to src/router-compat.tsx (vite.config.ts) so original imports run on TanStack Router without editing them.
- Each original page has a thin TanStack route (ssr: false via src/original-page.tsx) because the original i18n reads localStorage at load.
- Files over 10 MB (video, fonts) are hosted via lovable-assets and referenced by URL, because the repo rejects large files.
- The original App.tsx, main.tsx, tests and docs are kept for reference in original-source/.
- New HeraVita pages live under src/heravita/<page> with flat routes (e.g. global_.phuket.tsx, global_.phuket_.booking.tsx) so the original /global page stays an untouched leaf.
- Content-rich destinations may use an editorial overview plus focused child pages for networks and consultation, because this preserves full-screen restraint without compressing important content.
