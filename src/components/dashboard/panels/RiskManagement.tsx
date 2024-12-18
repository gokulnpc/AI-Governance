import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { AlertTriangle, Shield, AlertCircle } from 'lucide-react';

export const RiskManagement: React.FC = () => {
  const risks = [
    {
      level: 'high',
      issue: 'Potential age bias in credit scoring',
      impact: 'Regulatory compliance risk',
      status: 'active'
    },
    {
      level: 'medium',
      issue: 'Data drift detected in customer segments',
      impact: 'Model performance degradation',
      status: 'monitoring'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          Risk Assessment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {risks.map((risk, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {risk.level === 'high' ? (
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  ) : (
                    <Shield className="h-4 w-4 text-yellow-500" />
                  )}
                  <span className="font-medium">{risk.issue}</span>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${
                  risk.level === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {risk.level.toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{risk.impact}</p>
              <div className="text-sm">
                Status: <span className="font-medium">{risk.status}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};