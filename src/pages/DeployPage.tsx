import React, { useState } from 'react';
import { Rocket, Plus, Server, GitBranch, Clock } from 'lucide-react';

const DeployPage = () => {
  const [activeTab, setActiveTab] = useState('environments');

  const environments = [
    {
      id: 1,
      name: 'Production',
      status: 'Healthy',
      lastDeploy: '2024-03-15T12:00:00Z',
      version: 'v1.2.3',
      region: 'us-west-2'
    },
    {
      id: 2,
      name: 'Staging',
      status: 'Deploying',
      lastDeploy: '2024-03-15T11:30:00Z',
      version: 'v1.2.4-rc1',
      region: 'us-west-2'
    },
    {
      id: 3,
      name: 'Development',
      status: 'Warning',
      lastDeploy: '2024-03-15T10:00:00Z',
      version: 'v1.2.4-dev',
      region: 'us-west-2'
    }
  ];

  const deployments = [
    {
      id: 1,
      environment: 'Production',
      version: 'v1.2.3',
      status: 'Successful',
      timestamp: '2024-03-15T12:00:00Z',
      duration: '5m 30s',
      triggeredBy: 'CI/CD Pipeline'
    },
    {
      id: 2,
      environment: 'Staging',
      version: 'v1.2.4-rc1',
      status: 'In Progress',
      timestamp: '2024-03-15T11:30:00Z',
      duration: '3m 45s',
      triggeredBy: 'Manual Deploy'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Rocket className="w-6 h-6 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold">Deploy</h1>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gradient text-white font-medium rounded-xl hover:shadow-md transition-all duration-300">
          <Plus className="w-5 h-5" />
          New Deployment
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 rounded-xl bg-light-100 p-1 mb-8">
        <button
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            activeTab === 'environments'
              ? 'bg-white shadow text-accent-600'
              : 'text-light-600 hover:text-accent-600'
          }`}
          onClick={() => setActiveTab('environments')}
        >
          <Server className="w-4 h-4" />
          Environments
        </button>
        <button
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            activeTab === 'deployments'
              ? 'bg-white shadow text-accent-600'
              : 'text-light-600 hover:text-accent-600'
          }`}
          onClick={() => setActiveTab('deployments')}
        >
          <GitBranch className="w-4 h-4" />
          Deployments
        </button>
      </div>

      {/* Environments View */}
      {activeTab === 'environments' && (
        <div className="space-y-6">
          {environments.map((env) => (
            <div key={env.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{env.name}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-gray-600">{env.region}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      env.status === 'Healthy' ? 'bg-green-100 text-green-600' :
                      env.status === 'Deploying' ? 'bg-blue-100 text-blue-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {env.status}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{env.version}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Last deploy: {new Date(env.lastDeploy).toLocaleString()}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 flex items-center gap-4">
                <button className="px-4 py-2 bg-accent-gradient text-white font-medium rounded-lg hover:shadow-md transition-all duration-300">
                  Deploy
                </button>
                <button className="px-4 py-2 text-accent-600 hover:bg-accent-50 rounded-lg transition-colors">
                  View Logs
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Deployments View */}
      {activeTab === 'deployments' && (
        <div className="space-y-6">
          {deployments.map((deployment) => (
            <div key={deployment.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{deployment.environment}</h3>
                    <span className="text-sm text-gray-600">{deployment.version}</span>
                  </div>
                  <div className="flex items-center gap-4 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      deployment.status === 'Successful' ? 'bg-green-100 text-green-600' :
                      deployment.status === 'In Progress' ? 'bg-blue-100 text-blue-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {deployment.status}
                    </span>
                    <span className="text-sm text-gray-600">
                      Duration: {deployment.duration}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">
                    {new Date(deployment.timestamp).toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    by {deployment.triggeredBy}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 flex items-center gap-4">
                <button className="px-4 py-2 text-accent-600 hover:bg-accent-50 rounded-lg transition-colors">
                  View Details
                </button>
                <button className="px-4 py-2 text-accent-600 hover:bg-accent-50 rounded-lg transition-colors">
                  Download Logs
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeployPage;