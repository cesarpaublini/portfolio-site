'use client';

import { useState, useEffect } from 'react';
import { FaTimes, FaSave } from 'react-icons/fa';
import { Project } from '@/components/projects/projectsData';
import { supabase } from '@/lib/supabaseClient';
import MediaUpload from './MediaUpload';
import { UploadedFile } from '@/lib/uploadMedia';

interface AddEditProjectModalProps {
  project?: Project | null;
  onClose: () => void;
  onSave: () => void;
}

export default function AddEditProjectModal({ project, onClose, onSave }: AddEditProjectModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    full_description: '',
    image: '',
    images: [] as string[],
    tools: [] as string[],
    live_url: '',
    videos: [] as string[],
  });
  const [uploadedImages, setUploadedImages] = useState<UploadedFile[]>([]);
  const [uploadedVideos, setUploadedVideos] = useState<UploadedFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEditing = !!project;

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || '',
        subtitle: project.subtitle || '',
        description: project.description || '',
        full_description: project.fullDescription || '',
        image: Array.isArray(project.image) ? project.image[0] || '' : project.image || '', // Handle image as array
        images: Array.isArray(project.images) ? project.images : [],
        tools: Array.isArray(project.tools) ? project.tools : [],
        live_url: project.liveUrl || '',
        videos: Array.isArray(project.videos) ? project.videos : [],
      });
    }
  }, [project]);

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayInputChange = (field: string, value: string) => {
    const array = value.split(',').map(item => item.trim()).filter(item => item);
    setFormData(prev => ({ ...prev, [field]: array }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🚀 Form submission started!');
    setIsLoading(true);
    setError(null);

    // Front-end validation for required fields
    const { title, subtitle, description, full_description, image } = formData;
    
    // Handle image field which might be an array when editing
    const imageValue = Array.isArray(image) ? image[0] || '' : image || '';
    
    if (!title?.trim() || !subtitle?.trim() || !description?.trim() || !full_description?.trim() || !imageValue?.trim()) {
      setError('Please fill in all required fields (Title, Subtitle, Description, Full Description, and Main Image).');
      setIsLoading(false);
      return;
    }

    try {
      // Combine existing URLs with newly uploaded files
      const additionalImagesUrls = [
        ...formData.images,
        ...uploadedImages.map(file => file.url)
      ];
      
      const videoUrls = [
        ...formData.videos,
        ...uploadedVideos.map(file => file.url)
      ];

      // Create tools array from comma-separated input
      const toolsInput = formData.tools.join(', ');
      const toolsArray = toolsInput
        ? toolsInput.split(',').map(t => t.trim()).filter(t => t)
        : [];

      // Build payload with proper arrays for text[] columns
      const payload: {
        title: string;
        subtitle: string;
        description: string;
        full_description: string;
        image: string[];
        live_url: string;
        tools?: string[];
        images?: string[];
        videos?: string[];
      } = {
        title: title.trim(),
        subtitle: subtitle.trim(),
        description: description.trim(),
        full_description: full_description.trim(),
        image: [imageValue.trim()], // Use imageValue instead of image
        live_url: formData.live_url || '',
      };

      // Add array fields only when they have values
      if (toolsArray && toolsArray.length) {
        payload.tools = toolsArray;        // string[]
      }

      if (additionalImagesUrls && additionalImagesUrls.length) {
        payload.images = additionalImagesUrls;        // string[]
      }

      if (videoUrls && videoUrls.length) {
        payload.videos = videoUrls;        // string[]
      }

      if (isEditing && project) {
        
        const { error } = await supabase
          .from('projects')
          .update(payload)
          .eq('id', project.id)
          .select('id, title, subtitle, description, full_description, image, tools, images, live_url, videos, created_at, updated_at');

        if (error) {
          console.error('UPDATE ERROR:', error);
          throw error;
        }
      } else {
        const { error } = await supabase
          .from('projects')
          .insert([payload]);

        if (error) {
          console.error('INSERT ERROR:', error);
          throw error;
        }
      }

      onSave();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error('Supabase insert error:', errorMessage);
      setError(errorMessage || 'Failed to save project. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="bg-[#0d0d0d] rounded-xl border border-zinc-700 max-w-4xl w-full max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-zinc-700">
          <h2 className="text-xl font-bold text-white">
            {isEditing ? 'Edit Project' : 'Add New Project'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-md">
              <p className="text-red-400">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Project title"
                required
              />
            </div>

            {/* Subtitle */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subtitle *
              </label>
              <input
                type="text"
                value={formData.subtitle}
                onChange={(e) => handleInputChange('subtitle', e.target.value)}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Role or subtitle"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Short Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Short project description"
              rows={3}
              required
            />
          </div>

          {/* Full Description */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Description *
            </label>
            <textarea
              value={formData.full_description}
              onChange={(e) => handleInputChange('full_description', e.target.value)}
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Full project description (supports HTML)"
              rows={6}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main Image */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Main Image *
              </label>
              <MediaUpload
                type="images"
                onUploadComplete={(files) => {
                  if (files.length > 0) {
                    handleInputChange('image', files[0].url);
                  }
                }}
                existingUrls={formData.image ? [formData.image] : []}
                singleFile={true}
              />
              {/* Manual URL input as fallback */}
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Or enter image URL manually
                </label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => handleInputChange('image', e.target.value)}
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
                  placeholder="/images/projects/project-thumbnail.jpg"
                  required
                />
              </div>
            </div>

            {/* Tools */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tools (comma-separated)
              </label>
              <input
                type="text"
                value={formData.tools.join(', ')}
                onChange={(e) => handleArrayInputChange('tools', e.target.value)}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Next.js, TypeScript, Supabase"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {/* Live URL */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Live Site URL
              </label>
              <input
                type="url"
                value={formData.live_url}
                onChange={(e) => handleInputChange('live_url', e.target.value)}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="https://myproject.com"
              />
            </div>
          </div>

          {/* Additional Images */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Additional Images
            </label>
            <MediaUpload
              type="images"
              onUploadComplete={(files) => setUploadedImages(files)}
              existingUrls={formData.images}
            />
            {/* Manual URL input as fallback */}
            <div className="mt-3">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Or add image URLs manually (comma-separated)
              </label>
              <input
                type="text"
                value={formData.images.join(', ')}
                onChange={(e) => handleArrayInputChange('images', e.target.value)}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
                placeholder="/images/projects/project-1.jpg, /images/projects/project-2.jpg"
              />
            </div>
          </div>

          {/* Videos */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Videos
            </label>
            <MediaUpload
              type="videos"
              onUploadComplete={(files) => setUploadedVideos(files)}
              existingUrls={formData.videos}
            />
            {/* Manual URL input as fallback */}
            <div className="mt-3">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Or add video URLs manually (comma-separated)
              </label>
              <input
                type="text"
                value={formData.videos.join(', ')}
                onChange={(e) => handleArrayInputChange('videos', e.target.value)}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
                placeholder="/videos/project-demo.mp4, /videos/project-walkthrough.mp4"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t border-zinc-700">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-2 px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md transition-colors disabled:opacity-50"
            >
              <FaSave className="text-sm" />
              {isLoading ? 'Saving...' : (isEditing ? 'Update Project' : 'Create Project')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 