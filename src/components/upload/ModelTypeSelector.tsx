import React from 'react';
import { modelTypes } from '../../data/modelTypes';

interface ModelTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const ModelTypeSelector: React.FC<ModelTypeSelectorProps> = ({
  value,
  onChange
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {modelTypes.map((type) => (
        <button
          key={type.id}
          onClick={() => onChange(type.id)}
          className={`p-4 rounded-lg border-2 transition-all ${
            value === type.id
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <type.icon className="h-5 w-5 text-blue-600" />
            <span className="font-medium">{type.name}</span>
          </div>
          <p className="text-sm text-gray-600">{type.description}</p>
        </button>
      ))}
    </div>
  );
};