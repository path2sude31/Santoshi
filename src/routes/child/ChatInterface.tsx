import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockChatService } from '../../mock/mockChatService';
import { mockStoryService } from '../../mock/mockStoryService';
import { ChatMessage } from '../../mock/types';

export const ChatInterface: React.FC = () => {
  const [searchParams] = useSearchParams();
  const storyId = searchParams.get('storyId');
  const initialQuestion = searchParams.get('q');

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const story = storyId ? mockStoryService.getStoryById(storyId) : null;
  const suggestions = mockChatService.getSuggestedQuestions(story?.topicId || 'default');

  useEffect(() => {
    if (initialQuestion) {
      handleSendMessage(initialQuestion);
    }
  }, []);

  const handleSendMessage = async (question?: string) => {
    const messageText = question || inputValue.trim();
    if (!messageText) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: 'child',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await mockChatService.askQuestion({
        storyId: storyId || undefined,
        topicId: story?.topicId,
        question: messageText
      });

      const guideMessage: ChatMessage = {
        id: `msg-${Date.now()}-response`,
        role: 'guide',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, guideMessage]);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '600px' }}>
        <div className="bg-gradient-to-r from-primary-500 to-primary-700 text-white p-4">
          <h2 className="text-2xl font-bold">Chat & Learn</h2>
          {story && <p className="text-sm text-primary-100">About: {story.title}</p>}
        </div>

        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-8">
              <p className="text-lg mb-4">Ask me anything about science!</p>
              <p className="text-sm">Try one of the suggested questions below</p>
            </div>
          )}

          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'child' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  msg.role === 'child'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p>{msg.content}</p>
                <p className="text-xs mt-1 opacity-70">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 px-4 py-3 rounded-lg">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t p-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {suggestions.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(suggestion)}
                className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm hover:bg-yellow-200"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask a science question..."
              className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isLoading}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
