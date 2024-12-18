import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Shield, Upload, History, FileBarChart, FileCheck } from 'lucide-react';
import { UploadSteps } from './upload/UploadSteps';
import { ModelsList } from './models/ModelsList';
import { TestResults } from './results/TestResults';
import { DashboardView } from './dashboard/DashboardView';
import { ComplianceView } from './compliance/ComplianceView';
import { Model } from '../types/model';

export const QualityPlatform: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleModelSelect = (model: Model) => {
    setSelectedModel(model);
    setActiveTab('results');
  };

  const handleUploadComplete = () => {
    setActiveTab('models');
  };

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: FileBarChart },
    { id: 'upload', label: 'Upload Model', icon: Upload },
    { id: 'models', label: 'Model History', icon: History },
    { id: 'results', label: 'Test Results', icon: FileBarChart },
    { id: 'compliance', label: 'Compliance', icon: FileCheck }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 pt-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">AI Governance Monitoring Platform</h2>
          <p className="text-gray-600">Secured by Block Convey Blockchain</p>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="text-green-500" />
          <span className="text-sm">Blockchain Verified</span>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          {tabs.map(tab => (
            <TabsTrigger 
              key={tab.id}
              value={tab.id}
              className="flex items-center gap-2 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="dashboard">
          <DashboardView onViewDetails={handleModelSelect} />
        </TabsContent>

        <TabsContent value="upload">
          <UploadSteps onComplete={handleUploadComplete} />
        </TabsContent>

        <TabsContent value="models">
          <ModelsList onSelectModel={handleModelSelect} />
        </TabsContent>

        <TabsContent value="results">
          <TestResults selectedModel={selectedModel} />
        </TabsContent>

        <TabsContent value="compliance">
          <ComplianceView />
        </TabsContent>
      </Tabs>
    </div>
  );
};