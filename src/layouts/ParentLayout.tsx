import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ParentLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/parent" className="text-2xl font-bold text-primary-600">
              SciQuest Heroes
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/parent" className="text-gray-700 hover:text-primary-600">Dashboard</Link>
              <Link to="/parent/children" className="text-gray-700 hover:text-primary-600">Children</Link>
              <Link to="/parent/stories" className="text-gray-700 hover:text-primary-600">Stories</Link>
              <Link to="/parent/progress" className="text-gray-700 hover:text-primary-600">Progress</Link>
              <Link to="/parent/reports" className="text-gray-700 hover:text-primary-600">Reports</Link>
              <Link to="/parent/settings" className="text-gray-700 hover:text-primary-600">Settings</Link>
            </nav>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">{user?.name}</span>
              <button onClick={handleLogout} className="px-4 py-2 text-gray-700 hover:text-gray-900">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
