import React from 'react';
import { HelpCircle } from 'lucide-react';

export const FAQButton: React.FC = () => {
  return (
    <a
      href="https://agentplace.io/agent/a92ecf99-e70c-48df-8cee-0471a00562dd"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2 z-50"
    >
      <HelpCircle className="h-5 w-5" />
      <span className="font-medium">FAQ</span>
    </a>
  );
};