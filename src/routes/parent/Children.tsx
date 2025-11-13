import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_CHILDREN } from '../../mock/mockData';

export const Children: React.FC = () => {
  const [children, setChildren] = useState(MOCK_CHILDREN);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', grade: '1', avatarId: 'stella' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newChild = {
      id: `child-${Date.now()}`,
      ...formData,
      parentId: 'parent-1'
    };
    setChildren([...children, newChild]);
    setShowForm(false);
    setFormData({ name: '', grade: '1', avatarId: 'stella' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Children</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          {showForm ? 'Cancel' : '+ Add Child'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Child</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Grade</label>
              <select
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Add Child
            </button>
          </form>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {children.map(child => (
          <div key={child.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">{child.name}</h3>
            <p className="text-gray-600 mb-4">Grade {child.grade}</p>
            <Link
              to={`/parent/children/${child.id}`}
              className="text-primary-600 hover:text-primary-700"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
