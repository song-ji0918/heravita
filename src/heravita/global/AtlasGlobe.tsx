import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { LocateFixed, Pause, Play } from "lucide-react";
import type { AtlasPoint } from "./atlas-data";
import { createGlobeRenderer, globeRadius, projectGlobe, type GlobeSize } from "./globe-renderer";

type Position = ReturnType<typeof projectGlobe>;
type GlobeProps = {
  focus: AtlasPoint;
  label: string;
  instructions: string;
  resetLabel: string;
  pauseLabel: string;
  playLabel: string;
  onUnavailable: () => void;
  children: (project: (point: AtlasPoint) => Position) => ReactNode;
};

const wrapLongitude = (value: number) => ((((value + 180) % 360) + 360) % 360) - 180;
const clampLatitude = (value: number) => Math.min(78, Math.max(-78, value));
const cameraFor = ([longitude, latitude]: AtlasPoint): AtlasPoint => [
  wrapLongitude(longitude - 18),
  clampLatitude(latitude - 7),
];
const rotationKeys: Record<string, AtlasPoint> = {
  ArrowLeft: [-16, 0],
  ArrowRight: [16, 0],
  ArrowUp: [0, 12],
  ArrowDown: [0, -12],
};
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const SPIN_SPEED = 4; // Degrees per second.
const SPIN_HOLD_MS = 5000;
const SPIN_FRAME_MS = 1000 / 30;

export default function AtlasGlobe({
  focus,
  label,
  instructions,
  resetLabel,
  pauseLabel,
  playLabel,
  onUnavailable,
  children,
}: GlobeProps) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const renderer = useRef<ReturnType<typeof createGlobeRenderer>>(null);
  const animation = useRef(0);
  const spinResumeAt = useRef(0);
  const current = useRef<AtlasPoint>(cameraFor(focus));
  const drag = useRef<{ id: number; x: number; y: number; origin: AtlasPoint } | null>(null);
  const [camera, setCamera] = useState<AtlasPoint>(current.current);
  const [size, setSize] = useState<GlobeSize>({ width: 0, height: 0 });
  const [status, setStatus] = useState<"loading" | "ready">("loading");
  const [spinEnabled, setSpinEnabled] = useState(
    () => typeof window !== "undefined" && !window.matchMedia(REDUCED_MOTION).matches,
  );

  const updateCamera = useCallback((point: AtlasPoint) => {
    current.current = point;
    setCamera(point);
  }, []);

  const holdSpin = useCallback(() => {
    spinResumeAt.current = performance.now() + SPIN_HOLD_MS;
  }, []);

  const stopCameraMove = useCallback(() => {
    cancelAnimationFrame(animation.current);
    animation.current = 0;
  }, []);

  useEffect(() => {
    const motion = window.matchMedia(REDUCED_MOTION);
    const pauseForReducedMotion = () => {
      if (motion.matches) setSpinEnabled(false);
    };
    motion.addEventListener("change", pauseForReducedMotion);
    return () => motion.removeEventListener("change", pauseForReducedMotion);
  }, []);

  useEffect(() => {
    const element = canvas.current;
    if (!element) return;
    const globe = createGlobeRenderer(element);
    if (!globe) {
      onUnavailable();
      return;
    }
    renderer.current = globe;
    const observer = new ResizeObserver(([entry]) => {
      if (entry) setSize({ width: entry.contentRect.width, height: entry.contentRect.height });
    });
    observer.observe(element);
    const image = new Image();
    image.onload = () => {
      if (globe.load(image)) setStatus("ready");
      else onUnavailable();
    };
    image.onerror = () => onUnavailable();
    image.src = "/global/atlas-earth-blue-marble.jpg";
    const contextLost = () => onUnavailable();
    element.addEventListener("webglcontextlost", contextLost);

    return () => {
      observer.disconnect();
      element.removeEventListener("webglcontextlost", contextLost);
      image.onload = null;
      image.onerror = null;
      globe.dispose();
      renderer.current = null;
    };
  }, [onUnavailable]);

  useEffect(() => {
    if (status === "ready") renderer.current?.draw(size, camera);
  }, [size, camera, status]);

  useEffect(() => {
    const element = canvas.current;
    if (!element || status !== "ready" || !spinEnabled) return;
    const panel = element.parentElement;
    let visible = false;
    let frame = 0;
    let last = 0;

    const spin = (now: number) => {
      frame = requestAnimationFrame(spin);
      const focused = document.activeElement;
      const navigatingWithKeyboard =
        focused?.matches("canvas:focus-visible, .hv-atlas-pin:focus-visible") &&
        panel?.contains(focused);
      if (
        drag.current ||
        animation.current ||
        now < spinResumeAt.current ||
        navigatingWithKeyboard
      ) {
        last = 0;
        return;
      }
      if (!last) last = now;
      const elapsed = now - last;
      if (elapsed < SPIN_FRAME_MS - 1) return;
      last = now;
      const [longitude, latitude] = current.current;
      updateCamera([
        wrapLongitude(longitude + (SPIN_SPEED * Math.min(elapsed, 50)) / 1000),
        latitude,
      ]);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      last = 0;
    };
    const syncVisibility = () => {
      if (!visible || document.hidden) stop();
      else if (!frame) frame = requestAnimationFrame(spin);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.intersectionRatio >= 0.1;
        syncVisibility();
      },
      { threshold: 0.1 },
    );
    observer.observe(element);
    document.addEventListener("visibilitychange", syncVisibility);

    return () => {
      stop();
      observer.takeRecords();
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, [spinEnabled, status, updateCamera]);

  const focusCamera = useCallback(
    (point: AtlasPoint) => {
      stopCameraMove();
      const end = cameraFor(point);
      const start = current.current;
      const delta = wrapLongitude(end[0] - start[0]);
      if (Math.abs(delta) < 0.01 && Math.abs(end[1] - start[1]) < 0.01) return;
      holdSpin();
      if (window.matchMedia(REDUCED_MOTION).matches) {
        updateCamera(end);
        return;
      }
      const startTime = performance.now();
      const move = (now: number) => {
        const progress = Math.min(1, (now - startTime) / 620);
        const ease = 1 - (1 - progress) ** 3;
        updateCamera([
          wrapLongitude(start[0] + delta * ease),
          start[1] + (end[1] - start[1]) * ease,
        ]);
        animation.current = progress < 1 ? requestAnimationFrame(move) : 0;
      };
      animation.current = requestAnimationFrame(move);
    },
    [holdSpin, stopCameraMove, updateCamera],
  );

  useEffect(() => {
    focusCamera(focus);
    return stopCameraMove;
  }, [focus, focusCamera, stopCameraMove]);

  return (
    <div
      className="hv-atlas-globe"
      dir="ltr"
      data-globe-status={status}
      aria-busy={status === "loading"}
    >
      <canvas
        ref={canvas}
        aria-label={`${label}. ${instructions}`}
        tabIndex={0}
        onPointerDown={(event) => {
          if (!event.isPrimary || event.button !== 0 || status !== "ready") return;
          holdSpin();
          stopCameraMove();
          drag.current = {
            id: event.pointerId,
            x: event.clientX,
            y: event.clientY,
            origin: current.current,
          };
          event.currentTarget.setPointerCapture(event.pointerId);
          event.currentTarget.dataset.dragging = "true";
        }}
        onPointerMove={(event) => {
          const start = drag.current;
          if (!start || start.id !== event.pointerId) return;
          const sensitivity = 75 / Math.max(1, globeRadius(size));
          const longitude = start.origin[0] - (event.clientX - start.x) * sensitivity;
          const latitude =
            start.origin[1] +
            (event.pointerType === "touch" ? 0 : (event.clientY - start.y) * sensitivity);
          updateCamera([wrapLongitude(longitude), clampLatitude(latitude)]);
        }}
        onLostPointerCapture={(event) => {
          drag.current = null;
          holdSpin();
          delete event.currentTarget.dataset.dragging;
        }}
        onKeyDown={(event) => {
          const movement = rotationKeys[event.key];
          if (!movement || status !== "ready") return;
          event.preventDefault();
          holdSpin();
          stopCameraMove();
          updateCamera([
            wrapLongitude(current.current[0] + movement[0]),
            clampLatitude(current.current[1] + movement[1]),
          ]);
        }}
      />
      {status === "ready" && (
        <>
          {children((point) => projectGlobe(point, camera, size))}
          <div className="hv-atlas-globe__controls">
            <button
              type="button"
              className="hv-atlas-globe__spin"
              onClick={() => {
                spinResumeAt.current = 0;
                setSpinEnabled((enabled) => !enabled);
              }}
              aria-label={spinEnabled ? pauseLabel : playLabel}
              title={spinEnabled ? pauseLabel : playLabel}
            >
              {spinEnabled ? (
                <Pause aria-hidden="true" size={18} strokeWidth={1.65} />
              ) : (
                <Play aria-hidden="true" size={18} strokeWidth={1.65} />
              )}
            </button>
            <button
              type="button"
              className="hv-atlas-globe__reset"
              onClick={() => {
                holdSpin();
                focusCamera(focus);
              }}
              aria-label={resetLabel}
              title={resetLabel}
            >
              <LocateFixed aria-hidden="true" size={18} strokeWidth={1.65} />
            </button>
          </div>
        </>
      )}
      <span className="hv-atlas-globe__hint" dir="auto">
        {instructions}
      </span>
    </div>
  );
}
