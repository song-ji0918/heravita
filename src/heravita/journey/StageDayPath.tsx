import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

type Day = { title: string; body: string; quote?: string };

export function StageDayPath({ days, image, en }: { days: Day[]; image: string; en: boolean }) {
  const list = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const update = () => {
      const items = Array.from(list.current?.querySelectorAll<HTMLElement>('li') ?? []);
      if (!items.length) return;
      const center = window.innerHeight * 0.45;
      let closest = 0;
      let distance = Infinity;
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const nextDistance = Math.abs(rect.top + rect.height / 2 - center);
        if (nextDistance < distance) { closest = index; distance = nextDistance; }
      });
      setActive(closest);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [days]);
  const go = (index: number) => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    list.current?.children[index]?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
  };
  return <div className="sv-path">
    <div className="sv-path-scene">
      <img src={image} alt={en ? 'A living natural landscape' : '充满生命力的自然场景'} width={1440} height={1088} loading="lazy" />
      <div className="sv-path-caption"><span>DAY {String(active + 1).padStart(2, '0')} / 07</span><h3>{days[active]?.title}</h3></div>
      <nav aria-label={en ? 'Jump to day' : '跳转至某一天'}>{days.map((_, index) => <Button key={index} variant="ghost" aria-label={`Day ${index + 1}`} aria-current={active === index ? 'step' : undefined} onClick={() => go(index)}>{String(index + 1).padStart(2, '0')}</Button>)}</nav>
    </div>
    <ol ref={list} className="sv-path-days">{days.map((day, index) => <li key={day.title} className={active === index ? 'is-active' : ''}>
      <span className="sv-path-number">{String(index + 1).padStart(2, '0')}</span><div><p className="re-kicker">DAY {String(index + 1).padStart(2, '0')}</p><h3>{day.title}</h3><p>{day.body}</p>{day.quote && <blockquote>{day.quote}</blockquote>}</div>
    </li>)}</ol>
  </div>;
}