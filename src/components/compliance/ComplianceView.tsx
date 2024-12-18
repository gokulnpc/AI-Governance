import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ComplianceCard } from './ComplianceCard';
import { complianceReports, verificationMetrics } from '../../data/dashboardData';

export const ComplianceView: React.FC = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Compliance Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complianceReports.map((report, idx) => (
              <ComplianceCard key={idx} report={report} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Verification Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {verificationMetrics.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="font-medium">{item.metric}</span>
                <span className="text-green-600 font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};