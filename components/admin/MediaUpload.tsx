'use client';

import { useState, useRef } from 'react';
import { FaUpload, FaVideo, FaTimes, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import { uploadMultipleFiles, UploadedFile, UploadProgress } from '@/lib/uploadMedia';
import Image from 'next/image';

interface MediaUploadProps {
  onUploadComplete: (files: UploadedFile[]) => void;
  existingUrls?: string[];
  type: 'images' | 'videos';
  singleFile?: boolean;
}

export default function MediaUpload({ onUploadComplete, existingUrls = [], type, singleFile = false }: MediaUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<Record<string, UploadProgress>>({});
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setUploadProgress({});

    try {
      const uploaded = await uploadMultipleFiles(files, (progress) => {
        setUploadProgress(prev => ({
          ...prev,
          [progress.fileName]: progress,
        }));
      });

      const newUploadedFiles = singleFile ? uploaded : [...uploadedFiles, ...uploaded];
      setUploadedFiles(newUploadedFiles);
      
      // For single file mode, only keep the latest upload
      if (singleFile && uploaded.length > 0) {
        onUploadComplete([uploaded[0]]);
      } else {
        onUploadComplete(newUploadedFiles);
      }
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    
    if (singleFile) {
      // For single file mode, clear the selection
      onUploadComplete([]);
    } else {
      onUploadComplete(newFiles);
    }
  };

  const getProgressStatus = (fileName: string) => {
    const progress = uploadProgress[fileName];
    if (!progress) return null;

    switch (progress.status) {
      case 'uploading':
        return (
          <div className="flex items-center gap-2 text-blue-400">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
            <span className="text-sm">Uploading...</span>
          </div>
        );
      case 'success':
        return (
          <div className="flex items-center gap-2 text-green-400">
            <FaCheck className="text-sm" />
            <span className="text-sm">Uploaded</span>
          </div>
        );
      case 'error':
        return (
          <div className="flex items-center gap-2 text-red-400">
            <FaExclamationTriangle className="text-sm" />
            <span className="text-sm">{progress.error}</span>
          </div>
        );
      default:
        return null;
    }
  };



  return (
    <div className="space-y-4">
      {/* Upload Button */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-800 disabled:cursor-not-allowed text-white rounded-md transition-colors"
        >
          <FaUpload className="text-sm" />
          {singleFile ? `Upload ${type === 'images' ? 'Image' : 'Video'}` : `Upload ${type === 'images' ? 'Images' : 'Videos'}`}
        </button>
        
        {isUploading && (
          <div className="flex items-center gap-2 text-blue-400">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
            <span className="text-sm">Uploading files...</span>
          </div>
        )}
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple={!singleFile}
        accept={type === 'images' ? 'image/*' : 'video/*'}
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Upload Progress */}
      {Object.keys(uploadProgress).length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-300">Upload Progress</h4>
          {Object.entries(uploadProgress).map(([fileName, progress]) => (
            <div key={fileName} className="flex items-center justify-between p-3 bg-zinc-800 rounded-md">
              <div className="flex items-center gap-3">
                {progress.status === 'uploading' && (
                  <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <FaUpload className="text-blue-400 text-xs" />
                  </div>
                )}
                {progress.status === 'success' && (
                  <div className="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center">
                    <FaCheck className="text-green-400 text-xs" />
                  </div>
                )}
                {progress.status === 'error' && (
                  <div className="w-8 h-8 bg-red-600/20 rounded-full flex items-center justify-center">
                    <FaExclamationTriangle className="text-red-400 text-xs" />
                  </div>
                )}
                <div>
                  <p className="text-sm text-white font-medium">{fileName}</p>
                  {progress.status === 'uploading' && (
                    <div className="w-32 bg-zinc-700 rounded-full h-2 mt-1">
                      <div 
                        className="bg-blue-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress.progress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
              {getProgressStatus(fileName)}
            </div>
          ))}
        </div>
      )}

      {/* Uploaded Files Preview */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-300">
            {singleFile ? 'Selected File' : 'Uploaded Files'}
          </h4>
          <div className={`grid gap-3 ${singleFile ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-3'}`}>
            {uploadedFiles.map((file, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square bg-zinc-800 rounded-md overflow-hidden border border-zinc-700">
                  {file.type === 'image' ? (
                    <Image
                      src={file.url}
                      alt={file.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                      <FaVideo className="text-4xl text-gray-400" />
                    </div>
                  )}
                </div>
                
                {/* Remove Button */}
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FaTimes className="text-xs" />
                </button>
                
                {/* File Name */}
                <p className="text-xs text-gray-400 mt-1 truncate">{file.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Existing Files */}
      {existingUrls.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-300">Existing Files</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {existingUrls.map((url, index) => (
              <div key={index} className="aspect-square bg-zinc-800 rounded-md overflow-hidden border border-zinc-700">
                {type === 'images' ? (
                  <Image
                    src={url}
                    alt={`Existing ${type.slice(0, -1)} ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                    <FaVideo className="text-4xl text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 