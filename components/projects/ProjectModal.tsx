// components/projects/ProjectModal.tsx

import React, { useEffect } from 'react';
import { Project } from './projectsData';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

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
}) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-0 md:p-4">
      <div className="modal-container bg-[#0d0d0d] md:rounded-xl rounded-none max-w-6xl w-full h-full md:h-auto md:max-h-[95vh] min-h-[600px] overflow-y-auto md:border md:border-zinc-700 border-0 p-0 flex flex-col relative pb-12">
        {/* Sticky Header - Full Width */}
        <div className="sticky top-0 z-30 bg-[#0d0d0d] border-b border-zinc-700 px-8 py-6 flex justify-between items-center w-full">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors bg-black/70 hover:bg-black/90 p-3 rounded-full shadow-lg"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Content Container - Scrollable */}
        <div className="flex flex-col md:flex-row flex-1">
          {/* LEFT COLUMN */}
          <div className="md:w-1/2 p-8 flex flex-col md:items-start md:self-start">
            {/* Tools Used */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools?.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-violet-600/20 text-violet-400 text-sm rounded-full border border-violet-500/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            {/* MOBILE MEDIA SECTION - Shown on mobile, hidden on desktop */}
            <div className="md:hidden mb-6 flex flex-col gap-6 justify-start items-center">
              {/* Image/Video Display */}
              {project.id === "2" && project.videos ? (
                <div className="flex flex-col gap-6 w-full">
                  {project.videos?.map((video, index) => (
                    <div
                      key={video}
                      className="w-full"
                    >
                      {index > 0 && <div className="h-4"></div>} {/* Padding above each video except first */}
                      <video
                        src={video}
                        controls
                        className="w-full rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-6 w-full">
                  {project.images?.map((image, index) => (
                    <div
                      key={image}
                      className="w-full"
                    >
                      {index > 0 && <div className="h-4"></div>} {/* Padding above each image except first */}
                      <div
                        className="w-full bg-zinc-900 rounded-lg overflow-hidden flex items-center justify-center"
                        style={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          aspectRatio: '16/9',
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
              <StyledProjectDescription html={project.fullDescription} />
            </div>
            {/* Project Links */}
            <div className="flex gap-4 mt-8 mb-8">
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

          {/* RIGHT COLUMN (Images/Videos) - Hidden on mobile, shown on desktop */}
          <div className="hidden md:flex md:w-1/2 p-8 pt-8 flex-col gap-6 justify-start items-center pb-8">
            {/* Image/Video Display */}
            {project.id === "2" && project.videos ? (
              <div className="flex flex-col gap-6 w-full">
                {project.videos?.map((video, index) => (
                  <div
                    key={video}
                    className="w-full"
                  >
                    {index > 0 && <div className="h-4"></div>} {/* Padding above each video except first */}
                    <video
                      src={video}
                      controls
                      className="w-full rounded-lg"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-6 w-full">
                {project.images?.map((image, index) => (
                  <div
                    key={image}
                    className="w-full"
                  >
                    {index > 0 && <div className="h-4"></div>} {/* Padding above each image except first */}
                    <div
                      className="w-full bg-zinc-900 rounded-lg overflow-hidden flex items-center justify-center"
                      style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        aspectRatio: '16/9',
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 