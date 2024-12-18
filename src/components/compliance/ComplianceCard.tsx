import React from 'react';
import { Shield } from 'lucide-react';
import { ComplianceReport } from '../../types/dashboard';

interface ComplianceCardProps {
  report: ComplianceReport;
}

export const ComplianceCard: React.FC<ComplianceCardProps> = ({ report }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
      <div>
        <div className="font-medium">{report.name}</div>
        <div className="text-sm text-gray-500">{report.date}</div>
      </div>
      <span className="flex items-center text-green-600">
        <Shield className="h-4 w-4 mr-1" />
        {report.status}
      </span>
    </div>
  );
};