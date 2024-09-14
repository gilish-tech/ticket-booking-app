import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-800"></div>
    </div>
  );
};

export default LoadingSpinner;
