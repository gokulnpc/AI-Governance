import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

export const ModelPerformance: React.FC = () => {
  const performanceData = [
    { date: '2024-01', accuracy: 0.95, fairness: 0.92, reliability: 0.94 },
    { date: '2024-02', accuracy: 0.96, fairness: 0.93, reliability: 0.95 },
    { date: '2024-03', accuracy: 0.94, fairness: 0.95, reliability: 0.93 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Model Performance Trends
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0.8, 1]} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
              <Tooltip 
                formatter={(value: number) => `${(value * 100).toFixed(1)}%`}
                labelStyle={{ color: '#374151' }}
                contentStyle={{ 
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.375rem'
                }}
              />
              <Line type="monotone" dataKey="accuracy" stroke="#3b82f6" name="Accuracy" />
              <Line type="monotone" dataKey="fairness" stroke="#10b981" name="Fairness" />
              <Line type="monotone" dataKey="reliability" stroke="#f59e0b" name="Reliability" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};