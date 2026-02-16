'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { Project } from '@/lib/supabase';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [pendingProjects, setPendingProjects] = useState<Project[]>([]);
  const [approvedProjects, setApprovedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  // Simple password check using env var
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'changeme';
    if (password === adminPassword) {
      setIsAuthenticated(true);
      setError('');
      fetchProjects();
    } else {
      setError('Invalid password');
    }
  };

  const fetchProjects = async () => {
    setLoading(true);
    try {
      // Fetch pending projects
      const { data: pending } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      // Fetch approved projects
      const { data: approved } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      setPendingProjects(pending || []);
      setApprovedProjects(approved || []);
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
    setLoading(false);
  };

  const handleApprove = async (id: number) => {
    try {
      const { error } = await supabase
        .from('projects')
        .update({ status: 'approved' })
        .eq('id', id);

      if (error) throw error;
      
      // Refresh the lists
      fetchProjects();
    } catch (err) {
      console.error('Error approving project:', err);
      alert('Error approving project');
    }
  };

  const handleReject = async (id: number) => {
    if (!confirm('Are you sure you want to reject this project?')) return;
    
    try {
      const { error } = await supabase
        .from('projects')
        .update({ status: 'rejected' })
        .eq('id', id);

      if (error) throw error;
      
      fetchProjects();
    } catch (err) {
      console.error('Error rejecting project:', err);
      alert('Error rejecting project');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to permanently delete this project?')) return;
    
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      fetchProjects();
    } catch (err) {
      console.error('Error deleting project:', err);
      alert('Error deleting project');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-gray-900">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                required
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 text-gray-600 hover:text-gray-900"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-gray-500">Loading...</div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Pending Projects Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Pending Submissions ({pendingProjects.length})
              </h2>
              {pendingProjects.length === 0 ? (
                <div className="bg-white p-6 rounded-lg shadow text-gray-500 text-center">
                  No pending submissions
                </div>
              ) : (
                <div className="space-y-4">
                  {pendingProjects.map((project) => (
                    <div key={project.id} className="bg-white p-6 rounded-lg shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {project.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {project.location} • {project.category}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleApprove(project.id)}
                            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleReject(project.id)}
                            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">{project.description}</p>
                      <div className="text-sm text-gray-600">
                        <p><strong>ND Focus:</strong> {project.nd_focus?.join(', ') || 'None specified'}</p>
                        {project.contact_email && (
                          <p><strong>Email:</strong> {project.contact_email}</p>
                        )}
                        {project.website && (
                          <p>
                            <strong>Website:</strong>{' '}
                            <a
                              href={project.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {project.website}
                            </a>
                          </p>
                        )}
                        <p className="text-xs text-gray-400 mt-2">
                          Submitted: {new Date(project.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Approved Projects Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Approved Projects ({approvedProjects.length})
              </h2>
              {approvedProjects.length === 0 ? (
                <div className="bg-white p-6 rounded-lg shadow text-gray-500 text-center">
                  No approved projects yet
                </div>
              ) : (
                <div className="space-y-4">
                  {approvedProjects.map((project) => (
                    <div key={project.id} className="bg-white p-6 rounded-lg shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {project.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {project.location} • {project.category}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDelete(project.id)}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                      <p className="text-gray-700 mb-2">{project.description}</p>
                      <div className="text-sm text-gray-600">
                        <p><strong>ND Focus:</strong> {project.nd_focus?.join(', ') || 'None specified'}</p>
                        {project.website && (
                          <p>
                            <strong>Website:</strong>{' '}
                            <a
                              href={project.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {project.website}
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
