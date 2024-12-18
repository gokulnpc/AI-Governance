import React from 'react';
import { Card } from '../../ui/card';
import { Shield, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

const metrics = [
  {
    label: 'Overall Health',
    value: '98%',
    trend: '+2.5%',
    icon: Activity,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    label: 'Bias Score',
    value: '0.92',
    trend: '+0.03',
    icon: Scale,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    label: 'Active Alerts',
    value: '2',
    trend: '-1',
    icon: AlertTriangle,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  },
  {
    label: 'Compliance Rate',
    value: '100%',
    trend: '0%',
    icon: Shield,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
];

export const MetricsOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div className={`p-2 rounded-lg ${metric.bgColor}`}>
              <metric.icon className={`h-6 w-6 ${metric.color}`} />
            </div>
            <span className={`text-sm font-medium ${
              metric.trend.startsWith('+') ? 'text-green-600' : 
              metric.trend.startsWith('-') ? 'text-red-600' : 
              'text-gray-600'
            }`}>
              {metric.trend}
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-600">{metric.label}</h3>
            <p className="text-2xl font-bold mt-1">{metric.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};