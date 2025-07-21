// components/projects/ProjectCard.tsx

import React from 'react';
import { Project } from './projectsData';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
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
        {/* Hover Overlay (copy logic from your main grid) */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {project.id === 1 ? (
              <>
                <h3 className="text-xl font-semibold text-white mb-2">Trolley Booking Platform</h3>
                <p className="text-gray-300 text-sm mb-4">Event transportation tool</p>
                <p className="text-gray-400 text-sm mb-4">Nationwide platform to book trolleys for weddings, parties, and corporate events in 90+ cities.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30">{tool}</span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-3 py-1 bg-zinc-700 text-gray-300 text-xs rounded-full">+{project.tools.length - 3} more</span>
                  )}
                </div>
              </>
            ) : project.id === 2 ? (
              <>
                <h3 className="text-xl font-semibold text-white mb-2">Virgin Voyages Content Series</h3>
                <p className="text-gray-300 text-sm mb-4">Creative production project</p>
                <p className="text-gray-400 text-sm mb-4">Filmed, edited, and directed social media videos for destinations, promos, onboard activities, and a 2023 ad campaign BTS.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30">{tool}</span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-3 py-1 bg-zinc-700 text-gray-300 text-xs rounded-full">+{project.tools.length - 3} more</span>
                  )}
                </div>
              </>
            ) : project.id === 3 ? (
              <>
                <h3 className="text-xl font-semibold text-white mb-2">Cleer Product Photography</h3>
                <p className="text-gray-300 text-sm mb-4">Creative content project</p>
                <p className="text-gray-400 text-sm mb-4">Directed, photographed, and retouched lifestyle and product shots for Cleer&apos;s website, ads, and e-commerce listings.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30">Photography</span>
                  <span className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30">Art Direction</span>
                  <span className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30">Retouching</span>
                  <span className="px-3 py-1 bg-zinc-700 text-gray-300 text-xs rounded-full">+2 more</span>
                </div>
              </>
            ) : project.id === 4 ? (
              <>
                <h3 className="text-xl font-semibold text-white mb-2">RumbaToursMiami.com Redesign</h3>
                <p className="text-gray-300 text-sm mb-4">Booking platform project</p>
                <p className="text-gray-400 text-sm mb-4">Redesigned and developed a mobile-first website for Miami’s top party bus, boosting bookings with real-time pricing, Stripe checkout, and video-driven UI.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30">{tool}</span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-3 py-1 bg-zinc-700 text-gray-300 text-xs rounded-full">+{project.tools.length - 3} more</span>
                  )}
                </div>
              </>
            ) : project.id === 5 ? (
              <>
                <h3 className="text-xl font-semibold text-white mb-2">Laundrify Website Photography</h3>
                <p className="text-gray-300 text-sm mb-4">Creative content project</p>
                <p className="text-gray-400 text-sm mb-4">Creative direction and photography for Laundrify, an on-demand laundry app in Miami.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30">{tool}</span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-3 py-1 bg-zinc-700 text-gray-300 text-xs rounded-full">+{project.tools.length - 3} more</span>
                  )}
                </div>
              </>
            ) : project.id === 6 ? (
              <>
                <h3 className="text-xl font-semibold text-white mb-2">Soundcast Product Photography</h3>
                <p className="text-gray-300 text-sm mb-4">Creative content project</p>
                <p className="text-gray-400 text-sm mb-4">Art direction and product photography for Soundcast, a premium speaker brand.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30">{tool}</span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-3 py-1 bg-zinc-700 text-gray-300 text-xs rounded-full">+{project.tools.length - 3} more</span>
                  )}
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.subtitle}</p>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30">{tool}</span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-3 py-1 bg-zinc-700 text-gray-300 text-xs rounded-full">+{project.tools.length - 3} more</span>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 