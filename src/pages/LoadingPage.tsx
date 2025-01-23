import React from 'react';

const LoadingPage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-accent-200 border-t-accent-600 rounded-full animate-spin"></div>
        <p className="text-light-600 animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;