import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Role } from '../mock/types';

export const Login: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role>('parent');
  const [name, setName] = useState('');
  const { loginAs } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginAs(selectedRole, name || undefined);
    navigate(`/${selectedRole}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Login to SciQuest Heroes</h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name (optional)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Login as:
            </label>
            <div className="space-y-2">
              {(['parent', 'child', 'teacher'] as Role[]).map((role) => (
                <label key={role} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="role"
                    value={role}
                    checked={selectedRole === role}
                    onChange={(e) => setSelectedRole(e.target.value as Role)}
                    className="mr-3"
                  />
                  <span className="capitalize font-medium">{role}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          This is a simulated login for MVP demonstration
        </p>
      </div>
    </div>
  );
};
