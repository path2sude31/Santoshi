import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockStoryService } from '../../mock/mockStoryService';
import { mockPdfService } from '../../mock/mockPdfService';
import { mockChatService } from '../../mock/mockChatService';
import { LoadingState } from '../../components/LoadingState';
import { EmptyState } from '../../components/EmptyState';

export const StoryReader: React.FC = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const story = mockStoryService.getStoryById(storyId || '');
  const [currentPanel, setCurrentPanel] = useState(0);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [generatingPdf, setGeneratingPdf] = useState(false);
  const navigate = useNavigate();

  if (!story) {
    return <EmptyState title="Story Not Found" message="This story doesn't exist." />;
  }

  const panel = story.panels[currentPanel];
  const isFirst = currentPanel === 0;
  const isLast = currentPanel === story.panels.length - 1;

  const handleDownloadPdf = async () => {
    setGeneratingPdf(true);
    const url = await mockPdfService.generatePdf(story.id);
    setPdfUrl(url);
    setGeneratingPdf(false);
  };

  const suggestedQuestions = mockChatService.getSuggestedQuestions(story.topicId);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-primary-500 to-primary-700 text-white p-6">
          <h1 className="text-3xl font-bold mb-2">{story.title}</h1>
          <p className="text-primary-100">
            Panel {currentPanel + 1} of {story.panels.length}
          </p>
        </div>

        <div className="p-8">
          <div className="bg-gray-200 rounded-lg h-96 mb-4 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 mb-2">Panel {panel.panelNumber}</p>
              <p className="text-sm text-gray-400">Image placeholder</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-lg text-gray-800">{panel.caption}</p>
          </div>

          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setCurrentPanel(currentPanel - 1)}
              disabled={isFirst}
              className="px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>

            <div className="flex-1 mx-4">
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full transition-all"
                  style={{ width: `${((currentPanel + 1) / story.panels.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <button
              onClick={() => setCurrentPanel(currentPanel + 1)}
              disabled={isLast}
              className="px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>

          <div className="border-t pt-6">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <button
                onClick={handleDownloadPdf}
                disabled={generatingPdf}
                className="px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300"
              >
                {generatingPdf ? 'Generating...' : 'Download PDF'}
              </button>
              <button
                onClick={() => navigate(`/child/quiz/${story.id}`)}
                className="px-4 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50"
              >
                Take Quiz
              </button>
              <button
                onClick={() => navigate(`/child/chat?storyId=${story.id}`)}
                className="px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Ask Questions
              </button>
            </div>

            {pdfUrl && (
              <div className="bg-success-50 border border-success-200 rounded-lg p-4 mb-6">
                <p className="text-success-700 font-semibold mb-2">Your adventure PDF is ready!</p>
                <a
                  href={pdfUrl}
                  className="text-success-600 hover:underline"
                  download
                >
                  Download: story-{story.id}.pdf
                </a>
              </div>
            )}

            <div>
              <h3 className="font-semibold mb-3">Curious about this topic?</h3>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => navigate(`/child/chat?storyId=${story.id}&q=${encodeURIComponent(q)}`)}
                    className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm hover:bg-yellow-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
