import { supabase } from './supabaseClient';

export async function testSupabasePermissions() {
  console.log('Testing Supabase permissions...');
  
  try {
    // Test SELECT (should work)
    console.log('Testing SELECT permission...');
    const { data: selectData, error: selectError } = await supabase
      .from('projects')
      .select('id, title')
      .limit(1);
    
    console.log('SELECT result:', { data: selectData, error: selectError });
    
    // Test UPDATE on the specific project that was failing
    if (selectData && selectData.length > 0) {
      console.log('Testing UPDATE permission on specific project...');
      const testProjectId = selectData[0].id;
      console.log('Testing UPDATE on project ID:', testProjectId);
      
      const { data: updateData, error: updateError } = await supabase
        .from('projects')
        .update({ 
          title: 'PERMISSION_TEST_' + Date.now(),
          subtitle: 'test',
          description: 'test',
          full_description: 'test',
          image: ['test.jpg'],
          live_url: ''
        })
        .eq('id', testProjectId)
        .select(); // Add .select() to see what was actually updated
      
      console.log('UPDATE result:', { data: updateData, error: updateError });
      
      // Immediately fetch the project to see if it was actually updated
      const { data: verifyData, error: verifyError } = await supabase
        .from('projects')
        .select('*')
        .eq('id', testProjectId)
        .single();
      
      console.log('VERIFY UPDATE result:', { data: verifyData, error: verifyError });
    }
    
  } catch (error) {
    console.error('Permission test error:', error);
  }
} 