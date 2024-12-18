import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { History, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Model } from '../../../types/model';
import { modelHistoryData } from '../../../data/modelHistory';

interface ModelLifecycleProps {
  onViewDetails: (model: Model) => void;
}

export const ModelLifecycle: React.FC<ModelLifecycleProps> = ({ onViewDetails }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="h-5 w-5" />
          Model Lifecycle
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {modelHistoryData.map((model, idx) => (
            <div 
              key={idx}
              className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={() => onViewDetails(model as any)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {model.testResults.biasMetrics.every(m => m.status === 'pass') ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  )}
                  <span className="font-medium">{model.name}</span>
                </div>
                <span className="text-sm text-gray-500">v{model.version}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
                <div>
                  <span className="text-gray-600">Profile: </span>
                  {model.profile.type}
                </div>
                <div>
                  <span className="text-gray-600">Updated: </span>
                  {model.uploadDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};