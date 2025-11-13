import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { mockStoryService } from '../../mock/mockStoryService';

export const ChildDashboard: React.FC = () => {
  const { user } = useAuth();
  const stories = mockStoryService.getStoriesByChild(user?.id || '');
  const lastStory = stories[stories.length - 1];

  const curiosityFacts = [
    'A single tree can produce enough oxygen for two people!',
    'The Sun is so big, you could fit 1.3 million Earths inside it!',
    'Water is the only substance found naturally in all three states on Earth!',
    'Lightning is five times hotter than the surface of the Sun!',
  ];

  const randomFact = curiosityFacts[Math.floor(Math.random() * curiosityFacts.length)];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.name}!</h1>
      <p className="text-xl text-gray-600 mb-8">Ready for your next science adventure?</p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {lastStory ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Continue Your Adventure</h2>
            <div className="bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg p-6 mb-4">
              <h3 className="text-xl font-bold mb-2">{lastStory.title}</h3>
              <p className="text-primary-100">
                Created {new Date(lastStory.createdAt).toLocaleDateString()}
              </p>
            </div>
            <Link
              to={`/child/story/${lastStory.id}`}
              className="block text-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold"
            >
              Continue Reading
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Start Your First Adventure</h2>
            <p className="text-gray-600 mb-4">
              Create your personalized science story and become the hero!
            </p>
            <Link
              to="/child/start"
              className="block text-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold"
            >
              Create My First Story
            </Link>
          </div>
        )}

        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Today's Curiosity Spark</h2>
          <p className="text-lg mb-4">{randomFact}</p>
          <Link
            to="/child/chat"
            className="inline-block px-4 py-2 bg-white text-orange-600 rounded-lg hover:bg-gray-100 font-semibold"
          >
            Ask Me More!
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            to="/child/start"
            className="p-6 border-2 border-primary-600 rounded-lg text-center hover:bg-primary-50 transition-colors"
          >
            <div className="text-4xl mb-2">+</div>
            <div className="font-semibold">Start New Adventure</div>
          </Link>
          <Link
            to="/child/stories"
            className="p-6 border-2 border-gray-300 rounded-lg text-center hover:bg-gray-50 transition-colors"
          >
            <div className="text-4xl mb-2">📚</div>
            <div className="font-semibold">My Stories</div>
          </Link>
          <Link
            to="/child/badges"
            className="p-6 border-2 border-gray-300 rounded-lg text-center hover:bg-gray-50 transition-colors"
          >
            <div className="text-4xl mb-2">🏆</div>
            <div className="font-semibold">My Badges</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
