import React from 'react';
import { AIAgentButton } from '../common/AIAgentButton';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
      <AIAgentButton />
    </div>
  );
};