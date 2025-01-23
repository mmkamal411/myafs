import React, { useState } from 'react';
import { Code, GitBranch, GitPullRequest, Plus } from 'lucide-react';

const CodePage = () => {
  const [activeTab, setActiveTab] = useState('repositories');

  const repositories = [
    {
      id: 1,
      name: 'frontend-app',
      description: 'Main frontend application',
      language: 'TypeScript',
      lastCommit: '2024-03-15T10:30:00Z',
      branches: 3,
      pullRequests: 2
    },
    {
      id: 2,
      name: 'api-service',
      description: 'Core API service',
      language: 'Go',
      lastCommit: '2024-03-14T15:45:00Z',
      branches: 5,
      pullRequests: 4
    }
  ];

  const pullRequests = [
    {
      id: 1,
      title: 'Feature: Add user authentication',
      repository: 'frontend-app',
      author: 'Alice Johnson',
      status: 'Review',
      created: '2024-03-15T09:00:00Z',
      comments: 3
    },
    {
      id: 2,
      title: 'Fix: API response handling',
      repository: 'api-service',
      author: 'Bob Smith',
      status: 'Draft',
      created: '2024-03-14T14:30:00Z',
      comments: 1
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Code className="w-6 h-6 text-indigo-600" />
          </div>
          <h1 className="text-2xl font-bold">Code</h1>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gradient text-white font-medium rounded-xl hover:shadow-md transition-all duration-300">
          <Plus className="w-5 h-5" />
          New Repository
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 rounded-xl bg-light-100 p-1 mb-8">
        <button
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            activeTab === 'repositories'
              ? 'bg-white shadow text-accent-600'
              : 'text-light-600 hover:text-accent-600'
          }`}
          onClick={() => setActiveTab('repositories')}
        >
          <GitBranch className="w-4 h-4" />
          Repositories
        </button>
        <button
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            activeTab === 'pullRequests'
              ? 'bg-white shadow text-accent-600'
              : 'text-light-600 hover:text-accent-600'
          }`}
          onClick={() => setActiveTab('pullRequests')}
        >
          <GitPullRequest className="w-4 h-4" />
          Pull Requests
        </button>
      </div>

      {/* Repositories View */}
      {activeTab === 'repositories' && (
        <div className="space-y-6">
          {repositories.map((repo) => (
            <div key={repo.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{repo.name}</h3>
                  <p className="text-gray-600 mt-1">{repo.description}</p>
                </div>
                <span className="px-3 py-1 bg-light-100 rounded-full text-sm font-medium">
                  {repo.language}
                </span>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4" />
                  <span>{repo.branches} branches</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitPullRequest className="w-4 h-4" />
                  <span>{repo.pullRequests} pull requests</span>
                </div>
                <div>
                  Last commit: {new Date(repo.lastCommit).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pull Requests View */}
      {activeTab === 'pullRequests' && (
        <div className="space-y-6">
          {pullRequests.map((pr) => (
            <div key={pr.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{pr.title}</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                    <span>{pr.repository}</span>
                    <span>by {pr.author}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  pr.status === 'Review' ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {pr.status}
                </span>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div>Created: {new Date(pr.created).toLocaleString()}</div>
                <div>{pr.comments} comments</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CodePage;