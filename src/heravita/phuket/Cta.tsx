import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import "@/original/components/HomeNarrative/HomeNarrative.css";

type Props = { to: string; children: ReactNode; tone?: "on-dark" | "on-light"; hash?: string };

/** 复用首页 hn-clp-button 规则：文字区 + 竖线 + 箭头区 */
export function Cta({ to, children, tone = "on-dark", hash }: Props) {
  return (
    <Link to={to} hash={hash} className={`hn-clp-button hn-button-${tone} pk-cta`}>
      <span className="hn-clp-button__label">{children}</span>
      <span className="hn-clp-button__arrow" aria-hidden="true">→</span>
    </Link>
  );
}
