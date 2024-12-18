import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Activity, AlertTriangle, CheckCircle2, Bell } from 'lucide-react';
import { Alert, AlertDescription } from '../../ui/alert';

export const SystemHealth: React.FC = () => {
  const metrics = [
    { name: 'Models Monitored', value: '156', status: 'healthy' },
    { name: 'Compliance Rate', value: '98.2%', status: 'healthy' },
    { name: 'Active Alerts', value: '3', status: 'warning' },
    { name: 'Pending Audits', value: '2', status: 'warning' }
  ];

  const alerts = [
    { type: 'warning', message: 'Bias detected in Credit Risk Model v2.1' },
    { type: 'info', message: 'Scheduled compliance audit due in 5 days' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          System Health & Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            {metrics.map((metric, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{metric.name}</span>
                  {metric.status === 'healthy' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  )}
                </div>
                <div className="text-2xl font-bold">{metric.value}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {alerts.map((alert, idx) => (
              <Alert key={idx} className={alert.type === 'warning' ? 'bg-yellow-50' : 'bg-blue-50'}>
                <AlertDescription className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span className={alert.type === 'warning' ? 'text-yellow-800' : 'text-blue-800'}>
                    {alert.message}
                  </span>
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};