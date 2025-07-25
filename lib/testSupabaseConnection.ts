import { supabase } from './supabaseClient'

export async function testSupabaseConnection() {
  try {
    console.log('Testing Supabase connection...')
    
    // Test basic connection by fetching projects
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .limit(1)
    
    if (error) {
      console.error('Supabase connection error:', error)
      return { success: false, error: error.message }
    }
    
    console.log('Supabase connection successful!')
    console.log('Projects found:', data?.length || 0)
    console.log('Sample data:', data?.[0] || 'No projects found')
    
    return { success: true, data, count: data?.length || 0 }
  } catch (error) {
    console.error('Unexpected error:', error)
    return { success: false, error: 'Unexpected error occurred' }
  }
} 