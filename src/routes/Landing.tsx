import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { DEMO_STORY } from '../mock/mockData';

export const Landing: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCreateStory = () => {
    if (user?.role === 'child') {
      navigate('/child/start');
    } else {
      navigate('/auth/signup');
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Child Becomes the Hero of Science Stories
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Personalized, AI-powered science adventures that make learning magical
          </p>
          <button
            onClick={handleCreateStory}
            className="px-8 py-4 bg-white text-primary-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Create My Story Free
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Parent Setup</h3>
              <p className="text-gray-600">Create your account and add your children with their grade levels</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Child Picks Avatar & Topic</h3>
              <p className="text-gray-600">Your child chooses their hero and science topic to explore</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comic + Quiz + Badges</h3>
              <p className="text-gray-600">Enjoy the story, take a quiz, and earn achievement badges</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Sample Story</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">{DEMO_STORY.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {DEMO_STORY.panels.slice(0, 3).map(panel => (
                <div key={panel.panelNumber} className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-200 h-32 flex items-center justify-center">
                    <span className="text-gray-400">Panel {panel.panelNumber}</span>
                  </div>
                  <p className="text-xs p-2 text-gray-600">{panel.caption}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <Link
                to="/child/story/demo-1"
                className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-center"
              >
                View Sample Story
              </Link>
              <Link
                to="/child/quiz/demo-1"
                className="flex-1 px-4 py-2 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 text-center"
              >
                Try Quiz Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Science Adventure?</h2>
          <button
            onClick={handleCreateStory}
            className="px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
};
