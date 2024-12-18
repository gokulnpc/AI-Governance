import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from '../ui/card';

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  trend?: {
    direction: 'up' | 'down';
    value: string;
  };
  status?: 'success' | 'warning' | 'error';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  title,
  value,
  trend,
  status = 'success'
}) => {
  const statusColors = {
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600'
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${status === 'success' ? 'bg-green-50' : 'bg-yellow-50'}`}>
            <Icon className={`h-5 w-5 ${statusColors[status]}`} />
          </div>
          <div>
            <p className="text-sm text-gray-600">{title}</p>
            <p className="text-2xl font-semibold mt-1">{value}</p>
          </div>
        </div>
        {trend && (
          <div className={`text-sm ${trend.direction === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend.value}
          </div>
        )}
      </div>
    </Card>
  );
}