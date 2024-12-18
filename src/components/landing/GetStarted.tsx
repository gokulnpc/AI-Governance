import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GetStartedProps {
  onDemoClick: () => void;
}

export const GetStarted: React.FC<GetStartedProps> = ({ onDemoClick }) => {
  return (
    <div className="bg-blue-600 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Secure Your AI Model Quality Data?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Join leading organizations in leveraging blockchain technology for AI model quality assurance.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={onDemoClick}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-blue-50 transition-colors"
          >
            Try Platform Demo <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <a 
            href="https://calendly.com/block-convey/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-blue-700 transition-colors"
          >
            Schedule Demo
          </a>
        </div>
      </div>
    </div>
  );
};