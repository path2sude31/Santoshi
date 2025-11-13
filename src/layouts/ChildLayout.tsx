import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ChildLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-green-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/child" className="text-2xl font-bold text-primary-600">
              SciQuest Heroes
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/child" className="text-gray-700 hover:text-primary-600">My Dashboard</Link>
              <Link to="/child/stories" className="text-gray-700 hover:text-primary-600">My Stories</Link>
              <Link to="/child/chat" className="text-gray-700 hover:text-primary-600">Chat & Learn</Link>
              <Link to="/child/badges" className="text-gray-700 hover:text-primary-600">Badges</Link>
              <Link to="/child/settings" className="text-gray-700 hover:text-primary-600">Settings</Link>
            </nav>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">Hi, {user?.name}!</span>
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
