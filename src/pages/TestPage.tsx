import React, { useState } from 'react';
import { TestTube, Plus, CheckCircle, XCircle, Clock } from 'lucide-react';

const TestPage = () => {
  const [activeTab, setActiveTab] = useState('testPlans');

  const testPlans = [
    {
      id: 1,
      name: 'User Authentication Flow',
      type: 'Integration',
      status: 'In Progress',
      coverage: 85,
      lastRun: '2024-03-15T10:00:00Z',
      assignee: 'QA Team'
    },
    {
      id: 2,
      name: 'Payment Processing',
      type: 'E2E',
      status: 'Completed',
      coverage: 92,
      lastRun: '2024-03-14T15:30:00Z',
      assignee: 'Platform Team'
    }
  ];

  const testResults = [
    {
      id: 1,
      suite: 'User Authentication',
      total: 24,
      passed: 22,
      failed: 2,
      duration: '3m 45s',
      timestamp: '2024-03-15T11:30:00Z'
    },
    {
      id: 2,
      suite: 'API Integration',
      total: 18,
      passed: 18,
      failed: 0,
      duration: '2m 15s',
      timestamp: '2024-03-15T10:45:00Z'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <TestTube className="w-6 h-6 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold">Test</h1>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gradient text-white font-medium rounded-xl hover:shadow-md transition-all duration-300">
          <Plus className="w-5 h-5" />
          New Test Plan
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 rounded-xl bg-light-100 p-1 mb-8">
        <button
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            activeTab === 'testPlans'
              ? 'bg-white shadow text-accent-600'
              : 'text-light-600 hover:text-accent-600'
          }`}
          onClick={() => setActiveTab('testPlans')}
        >
          <Clock className="w-4 h-4" />
          Test Plans
        </button>
        <button
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            activeTab === 'results'
              ? 'bg-white shadow text-accent-600'
              : 'text-light-600 hover:text-accent-600'
          }`}
          onClick={() => setActiveTab('results')}
        >
          <CheckCircle className="w-4 h-4" />
          Test Results
        </button>
      </div>

      {/* Test Plans View */}
      {activeTab === 'testPlans' && (
        <div className="space-y-6">
          {testPlans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-gray-600">{plan.type}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      plan.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {plan.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Coverage</span>
                  <span>{plan.coverage}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent-gradient rounded-full transition-all duration-300"
                    style={{ width: `${plan.coverage}%` }}
                  />
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <span>Assigned to: {plan.assignee}</span>
                <span>Last run: {new Date(plan.lastRun).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Test Results View */}
      {activeTab === 'results' && (
        <div className="space-y-6">
          {testResults.map((result) => (
            <div key={result.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold">{result.suite}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Run at {new Date(result.timestamp).toLocaleString()}
                  </p>
                </div>
                <span className="text-sm text-gray-600">{result.duration}</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-light-50 rounded-lg text-center">
                  <p className="text-sm text-gray-600 mb-1">Total Tests</p>
                  <p className="text-2xl font-semibold">{result.total}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <p className="text-sm text-green-600 mb-1">Passed</p>
                  <p className="text-2xl font-semibold text-green-600">{result.passed}</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg text-center">
                  <p className="text-sm text-red-600 mb-1">Failed</p>
                  <p className="text-2xl font-semibold text-red-600">{result.failed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestPage;