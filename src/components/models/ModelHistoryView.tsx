import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Shield, AlertTriangle, CheckCircle2, History } from 'lucide-react';
import { ModelHistory } from '../../types/history';
import { Progress } from '../ui/progress';

interface ModelHistoryViewProps {
  model: ModelHistory;
}

export const ModelHistoryView: React.FC<ModelHistoryViewProps> = ({ model }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass':
      case 'compliant':
        return 'text-green-600 bg-green-50';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50';
      case 'fail':
      case 'non-compliant':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Model History & Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Model Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span>{model.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Version:</span>
                    <span>{model.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Upload Date:</span>
                    <span>{model.uploadDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Profile:</span>
                    <span>{model.profile.type}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium mb-2">Blockchain Verification</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-800">
                      {model.blockchainVerification.status === 'verified' ? 'Verified' : 'Pending Verification'}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-gray-600 break-all">
                    {model.blockchainVerification.hash}
                  </div>
                  <div className="text-gray-600">
                    Timestamp: {model.blockchainVerification.timestamp}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Bias Metrics</h3>
              <div className="grid gap-3">
                {model.testResults.biasMetrics.map((metric, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{metric.category}</span>
                      <span className={`px-2 py-1 rounded text-sm ${getStatusColor(metric.status)}`}>
                        {(metric.score * 100).toFixed(1)}%
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{metric.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Compliance Checks</h3>
              <div className="grid gap-3">
                {model.testResults.complianceChecks.map((check, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{check.framework}</span>
                      <span className={`px-2 py-1 rounded text-sm ${getStatusColor(check.status)}`}>
                        {check.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{check.details}</p>
                    <p className="text-xs text-gray-500 mt-1">Checked on: {check.date}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Recommendations</h3>
              <div className="grid gap-3">
                {model.recommendations.map((rec, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {rec.severity === 'high' && <AlertTriangle className="h-4 w-4 text-red-500" />}
                        <span className="font-medium">{rec.category}</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${
                        rec.status === 'resolved' ? 'bg-green-100 text-green-700' :
                        rec.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {rec.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{rec.finding}</p>
                    <div className="pl-4 border-l-2 border-blue-200">
                      <p className="text-sm text-blue-800">Recommended Action:</p>
                      <p className="text-sm text-gray-600">{rec.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};