import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Database } from 'lucide-react';

interface TestConfigurationProps {
  config: {
    accuracy: boolean;
    fairness: boolean;
    reliability: boolean;
    threshold: string;
  };
  onComplete: (config: TestConfigurationProps['config']) => void;
}

export const TestConfiguration: React.FC<TestConfigurationProps> = ({
  config,
  onComplete
}) => {
  const [localConfig, setLocalConfig] = React.useState(config);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(localConfig);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          Configure Quality Tests
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Quality Metrics</label>
              <div className="space-y-2">
                {[
                  { id: 'accuracy', label: 'Accuracy Testing' },
                  { id: 'fairness', label: 'Fairness Assessment' },
                  { id: 'reliability', label: 'Reliability Testing' }
                ].map(metric => (
                  <label key={metric.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={localConfig[metric.id as keyof typeof localConfig]}
                      onChange={e => setLocalConfig({
                        ...localConfig,
                        [metric.id]: e.target.checked
                      })}
                      className="rounded border-gray-300"
                    />
                    {metric.label}
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Quality Threshold
              </label>
              <input
                type="number"
                min="0"
                max="1"
                step="0.01"
                value={localConfig.threshold}
                onChange={e => setLocalConfig({
                  ...localConfig,
                  threshold: e.target.value
                })}
                className="w-full p-2 border rounded"
              />
              <p className="text-sm text-gray-500 mt-1">
                Minimum score required to pass quality tests (0-1)
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Next Step
          </button>
        </form>
      </CardContent>
    </Card>
  );
};