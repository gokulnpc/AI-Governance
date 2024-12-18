import React from 'react';
import { Card } from '../ui/card';
import { Progress } from '../ui/progress';
import { AlertTriangle, CheckCircle } from 'lucide-react';

interface BiasMetric {
  category: string;
  score: number;
  status: 'pass' | 'warning' | 'fail';
  details: string;
}

interface BiasMetricsProps {
  metrics: BiasMetric[];
}

export const BiasMetrics: React.FC<BiasMetricsProps> = ({ metrics }) => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Bias Detection Results</h3>
      <div className="space-y-4">
        {metrics.map((metric, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {metric.status === 'pass' ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                )}
                <span className="font-medium">{metric.category}</span>
              </div>
              <span className={`text-sm ${
                metric.status === 'pass' ? 'text-green-600' : 'text-yellow-600'
              }`}>
                {(metric.score * 100).toFixed(1)}%
              </span>
            </div>
            <Progress value={metric.score * 100} />
            <p className="text-sm text-gray-600">{metric.details}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}