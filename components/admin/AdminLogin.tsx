'use client';

import { useState } from 'react';
import { FaLock } from 'react-icons/fa';

interface AdminLoginProps {
  onLogin: (password: string) => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(password);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="bg-[#0d0d0d] rounded-xl border border-zinc-700 p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-violet-600/20 rounded-full mb-4">
            <FaLock className="text-violet-400 text-xl" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
          <p className="text-gray-400">Enter password to access the dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              placeholder="Enter admin password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-md transition-colors"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Default password: admin123
          </p>
        </div>
      </div>
    </div>
  );
} 