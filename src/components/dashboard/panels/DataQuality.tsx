import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Database, TrendingUp } from 'lucide-react';
import { Progress } from '../../ui/progress';

export const DataQuality: React.FC = () => {
  const metrics = [
    { name: 'Completeness', score: 0.96, trend: 'up' },
    { name: 'Accuracy', score: 0.94, trend: 'up' },
    { name: 'Consistency', score: 0.92, trend: 'stable' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          Data Quality Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{metric.name}</span>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600">
                    {(metric.score * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
              <Progress value={metric.score * 100} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};