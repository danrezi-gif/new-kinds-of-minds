'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  categories: string[];
}

const ND_FOCUSES = [
  'Autism',
  'ADHD',
  'Dyslexia',
  'Dyspraxia',
  'Dyscalculia',
  'Tourette Syndrome',
  'Bipolar Disorder',
  'OCD',
  'Anxiety',
  'Depression',
  'PTSD',
  'Schizophrenia',
  'Down Syndrome',
  'Other',
];

export default function SubmitModal({
  isOpen,
  onClose,
  onSuccess,
  categories,
}: SubmitModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    nd_focus: [] as string[],
    location: '',
    latitude: 0,
    longitude: 0,
    contact_email: '',
    website: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isGeocoding, setIsGeocoding] = useState(false);

  if (!isOpen) return null;

  const handleNdFocusToggle = (focus: string) => {
    setFormData((prev) => ({
      ...prev,
      nd_focus: prev.nd_focus.includes(focus)
        ? prev.nd_focus.filter((f) => f !== focus)
        : [...prev.nd_focus, focus],
    }));
  };

  const geocodeLocation = async () => {
    if (!formData.location.trim()) {
      setError('Please enter a location first');
      return;
    }

    setIsGeocoding(true);
    setError(null);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          formData.location
        )}&limit=1`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        setFormData((prev) => ({
          ...prev,
          latitude: parseFloat(data[0].lat),
          longitude: parseFloat(data[0].lon),
        }));
      } else {
        setError('Location not found. Please try a different address or city name.');
      }
    } catch (err) {
      setError('Failed to geocode location. Please try again.');
    } finally {
      setIsGeocoding(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.name.trim() || !formData.description.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    if (!formData.category) {
      setError('Please select a category');
      return;
    }

    if (formData.nd_focus.length === 0) {
      setError('Please select at least one neurodiversity focus');
      return;
    }

    if (!formData.latitude || !formData.longitude) {
      setError('Please geocode your location first');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: supabaseError } = await supabase.from('projects').insert([
        {
          name: formData.name,
          description: formData.description,
          category: formData.category,
          nd_focus: formData.nd_focus,
          location: formData.location,
          latitude: formData.latitude,
          longitude: formData.longitude,
          contact_email: formData.contact_email || null,
          website: formData.website || null,
          status: 'pending',
        },
      ]);

      if (supabaseError) throw supabaseError;

      // Reset form
      setFormData({
        name: '',
        description: '',
        category: '',
        nd_focus: [],
        location: '',
        latitude: 0,
        longitude: 0,
        contact_email: '',
        website: '',
      });

      onSuccess();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit project');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">Submit a Project</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category *
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Neurodiversity Focus * (select all that apply)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {ND_FOCUSES.map((focus) => (
                <label key={focus} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.nd_focus.includes(focus)}
                    onChange={() => handleNdFocusToggle(focus)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{focus}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location * (city, country)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                placeholder="e.g., Houston, Texas, USA"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                required
              />
              <button
                type="button"
                onClick={geocodeLocation}
                disabled={isGeocoding}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors disabled:opacity-50"
              >
                {isGeocoding ? 'Loading...' : 'Find'}
              </button>
            </div>
            {formData.latitude !== 0 && formData.longitude !== 0 && (
              <p className="text-xs text-green-600 mt-1">
                ✓ Location found: {formData.latitude.toFixed(4)}, {formData.longitude.toFixed(4)}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Email
            </label>
            <input
              type="email"
              value={formData.contact_email}
              onChange={(e) =>
                setFormData({ ...formData, contact_email: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website
            </label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
              placeholder="https://"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
