import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { GlobalMarker } from "@/original/pages/Global/assets";

export default function MapMarkers({ markers }: { markers: readonly GlobalMarker[] }) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 800, height: 380 });
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry) setSize({ width: entry.contentRect.width, height: entry.contentRect.height });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const positions: { x: number; y: number }[] = [];
  for (const marker of markers) {
    const x = Math.max(12, Math.min(size.width - 12, marker.x * size.width / 100));
    let y = Math.max(12, marker.y * size.height / 100);
    while (positions.some((point) => Math.abs(point.x - x) < 25 && Math.abs(point.y - y) < 25)) y += 25;
    positions.push({ x, y });
  }
  return (
    <div ref={ref} className="absolute inset-0" dir="ltr">
      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        {markers.map((marker, i) => {
          const point = positions[i];
          if (!point) return null;
          return <line key={marker.id} x1={`${marker.x}%`} y1={`${marker.y}%`} x2={point.x} y2={point.y} stroke="currentColor" className="text-foreground/40" />;
        })}
      </svg>
      {markers.map((marker, i) => {
        const point = positions[i];
        if (!point) return null;
        return <span key={marker.id} title={t(`globalPage.markers.${marker.id}`)} aria-label={t(`globalPage.markers.${marker.id}`)} className="absolute flex size-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-foreground text-[10px] leading-none text-background" style={{ left: point.x, top: point.y }}>{i + 1}</span>;
      })}
    </div>
  );
}