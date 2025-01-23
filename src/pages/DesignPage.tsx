import React, { useState } from 'react';
import { Paintbrush, Plus, Box, Layers, Code } from 'lucide-react';

const DesignPage = () => {
  const [activeTab, setActiveTab] = useState('architecture');

  const architectureItems = [
    {
      id: 1,
      name: 'User Authentication Service',
      type: 'Microservice',
      status: 'Production',
      dependencies: ['API Gateway', 'User Database'],
      lastUpdated: '2024-03-15'
    },
    {
      id: 2,
      name: 'Payment Processing',
      type: 'Event-Driven Service',
      status: 'Development',
      dependencies: ['Message Queue', 'Payment Gateway'],
      lastUpdated: '2024-03-14'
    }
  ];

  const apiEndpoints = [
    {
      id: 1,
      path: '/api/v1/users',
      method: 'GET',
      status: 'Active',
      version: '1.0',
      lastUpdated: '2024-03-15'
    },
    {
      id: 2,
      path: '/api/v1/payments',
      method: 'POST',
      status: 'Draft',
      version: '1.0',
      lastUpdated: '2024-03-14'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Paintbrush className="w-6 h-6 text-purple-600" />
          </div>
          <h1 className="text-2xl font-bold">Design</h1>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gradient text-white font-medium rounded-xl hover:shadow-md transition-all duration-300">
          <Plus className="w-5 h-5" />
          New Design
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 rounded-xl bg-light-100 p-1 mb-8">
        <button
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            activeTab === 'architecture'
              ? 'bg-white shadow text-accent-600'
              : 'text-light-600 hover:text-accent-600'
          }`}
          onClick={() => setActiveTab('architecture')}
        >
          <Box className="w-4 h-4" />
          System Architecture
        </button>
        <button
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            activeTab === 'api'
              ? 'bg-white shadow text-accent-600'
              : 'text-light-600 hover:text-accent-600'
          }`}
          onClick={() => setActiveTab('api')}
        >
          <Code className="w-4 h-4" />
          API Design
        </button>
      </div>

      {/* Architecture View */}
      {activeTab === 'architecture' && (
        <div className="space-y-6">
          {architectureItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-gray-600">{item.type}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Production' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Dependencies</h4>
                <div className="flex flex-wrap gap-2">
                  {item.dependencies.map((dep, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-light-100 rounded-full text-sm"
                    >
                      {dep}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                Last updated: {new Date(item.lastUpdated).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* API Design View */}
      {activeTab === 'api' && (
        <div className="space-y-6">
          {apiEndpoints.map((endpoint) => (
            <div key={endpoint.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                      endpoint.method === 'GET' ? 'bg-blue-100 text-blue-600' :
                      endpoint.method === 'POST' ? 'bg-green-100 text-green-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {endpoint.method}
                    </span>
                    <h3 className="text-lg font-mono">{endpoint.path}</h3>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm text-gray-600">Version {endpoint.version}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      endpoint.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {endpoint.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                Last updated: {new Date(endpoint.lastUpdated).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DesignPage;