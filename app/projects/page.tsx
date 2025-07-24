'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import { projects, Project } from '@/components/projects/projectsData';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectModal from '@/components/projects/ProjectModal';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-20 pb-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here you will find a selection of projects I have worked on.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 sm:px-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => openModal(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={closeModal}
      />

      <Footer />
    </div>
  );
}