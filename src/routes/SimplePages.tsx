import React from 'react';

export const HowItWorks: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold mb-6">How It Works</h1>
    <p className="text-lg text-gray-700 mb-4">
      SciQuest Heroes transforms science education into an exciting adventure where your child is the hero.
    </p>
    <ol className="list-decimal list-inside space-y-4 text-gray-700">
      <li>Parents create an account and add their children</li>
      <li>Children choose their avatar and science topic</li>
      <li>AI generates a personalized comic story</li>
      <li>Children take quizzes to test their knowledge</li>
      <li>Earn badges and track progress over time</li>
    </ol>
  </div>
);

export const Topics: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold mb-6">Science Topics</h1>
    <p className="text-lg text-gray-700 mb-8">
      Explore a wide range of science topics tailored to different grade levels.
    </p>
    <div className="grid md:grid-cols-2 gap-6">
      {['Photosynthesis', 'Solar System', 'Water Cycle', 'Electricity', 'Ecosystems', 'States of Matter'].map(topic => (
        <div key={topic} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-lg">{topic}</h3>
          <p className="text-gray-600 text-sm mt-2">Interactive stories and quizzes</p>
        </div>
      ))}
    </div>
  </div>
);

export const Pricing: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold mb-6">Pricing</h1>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="border rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Free</h3>
        <p className="text-3xl font-bold mb-4">$0<span className="text-sm">/month</span></p>
        <ul className="space-y-2 text-sm">
          <li>3 stories per month</li>
          <li>Basic quizzes</li>
          <li>Limited topics</li>
        </ul>
      </div>
      <div className="border-2 border-primary-600 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Premium</h3>
        <p className="text-3xl font-bold mb-4">$9.99<span className="text-sm">/month</span></p>
        <ul className="space-y-2 text-sm">
          <li>Unlimited stories</li>
          <li>All topics</li>
          <li>Progress tracking</li>
          <li>PDF downloads</li>
        </ul>
      </div>
      <div className="border rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">School</h3>
        <p className="text-3xl font-bold mb-4">Contact</p>
        <ul className="space-y-2 text-sm">
          <li>Classroom licenses</li>
          <li>Teacher dashboard</li>
          <li>Custom topics</li>
          <li>Reports</li>
        </ul>
      </div>
    </div>
  </div>
);

export const About: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold mb-6">About SciQuest Heroes</h1>
    <p className="text-lg text-gray-700 mb-4">
      We believe every child can be a science hero. Our mission is to make science education engaging,
      personalized, and accessible to all learners.
    </p>
  </div>
);

export const COPPA: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold mb-6">COPPA & Privacy</h1>
    <p className="text-lg text-gray-700 mb-4">
      We are committed to protecting children's privacy and comply with COPPA regulations.
    </p>
  </div>
);

export const Signup: React.FC = () => (
  <div className="max-w-md mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
    <p className="text-gray-700 mb-4">Sign up form would go here (simulated for MVP)</p>
  </div>
);

export const PasswordReset: React.FC = () => (
  <div className="max-w-md mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-6">Reset Password</h1>
    <p className="text-gray-700">Password reset form (simulated for MVP)</p>
  </div>
);

export const Privacy: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
    <p className="text-gray-700">Privacy policy content...</p>
  </div>
);

export const Terms: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
    <p className="text-gray-700">Terms of service content...</p>
  </div>
);

export const Support: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold mb-6">Support</h1>
    <p className="text-gray-700 mb-4">Contact us at support@sciquestheroes.com</p>
  </div>
);
