import React from 'react';
import { History } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Model } from '../../types/model';

interface ModelCardProps {
  model: Model;
  onClick: (model: Model) => void;
}

export const ModelCard: React.FC<ModelCardProps> = ({ model, onClick }) => {
  return (
    <Card 
      className="cursor-pointer hover:bg-gray-50"
      onClick={() => onClick(model)}
    >
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-medium text-lg">{model.name}</h3>
            <p className="text-sm text-gray-500">Version {model.version}</p>
          </div>
          <span className={`px-2 py-1 rounded text-sm ${
            model.status.includes('Complete') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          }`}>
            {model.status}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
          <div>
            <p className="font-medium">Type</p>
            <p>{model.type}</p>
          </div>
          <div>
            <p className="font-medium">Framework</p>
            <p>{model.framework}</p>
          </div>
          <div>
            <p className="font-medium">Uploaded</p>
            <p>{model.uploadDate}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t text-sm text-gray-500">
          <div className="flex items-center">
            <History className="h-4 w-4 mr-1" />
            Block Convey Hash: {model.hash}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};