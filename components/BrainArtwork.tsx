"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Initiative } from "@/lib/types";

type PointSeed = {
  item: Initiative;
  a: number;
  b: number;
  c: number;
  brainX: number;
  brainY: number;
  color: string;
};

const LOOP_MS = 56000;
const PALETTE = ["#f4d58d", "#8fd3ff", "#c8a7ff", "#9be7c4", "#f0a7a0", "#f6e7c1", "#8ad8d1", "#d8b4fe"];

function hash01(value: string, salt = 0) {
  let h = 2166136261 ^ salt;
  for (let i = 0; i < value.length; i += 1) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 4294967295;
}

function smoothstep(a: number, b: number, x: number) {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function brainPoint(id: string) {
  for (let n = 0; n < 18; n += 1) {
    const x = hash01(id, 100 + n * 7) * 2 - 1;
    const y = hash01(id, 200 + n * 11) * 2 - 1;
    const top = y < 0.2;
    const left = ((x + 0.32) / 0.72) ** 2 + ((y + 0.02) / (top ? 0.82 : 0.68)) ** 2 < 1;
    const right = ((x - 0.32) / 0.72) ** 2 + ((y + 0.02) / (top ? 0.82 : 0.68)) ** 2 < 1;
    const notch = y > 0.52 && Math.abs(x) < 0.14;
    if ((left || right) && !notch) return { x: x * 0.92, y: y * 0.82 - 0.05 };
  }
  return { x: (hash01(id, 901) * 2 - 1) * 0.65, y: (hash01(id, 902) * 2 - 1) * 0.5 - 0.05 };
}

function phaseFor(t: number) {
  if (t < 0.16) return { title: "A QUIET WORLD", note: "At first, almost nothing." };
  if (t < 0.34) return { title: "EMERGENCE", note: "Points appear. Real projects." };
  if (t < 0.52) return { title: "CONNECTIONS", note: "Affinities begin to exceed borders." };
  if (t < 0.72) return { title: "THE FOLD", note: "Geography gives way to another topology." };
  if (t < 0.92) return { title: "A BRAIN EMERGES", note: "The same humanity. A different map." };
  return { title: "RETURN", note: "There is no single map of minds." };
}

function brainOutline(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, alpha: number) {
  if (alpha <= 0) return;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(s, s);
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = "rgba(244,213,141,0.9)";
  ctx.lineWidth = 0.007;
  ctx.shadowColor = "rgba(244,213,141,0.8)";
  ctx.shadowBlur = 0.06;
  ctx.beginPath();
  ctx.moveTo(0, 0.72);
  ctx.bezierCurveTo(-0.18, 0.76, -0.15, 0.62, -0.26, 0.58);
  ctx.bezierCurveTo(-0.7, 0.62, -0.95, 0.33, -0.91, 0.02);
  ctx.bezierCurveTo(-1.02, -0.25, -0.78, -0.66, -0.45, -0.67);
  ctx.bezierCurveTo(-0.3, -0.91, -0.03, -0.88, 0, -0.7);
  ctx.bezierCurveTo(0.08, -0.9, 0.39, -0.89, 0.5, -0.67);
  ctx.bezierCurveTo(0.84, -0.65, 1.01, -0.28, 0.9, 0.02);
  ctx.bezierCurveTo(0.98, 0.35, 0.68, 0.62, 0.27, 0.58);
  ctx.bezierCurveTo(0.16, 0.63, 0.19, 0.76, 0, 0.72);
  ctx.stroke();

  ctx.globalAlpha = alpha * 0.55;
  ctx.beginPath();
  ctx.moveTo(0, -0.69);
  ctx.bezierCurveTo(-0.04, -0.4, 0.05, -0.18, -0.01, 0.08);
  ctx.bezierCurveTo(-0.06, 0.3, 0.04, 0.48, 0, 0.66);
  ctx.stroke();

  ctx.lineWidth = 0.004;
  ctx.strokeStyle = "rgba(143,211,255,0.75)";
  ctx.shadowColor = "rgba(143,211,255,0.7)";
  for (let i = 0; i < 13; i += 1) {
    const side = i % 2 === 0 ? -1 : 1;
    const y = -0.56 + (i % 7) * 0.18;
    const wobble = (i % 3) * 0.035;
    ctx.beginPath();
    ctx.moveTo(side * 0.08, y);
    ctx.bezierCurveTo(side * (0.25 + wobble), y - 0.12, side * (0.44 + wobble), y + 0.13, side * 0.68, y + 0.02);
    ctx.bezierCurveTo(side * 0.82, y - 0.04, side * 0.77, y + 0.18, side * 0.55, y + 0.2);
    ctx.stroke();
  }
  ctx.restore();
}

export default function BrainArtwork({ items }: { items: Initiative[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startRef = useRef(performance.now());
  const pausedAtRef = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [phase, setPhase] = useState(phaseFor(0));
  const [highlight, setHighlight] = useState(0);

  const points = useMemo<PointSeed[]>(() => {
    const types = Array.from(new Set(items.map((i) => i.type)));
    return items.map((item) => {
      const bp = brainPoint(item.id);
      const typeIndex = Math.max(0, types.indexOf(item.type));
      return {
        item,
        a: hash01(item.id, 1),
        b: hash01(item.id, 2),
        c: hash01(item.id, 3),
        brainX: bp.x,
        brainY: bp.y,
        color: PALETTE[typeIndex % PALETTE.length],
      };
    });
  }, [items]);

  useEffect(() => {
    const timer = window.setInterval(() => setHighlight((v) => (v + 37) % Math.max(points.length, 1)), 3200);
    return () => window.clearInterval(timer);
  }, [points.length]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let lastPhase = "";

    const draw = (now: number) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const W = Math.max(1, Math.floor(rect.width * dpr));
      const H = Math.max(1, Math.floor(rect.height * dpr));
      if (canvas.width !== W || canvas.height !== H) {
        canvas.width = W;
        canvas.height = H;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const w = rect.width;
      const h = rect.height;
      const elapsed = pausedAtRef.current ?? now;
      const t = ((elapsed - startRef.current) % LOOP_MS) / LOOP_MS;
      const currentPhase = phaseFor(t);
      if (currentPhase.title !== lastPhase) {
        lastPhase = currentPhase.title;
        setPhase(currentPhase);
      }

      const bg = ctx.createRadialGradient(w * 0.52, h * 0.48, 0, w * 0.52, h * 0.48, Math.max(w, h) * 0.72);
      bg.addColorStop(0, "#0a1118");
      bg.addColorStop(0.55, "#05080d");
      bg.addColorStop(1, "#010204");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.5;
      const globeR = Math.min(w, h) * 0.33;
      const brainS = Math.min(w, h) * 0.36;
      const fold = smoothstep(0.49, 0.78, t);
      const returnToWorld = smoothstep(0.92, 0.995, t);
      const morph = fold * (1 - returnToWorld);
      const emerge = smoothstep(0.10, 0.32, t);
      const network = smoothstep(0.28, 0.5, t) * (1 - smoothstep(0.88, 0.97, t));
      const brainGlow = smoothstep(0.62, 0.82, t) * (1 - smoothstep(0.92, 1, t));
      const rotation = (t * Math.PI * 1.45) - 0.5;

      ctx.save();
      ctx.globalAlpha = (1 - morph) * (0.18 + emerge * 0.18);
      ctx.strokeStyle = "rgba(143,211,255,0.6)";
      ctx.lineWidth = 1;
      ctx.shadowColor = "rgba(143,211,255,0.5)";
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.arc(cx, cy, globeR, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;
      for (let i = -2; i <= 2; i += 1) {
        ctx.globalAlpha = (1 - morph) * 0.05;
        ctx.beginPath();
        ctx.ellipse(cx, cy + i * globeR * 0.23, globeR * Math.sqrt(Math.max(0.05, 1 - (i * 0.23) ** 2)), globeR * 0.16, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      const positions = points.map((p) => {
        const lat = (p.item.lat * Math.PI) / 180;
        const lon = (p.item.lng * Math.PI) / 180 + rotation;
        const z = Math.cos(lat) * Math.cos(lon);
        const gx = cx + globeR * Math.cos(lat) * Math.sin(lon);
        const gy = cy - globeR * Math.sin(lat);
        const bx = cx + p.brainX * brainS;
        const by = cy + p.brainY * brainS;
        return {
          x: lerp(gx, bx, morph),
          y: lerp(gy, by, morph),
          visible: lerp(z > -0.06 ? 1 : 0.08, 1, morph),
          p,
        };
      });

      if (network > 0.02) {
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        for (let i = 0; i < positions.length; i += 1) {
          const a = positions[i];
          const j = (i + 1 + Math.floor(a.p.b * 17)) % positions.length;
          const b = positions[j];
          const sameFocus = Boolean(a.p.item.focus[0]) && a.p.item.focus[0] === b.p.item.focus[0];
          if (a.p.item.type !== b.p.item.type && !sameFocus) continue;
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy);
          const maxDist = lerp(globeR * 0.55, brainS * 0.72, morph);
          if (dist > maxDist) continue;
          const alpha = network * a.visible * b.visible * (1 - dist / maxDist) * (0.12 + morph * 0.2);
          ctx.strokeStyle = `rgba(143,211,255,${alpha})`;
          ctx.lineWidth = 0.55 + morph * 0.4;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          const bend = (a.p.c - 0.5) * 34;
          ctx.quadraticCurveTo((a.x + b.x) / 2 - dy * 0.06 + bend, (a.y + b.y) / 2 + dx * 0.06, b.x, b.y);
          ctx.stroke();
        }
        ctx.restore();
      }

      brainOutline(ctx, cx, cy, brainS, brainGlow * 0.72);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      positions.forEach((q, index) => {
        const intro = smoothstep(0.08 + q.p.a * 0.16, 0.2 + q.p.a * 0.18, t);
        const alpha = Math.max(0.02, intro) * q.visible * (0.42 + morph * 0.42);
        const r = (index === highlight ? 3.2 : 1.1 + q.p.c * 1.3) * (0.8 + morph * 0.35);
        ctx.shadowColor = q.p.color;
        ctx.shadowBlur = index === highlight ? 22 : 8 + morph * 7;
        ctx.fillStyle = q.p.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(q.x, q.y, r, 0, Math.PI * 2);
        ctx.fill();
        if (index === highlight && intro > 0.5) {
          ctx.globalAlpha = 0.6;
          ctx.strokeStyle = "#fff3cf";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(q.x, q.y, 8 + Math.sin(now / 500) * 2, 0, Math.PI * 2);
          ctx.stroke();
        }
      });
      ctx.restore();

      if (t > 0.5 && t < 0.79) {
        const f = smoothstep(0.5, 0.79, t);
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = `rgba(244,213,141,${0.14 + 0.2 * Math.sin(f * Math.PI)})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = "rgba(244,213,141,0.8)";
        ctx.shadowBlur = 24;
        ctx.beginPath();
        ctx.moveTo(cx - brainS * 0.95, cy + brainS * 0.48);
        ctx.bezierCurveTo(cx - brainS * 0.42, cy - brainS * 0.92, cx + brainS * 0.3, cy + brainS * 0.78, cx + brainS * 0.9, cy - brainS * 0.42);
        ctx.stroke();
        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [points, highlight]);

  const current = points[highlight]?.item;

  const togglePause = () => {
    if (paused) {
      const frozen = pausedAtRef.current ?? performance.now();
      const pauseDuration = performance.now() - frozen;
      startRef.current += pauseDuration;
      pausedAtRef.current = null;
      setPaused(false);
    } else {
      pausedAtRef.current = performance.now();
      setPaused(true);
    }
  };

  const restart = () => {
    startRef.current = performance.now();
    pausedAtRef.current = paused ? performance.now() : null;
    setHighlight(0);
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black text-white" aria-label="New Kinds of Minds generative artwork prototype">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 sm:p-8 lg:p-12">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="m-0 text-[0.68rem] tracking-[0.34em] text-white/55 uppercase">New Kinds of Minds</p>
            <h1 className="m-0 mt-2 max-w-[14ch] text-[clamp(1.7rem,4vw,4.4rem)] font-normal leading-[0.94] tracking-[-0.03em] text-white" style={{ fontFamily: "var(--font-display)" }}>
              A planetary atlas of cognitive possibility
            </h1>
          </div>
          <div className="hidden sm:block text-right text-[0.68rem] tracking-[0.2em] uppercase text-white/45">
            <p className="m-0">MIT Museum / BRAIN study</p>
            <p className="m-0 mt-1">{items.length} initiatives · live atlas data</p>
          </div>
        </div>

        <div className="flex items-end justify-between gap-6">
          <div className="max-w-[38rem]">
            <p className="m-0 text-[0.68rem] tracking-[0.28em] uppercase text-[#f4d58d]">{phase.title}</p>
            <p className="m-0 mt-2 text-[clamp(1rem,2vw,1.45rem)] leading-snug text-white/78">{phase.note}</p>
            {current && (
              <div className="mt-5 border-l border-white/25 pl-3 text-[0.78rem] leading-relaxed text-white/55">
                <p className="m-0 text-white/80">{current.name}</p>
                <p className="m-0">{current.region}, {current.country_name} · {current.type.replace(/-/g, " ")}</p>
              </div>
            )}
          </div>

          <div className="pointer-events-auto flex gap-2">
            <button type="button" onClick={togglePause} className="rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[0.72rem] tracking-[0.16em] uppercase text-white/70 backdrop-blur hover:bg-white/10 focus-visible:outline-white">
              {paused ? "Play" : "Pause"}
            </button>
            <button type="button" onClick={restart} className="rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[0.72rem] tracking-[0.16em] uppercase text-white/70 backdrop-blur hover:bg-white/10 focus-visible:outline-white">
              Restart
            </button>
          </div>
        </div>
      </div>

      <a href="/" className="absolute right-5 top-20 sm:right-8 sm:top-24 lg:right-12 lg:top-28 z-10 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[0.72rem] tracking-[0.16em] uppercase text-white/60 no-underline backdrop-blur hover:text-white">
        Atlas ↗
      </a>
    </section>
  );
}
