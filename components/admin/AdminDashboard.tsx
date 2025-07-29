'use client';

import { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt } from 'react-icons/fa';
import { getSupabaseProjects, SupabaseProject } from '@/lib/getSupabaseProjects';
import { supabase } from '@/lib/supabaseClient';
import AddEditProjectModal from './AddEditProjectModal';
import { convertSupabaseProjectToProject } from '@/lib/projectUtils';
import { Project } from '@/components/projects/projectsData';

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [projects, setProjects] = useState<SupabaseProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const data = await getSupabaseProjects();
      setProjects(data);
    } catch (err) {
      setError('Failed to load projects');
      console.error('Error fetching projects:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('DELETE ERROR:', error);
        throw error;
      }

      setProjects(projects.filter(project => project.id !== id));
    } catch (err: unknown) {
      setError('Failed to delete project');
      console.error('Error deleting project:', err);
    }
  };

  const handleAddProject = () => {
    setEditingProject(null);
    setShowAddModal(true);
  };

  const handleEditProject = (project: SupabaseProject) => {
    const convertedProject = convertSupabaseProjectToProject(project);
    setEditingProject(convertedProject);
    setShowAddModal(true);
  };

  const handleModalClose = () => {
    setShowAddModal(false);
    setEditingProject(null);
  };

  const handleProjectSaved = () => {
    fetchProjects();
    handleModalClose();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-[#0d0d0d] border-b border-zinc-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">Portfolio Admin</h1>
            <p className="text-gray-400 text-sm">Manage your portfolio projects</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleAddProject}
              className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md transition-colors"
            >
              <FaPlus className="text-sm" />
              Add Project
            </button>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors"
            >
              <FaSignOutAlt className="text-sm" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-md">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {/* Projects Table */}
        <div className="bg-[#0d0d0d] rounded-xl border border-zinc-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-zinc-700">
            <h2 className="text-xl font-semibold text-white">Projects ({projects.length})</h2>
          </div>

          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-400 mx-auto"></div>
              <p className="text-gray-400 mt-4">Loading projects...</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-400">No projects found. Add your first project!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zinc-800/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Subtitle</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Tools</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Created</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-700">
                  {projects.map((project) => (
                    <tr key={project.id} className="hover:bg-zinc-800/30">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{project.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">{project.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{project.subtitle}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {Array.isArray(project.tools) ? project.tools.slice(0, 2).join(', ') : 'No tools'}
                        {Array.isArray(project.tools) && project.tools.length > 2 && '...'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {new Date(project.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEditProject(project)}
                            className="text-violet-400 hover:text-violet-300 transition-colors"
                            title="Edit"
                          >
                            <FaEdit className="text-sm" />
                          </button>
                          <button
                            onClick={() => handleDelete(project.id)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                            title="Delete"
                          >
                            <FaTrash className="text-sm" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <AddEditProjectModal
          project={editingProject}
          onClose={handleModalClose}
          onSave={handleProjectSaved}
        />
      )}
    </div>
  );
} 