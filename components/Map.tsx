'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { Project } from '@/lib/supabase';

// Fix for default marker icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapProps {
  projects: Project[];
  selectedCategory?: string;
}

function MapContent({ projects, selectedCategory }: MapProps) {
  const map = useMap();

  useEffect(() => {
    // Fit bounds to show all markers when data changes
    if (projects.length > 0) {
      const bounds = L.latLngBounds(
        projects.map(p => [p.latitude, p.longitude])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [projects, map]);

  const filteredProjects = selectedCategory
    ? projects.filter(p => p.category === selectedCategory)
    : projects;

  // Create custom colored markers based on category
  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      'Support Groups': '#3B82F6',
      'Education': '#10B981',
      'Employment': '#F59E0B',
      'Healthcare': '#EF4444',
      'Arts & Culture': '#8B5CF6',
      'Research': '#06B6D4',
      'Advocacy': '#EC4899',
      'Social': '#6366F1',
    };
    return colors[category] || '#6B7280';
  };

  const createColoredIcon = (category: string) => {
    const color = getCategoryColor(category);
    return new L.Icon({
      iconUrl: `data:image/svg+xml;base64,${btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41">
          <path fill="${color}" stroke="#fff" stroke-width="2" d="M12.5 0C5.6 0 0 5.6 0 12.5c0 8.4 12.5 28.5 12.5 28.5S25 20.9 25 12.5C25 5.6 19.4 0 12.5 0z"/>
          <circle fill="#fff" cx="12.5" cy="12.5" r="5"/>
        </svg>
      `)}`,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      shadowSize: [41, 41],
    });
  };

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {filteredProjects.map((project) => (
        <Marker
          key={project.id}
          position={[project.latitude, project.longitude]}
          icon={createColoredIcon(project.category)}
        >
          <Popup>
            <div className="min-w-[250px] p-2">
              <h3 className="font-bold text-lg mb-2">{project.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-2">
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                  {project.category}
                </span>
                {project.nd_focus.map((focus, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">
                    {focus}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mb-2">📍 {project.location}</p>
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline block mb-1"
                >
                  🔗 Visit Website
                </a>
              )}
              {project.contact_email && (
                <a
                  href={`mailto:${project.contact_email}`}
                  className="text-xs text-blue-600 hover:underline block"
                >
                  ✉️ Contact
                </a>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

export default function Map({ projects, selectedCategory }: MapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      className="w-full h-full"
      scrollWheelZoom={true}
    >
      <MapContent projects={projects} selectedCategory={selectedCategory} />
    </MapContainer>
  );
}
