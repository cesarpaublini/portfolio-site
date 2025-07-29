import React from 'react';
import { Project } from './projectsData';
import Image from 'next/image';

interface SupabaseProjectCardProps {
  project: Project;
}

export default function SupabaseProjectCard({ project }: SupabaseProjectCardProps) {
  return (
    <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-zinc-600 transition-colors">
      {/* Project Image */}
      {project.image && (
        <div className="mb-4">
          <Image 
            src={project.image} 
            alt={project.title}
            width={600}
            height={300}
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      )}
      
      {/* Project Title */}
      <h3 className="text-xl font-bold text-white mb-2">
        {project.title}
      </h3>
      
      {/* Project Subtitle */}
      <p className="text-gray-300 text-sm mb-3">
        {project.subtitle}
      </p>
      
      {/* Project Description */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>
      
      {/* Tools Badges */}
      {Array.isArray(project.tools) && project.tools.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tool, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-violet-600/20 text-violet-300 text-xs rounded-full border border-violet-500/30"
            >
              {tool}
            </span>
          ))}
        </div>
      )}
      
      {/* Live URL */}
      {project.liveUrl && (
        <div className="mt-4">
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm rounded-md transition-colors"
          >
            View Live Site
          </a>
        </div>
      )}
    </div>
  );
} 