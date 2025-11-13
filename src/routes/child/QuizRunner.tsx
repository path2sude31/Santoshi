import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { mockQuizService } from '../../mock/mockQuizService';
import { mockStoryService } from '../../mock/mockStoryService';
import { EmptyState } from '../../components/EmptyState';

export const QuizRunner: React.FC = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();

  const story = mockStoryService.getStoryById(storyId || '');
  const quiz = mockQuizService.getQuizForStory(storyId || '');

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<any>(null);

  if (!story) {
    return <EmptyState title="Story Not Found" message="Cannot load quiz for this story." />;
  }

  const question = quiz.questions[currentQuestion];
  const isLastQuestion = currentQuestion === quiz.questions.length - 1;

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (isLastQuestion) {
      const quizResult = mockQuizService.submitQuiz(
        quiz.id,
        storyId || '',
        user?.id || '',
        newAnswers
      );
      setResult(quizResult);
      setShowResults(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResults(false);
    setResult(null);
  };

  if (showResults && result) {
    const passed = result.score >= 70;

    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center ${
            passed ? 'bg-success-100' : 'bg-yellow-100'
          }`}>
            <span className="text-4xl">{passed ? '🎉' : '📚'}</span>
          </div>

          <h1 className="text-3xl font-bold mb-4">
            {passed ? 'Great Job!' : 'Good Try!'}
          </h1>

          <div className="text-6xl font-bold text-primary-600 mb-4">
            {result.score}%
          </div>

          <p className="text-lg text-gray-700 mb-6">
            You got {Math.round((result.score / 100) * quiz.questions.length)} out of {quiz.questions.length} questions correct!
          </p>

          {passed && result.score >= 70 && (
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6 mb-6">
              <div className="text-4xl mb-2">🏆</div>
              <p className="font-bold text-lg">You unlocked the Curious Mind badge!</p>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={handleRetake}
              className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Retake Quiz
            </button>
            <button
              onClick={() => navigate(`/child/story/${storyId}`)}
              className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Back to Story
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {quiz.questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / quiz.questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">{question.question}</h2>

        <div className="space-y-3 mb-8">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedAnswer(idx)}
              className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                selectedAnswer === idx
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-300 hover:border-primary-300'
              }`}
            >
              <span className="font-semibold mr-3">{String.fromCharCode(65 + idx)}.</span>
              {option}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold"
        >
          {isLastQuestion ? 'Submit Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};
