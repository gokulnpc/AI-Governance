import React from 'react';
import { Bot } from 'lucide-react';

export const AIAgentButton: React.FC = () => {
  return (
    <a
      href="https://agentplace.io/agent/a92ecf99-e70c-48df-8cee-0471a00562dd"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:-translate-y-1 flex items-center gap-3 z-50"
    >
      <Bot className="h-5 w-5 animate-pulse" />
      <span className="font-medium">AI Assistant</span>
    </a>
  );
};