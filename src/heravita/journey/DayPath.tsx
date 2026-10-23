import { useJourneyCopy, journeyText } from './locale';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import './day-path.css';

type Day = { title: string; body: string; quote?: string };

/** Seven-day journey path: a gold line fills as you scroll, the active day lights up and its photograph crossfades in. */
export function DayPath({ days, images, en = false }: { days: Day[]; images?: string[]; en?: boolean }) {
  const { t } = useJourneyCopy();
  const list = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = list.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>('[data-day]'));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(Number(e.target.getAttribute('data-day'))); }),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    items.forEach((i) => io.observe(i));
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      setProgress(Math.min(1, Math.max(0, (window.innerHeight * 0.5 - r.top) / r.height)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  const go = (i: number) => list.current?.querySelector(`[data-day="${i}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  return (
    <div className={`dp${images ? ' dp-has-media' : ''}`}>
      {images && (
        <div className="dp-media" aria-hidden="true">
          <div className="dp-frame">
            {images.map((src, i) => <img key={src} src={src} alt="" width={1440} height={1088} loading="lazy" className={i === active ? 'is-active' : ''} />)}
            <span className="dp-count">{t("第", "Day")} 0{active + 1} <i>/ 07</i></span>
          </div>
        </div>
      )}
      <div className="dp-body">
        <nav className="dp-dots" aria-label={t('跳转至某一天', 'Jump to day')}>
          {days.map((_, i) => (
            <button key={i} type="button" onClick={() => go(i)} className={i === active ? 'is-active' : ''} aria-label={`${t("第", "Day")} ${i + 1}`}>0{i + 1}</button>
          ))}
        </nav>
        <ol className="dp-list" ref={list} style={{ '--dp-progress': progress } as CSSProperties}>
          <span className="dp-track" aria-hidden="true"><span className="dp-fill" /></span>
          {days.map((d, i) => (
            <li key={d.title} data-day={i} className={i === active ? 'is-active' : i < active ? 'is-past' : ''}>
              <span className="dp-node" aria-hidden="true" />
              <span className="dp-number"><small>{t("第", "Day")}</small>0{i + 1}</span>
              <h3>{d.title}</h3>
              {images && <img className="dp-inline" src={images[i]} alt="" width={1440} height={1088} loading="lazy" />}
              <p>{d.body}</p>
              {d.quote && <blockquote>{d.quote}</blockquote>}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
