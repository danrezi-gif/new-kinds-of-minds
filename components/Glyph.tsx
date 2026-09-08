import type { TypeDef } from "@/lib/taxonomy";
import { TYPE_BY_SLUG } from "@/lib/taxonomy";

// One mark per kind of activity. Shape carries the category so that color can stay quiet.
export function glyphPath(glyph: TypeDef["glyph"], s = 16): string {
  const c = s / 2;
  const r = s * 0.36;
  switch (glyph) {
    case "ring":
      return `<circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="currentColor" stroke-width="${s * 0.16}"/>`;
    case "triangle":
      return `<path d="M${c} ${c - r * 1.05} L${c + r * 1.05} ${c + r * 0.85} L${c - r * 1.05} ${c + r * 0.85} Z" fill="currentColor"/>`;
    case "asterisk": {
      const l = r * 1.1;
      return [0, 60, 120]
        .map((deg) => {
          const a = (deg * Math.PI) / 180;
          return `<line x1="${c - Math.cos(a) * l}" y1="${c - Math.sin(a) * l}" x2="${c + Math.cos(a) * l}" y2="${c + Math.sin(a) * l}" stroke="currentColor" stroke-width="${s * 0.15}" stroke-linecap="round"/>`;
        })
        .join("");
    }
    case "square":
      return `<rect x="${c - r * 0.9}" y="${c - r * 0.9}" width="${r * 1.8}" height="${r * 1.8}" fill="currentColor"/>`;
    case "diamond":
      return `<path d="M${c} ${c - r * 1.15} L${c + r * 1.15} ${c} L${c} ${c + r * 1.15} L${c - r * 1.15} ${c} Z" fill="currentColor"/>`;
    case "half":
      return `<circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="currentColor" stroke-width="${s * 0.1}"/><path d="M${c} ${c - r} A${r} ${r} 0 0 1 ${c} ${c + r} Z" fill="currentColor"/>`;
    case "cross":
      return `<path d="M${c - r * 0.3} ${c - r * 1.1} h${r * 0.6} v${r * 0.8} h${r * 0.8} v${r * 0.6} h-${r * 0.8} v${r * 0.8} h-${r * 0.6} v-${r * 0.8} h-${r * 0.8} v-${r * 0.6} h${r * 0.8} Z" fill="currentColor"/>`;
    case "bar":
      return `<rect x="${c - r * 1.1}" y="${c - r * 0.42}" width="${r * 2.2}" height="${r * 0.84}" rx="${r * 0.1}" fill="currentColor"/>`;
  }
}

export function glyphSvg(glyph: TypeDef["glyph"], s = 16, color = "#a8821f", halo = true): string {
  const c = s / 2;
  const haloEl = halo ? `<circle cx="${c}" cy="${c}" r="${s * 0.47}" fill="#f7f4ed" fill-opacity="0.85"/>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" style="color:${color}" aria-hidden="true">${haloEl}${glyphPath(glyph, s)}</svg>`;
}

export default function Glyph({
  type,
  size = 16,
  className = "",
  color = "currentColor",
}: {
  type: string;
  size?: number;
  className?: string;
  color?: string;
}) {
  const def = TYPE_BY_SLUG[type];
  if (!def) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      style={{ color, flexShrink: 0 }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: glyphPath(def.glyph, size) }}
    />
  );
}
