import type { ReactNode } from 'react';
import './hero.css';

/** Preserve page wording while sharing the homepage's two-line title composition. */
export function HeroTitle({ first, second }: { first: ReactNode; second: ReactNode }) {
  return <h1 className="hv-hero-title" data-reveal><span className="hv-hero-line">{first}</span><em className="hv-hero-line hv-hero-line--second">{second}</em></h1>;
}