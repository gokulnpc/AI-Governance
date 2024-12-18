import React from 'react';
import { Sidebar } from './Sidebar';
import { MainContent } from './MainContent';

export const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <MainContent />
    </div>
  );
};