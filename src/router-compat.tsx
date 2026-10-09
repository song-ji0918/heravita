// Compatibility layer: lets the original site's `react-router-dom` imports run on TanStack Router
// without editing the original files (aliased in vite.config.ts).
import { Link as TLink, useLocation as useTLocation, useNavigate as useTNavigate } from "@tanstack/react-router";
import { forwardRef, type AnchorHTMLAttributes } from "react";

function split(to: string) {
  const [path, hash] = to.split("#");
  return { to: path || "/", hash: hash || undefined };
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string; replace?: boolean };

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({ to, replace, ...rest }, ref) {
  const t = split(to);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <TLink ref={ref} to={t.to as any} hash={t.hash} replace={replace} {...(rest as any)} />;
});

export function useLocation() {
  const l = useTLocation();
  return { pathname: l.pathname, search: l.searchStr, hash: l.hash ? `#${l.hash}` : "", state: l.state, key: l.href };
}

export function useNavigate() {
  const nav = useTNavigate();
  return (to: string | number, opts?: { replace?: boolean }) => {
    if (typeof to === "number") return window.history.go(to);
    const t = split(to);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return nav({ to: t.to as any, hash: t.hash, replace: opts?.replace });
  };
}
