'use client';

import { useState, useEffect } from 'react';
import { getSupabaseProjects, SupabaseProject } from '@/lib/getSupabaseProjects';
import SupabaseProjectCard from '@/components/projects/SupabaseProjectCard';
import { Project } from '@/components/projects/projectsData';

// Function to convert Supabase project to match our Project interface
function convertSupabaseProject(supabaseProject: SupabaseProject): Project {
  return {
    id: `supabase-${supabaseProject.id}`, // Prefix to avoid conflicts with hardcoded projects
    title: supabaseProject.title,
    subtitle: supabaseProject.subtitle,
    description: supabaseProject.description,
    fullDescription: supabaseProject.full_description,
    image: Array.isArray(supabaseProject.image) ? supabaseProject.image[0] || '' : supabaseProject.image || '', // Handle image as array
    images: supabaseProject.images,
    tools: supabaseProject.tools,
    githubUrl: undefined, // Removed from new schema
    liveUrl: supabaseProject.live_url,
    videos: supabaseProject.videos,
  };
}

export default function SupabaseDemoPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setIsLoading(true);
        const supabaseProjects = await getSupabaseProjects();
        const convertedProjects = supabaseProjects.map(convertSupabaseProject);
        setProjects(convertedProjects);
      } catch (err) {
        setError('Failed to fetch projects');
        console.error('Error fetching projects:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-red-400 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          Supabase Projects Demo
        </h1>
        
        {projects.length === 0 ? (
          <div className="text-gray-400 text-center py-12">
            No projects found in Supabase
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <SupabaseProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
        
        {/* Debug Info */}
        <div className="mt-12 p-6 bg-zinc-800 rounded-lg border border-zinc-700">
          <h2 className="text-xl font-bold text-white mb-4">Debug Information</h2>
          <div className="text-gray-300 text-sm">
            <p><strong>Total Projects:</strong> {projects.length}</p>
            <p><strong>Projects with Tools:</strong> {projects.filter(p => Array.isArray(p.tools) && p.tools.length > 0).length}</p>
            <p><strong>Projects with Images:</strong> {projects.filter(p => Array.isArray(p.images) && p.images.length > 0).length}</p>
            <p><strong>Projects with Videos:</strong> {projects.filter(p => Array.isArray(p.videos) && p.videos.length > 0).length}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 