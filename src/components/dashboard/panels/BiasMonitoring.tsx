import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Shield, AlertTriangle } from 'lucide-react';
import { Progress } from '../../ui/progress';

export const BiasMonitoring: React.FC = () => {
  const biasMetrics = [
    { 
      name: 'Demographic Parity', 
      score: 0.94, 
      threshold: 0.90, 
      status: 'pass',
      details: 'Equal prediction rates across protected groups'
    },
    { 
      name: 'Equal Opportunity', 
      score: 0.92, 
      threshold: 0.90, 
      status: 'pass',
      details: 'Consistent true positive rates'
    },
    { 
      name: 'Disparate Impact', 
      score: 0.88, 
      threshold: 0.90, 
      status: 'warning',
      details: 'Potential bias in outcomes for certain groups'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Fairness & Bias Monitoring
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {biasMetrics.map((metric, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {metric.status === 'warning' && (
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  )}
                  <span className="font-medium">{metric.name}</span>
                </div>
                <span className={`text-sm ${
                  metric.status === 'pass' ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {(metric.score * 100).toFixed(1)}%
                </span>
              </div>
              <Progress 
                value={metric.score * 100} 
                className={metric.status === 'warning' ? 'bg-yellow-100' : ''}
              />
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">{metric.details}</span>
                <span className="text-gray-500">
                  Threshold: {(metric.threshold * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};