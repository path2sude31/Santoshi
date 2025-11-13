import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Role } from '../mock/types';

export const RoleSwitcher: React.FC = () => {
  const { user, loginAs, logout } = useAuth();
  const navigate = useNavigate();

  const handleSwitch = (role: Role) => {
    if (role === 'public') {
      logout();
      navigate('/');
    } else {
      loginAs(role);
      navigate(`/${role}`);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-2">
      <div className="text-xs font-semibold text-gray-600 mb-1 px-2">Dev Controls</div>
      <div className="flex flex-col gap-1">
        <button
          onClick={() => handleSwitch('public')}
          className={`px-3 py-1 text-xs rounded ${user?.role === 'public' || !user ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Public
        </button>
        <button
          onClick={() => handleSwitch('parent')}
          className={`px-3 py-1 text-xs rounded ${user?.role === 'parent' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Parent
        </button>
        <button
          onClick={() => handleSwitch('child')}
          className={`px-3 py-1 text-xs rounded ${user?.role === 'child' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Child
        </button>
        <button
          onClick={() => handleSwitch('teacher')}
          className={`px-3 py-1 text-xs rounded ${user?.role === 'teacher' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Teacher
        </button>
      </div>
    </div>
  );
};
