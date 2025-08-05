'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import { projects, Project } from '@/components/projects/projectsData';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectModal from '@/components/projects/ProjectModal';
import { getSupabaseProjects, SupabaseProject } from '@/lib/getSupabaseProjects';

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

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [allProjects, setAllProjects] = useState<Project[]>(projects); // Start with hardcoded projects
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0); // Add refresh key for forcing re-fetch

  useEffect(() => {
    async function fetchSupabaseProjects() {
      try {
        setIsLoading(true);
        setError(null);
        
        console.log('Fetching Supabase projects...');
        const supabaseProjects = await getSupabaseProjects();
        console.log('Supabase projects received:', supabaseProjects);
        
        const convertedProjects = supabaseProjects.map(convertSupabaseProject);
        console.log('Converted projects:', convertedProjects);
        
        // Combine hardcoded projects with Supabase projects
        const combinedProjects = [...projects, ...convertedProjects];
        console.log('Combined projects:', combinedProjects);
        console.log('Total projects count:', combinedProjects.length);
        
        setAllProjects(combinedProjects);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load some projects. Showing available projects.');
        // Keep hardcoded projects even if Supabase fails
        setAllProjects(projects);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSupabaseProjects();
  }, [refreshKey]); // Add refreshKey as dependency to trigger re-fetch

  // Auto-refresh every 30 seconds to keep in sync with admin dashboard
  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey(prev => prev + 1);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-20 pb-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here you will find a selection of projects I have worked on.
          </p>
          
          {/* Loading and Error States */}
          {isLoading && (
            <div className="mt-8">
              <div className="inline-flex items-center px-4 py-2 bg-zinc-800 text-gray-300 rounded-md">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-violet-400 mr-3"></div>
                Loading projects...
              </div>
            </div>
          )}
          
          {error && (
            <div className="mt-8">
              <div className="inline-flex items-center px-4 py-2 bg-red-900/20 text-red-400 rounded-md border border-red-500/30">
                <span className="text-sm">{error}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 sm:px-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => openModal(project)}
              />
            ))}
          </div>
          
          {/* No Projects State */}
          {!isLoading && allProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={closeModal}
      />

      <Footer />
    </div>
  );
}