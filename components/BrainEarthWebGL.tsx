"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import type { Initiative } from "@/lib/types";

type Stage = "boot" | "renderer" | "earth" | "atlas" | "ready" | "error";

const WORLD_URL =
  "https://cdn.jsdelivr.net/gh/nvkelso/natural-earth-vector@master/geojson/ne_110m_admin_0_countries.geojson";

function latLon(lat: number, lon: number, radius: number) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function hash(value: string) {
  let h = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function worldTexture(
  renderer: THREE.WebGLRenderer,
  geo: { features?: Array<{ geometry?: { type?: string; coordinates?: unknown } }> },
) {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2D texture canvas unavailable");

  const bg = ctx.createRadialGradient(900, 420, 50, 900, 420, 1100);
  bg.addColorStop(0, "#17150e");
  bg.addColorStop(0.55, "#090a08");
  bg.addColorStop(1, "#020304");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(190,190,166,.035)";
  ctx.lineWidth = 0.65;
  for (let lon = -180; lon <= 180; lon += 15) {
    const x = ((lon + 180) / 360) * canvas.width;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let lat = -75; lat <= 75; lat += 15) {
    const y = ((90 - lat) / 180) * canvas.height;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  const drawRing = (ring: unknown) => {
    if (!Array.isArray(ring)) return;
    ctx.beginPath();
    let started = false;
    for (const point of ring) {
      if (!Array.isArray(point) || point.length < 2) continue;
      const x = ((Number(point[0]) + 180) / 360) * canvas.width;
      const y = ((90 - Number(point[1])) / 180) * canvas.height;
      if (!started) {
        ctx.moveTo(x, y);
        started = true;
      } else ctx.lineTo(x, y);
    }
    if (!started) return;
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  };

  ctx.fillStyle = "rgba(27,27,20,.94)";
  ctx.strokeStyle = "rgba(215,213,188,.26)";
  ctx.lineWidth = 1.05;

  for (const feature of geo.features ?? []) {
    const geometry = feature.geometry;
    if (!geometry) continue;
    if (geometry.type === "Polygon" && Array.isArray(geometry.coordinates)) {
      geometry.coordinates.forEach(drawRing);
    }
    if (geometry.type === "MultiPolygon" && Array.isArray(geometry.coordinates)) {
      geometry.coordinates.forEach((polygon) => {
        if (Array.isArray(polygon)) polygon.forEach(drawRing);
      });
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return texture;
}

export default function BrainEarthWebGL({ items }: { items: Initiative[] }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<Stage>("boot");
  const [detail, setDetail] = useState("Preparing renderer");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let disposed = false;
    let raf = 0;
    let renderer: THREE.WebGLRenderer | null = null;

    const fail = (label: string, cause: unknown) => {
      const message = cause instanceof Error ? cause.message : String(cause);
      console.error("[BRAIN study]", label, cause);
      if (!disposed) {
        setError(label + ": " + message);
        setStage("error");
      }
    };

    const run = async () => {
      try {
        setStage("renderer");
        setDetail("Starting local Three.js renderer");

        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;
        host.replaceChildren(renderer.domElement);

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x010203);
        scene.fog = new THREE.FogExp2(0x010203, 0.045);

        const camera = new THREE.PerspectiveCamera(38, 1, 0.05, 100);
        camera.position.set(0, 0.05, 8.65);

        const earth = new THREE.Group();
        scene.add(earth);
        scene.add(new THREE.HemisphereLight(0xd8d0b5, 0x020304, 0.72));
        const key = new THREE.DirectionalLight(0xf2d7a0, 2.5);
        key.position.set(-3, 4, 5);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0x71868d, 0.8);
        rim.position.set(4, -1, -4);
        scene.add(rim);

        setStage("earth");
        setDetail("Loading Natural Earth geometry");
        const response = await fetch(WORLD_URL);
        if (!response.ok) throw new Error("Natural Earth HTTP " + response.status);
        const geo = await response.json();
        if (disposed) return;

        const texture = worldTexture(renderer, geo);
        const globe = new THREE.Mesh(
          new THREE.SphereGeometry(2.2, 112, 80),
          new THREE.MeshPhysicalMaterial({
            map: texture,
            color: 0xb9b49e,
            roughness: 0.84,
            metalness: 0.01,
            clearcoat: 0.04,
            emissive: 0x050503,
            emissiveIntensity: 0.15,
          }),
        );
        globe.rotation.y = Math.PI;
        earth.add(globe);

        setStage("atlas");
        setDetail("Building " + items.length + " atlas positions");

        const valid = items.filter(
          (item) => Number.isFinite(item.lat) && Number.isFinite(item.lng),
        );
        const positions = new Float32Array(valid.length * 3);
        const colors = new Float32Array(valid.length * 3);
        const palette = ["#f1d28b", "#8fbfc6", "#b7a5c8", "#d4b19a"].map(
          (c) => new THREE.Color(c),
        );

        valid.forEach((item, index) => {
          const p = latLon(item.lat, item.lng, 2.225);
          positions.set(p.toArray(), index * 3);
          const color = palette[hash(item.type || item.id) % palette.length];
          colors.set(color.toArray(), index * 3);
        });

        const pointsGeometry = new THREE.BufferGeometry();
        pointsGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3),
        );
        pointsGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        const points = new THREE.Points(
          pointsGeometry,
          new THREE.PointsMaterial({
            size: 0.047,
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          }),
        );
        earth.add(points);

        setStage("ready");
        setDetail(valid.length + " real initiatives / live atlas data");

        const resize = () => {
          if (!renderer || !host) return;
          const width = Math.max(1, host.clientWidth);
          const height = Math.max(1, host.clientHeight);
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        };
        resize();
        window.addEventListener("resize", resize);

        let previous = performance.now();
        const animate = (now: number) => {
          if (disposed || !renderer) return;
          const dt = Math.min(0.04, (now - previous) / 1000);
          previous = now;
          earth.rotation.y += dt * 0.03;
          renderer.render(scene, camera);
          raf = requestAnimationFrame(animate);
        };
        raf = requestAnimationFrame(animate);

        return () => window.removeEventListener("resize", resize);
      } catch (cause) {
        fail("Initialization failed", cause);
      }
    };

    let removeResize: void | (() => void);
    void run().then((cleanup) => {
      removeResize = cleanup;
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      if (removeResize) removeResize();
      if (renderer) {
        renderer.dispose();
        renderer.domElement.remove();
      }
    };
  }, [items]);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#010203] text-[#eee9dc]">
      <div ref={hostRef} className="absolute inset-0" aria-hidden="true" />

      <header className="pointer-events-none absolute left-5 top-5 z-10 sm:left-8 sm:top-8 lg:left-12 lg:top-10">
        <p className="m-0 text-[0.64rem] uppercase tracking-[0.34em] text-white/45">
          New Kinds of Minds / visual laboratory
        </p>
        <h1
          className="m-0 mt-3 max-w-[12ch] text-[clamp(2rem,4.8vw,4.8rem)] font-normal leading-[0.94] tracking-[-0.035em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          A planetary atlas of cognitive possibility
        </h1>
      </header>

      <div className="pointer-events-none absolute bottom-6 left-5 z-10 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-12">
        <p className="m-0 text-[0.62rem] uppercase tracking-[0.3em] text-[#d7b96f]">
          Earth / geography
        </p>
        <p className="m-0 mt-2 max-w-[42rem] text-[clamp(.95rem,1.8vw,1.25rem)] text-white/70">
          A world of real initiatives suspended above a dark geographic body.
        </p>
        <p className="m-0 mt-3 text-[0.68rem] tracking-[0.06em] text-white/35">
          {detail}
        </p>
      </div>

      {stage !== "ready" && stage !== "error" && (
        <div className="pointer-events-none absolute inset-0 z-20 grid place-items-center">
          <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/45">
            {stage} / {detail}
          </p>
        </div>
      )}

      {error && (
        <div className="absolute bottom-6 right-5 z-30 max-w-[30rem] border border-red-300/30 bg-black/80 p-4 text-xs leading-relaxed text-red-100 sm:right-8">
          <strong className="block uppercase tracking-[0.2em]">Renderer error</strong>
          <span className="mt-2 block">{error}</span>
        </div>
      )}

      <a
        href="/"
        className="absolute right-5 top-5 z-30 text-[0.66rem] uppercase tracking-[0.18em] text-white/45 no-underline hover:text-white sm:right-8 sm:top-8"
      >
        Atlas
      </a>
    </section>
  );
}
