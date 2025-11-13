import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { mockStoryService } from '../../mock/mockStoryService';
import { MOCK_BADGES, MOCK_AVATARS, MOCK_GUIDES, MOCK_TOPICS } from '../../mock/mockData';
import { Link } from 'react-router-dom';
import { EmptyState } from '../../components/EmptyState';

export const MyStories: React.FC = () => {
  const { user } = useAuth();
  const stories = mockStoryService.getStoriesByChild(user?.id || '');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Stories</h1>
      {stories.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map(story => (
            <Link
              key={story.id}
              to={`/child/story/${story.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 h-48 flex items-center justify-center text-white">
                <span className="text-lg font-bold">Story</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{story.title}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(story.createdAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <EmptyState
          title="No Stories Yet"
          message="Start your first science adventure!"
          action={{ label: 'Create Story', onClick: () => window.location.href = '/child/start' }}
        />
      )}
    </div>
  );
};

export const Badges: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Badges</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {MOCK_BADGES.map(badge => (
          <div
            key={badge.id}
            className={`bg-white rounded-lg shadow p-6 text-center ${
              badge.unlocked ? '' : 'opacity-50'
            }`}
          >
            <div className="w-20 h-20 bg-yellow-100 rounded-full mx-auto mb-3 flex items-center justify-center text-4xl">
              {badge.unlocked ? '🏆' : '🔒'}
            </div>
            <h3 className="font-bold mb-2">{badge.name}</h3>
            <p className="text-sm text-gray-600">{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AvatarSelection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Choose Your Avatar</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
        {MOCK_AVATARS.map(avatar => (
          <div key={avatar.id} className="bg-white rounded-lg shadow p-4 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <h3 className="font-semibold">{avatar.name}</h3>
            <p className="text-xs text-gray-600">{avatar.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const GuideSelection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Science Guides</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {MOCK_GUIDES.map(guide => (
          <div key={guide.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-start">
              <div className="w-24 h-24 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{guide.name}</h3>
                <p className="text-sm text-primary-600 mb-2">{guide.specialty}</p>
                <p className="text-gray-700">{guide.persona}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TopicSelection: React.FC = () => {
  const [gradeFilter, setGradeFilter] = React.useState<string>('all');

  const filteredTopics = gradeFilter === 'all'
    ? MOCK_TOPICS
    : MOCK_TOPICS.filter(t => t.gradeBands.some(gb => gb.includes(gradeFilter)));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Science Topics</h1>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Filter by Grade</label>
        <select
          value={gradeFilter}
          onChange={(e) => setGradeFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="all">All Grades</option>
          <option value="K-2">K-2</option>
          <option value="3-5">3-5</option>
          <option value="6-8">6-8</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTopics.map(topic => (
          <div key={topic.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">{topic.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{topic.description}</p>
            <div className="flex gap-2">
              {topic.gradeBands.map(gb => (
                <span key={gb} className="px-2 py-1 bg-primary-100 text-primary-600 text-xs rounded">
                  {gb}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ChildSettings: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div>
          <h3 className="font-semibold mb-2">Language</h3>
          <select className="px-4 py-2 border rounded-lg">
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Font Size</h3>
          <select className="px-4 py-2 border rounded-lg">
            <option>Small</option>
            <option selected>Medium</option>
            <option>Large</option>
          </select>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Narration Speed</h3>
          <select className="px-4 py-2 border rounded-lg">
            <option>Slow</option>
            <option selected>Normal</option>
            <option>Fast</option>
          </select>
        </div>
      </div>
    </div>
  );
};
