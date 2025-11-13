import { Quiz, QuizQuestion, QuizResult } from './types';

const quizzes: Record<string, Quiz> = {
  'demo-1': {
    id: 'quiz-demo-1',
    storyId: 'demo-1',
    questions: [
      {
        id: 'q1',
        question: 'What do plants use to capture sunlight?',
        options: ['Roots', 'Chloroplasts', 'Stems', 'Flowers'],
        correctAnswer: 1
      },
      {
        id: 'q2',
        question: 'What gas do plants take in during photosynthesis?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
        correctAnswer: 2
      },
      {
        id: 'q3',
        question: 'What do plants release as a byproduct of photosynthesis?',
        options: ['Carbon Dioxide', 'Nitrogen', 'Oxygen', 'Water'],
        correctAnswer: 2
      },
    ]
  },
  photosynthesis: {
    id: 'quiz-photosynthesis',
    storyId: 'photosynthesis',
    questions: [
      {
        id: 'q1',
        question: 'What do plants use to capture sunlight?',
        options: ['Roots', 'Chloroplasts', 'Stems', 'Flowers'],
        correctAnswer: 1
      },
      {
        id: 'q2',
        question: 'What gas do plants take in during photosynthesis?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
        correctAnswer: 2
      },
      {
        id: 'q3',
        question: 'What do plants produce during photosynthesis?',
        options: ['Glucose and Oxygen', 'Water and CO2', 'Minerals', 'Nitrogen'],
        correctAnswer: 0
      },
      {
        id: 'q4',
        question: 'What color are most plants because of chlorophyll?',
        options: ['Red', 'Blue', 'Green', 'Yellow'],
        correctAnswer: 2
      },
    ]
  },
  'solar-system': {
    id: 'quiz-solar-system',
    storyId: 'solar-system',
    questions: [
      {
        id: 'q1',
        question: 'Which planet is closest to the Sun?',
        options: ['Venus', 'Earth', 'Mercury', 'Mars'],
        correctAnswer: 2
      },
      {
        id: 'q2',
        question: 'Which planet is known for its beautiful rings?',
        options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        correctAnswer: 1
      },
      {
        id: 'q3',
        question: 'Which planet is the largest in our solar system?',
        options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
        correctAnswer: 2
      },
      {
        id: 'q4',
        question: 'How many planets are in our solar system?',
        options: ['7', '8', '9', '10'],
        correctAnswer: 1
      },
    ]
  }
};

const results: QuizResult[] = [];

export const mockQuizService = {
  getQuizForStory: (storyId: string): Quiz => {
    const topicId = storyId.includes('demo') ? 'demo-1' : storyId;

    return quizzes[topicId] || {
      id: `quiz-${storyId}`,
      storyId,
      questions: [
        {
          id: 'q1',
          question: 'What did you learn from this story?',
          options: ['A lot', 'Some things', 'A little', 'Need to read again'],
          correctAnswer: 0
        },
        {
          id: 'q2',
          question: 'Which part was most interesting?',
          options: ['Beginning', 'Middle', 'End', 'All of it'],
          correctAnswer: 3
        },
        {
          id: 'q3',
          question: 'Would you like to learn more about this topic?',
          options: ['Yes!', 'Maybe', 'Not sure', 'No'],
          correctAnswer: 0
        },
      ]
    };
  },

  submitQuiz: (quizId: string, storyId: string, childId: string, answers: number[]): QuizResult => {
    const quiz = Object.values(quizzes).find(q => q.id === quizId);
    let correctCount = 0;

    if (quiz) {
      answers.forEach((answer, index) => {
        if (quiz.questions[index] && answer === quiz.questions[index].correctAnswer) {
          correctCount++;
        }
      });
    }

    const score = quiz ? Math.round((correctCount / quiz.questions.length) * 100) : 0;

    const result: QuizResult = {
      quizId,
      storyId,
      childId,
      score,
      answers,
      completedAt: new Date()
    };

    results.push(result);
    return result;
  },

  getResultsByChild: (childId: string): QuizResult[] => {
    return results.filter(r => r.childId === childId);
  }
};
