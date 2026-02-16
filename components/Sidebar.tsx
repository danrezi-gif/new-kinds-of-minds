'use client';

import { Category } from '@/lib/supabase';

interface SidebarProps {
  categories: Category[];
  selectedCategory?: string;
  onCategorySelect: (category?: string) => void;
  onSubmitClick: () => void;
  projectCount: number;
}

export default function Sidebar({
  categories,
  selectedCategory,
  onCategorySelect,
  onSubmitClick,
  projectCount,
}: SidebarProps) {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          New Kinds of Minds
        </h1>
        <p className="text-sm text-gray-600">
          Discover neurodiversity projects worldwide
        </p>
      </div>

      {/* Submit Button */}
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={onSubmitClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          + Submit a Project
        </button>
      </div>

      {/* Stats */}
      <div className="p-4 border-b border-gray-200">
        <div className="text-sm text-gray-600">
          <span className="font-semibold text-gray-900">{projectCount}</span> projects
          {selectedCategory && ' in this category'}
        </div>
      </div>

      {/* Categories Filter */}
      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-sm font-semibold text-gray-900 mb-3">Categories</h2>
        <div className="space-y-2">
          <button
            onClick={() => onCategorySelect(undefined)}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
              !selectedCategory
                ? 'bg-gray-900 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className="text-sm font-medium">All Categories</span>
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.name)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                selectedCategory === category.name
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Part of the <span className="font-semibold">Entrementes</span> initiative
        </p>
      </div>
    </div>
  );
}
