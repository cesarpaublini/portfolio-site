import { supabase } from './supabaseClient';

export async function testBucketAccess() {
  console.log('Testing Supabase Storage access...');
  
  try {
    // Test 1: Check if we can list files in the bucket
    const { error: listError } = await supabase.storage
      .from('portfolio-media')
      .list('', { limit: 1 });
    
    if (listError) {
      console.error('❌ Cannot list files in bucket:', listError.message);
      return {
        success: false,
        error: `Cannot access bucket: ${listError.message}`,
        suggestion: 'Check if the portfolio-media bucket exists and your RLS policies allow listing files.'
      };
    }
    
    console.log('✅ Can list files in bucket');
    
    // Test 2: Check if we can get public URL (this doesn't require actual file)
    const { data: urlData } = supabase.storage
      .from('portfolio-media')
      .getPublicUrl('test-file.jpg');
    
    if (urlData.publicUrl) {
      console.log('✅ Can generate public URLs');
    } else {
      console.log('❌ Cannot generate public URLs');
    }
    
    return {
      success: true,
      message: 'Bucket access verified successfully',
      bucketName: 'portfolio-media',
      canList: true,
      canGenerateUrls: !!urlData.publicUrl
    };
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      suggestion: 'Check your Supabase configuration and storage policies.'
    };
  }
}

// You can call this function from the browser console to test
if (typeof window !== 'undefined') {
  (window as unknown as Record<string, unknown>).testSupabaseUpload = testBucketAccess;
} 