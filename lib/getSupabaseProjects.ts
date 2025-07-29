import { supabase } from './supabaseClient'

export interface SupabaseProject {
  id: string // Changed from number to string (uuid)
  title: string
  subtitle: string
  description: string
  full_description: string
  image: string[] // Changed from string to string[] to match database schema
  tools: string[]
  images: string[]
  live_url: string
  videos: string[]
  created_at: string
  updated_at: string
}

export async function getSupabaseProjects(): Promise<SupabaseProject[]> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('id, title, subtitle, description, full_description, image, tools, images, live_url, videos, created_at, updated_at')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching Supabase projects:', error)
      return []
    }
    
    return data || []
  } catch (error) {
    console.error('Unexpected error fetching Supabase projects:', error)
    return []
  }
} 