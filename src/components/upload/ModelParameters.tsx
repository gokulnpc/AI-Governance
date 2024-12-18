import React from 'react';

interface ModelParametersProps {
  parameters: {
    batchSize: number;
    precision: '16' | '32' | '64';
    optimization: 'none' | 'quantization' | 'pruning';
  };
  onChange: (key: string, value: any) => void;
}

export const ModelParameters: React.FC<ModelParametersProps> = ({
  parameters,
  onChange
}) => {
  return (
    <div className="grid gap-4">
      <div>
        <label className="block text-sm font-medium mb-1">Batch Size</label>
        <input
          type="number"
          min="1"
          max="512"
          value={parameters.batchSize}
          onChange={(e) => onChange('batchSize', parseInt(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <p className="text-xs text-gray-500 mt-1">
          Recommended: 32-128 for most models
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Precision</label>
        <select
          value={parameters.precision}
          onChange={(e) => onChange('precision', e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="16">FP16 - Mixed Precision</option>
          <option value="32">FP32 - Single Precision</option>
          <option value="64">FP64 - Double Precision</option>
        </select>
        <p className="text-xs text-gray-500 mt-1">
          Lower precision = faster inference, higher precision = better accuracy
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Optimization</label>
        <select
          value={parameters.optimization}
          onChange={(e) => onChange('optimization', e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="none">None</option>
          <option value="quantization">Quantization</option>
          <option value="pruning">Pruning</option>
        </select>
        <p className="text-xs text-gray-500 mt-1">
          Optimize model size and performance
        </p>
      </div>
    </div>
  );
};