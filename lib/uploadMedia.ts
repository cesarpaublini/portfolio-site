import { supabase } from './supabaseClient';

export interface UploadedFile {
  url: string;
  name: string;
  type: 'image' | 'video';
}

export interface UploadProgress {
  fileName: string;
  progress: number;
  status: 'uploading' | 'success' | 'error';
  error?: string;
}

// Allowed file types
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
const ALLOWED_VIDEO_TYPES = ['video/mp4', 'video/webm', 'video/ogg', 'video/quicktime'];

export function isAllowedFile(file: File): { allowed: boolean; type: 'image' | 'video' | null; error?: string } {
  if (ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return { allowed: true, type: 'image' };
  }
  if (ALLOWED_VIDEO_TYPES.includes(file.type)) {
    return { allowed: true, type: 'video' };
  }
  return { 
    allowed: false, 
    type: null, 
    error: 'File type not supported. Please upload images (JPEG, PNG, WebP, GIF) or videos (MP4, WebM, OGG, MOV).' 
  };
}

export function generateUniqueFileName(originalName: string): string {
  const timestamp = Date.now();
  const randomId = Math.random().toString(36).substring(2, 15);
  const extension = originalName.split('.').pop();
  return `${timestamp}-${randomId}.${extension}`;
}

export async function uploadFileToSupabase(
  file: File
): Promise<UploadedFile> {
  const fileName = generateUniqueFileName(file.name);
  const filePath = `${fileName}`; // Simplified path - just filename

  try {
    // Upload file directly to the portfolio-media bucket
    const { error } = await supabase.storage
      .from('portfolio-media')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      throw new Error(`Upload failed: ${error.message}`);
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('portfolio-media')
      .getPublicUrl(filePath);

    if (!urlData.publicUrl) {
      throw new Error('Failed to get public URL for uploaded file');
    }

    const fileType = ALLOWED_IMAGE_TYPES.includes(file.type) ? 'image' : 'video';

    return {
      url: urlData.publicUrl,
      name: fileName,
      type: fileType,
    };
  } catch (error) {
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('bucket')) {
        throw new Error('Storage bucket not found. Please ensure the portfolio-media bucket exists in your Supabase project.');
      }
      if (error.message.includes('permission') || error.message.includes('RLS')) {
        throw new Error('Permission denied. Please check your Supabase storage policies.');
      }
      throw error;
    }
    throw new Error('Upload failed. Please try again.');
  }
}

export async function uploadMultipleFiles(
  files: FileList | File[],
  onProgress?: (progress: UploadProgress) => void
): Promise<UploadedFile[]> {
  const fileArray = Array.from(files);
  const uploadedFiles: UploadedFile[] = [];

  for (const file of fileArray) {
    try {
      // Validate file type
      const validation = isAllowedFile(file);
      if (!validation.allowed) {
        onProgress?.({
          fileName: file.name,
          progress: 0,
          status: 'error',
          error: validation.error,
        });
        continue;
      }

      // Update progress to uploading
      onProgress?.({
        fileName: file.name,
        progress: 0,
        status: 'uploading',
      });

      // Upload file
      const uploadedFile = await uploadFileToSupabase(file);
      uploadedFiles.push(uploadedFile);

      // Update progress to success
      onProgress?.({
        fileName: file.name,
        progress: 100,
        status: 'success',
      });

    } catch (error) {
      onProgress?.({
        fileName: file.name,
        progress: 0,
        status: 'error',
        error: error instanceof Error ? error.message : 'Upload failed',
      });
    }
  }

  return uploadedFiles;
}

export async function deleteFileFromSupabase(filePath: string): Promise<void> {
  const { error } = await supabase.storage
    .from('portfolio-media')
    .remove([filePath]);

  if (error) {
    throw new Error(`Delete failed: ${error.message}`);
  }
} 