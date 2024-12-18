import React from 'react';
import { Card } from '../ui/card';
import { Shield, AlertTriangle } from 'lucide-react';
import { StatusBadge } from '../common/StatusBadge';

interface ComplianceCheck {
  framework: string;
  status: 'compliant' | 'warning' | 'non-compliant';
  details: string;
  lastChecked: string;
}

interface ComplianceStatusProps {
  checks: ComplianceCheck[];
}

export const ComplianceStatus: React.FC<ComplianceStatusProps> = ({ checks }) => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold">Regulatory Compliance</h3>
      </div>
      <div className="space-y-4">
        {checks.map((check, idx) => (
          <div key={idx} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {check.status === 'warning' && (
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                )}
                <span className="font-medium">{check.framework}</span>
              </div>
              <StatusBadge 
                status={check.status === 'compliant' ? 'success' : 'warning'} 
                text={check.status.toUpperCase()} 
              />
            </div>
            <p className="text-sm text-gray-600 mb-2">{check.details}</p>
            <p className="text-xs text-gray-500">Last checked: {check.lastChecked}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}