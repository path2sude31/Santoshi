import React from 'react';
import { MOCK_TOPICS } from '../../mock/mockData';

const MOCK_CLASSES = [
  { id: 'class-1', name: 'Grade 3A', studentCount: 24 },
  { id: 'class-2', name: 'Grade 4B', studentCount: 22 },
];

const MOCK_ASSIGNMENTS = [
  { id: 'assign-1', title: 'Photosynthesis Reading', className: 'Grade 3A', dueDate: '2025-11-20' },
  { id: 'assign-2', title: 'Solar System Quiz', className: 'Grade 4B', dueDate: '2025-11-22' },
  { id: 'assign-3', title: 'Water Cycle Story', className: 'Grade 3A', dueDate: '2025-11-25' },
];

export const TeacherDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Teacher Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Classes</h3>
          <p className="text-3xl font-bold text-primary-600">{MOCK_CLASSES.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Total Students</h3>
          <p className="text-3xl font-bold text-primary-600">
            {MOCK_CLASSES.reduce((sum, c) => sum + c.studentCount, 0)}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Active Assignments</h3>
          <p className="text-3xl font-bold text-primary-600">{MOCK_ASSIGNMENTS.length}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Classes</h2>
          <div className="space-y-3">
            {MOCK_CLASSES.map(cls => (
              <div key={cls.id} className="p-4 border rounded-lg">
                <div className="font-semibold">{cls.name}</div>
                <div className="text-sm text-gray-600">{cls.studentCount} students</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Due Dates</h2>
          <div className="space-y-3">
            {MOCK_ASSIGNMENTS.map(assignment => (
              <div key={assignment.id} className="p-4 border rounded-lg">
                <div className="font-semibold">{assignment.title}</div>
                <div className="text-sm text-gray-600">{assignment.className}</div>
                <div className="text-sm text-gray-500">Due: {assignment.dueDate}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Classes: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Classes</h1>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          + Add Class
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {MOCK_CLASSES.map(cls => (
          <div key={cls.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">{cls.name}</h3>
            <p className="text-gray-600 mb-4">{cls.studentCount} students</p>
            <button className="text-primary-600 hover:text-primary-700">
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Assignments: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Assignments</h1>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          + New Assignment
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {MOCK_ASSIGNMENTS.map(assignment => (
              <tr key={assignment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium">{assignment.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{assignment.className}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{assignment.dueDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full">
                    Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const Library: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Topic Library</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {MOCK_TOPICS.map(topic => (
          <div key={topic.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">{topic.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{topic.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {topic.gradeBands.map(gb => (
                <span key={gb} className="px-2 py-1 bg-primary-100 text-primary-600 text-xs rounded">
                  {gb}
                </span>
              ))}
            </div>
            <button className="w-full px-4 py-2 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50">
              Assign to Class
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TeacherReports: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Reports</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Class Progress Reports</h2>
        <p className="text-gray-600 mb-6">
          View detailed analytics on student engagement, quiz scores, and reading progress.
        </p>
        <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          Generate Report (Coming Soon)
        </button>
      </div>
    </div>
  );
};

export const TeacherSettings: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div>
          <h3 className="font-semibold mb-2">School Information</h3>
          <input
            type="text"
            placeholder="School Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Email Notifications</h3>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" defaultChecked />
            <span>Notify me about assignment submissions</span>
          </label>
        </div>
      </div>
    </div>
  );
};
