// components/projects/ProjectCard.tsx

import React from 'react';
import { Project } from './projectsData';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const safeTools = Array.isArray(project.tools) ? project.tools : [];

  return (
    <div
      className="group relative bg-gradient-to-br from-violet-600/10 via-purple-600/5 to-violet-800/10 rounded-xl overflow-hidden border border-zinc-700 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-violet-500"
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-600/10 to-violet-800/20 opacity-80 pointer-events-none z-10" />
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{project.subtitle}</p>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {safeTools.slice(0, 3).map((tool) => (
                <span key={tool} className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30">{tool}</span>
              ))}
              {safeTools.length > 3 && (
                <span className="px-3 py-1 bg-zinc-700 text-gray-300 text-xs rounded-full">+{safeTools.length - 3} more</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 