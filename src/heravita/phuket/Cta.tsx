import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import "@/original/components/HomeNarrative/HomeNarrative.css";

type Props = { to: string; children: ReactNode; tone?: "on-dark" | "on-light"; hash?: string };

/** 复用首页 hn-clp-button 规则：文字区 + 竖线 + 箭头区 */
export function Cta({ to, children, tone = "on-dark", hash }: Props) {
  const destination = to === "/global/phuket/booking" ? "phuket" : to === "/global/usa/consultation" ? "usa" : to === "/contact" ? "undecided" : null;
  return (
    <Link to={destination ? "/journey/booking" : to} search={destination ? {stage:"undecided",destination} : undefined} hash={hash} className={`hn-clp-button hn-button-${tone} pk-cta`}>
      <span className="hn-clp-button__label">{children}</span>
      <span className="hn-clp-button__arrow" aria-hidden="true">→</span>
    </Link>
  );
}
