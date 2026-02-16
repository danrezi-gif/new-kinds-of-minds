'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { supabase, Project, Category } from '@/lib/supabase';
import Sidebar from '@/components/Sidebar';
import SubmitModal from '@/components/SubmitModal';

// Dynamic import to avoid SSR issues with Leaflet
const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="text-gray-500">Loading map...</div>
    </div>
  ),
});

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Fetch approved projects
      const { data: projectsData, error: projectsError } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (projectsError) throw projectsError;

      // Fetch categories
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (categoriesError) throw categoriesError;

      setProjects(projectsData || []);
      setCategories(categoriesData || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitSuccess = () => {
    // Show success message
    alert(
      'Thank you for your submission! Your project will be reviewed and published soon.'
    );
    fetchData();
  };

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        onSubmitClick={() => setIsSubmitModalOpen(true)}
        projectCount={filteredProjects.length}
      />
      
      <div className="flex-1 relative">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="text-gray-500">Loading projects...</div>
          </div>
        ) : (
          <Map projects={filteredProjects} selectedCategory={selectedCategory} />
        )}
      </div>

      <SubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSuccess={handleSubmitSuccess}
        categories={categories.map((c) => c.name)}
      />
    </div>
  );
}
