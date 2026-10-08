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


## Application architecture
- Use TanStack file-based public leaf routes for brand, destinations, and journey content, with Outlet-only parent routes; this keeps direct links and page-specific metadata reliable.
- Shared HeraVita presentation modules live under components/heravita, with semantic global CSS tokens; this keeps the brand consistent across pages.
- Journey specifications live in one browser-safe data module and drive cards, details and rule tests; this prevents contradictory durations.
- Concierge requests use a shared Zod schema and a public insert-only createServerFn with a handler-local privileged client; this stores private leads without exposing visitor reads or server secrets.
