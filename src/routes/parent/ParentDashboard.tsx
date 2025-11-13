import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_CHILDREN } from '../../mock/mockData';
import { mockStoryService } from '../../mock/mockStoryService';
import { mockQuizService } from '../../mock/mockQuizService';

export const ParentDashboard: React.FC = () => {
  const children = MOCK_CHILDREN;
  const stories = mockStoryService.getAllStories();
  const quizResults = mockQuizService.getResultsByChild('child-1');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Parent Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Children</h3>
          <p className="text-3xl font-bold text-primary-600">{children.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Stories Created</h3>
          <p className="text-3xl font-bold text-primary-600">{stories.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Quizzes Completed</h3>
          <p className="text-3xl font-bold text-primary-600">{quizResults.length}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Your Children</h2>
          <div className="space-y-3">
            {children.map(child => (
              <Link
                key={child.id}
                to={`/parent/children/${child.id}`}
                className="block p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="font-semibold">{child.name}</div>
                <div className="text-sm text-gray-600">Grade {child.grade}</div>
              </Link>
            ))}
            <Link
              to="/parent/children"
              className="block p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-600 hover:border-primary-600 hover:text-primary-600"
            >
              + Add Child
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Stories</h2>
          {stories.length > 0 ? (
            <div className="space-y-3">
              {stories.slice(-3).reverse().map(story => (
                <div key={story.id} className="p-4 border rounded-lg">
                  <div className="font-semibold">{story.title}</div>
                  <div className="text-sm text-gray-600">
                    {new Date(story.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No stories yet</p>
          )}
        </div>
      </div>
    </div>
  );
};
