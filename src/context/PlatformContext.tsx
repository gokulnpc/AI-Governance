import React, { createContext, useContext, useState, useCallback } from 'react';
import { Model } from '../types/model';

interface PlatformContextType {
  selectedModel: Model | null;
  setSelectedModel: (model: Model | null) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  refreshData: () => void;
}

const PlatformContext = createContext<PlatformContextType | undefined>(undefined);

export const PlatformProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  const refreshData = useCallback(() => {
    // Implement data refresh logic here
    console.log('Refreshing platform data...');
  }, []);

  return (
    <PlatformContext.Provider value={{
      selectedModel,
      setSelectedModel,
      activeTab,
      setActiveTab,
      refreshData
    }}>
      {children}
    </PlatformContext.Provider>
  );
};

export const usePlatform = () => {
  const context = useContext(PlatformContext);
  if (context === undefined) {
    throw new Error('usePlatform must be used within a PlatformProvider');
  }
  return context;
};