import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Shield } from 'lucide-react';
import { UploadSection } from './upload/UploadSection';
import { ModelsList } from './models/ModelsList';
import { TestResults } from './results/TestResults';
import { DashboardView } from './dashboard/DashboardView';
import { ComplianceView } from './compliance/ComplianceView';
import { Model } from '../types/model';

export const IntegratedPlatform: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 pt-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">AI Governance Monitor</h2>
          <p className="text-gray-600">Powered by Block Convey</p>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="text-green-500" />
          <span className="text-sm">Blockchain Verified</span>
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="dashboard" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700">
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="upload" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700">
            Upload Model
          </TabsTrigger>
          <TabsTrigger value="models" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700">
            Model History
          </TabsTrigger>
          <TabsTrigger value="results" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700">
            Test Results
          </TabsTrigger>
          <TabsTrigger value="compliance" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700">
            Compliance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <DashboardView onViewDetails={setSelectedModel} />
        </TabsContent>

        <TabsContent value="upload">
          <UploadSection />
        </TabsContent>

        <TabsContent value="models">
          <ModelsList onSelectModel={setSelectedModel} />
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