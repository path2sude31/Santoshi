import React from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_CHILDREN } from '../../mock/mockData';
import { mockStoryService } from '../../mock/mockStoryService';
import { mockQuizService } from '../../mock/mockQuizService';
import { EmptyState } from '../../components/EmptyState';

export const ChildDetail: React.FC = () => {
  const { childId } = useParams<{ childId: string }>();
  const child = MOCK_CHILDREN.find(c => c.id === childId);
  const stories = mockStoryService.getStoriesByChild(childId || '');
  const quizResults = mockQuizService.getResultsByChild(childId || '');

  if (!child) {
    return <EmptyState title="Child Not Found" message="This child profile does not exist." />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{child.name}'s Profile</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-1">Grade Level</h3>
          <p className="text-2xl font-bold">{child.grade}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-1">Stories Read</h3>
          <p className="text-2xl font-bold">{stories.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-1">Quizzes Completed</h3>
          <p className="text-2xl font-bold">{quizResults.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Stories</h2>
        {stories.length > 0 ? (
          <div className="space-y-3">
            {stories.map(story => (
              <div key={story.id} className="p-4 border rounded-lg">
                <h3 className="font-semibold">{story.title}</h3>
                <p className="text-sm text-gray-600">
                  Created: {new Date(story.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No stories yet</p>
        )}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Quiz Results</h2>
        {quizResults.length > 0 ? (
          <div className="space-y-3">
            {quizResults.map((result, idx) => (
              <div key={idx} className="p-4 border rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-semibold">Quiz #{idx + 1}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(result.completedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-2xl font-bold text-primary-600">{result.score}%</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No quiz results yet</p>
        )}
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-2">Chat Log</h2>
        <p className="text-gray-600">Coming soon - view chat conversations</p>
      </div>
    </div>
  );
};
