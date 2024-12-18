import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { QualityMetric } from '../../types/dashboard';

interface QualityChartProps {
  data: QualityMetric[];
}

export const QualityChart: React.FC<QualityChartProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quality Metrics Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0.8, 1]} />
              <Tooltip />
              <Line type="monotone" dataKey="accuracy" stroke="#2563eb" name="Accuracy" />
              <Line type="monotone" dataKey="fairness" stroke="#16a34a" name="Fairness" />
              <Line type="monotone" dataKey="reliability" stroke="#dc2626" name="Reliability" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};