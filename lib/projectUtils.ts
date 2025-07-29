import { SupabaseProject } from './getSupabaseProjects';
import { Project } from '@/components/projects/projectsData';

export function convertSupabaseProjectToProject(supabaseProject: SupabaseProject): Project {
  return {
    id: supabaseProject.id, // Keep as string, no conversion needed
    title: supabaseProject.title,
    subtitle: supabaseProject.subtitle,
    description: supabaseProject.description,
    fullDescription: supabaseProject.full_description, // Map snake_case to camelCase
    image: Array.isArray(supabaseProject.image) ? supabaseProject.image[0] || '' : supabaseProject.image || '', // Handle image as array
    images: Array.isArray(supabaseProject.images) ? supabaseProject.images : [],
    tools: Array.isArray(supabaseProject.tools) ? supabaseProject.tools : [],
    githubUrl: undefined, // Removed from new schema
    liveUrl: supabaseProject.live_url, // Map snake_case to camelCase
    videos: Array.isArray(supabaseProject.videos) ? supabaseProject.videos : [],
  };
} 