import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { RequireRole } from './components/RequireRole';
import { RoleSwitcher } from './components/RoleSwitcher';

import { PublicLayout } from './layouts/PublicLayout';
import { ParentLayout } from './layouts/ParentLayout';
import { ChildLayout } from './layouts/ChildLayout';
import { TeacherLayout } from './layouts/TeacherLayout';

import { Landing } from './routes/Landing';
import { Login } from './routes/Login';
import {
  HowItWorks,
  Topics,
  Pricing,
  About,
  COPPA,
  Signup,
  PasswordReset,
  Privacy,
  Terms,
  Support
} from './routes/SimplePages';

import { ParentDashboard } from './routes/parent/ParentDashboard';
import { Children } from './routes/parent/Children';
import { ChildDetail } from './routes/parent/ChildDetail';
import {
  ParentStories,
  ParentProgress,
  ParentReports,
  ParentSettings
} from './routes/parent/ParentStories';

import { ChildDashboard } from './routes/child/ChildDashboard';
import { StoryWizard } from './routes/child/StoryWizard';
import { StoryReader } from './routes/child/StoryReader';
import { QuizRunner } from './routes/child/QuizRunner';
import { ChatInterface } from './routes/child/ChatInterface';
import {
  MyStories,
  Badges,
  AvatarSelection,
  GuideSelection,
  TopicSelection,
  ChildSettings
} from './routes/child/ChildOtherPages';

import {
  TeacherDashboard,
  Classes,
  Assignments,
  Library,
  TeacherReports,
  TeacherSettings
} from './routes/teacher/TeacherPages';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RoleSwitcher />
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/coppa" element={<COPPA />} />
            <Route path="/support" element={<Support />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/auth/reset" element={<PasswordReset />} />
          </Route>

          <Route path="/parent" element={<RequireRole role="parent"><ParentLayout /></RequireRole>}>
            <Route index element={<ParentDashboard />} />
            <Route path="children" element={<Children />} />
            <Route path="children/:childId" element={<ChildDetail />} />
            <Route path="stories" element={<ParentStories />} />
            <Route path="progress" element={<ParentProgress />} />
            <Route path="reports" element={<ParentReports />} />
            <Route path="settings" element={<ParentSettings />} />
          </Route>

          <Route path="/child" element={<RequireRole role="child"><ChildLayout /></RequireRole>}>
            <Route index element={<ChildDashboard />} />
            <Route path="start" element={<StoryWizard />} />
            <Route path="story/:storyId" element={<StoryReader />} />
            <Route path="quiz/:storyId" element={<QuizRunner />} />
            <Route path="chat" element={<ChatInterface />} />
            <Route path="stories" element={<MyStories />} />
            <Route path="badges" element={<Badges />} />
            <Route path="avatars" element={<AvatarSelection />} />
            <Route path="guides" element={<GuideSelection />} />
            <Route path="topics" element={<TopicSelection />} />
            <Route path="settings" element={<ChildSettings />} />
          </Route>

          <Route path="/teacher" element={<RequireRole role="teacher"><TeacherLayout /></RequireRole>}>
            <Route index element={<TeacherDashboard />} />
            <Route path="classes" element={<Classes />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="library" element={<Library />} />
            <Route path="reports" element={<TeacherReports />} />
            <Route path="settings" element={<TeacherSettings />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
