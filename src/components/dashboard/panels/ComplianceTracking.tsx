import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { FileCheck, CheckCircle2, AlertTriangle } from 'lucide-react';

export const ComplianceTracking: React.FC = () => {
  const frameworks = [
    { name: 'GDPR', status: 'compliant', lastCheck: '2024-03-15', score: 98 },
    { name: 'FCRA', status: 'warning', lastCheck: '2024-03-14', score: 92 },
    { name: 'ECOA', status: 'compliant', lastCheck: '2024-03-13', score: 97 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileCheck className="h-5 w-5" />
          Regulatory Compliance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {frameworks.map((framework, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {framework.status === 'compliant' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  )}
                  <span className="font-medium">{framework.name}</span>
                </div>
                <span className={`px-2 py-1 rounded text-sm ${
                  framework.status === 'compliant' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {framework.score}%
                </span>
              </div>
              <div className="text-sm text-gray-500">
                Last checked: {framework.lastCheck}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};