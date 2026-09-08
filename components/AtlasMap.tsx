"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster";
import type { Initiative } from "@/lib/types";
import { TYPE_BY_SLUG } from "@/lib/taxonomy";
import { glyphSvg } from "./Glyph";

export type Region = "world" | "latam" | "europe" | "africa" | "asia" | "oceania" | "north-america";

export const REGION_BOUNDS: Record<Region, [[number, number], [number, number]]> = {
  world: [[-52, -150], [68, 160]],
  latam: [[-52, -95], [28, -32]],
  europe: [[35, -12], [66, 32]],
  africa: [[-36, -20], [38, 52]],
  asia: [[-12, 40], [55, 150]],
  oceania: [[-48, 110], [-8, 180]],
  "north-america": [[12, -130], [62, -55]],
};

interface Props {
  items: Initiative[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  region: Region;
  regionNonce: number;
}

function Markers({ items, selectedId, onSelect, region, regionNonce }: Props) {
  const map = useMap();
  const groupRef = useRef<L.MarkerClusterGroup | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());

  useEffect(() => {
    const group = L.markerClusterGroup({
      maxClusterRadius: 36,
      showCoverageOnHover: false,
      spiderfyOnMaxZoom: true,
      spiderLegPolylineOptions: { weight: 1, color: "#a8821f", opacity: 0.6 },
      iconCreateFunction: (cluster) => {
        const n = cluster.getChildCount();
        const s = n < 10 ? 34 : n < 50 ? 40 : 48;
        return L.divIcon({ html: `<div>${n}</div>`, className: "nkm-cluster", iconSize: [s, s] });
      },
    });
    map.addLayer(group);
    groupRef.current = group;
    return () => {
      map.removeLayer(group);
      groupRef.current = null;
    };
  }, [map]);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;
    group.clearLayers();
    markersRef.current.clear();
    for (const it of items) {
      const def = TYPE_BY_SLUG[it.type];
      const selected = it.id === selectedId;
      const icon = L.divIcon({
        html: glyphSvg(def.glyph, 22, selected ? "#17877a" : "#a8821f"),
        className: "nkm-mark",
        iconSize: [22, 22],
        iconAnchor: [11, 11],
      });
      const m = L.marker([it.lat, it.lng], {
        icon,
        title: `${it.name}, ${it.region}`,
        alt: `${it.name}, ${def.label}, ${it.region}, ${it.country_name}`,
        keyboard: true,
        riseOnHover: true,
        zIndexOffset: selected ? 1000 : 0,
      });
      m.on("click", () => onSelect(it.id));
      m.on("keypress", (e) => {
        const key = (e as unknown as { originalEvent: KeyboardEvent }).originalEvent?.key;
        if (key === "Enter" || key === " ") onSelect(it.id);
      });
      group.addLayer(m);
      markersRef.current.set(it.id, m);
    }
  }, [items, selectedId, onSelect]);

  useEffect(() => {
    if (!selectedId) return;
    const it = items.find((i) => i.id === selectedId);
    if (!it) return;
    const target = L.latLng(it.lat, it.lng);
    const z = Math.max(map.getZoom(), 5);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) map.setView(target, z);
    else map.flyTo(target, z, { duration: 0.9 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);

  useEffect(() => {
    const b = REGION_BOUNDS[region];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.innerWidth >= 1024;
    map.fitBounds(b, { paddingTopLeft: wide ? [440, 80] : [16, 80], paddingBottomRight: [16, 16], animate: !reduce });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region, regionNonce]);

  return null;
}

export default function AtlasMap(props: Props) {
  return (
    <MapContainer
      center={[12, -10]}
      zoom={2}
      minZoom={2}
      maxZoom={16}
      worldCopyJump
      className="w-full h-full"
      scrollWheelZoom
      zoomControl={false}
      attributionControl
    >
      <TileLayer
        attribution='Tiles &copy; <a href="https://www.esri.com/">Esri</a>, HERE, Garmin, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        maxZoom={16}
      />
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}"
        maxZoom={16}
        pane="shadowPane"
        opacity={0.7}
      />
      <ZoomControl />
      <Markers {...props} />
    </MapContainer>
  );
}

function ZoomControl() {
  const map = useMap();
  useEffect(() => {
    const c = L.control.zoom({ position: "bottomright" });
    c.addTo(map);
    return () => {
      c.remove();
    };
  }, [map]);
  return null;
}
