import React from 'react';
import { QualityTest } from '../../types/dashboard';

interface QualityTestCardProps {
  test: QualityTest;
}

export const QualityTestCard: React.FC<QualityTestCardProps> = ({ test }) => {
  return (
    <div className="p-4 border rounded">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-medium">{test.model}</h3>
          <div className="flex gap-2 mt-1">
            {test.tests.map((testName, i) => (
              <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                {testName}
              </span>
            ))}
          </div>
        </div>
        <span className="text-green-600 font-medium">{test.progress}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-green-600 h-2.5 rounded-full" 
          style={{width: test.progress}}
        ></div>
      </div>
    </div>
  );
};