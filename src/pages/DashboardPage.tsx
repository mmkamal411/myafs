import React from 'react';
import DashboardMetrics from '../components/DashboardMetrics';

const DashboardPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <DashboardMetrics />
    </div>
  );
};

export default DashboardPage;