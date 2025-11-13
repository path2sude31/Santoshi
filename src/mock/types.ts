export type Role = 'public' | 'parent' | 'child' | 'teacher';

export interface User {
  id: string;
  name: string;
  role: Role;
}

export interface Child {
  id: string;
  name: string;
  grade: string;
  avatarId: string;
  parentId: string;
}

export interface StoryPanel {
  panelNumber: number;
  imageUrl: string;
  caption: string;
}

export interface Story {
  id: string;
  title: string;
  childId: string;
  topicId: string;
  avatarId: string;
  guideId: string;
  panels: StoryPanel[];
  status: 'generating' | 'ready';
  createdAt: Date;
}

export interface GenerateStoryParams {
  childId: string;
  topicId: string;
  grade: string;
  language: string;
  avatarId: string;
  guideId: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  storyId: string;
  questions: QuizQuestion[];
}

export interface QuizResult {
  quizId: string;
  storyId: string;
  childId: string;
  score: number;
  answers: number[];
  completedAt: Date;
}

export interface ChatMessage {
  id: string;
  role: 'child' | 'guide';
  content: string;
  timestamp: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  unlocked: boolean;
}

export interface Avatar {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
}

export interface Guide {
  id: string;
  name: string;
  imageUrl: string;
  persona: string;
  specialty: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  gradeBands: string[];
  category: string;
}
