import React, { useState } from 'react';
import { Workflow, Plus, Calendar, Users, CheckSquare } from 'lucide-react';

const PlanPage = () => {
  const [activeTab, setActiveTab] = useState('roadmap');

  const roadmapItems = [
    {
      id: 1,
      title: 'API Gateway Implementation',
      quarter: 'Q1 2024',
      status: 'In Progress',
      owner: 'Infrastructure Team',
      progress: 65
    },
    {
      id: 2,
      title: 'Microservices Migration',
      quarter: 'Q2 2024',
      status: 'Planning',
      owner: 'Platform Team',
      progress: 25
    },
    {
      id: 3,
      title: 'Security Enhancements',
      quarter: 'Q3 2024',
      status: 'Upcoming',
      owner: 'Security Team',
      progress: 0
    }
  ];

  const sprintItems = [
    {
      id: 1,
      name: 'Sprint 23',
      startDate: '2024-03-01',
      endDate: '2024-03-15',
      status: 'Completed',
      velocity: 45,
      completedStories: 12
    },
    {
      id: 2,
      name: 'Sprint 24',
      startDate: '2024-03-16',
      endDate: '2024-03-30',
      status: 'Active',
      velocity: 42,
      completedStories: 8
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Workflow className="w-6 h-6 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold">Plan</h1>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gradient text-white font-medium rounded-xl hover:shadow-md transition-all duration-300">
          <Plus className="w-5 h-5" />
          New Initiative
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 rounded-xl bg-light-100 p-1 mb-8">
        <button
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            activeTab === 'roadmap'
              ? 'bg-white shadow text-accent-600'
              : 'text-light-600 hover:text-accent-600'
          }`}
          onClick={() => setActiveTab('roadmap')}
        >
          <Calendar className="w-4 h-4" />
          Roadmap
        </button>
        <button
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            activeTab === 'sprints'
              ? 'bg-white shadow text-accent-600'
              : 'text-light-600 hover:text-accent-600'
          }`}
          onClick={() => setActiveTab('sprints')}
        >
          <CheckSquare className="w-4 h-4" />
          Sprints
        </button>
      </div>

      {/* Roadmap View */}
      {activeTab === 'roadmap' && (
        <div className="space-y-6">
          {roadmapItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                    <span>{item.quarter}</span>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{item.owner}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.status === 'In Progress' ? 'bg-blue-100 text-blue-600' :
                  item.status === 'Planning' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {item.status}
                </span>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent-gradient rounded-full transition-all duration-300"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sprints View */}
      {activeTab === 'sprints' && (
        <div className="space-y-6">
          {sprintItems.map((sprint) => (
            <div key={sprint.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{sprint.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {new Date(sprint.startDate).toLocaleDateString()} - {new Date(sprint.endDate).toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  sprint.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {sprint.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-light-50 rounded-lg">
                  <p className="text-sm text-gray-600">Velocity</p>
                  <p className="text-2xl font-semibold">{sprint.velocity}</p>
                </div>
                <div className="p-4 bg-light-50 rounded-lg">
                  <p className="text-sm text-gray-600">Completed Stories</p>
                  <p className="text-2xl font-semibold">{sprint.completedStories}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanPage;