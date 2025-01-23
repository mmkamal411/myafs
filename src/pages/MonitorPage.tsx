import React, { useState } from 'react';
import { Activity, Plus, BarChart2, AlertTriangle, Bell } from 'lucide-react';

const MonitorPage = () => {
  const [activeTab, setActiveTab] = useState('metrics');

  const metrics = [
    {
      id: 1,
      name: 'API Response Time',
      value: '235ms',
      change: '-12%',
      trend: 'down',
      status: 'healthy'
    },
    {
      id: 2,
      name: 'Error Rate',
      value: '0.05%',
      change: '+0.01%',
      trend: 'up',
      status: 'warning'
    },
    {
      id: 3,
      name: 'CPU Usage',
      value: '78%',
      change: '+5%',
      trend: 'up',
      status: 'healthy'
    }
  ];

  const alerts = [
    {
      id: 1,
      title: 'High Memory Usage',
      service: 'User Service',
      severity: 'Warning',
      timestamp: '2024-03-15T11:30:00Z',
      status: 'Active'
    },
    {
      id: 2,
      title: 'API Latency Spike',
      service: 'API Gateway',
      severity: 'Critical',
      timestamp: '2024-03-15T11:15:00Z',
      status: 'Resolved'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Activity className="w-6 h-6 text-indigo-600" />
          </div>
          <h1 className="text-2xl font-bold">Monitor</h1>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gradient text-white font-medium rounded-xl hover:shadow-md transition-all duration-300">
          <Plus className="w-5 h-5" />
          New Dashboard
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 rounded-xl bg-light-100 p-1 mb-8">
        <button
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            activeTab === 'metrics'
              ? 'bg-white shadow text-accent-600'
              : 'text-light-600 hover:text-accent-600'
          }`}
          onClick={() => setActiveTab('metrics')}
        >
          <BarChart2 className="w-4 h-4" />
          Metrics
        </button>
        <button
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
            activeTab === 'alerts'
              ? 'bg-white shadow text-accent-600'
              : 'text-light-600 hover:text-accent-600'
          }`}
          onClick={() => setActiveTab('alerts')}
        >
          <Bell className="w-4 h-4" />
          Alerts
        </button>
      </div>

      {/* Metrics View */}
      {activeTab === 'metrics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric) => (
              <div key={metric.id} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm text-gray-600">{metric.name}</h3>
                  <span className={`w-2 h-2 rounded-full ${
                    metric.status === 'healthy' ? 'bg-green-500' : 'bg-yellow-500'
                  }`} />
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-semibold">{metric.value}</span>
                  <span className={`text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
            <div className="h-64 flex items-center justify-center text-gray-500">
              Chart placeholder - Add your preferred charting library
            </div>
          </div>
        </div>
      )}

      {/* Alerts View */}
      {activeTab === 'alerts' && (
        <div className="space-y-6">
          {alerts.map((alert) => (
            <div key={alert.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className={`w-5 h-5 ${
                      alert.severity === 'Critical' ? 'text-red-500' : 'text-yellow-500'
                    }`} />
                    <h3 className="text-lg font-semibold">{alert.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{alert.service}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    alert.severity === 'Critical' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {alert.severity}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    alert.status === 'Active' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                  }`}>
                    {alert.status}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <span>Triggered: {new Date(alert.timestamp).toLocaleString()}</span>
                <div className="flex items-center gap-4">
                  <button className="text-accent-600 hover:text-accent-700">
                    View Details
                  </button>
                  {alert.status === 'Active' && (
                    <button className="text-accent-600 hover:text-accent-700">
                      Acknowledge
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MonitorPage;