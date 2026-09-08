"use client";

import { useEffect, useRef } from "react";
import type * as MapLibre from "maplibre-gl";
import type { Map as MLMap, StyleSpecification, LayerSpecification } from "maplibre-gl";

// MapLibre is loaded at runtime from a CDN (UMD build) rather than bundled: its tile worker does not
// start reliably when bundled by Next. The npm package is kept for types only.
const MAPLIBRE_VERSION = "5.24.0";
const MAPLIBRE_JS = `https://cdn.jsdelivr.net/npm/maplibre-gl@${MAPLIBRE_VERSION}/dist/maplibre-gl.js`;
const MAPLIBRE_CSS = `https://cdn.jsdelivr.net/npm/maplibre-gl@${MAPLIBRE_VERSION}/dist/maplibre-gl.css`;

let libPromise: Promise<typeof MapLibre> | null = null;
function loadMapLibre(): Promise<typeof MapLibre> {
  if (libPromise) return libPromise;
  libPromise = new Promise((resolve, reject) => {
    const w = window as unknown as { maplibregl?: typeof MapLibre };
    if (w.maplibregl) return resolve(w.maplibregl);
    if (!document.querySelector(`link[href="${MAPLIBRE_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = MAPLIBRE_CSS;
      document.head.appendChild(link);
    }
    const script = document.createElement("script");
    script.src = MAPLIBRE_JS;
    script.async = true;
    script.onload = () => (w.maplibregl ? resolve(w.maplibregl) : reject(new Error("maplibre did not load")));
    script.onerror = () => reject(new Error("maplibre script failed"));
    document.head.appendChild(script);
  });
  return libPromise;
}
import type { Initiative } from "@/lib/types";
import { TYPES } from "@/lib/taxonomy";
import { glyphSvg } from "./Glyph";

export type Region = "world" | "latam" | "europe" | "africa" | "asia" | "oceania" | "north-america";

export const REGION_BOUNDS: Record<Region, [[number, number], [number, number]]> = {
  // [west, south], [east, north]
  world: [[-150, -50], [165, 70]],
  latam: [[-95, -52], [-32, 28]],
  europe: [[-12, 35], [34, 66]],
  africa: [[-20, -36], [52, 38]],
  asia: [[40, -12], [150, 55]],
  oceania: [[110, -48], [180, -8]],
  "north-america": [[-130, 12], [-55, 62]],
};

// The cartography: paper continents, deep teal-ink sea, gold hairline borders.
const INK = {
  water: "#173d41",
  waterDeep: "#12353a",
  land: "#f5f0e6",
  park: "#ebe5d5",
  wood: "#e7e0cf",
  built: "#efe9dc",
  road: "#e2dbc9",
  roadCasing: "#d6cdb9",
  boundary: "#a8821f",
  labelInk: "#211e26",
  labelMist: "#6a6572",
  labelWater: "#cfdedb",
  halo: "#f5f0e6",
};

type MutableLayer = LayerSpecification & { paint?: Record<string, unknown>; layout?: Record<string, unknown> };

function recolor(style: StyleSpecification): StyleSpecification {
  const layers = style.layers.map((raw) => {
    const l = JSON.parse(JSON.stringify(raw)) as MutableLayer;
    const id = l.id;
    const paint = (l.paint ||= {});
    const set = (k: string, v: unknown) => {
      paint[k] = v;
    };
    if (l.type === "background") set("background-color", INK.land);
    else if (id === "water") set("fill-color", INK.water);
    else if (id.startsWith("waterway") && l.type === "line") set("line-color", INK.waterDeep);
    else if (id === "park") set("fill-color", INK.park);
    else if (id.startsWith("landcover_wood")) set("fill-color", INK.wood);
    else if (id.startsWith("landcover")) set("fill-color", INK.land);
    else if (id.startsWith("landuse")) set("fill-color", INK.built);
    else if (id === "building") {
      set("fill-color", INK.built);
      set("fill-outline-color", INK.roadCasing);
    } else if (id.startsWith("boundary")) {
      set("line-color", INK.boundary);
      set("line-opacity", id === "boundary_2" ? 0.55 : 0.35);
    } else if (l.type === "line") {
      set("line-color", id.includes("casing") ? INK.roadCasing : INK.road);
    } else if (l.type === "fill") {
      set("fill-color", INK.land);
    } else if (l.type === "symbol") {
      const water = id.startsWith("water");
      const country = id.startsWith("label_country");
      const state = id === "label_state";
      set("text-color", water ? INK.labelWater : country || state ? INK.labelMist : INK.labelInk);
      set("text-halo-color", water ? INK.water : INK.halo);
      set("text-halo-width", water ? 0.6 : 1.2);
      set("text-halo-blur", 0.4);
      if (id.startsWith("highway-shield") || id.startsWith("road_shield") || id === "airport") {
        (l.layout ||= {}).visibility = "none";
      }
    }
    return l as LayerSpecification;
  });
  return { ...style, layers };
}

interface Props {
  items: Initiative[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  region: Region;
  regionNonce: number;
}

function toGeoJSON(items: Initiative[]): GeoJSON.FeatureCollection<GeoJSON.Point> {
  return {
    type: "FeatureCollection",
    features: items.map((i) => ({
      type: "Feature",
      id: i.id,
      properties: { id: i.id, type: i.type, name: i.name },
      geometry: { type: "Point", coordinates: [i.lng, i.lat] },
    })),
  };
}

function loadGlyphImages(map: MLMap): Promise<void[]> {
  const jobs: Promise<void>[] = [];
  for (const t of TYPES) {
    for (const [suffix, color] of [
      ["", "#a8821f"],
      ["-on", "#17877a"],
    ] as const) {
      const svg = glyphSvg(t.glyph, 28, color, true);
      const img = new Image(56, 56);
      jobs.push(
        new Promise<void>((resolve) => {
          img.onload = () => {
            const name = `mark-${t.slug}${suffix}`;
            if (!map.hasImage(name)) map.addImage(name, img, { pixelRatio: 2 });
            resolve();
          };
          img.onerror = () => resolve();
          img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
        }),
      );
    }
  }
  return Promise.all(jobs);
}

const reduceMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function paddingFor() {
  const wide = typeof window !== "undefined" && window.innerWidth >= 1024;
  return wide ? { left: 440, top: 80, right: 40, bottom: 24 } : { left: 16, top: 80, right: 16, bottom: 80 };
}

function fit(map: MLMap, region: Region) {
  map.fitBounds(REGION_BOUNDS[region], { padding: paddingFor(), duration: reduceMotion() ? 0 : 900, essential: true });
}

export default function AtlasMap({ items, selectedId, onSelect, region, regionNonce }: Props) {
  const el = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MLMap | null>(null);
  const ready = useRef(false);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;
  const latest = useRef({ items, selectedId, region });
  latest.current = { items, selectedId, region };

  // Create the map once.
  useEffect(() => {
    if (!el.current || mapRef.current) return;
    let cancelled = false;
    let mapInstance: MLMap | null = null;
    loadMapLibre().then((maplibregl) => {
    if (cancelled || !el.current) return;
    const map = new maplibregl.Map({
      container: el.current,
      style: { version: 8, sources: {}, layers: [{ id: "bg", type: "background", paint: { "background-color": INK.land } }] },
      center: [-10, 15],
      zoom: 1.6,
      minZoom: 1.2,
      maxZoom: 15,
      attributionControl: false,
      renderWorldCopies: true,
      canvasContextAttributes: { preserveDrawingBuffer: true, antialias: true },
    });
    mapRef.current = map;
    mapInstance = map;
    (window as unknown as { __nkmMap?: MLMap }).__nkmMap = map;
    map.on("error", (e) => console.error("map error:", e.error?.message || e));
    map.addControl(
      new maplibregl.AttributionControl({
        compact: true,
        customAttribution:
          '<a href="https://openfreemap.org">OpenFreeMap</a> · <a href="https://www.openmaptiles.org/">OpenMapTiles</a> · <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }),
      "bottom-right",
    );
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "bottom-right");

    fetch("https://tiles.openfreemap.org/styles/positron")
      .then((r) => r.json())
      .then(async (style: StyleSpecification) => {
        if (cancelled) return;
        map.setStyle(recolor(style));
        await new Promise<void>((res) => map.once("styledata", () => res()));
        await loadGlyphImages(map);
        if (cancelled) return;
        const cur = latest.current;
        map.addSource("initiatives", {
          type: "geojson",
          data: toGeoJSON(cur.items),
          cluster: true,
          clusterRadius: 34,
          clusterMaxZoom: 11,
          promoteId: "id",
        });
        map.addLayer({
          id: "cluster-halo",
          type: "circle",
          source: "initiatives",
          filter: ["has", "point_count"],
          paint: {
            "circle-color": "#a8821f",
            "circle-opacity": 0.16,
            "circle-radius": ["step", ["get", "point_count"], 22, 10, 26, 50, 31],
          },
        });
        map.addLayer({
          id: "clusters",
          type: "circle",
          source: "initiatives",
          filter: ["has", "point_count"],
          paint: {
            "circle-color": "#f7f4ed",
            "circle-radius": ["step", ["get", "point_count"], 16, 10, 20, 50, 25],
            "circle-stroke-color": "#a8821f",
            "circle-stroke-width": 1.5,
          },
        });
        map.addLayer({
          id: "cluster-count",
          type: "symbol",
          source: "initiatives",
          filter: ["has", "point_count"],
          layout: {
            "text-field": ["get", "point_count_abbreviated"],
            "text-font": ["Noto Sans Regular"],
            "text-size": 13,
          },
          paint: { "text-color": "#211e26" },
        });
        map.addLayer({
          id: "marks",
          type: "symbol",
          source: "initiatives",
          filter: ["!", ["has", "point_count"]],
          layout: {
            "icon-image": ["concat", "mark-", ["get", "type"]],
            "icon-size": 0.9,
            "icon-allow-overlap": true,
            "icon-ignore-placement": true,
          },
        });
        map.addLayer({
          id: "mark-selected",
          type: "symbol",
          source: "initiatives",
          filter: ["all", ["!", ["has", "point_count"]], ["==", ["get", "id"], cur.selectedId ?? ""]],
          layout: {
            "icon-image": ["concat", "mark-", ["get", "type"], "-on"],
            "icon-size": 1.25,
            "icon-allow-overlap": true,
            "icon-ignore-placement": true,
          },
        });

        map.on("click", "marks", (e) => {
          const f = e.features?.[0];
          if (f?.properties?.id) onSelectRef.current(String(f.properties.id));
        });
        map.on("click", "clusters", async (e) => {
          const f = e.features?.[0];
          if (!f) return;
          const src = map.getSource("initiatives") as MapLibre.GeoJSONSource;
          const zoom = await src.getClusterExpansionZoom(f.properties!.cluster_id as number);
          const [lng, lat] = (f.geometry as GeoJSON.Point).coordinates;
          map.easeTo({ center: [lng, lat], zoom: Math.min(zoom + 0.3, 14), duration: reduceMotion() ? 0 : 500 });
        });
        for (const layer of ["marks", "clusters"]) {
          map.on("mouseenter", layer, () => {
            map.getCanvas().style.cursor = "pointer";
          });
          map.on("mouseleave", layer, () => {
            map.getCanvas().style.cursor = "";
          });
        }
        ready.current = true;
        fit(map, cur.region);
      })
      .catch((err) => console.error("style failed", err));
    }).catch((err) => console.error(err));

    return () => {
      cancelled = true;
      ready.current = false;
      mapInstance?.remove();
      mapRef.current = null;
    };
  }, []);

  // Data updates.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready.current) return;
    (map.getSource("initiatives") as MapLibre.GeoJSONSource | undefined)?.setData(toGeoJSON(items));
  }, [items]);

  // Selection.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready.current) return;
    map.setFilter("mark-selected", ["all", ["!", ["has", "point_count"]], ["==", ["get", "id"], selectedId ?? ""]]);
    if (!selectedId) return;
    const it = items.find((i) => i.id === selectedId);
    if (!it) return;
    const z = Math.max(map.getZoom(), 5);
    map.flyTo({ center: [it.lng, it.lat], zoom: z, duration: reduceMotion() ? 0 : 900, essential: true, padding: paddingFor() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);

  // Region views.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready.current) return;
    fit(map, region);
  }, [region, regionNonce]);

  return <div ref={el} className="w-full h-full" />;
}
