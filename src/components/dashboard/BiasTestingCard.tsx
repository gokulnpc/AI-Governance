import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { Progress } from '../ui/progress';

interface BiasMetric {
  category: string;
  score: number;
  status: 'pass' | 'warning' | 'fail';
  description: string;
}

interface BiasTestingCardProps {
  modelName: string;
  scenarios: {
    name: string;
    metrics: BiasMetric[];
    overallScore: number;
  }[];
}

export const BiasTestingCard: React.FC<BiasTestingCardProps> = ({ modelName, scenarios }) => {
  const getStatusIcon = (status: 'pass' | 'warning' | 'fail') => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'fail':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="h-5 w-5" />
          Bias Testing Results
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {scenarios.map((scenario, index) => (
            <div key={index} className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{scenario.name}</h4>
                <span className="text-sm text-gray-500">
                  Overall Score: {(scenario.overallScore * 100).toFixed(1)}%
                </span>
              </div>
              
              <Progress value={scenario.overallScore * 100} />
              
              <div className="grid gap-3">
                {scenario.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="mt-1">
                      {getStatusIcon(metric.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <span className="font-medium">{metric.category}</span>
                        <span className={`text-sm ${
                          metric.status === 'pass' ? 'text-green-600' :
                          metric.status === 'warning' ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {(metric.score * 100).toFixed(1)}%
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{metric.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}