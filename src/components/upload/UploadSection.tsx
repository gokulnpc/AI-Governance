import React from 'react';
import { UploadSteps } from './UploadSteps';

export const UploadSection: React.FC = () => {
  const handleComplete = () => {
    console.log('Upload process completed');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <UploadSteps onComplete={handleComplete} />
    </div>
  );
};