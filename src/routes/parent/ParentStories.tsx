import React from 'react';
import { mockStoryService } from '../../mock/mockStoryService';
import { EmptyState } from '../../components/EmptyState';
import { useNavigate } from 'react-router-dom';

export const ParentStories: React.FC = () => {
  const stories = mockStoryService.getAllStories();
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Stories</h1>

      {stories.length > 0 ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Topic</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stories.map(story => (
                <tr key={story.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{story.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{story.topicId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {new Date(story.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      story.status === 'ready' ? 'bg-success-100 text-success-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {story.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyState
          title="No Stories Yet"
          message="Your children haven't created any stories yet."
          action={{ label: 'Go to Children', onClick: () => navigate('/parent/children') }}
        />
      )}
    </div>
  );
};

export const ParentProgress: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8">Learning Progress</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Reading Progress</h3>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-primary-600 h-4 rounded-full" style={{ width: '65%' }}></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">65% of weekly goal</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Quiz Performance</h3>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-success-600 h-4 rounded-full" style={{ width: '80%' }}></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">80% average score</p>
      </div>
    </div>
  </div>
);

export const ParentReports: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8">Reports</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
        Generate Weekly Report (Coming Soon)
      </button>
      <p className="text-gray-600 mt-4">
        Reports will include reading time, quiz scores, topics explored, and more.
      </p>
    </div>
  </div>
);

export const ParentSettings: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8">Settings</h1>
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Email Notifications</h3>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" defaultChecked />
          <span>Send weekly progress reports</span>
        </label>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Language</h3>
        <select className="px-4 py-2 border rounded-lg">
          <option>English</option>
          <option>Spanish</option>
        </select>
      </div>
    </div>
  </div>
);
