import React from 'react';
import { Cpu, Gpu, Server, Zap } from 'lucide-react';

interface HardwareConfigProps {
  accelerator: 'cpu' | 'gpu' | 'tpu' | 'auto';
  onChange: (value: 'cpu' | 'gpu' | 'tpu' | 'auto') => void;
}

export const HardwareConfig: React.FC<HardwareConfigProps> = ({
  accelerator,
  onChange
}) => {
  const options = [
    { value: 'cpu', label: 'CPU', icon: Cpu, description: 'Standard CPU processing' },
    { value: 'gpu', label: 'GPU', icon: Gpu, description: 'NVIDIA CUDA acceleration' },
    { value: 'tpu', label: 'TPU', icon: Server, description: 'Tensor processing units' },
    { value: 'auto', label: 'Auto', icon: Zap, description: 'Automatic selection' }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {options.map((option) => {
        const Icon = option.icon;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value as any)}
            className={`p-4 rounded-lg border-2 transition-all ${
              accelerator === option.value
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon className="h-5 w-5 text-blue-600" />
              <span className="font-medium">{option.label}</span>
            </div>
            <p className="text-sm text-gray-600">{option.description}</p>
          </button>
        );
      })}
    </div>
  );
};