import React from 'react';
import { ModelCard } from './ModelCard';
import { Model } from '../../types/model';
import { models } from '../../data/models';

interface ModelsListProps {
  onSelectModel: (model: Model) => void;
}

export const ModelsList: React.FC<ModelsListProps> = ({ onSelectModel }) => {
  return (
    <div className="grid gap-4">
      {models.map((model) => (
        <ModelCard 
          key={model.id}
          model={model}
          onClick={onSelectModel}
        />
      ))}
    </div>
  );
};