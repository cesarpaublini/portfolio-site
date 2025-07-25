import { supabase } from './supabaseClient'

export interface SupabaseProject {
  id: number
  title: string
  subtitle: string
  description: string
  full_description: string
  image: string
  images: string[]
  tools: string[]
  github_url?: string
  live_url?: string
  videos?: string[]
  created_at: string
  updated_at: string
}

export async function getSupabaseProjects(): Promise<SupabaseProject[]> {
  try {
    console.log('Starting Supabase query...');
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })
    
    console.log('Supabase response:', { data, error });
    
    if (error) {
      console.error('Error fetching Supabase projects:', error)
      return []
    }
    
    console.log('Returning Supabase projects:', data || []);
    return data || []
  } catch (error) {
    console.error('Unexpected error fetching Supabase projects:', error)
    return []
  }
} 