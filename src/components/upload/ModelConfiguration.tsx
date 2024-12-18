import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Settings, Sliders, Cpu } from 'lucide-react';
import { ModelTypeSelector } from './ModelTypeSelector';
import { ModelParameters } from './ModelParameters';
import { HardwareConfig } from './HardwareConfig';

interface ModelConfigurationProps {
  config: {
    type: string;
    parameters: {
      batchSize: number;
      precision: '16' | '32' | '64';
      optimization: 'none' | 'quantization' | 'pruning';
      accelerator: 'cpu' | 'gpu' | 'tpu' | 'auto';
    };
  };
  onChange: (config: ModelConfigurationProps['config']) => void;
}

export const ModelConfiguration: React.FC<ModelConfigurationProps> = ({
  config,
  onChange
}) => {
  const handleParameterChange = (key: string, value: any) => {
    onChange({
      ...config,
      parameters: {
        ...config.parameters,
        [key]: value
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Model Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <ModelTypeSelector
          value={config.type}
          onChange={(type) => onChange({ ...config, type })}
        />

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sliders className="h-4 w-4" />
            <h3 className="font-medium">Performance Parameters</h3>
          </div>
          <ModelParameters
            parameters={config.parameters}
            onChange={handleParameterChange}
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="h-4 w-4" />
            <h3 className="font-medium">Hardware Configuration</h3>
          </div>
          <HardwareConfig
            accelerator={config.parameters.accelerator}
            onChange={(value) => handleParameterChange('accelerator', value)}
          />
        </div>
      </CardContent>
    </Card>
  );
};