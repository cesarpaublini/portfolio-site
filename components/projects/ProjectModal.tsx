// components/projects/ProjectModal.tsx

import React from 'react';
import { Project } from './projectsData';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  currentImageIndex: number;
  setCurrentImageIndex: (idx: number) => void;
  nextImage: () => void;
  prevImage: () => void;
}

// Styled component for project descriptions
function StyledProjectDescription({ html }: { html: string }) {
  const styledHtml = html
    .replace(/<p><strong>(.*?)<\/strong><\/p>/g, '<h4 class="text-violet-400 text-lg font-semibold mt-6 mb-3">$1</h4>')
    .replace(/<p>/g, '<p class="text-gray-300 leading-relaxed mb-4">')
    .replace(/<ul>/g, '<ul class="list-disc list-inside space-y-2 ml-4 mb-4">')
    .replace(/<li>/g, '<li class="text-gray-400">')
    .replace(/<strong>/g, '<strong class="text-violet-300 font-semibold">');

  return (
    <div className="space-y-4" dangerouslySetInnerHTML={{ __html: styledHtml }} />
  );
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  currentImageIndex,
  setCurrentImageIndex,
  nextImage,
  prevImage,
}) => {
  if (!isOpen || !project) return null;

  // ...copy modal structure and logic from your original modal here...
  // Use project.images, project.videos, etc.

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="bg-[#0d0d0d] rounded-xl max-w-4xl w-full max-h-[95vh] min-h-[700px] overflow-y-auto border border-zinc-700">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-zinc-700">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Image/Video Slider */}
        {project.id === 2 && project.videos ? (
          <div className="relative flex gap-x-4 overflow-x-auto py-2 px-1 h-[36rem] md:h-[28rem]">
            {project.videos.map((video) => (
              <div
                key={video}
                className="relative flex-shrink-0 h-full w-[20.25rem] md:w-[15.75rem] bg-black rounded-lg overflow-hidden"
                style={{ flex: '0 0 auto' }}
              >
                <div className="relative w-full h-full">
                  <video
                    src={video}
                    controls
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative h-80 bg-zinc-900 rounded-lg overflow-hidden">
            <div
              className="w-full h-full bg-gradient-to-br from-violet-600/20 to-purple-600/20 flex items-center justify-center"
              style={{
                backgroundImage: `url(${project.images[currentImageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
            </div>
            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
            {/* Image Indicators */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-violet-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Project Details */}
        <div className="p-6 border-t border-zinc-700">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
            <StyledProjectDescription html={project.fullDescription} />
          </div>
          {/* Tools Used */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-violet-600/20 text-violet-400 text-sm rounded-full border border-violet-500/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          {/* Project Links */}
          <div className="flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors"
              >
                <FaGithub />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md transition-colors"
              >
                <FaExternalLinkAlt />
                Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 