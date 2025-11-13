import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { MOCK_AVATARS, MOCK_GUIDES, MOCK_TOPICS } from '../../mock/mockData';
import { mockStoryService } from '../../mock/mockStoryService';
import { LoadingState } from '../../components/LoadingState';

type Step = 'avatar' | 'guide' | 'topic';

export const StoryWizard: React.FC = () => {
  const [step, setStep] = useState<Step>('avatar');
  const [avatarId, setAvatarId] = useState('');
  const [guideId, setGuideId] = useState('');
  const [topicId, setTopicId] = useState('');
  const [grade, setGrade] = useState('3');
  const [language, setLanguage] = useState('English');
  const [isGenerating, setIsGenerating] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGenerate = async () => {
    setIsGenerating(true);

    try {
      const story = await mockStoryService.generateStory({
        childId: user?.id || 'child-1',
        topicId,
        grade,
        language,
        avatarId,
        guideId
      });

      navigate(`/child/story/${story.id}`);
    } catch (error) {
      console.error('Story generation failed', error);
      setIsGenerating(false);
    }
  };

  if (isGenerating) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingState message="Creating your personalized science adventure..." />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Create Your Adventure</h1>

      <div className="mb-8">
        <div className="flex justify-center space-x-4">
          {(['avatar', 'guide', 'topic'] as Step[]).map((s, idx) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step === s ? 'bg-primary-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {idx + 1}
              </div>
              {idx < 2 && <div className="w-12 h-1 bg-gray-300 mx-2"></div>}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-2 space-x-16">
          <span className={step === 'avatar' ? 'font-semibold' : 'text-gray-600'}>Avatar</span>
          <span className={step === 'guide' ? 'font-semibold' : 'text-gray-600'}>Guide</span>
          <span className={step === 'topic' ? 'font-semibold' : 'text-gray-600'}>Topic</span>
        </div>
      </div>

      {step === 'avatar' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Choose Your Hero Avatar</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {MOCK_AVATARS.map(avatar => (
              <button
                key={avatar.id}
                onClick={() => setAvatarId(avatar.id)}
                className={`p-4 border-2 rounded-lg text-center transition-all ${
                  avatarId === avatar.id
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-300 hover:border-primary-300'
                }`}
              >
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2"></div>
                <div className="font-semibold">{avatar.name}</div>
                <div className="text-xs text-gray-600">{avatar.description}</div>
              </button>
            ))}
          </div>
          <button
            onClick={() => setStep('guide')}
            disabled={!avatarId}
            className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Next: Choose Guide
          </button>
        </div>
      )}

      {step === 'guide' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Choose Your Science Guide</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {MOCK_GUIDES.map(guide => (
              <button
                key={guide.id}
                onClick={() => setGuideId(guide.id)}
                className={`p-6 border-2 rounded-lg text-left transition-all ${
                  guideId === guide.id
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-300 hover:border-primary-300'
                }`}
              >
                <div className="font-bold text-lg mb-2">{guide.name}</div>
                <div className="text-sm text-gray-600 mb-2">{guide.specialty}</div>
                <div className="text-sm">{guide.persona}</div>
              </button>
            ))}
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setStep('avatar')}
              className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Back
            </button>
            <button
              onClick={() => setStep('topic')}
              disabled={!guideId}
              className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Next: Choose Topic
            </button>
          </div>
        </div>
      )}

      {step === 'topic' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Choose Your Topic</h2>

          <div className="mb-6">
            <label className="block font-medium mb-2">Grade Level</label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            >
              {['K', '1', '2', '3', '4', '5', '6', '7', '8'].map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-2">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-2">Topic</label>
            <div className="grid grid-cols-2 gap-3">
              {MOCK_TOPICS.map(topic => (
                <button
                  key={topic.id}
                  onClick={() => setTopicId(topic.id)}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${
                    topicId === topic.id
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-300 hover:border-primary-300'
                  }`}
                >
                  <div className="font-semibold">{topic.name}</div>
                  <div className="text-sm text-gray-600">{topic.description}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep('guide')}
              className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Back
            </button>
            <button
              onClick={handleGenerate}
              disabled={!topicId}
              className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold"
            >
              Generate My Comic
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
