import React from 'react';
import { BarChart2 } from 'lucide-react';

const metrics = [
  {
    id: 1,
    name: 'Total Users',
    value: '12,345',
    change: '+15%',
    trend: 'up'
  },
  {
    id: 2,
    name: 'Active Services',
    value: '48',
    change: '+3',
    trend: 'up'
  },
  {
    id: 3,
    name: 'Response Time',
    value: '235ms',
    change: '-12%',
    trend: 'down'
  }
];

const AnalyticsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <BarChart2 className="w-6 h-6 text-indigo-600" />
        </div>
        <h1 className="text-2xl font-bold">Analytics</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric) => (
          <div key={metric.id} className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-sm text-gray-600 mb-2">{metric.name}</h3>
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
  );
};

export default AnalyticsPage;