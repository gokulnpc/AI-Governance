import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { Shield, AlertTriangle, CheckCircle2, Download } from 'lucide-react';
import { ModelRecommendations, BiasRecommendation } from '../../types/recommendations';

interface RecommendationsReportProps {
  recommendations: ModelRecommendations;
  onDownload?: () => void;
}

export const RecommendationsReport: React.FC<RecommendationsReportProps> = ({
  recommendations,
  onDownload
}) => {
  const getSeverityColor = (severity: BiasRecommendation['severity']) => {
    switch (severity) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'low':
        return 'text-green-600 bg-green-50';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Model Analysis Report
          </div>
          {onDownload && (
            <button
              onClick={onDownload}
              className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Report
            </button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Model Details</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span>{recommendations.modelName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Version:</span>
                  <span>{recommendations.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Profile:</span>
                  <span>{recommendations.profile.type}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium mb-2">Overall Assessment</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Score:</span>
                  <span className="font-medium text-blue-600">
                    {(recommendations.overallScore * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${recommendations.overallScore * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {recommendations.recommendations.map((test, idx) => (
              <div key={idx} className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-gray-50 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {test.status === 'pass' ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      )}
                      <h3 className="font-medium">{test.testName}</h3>
                    </div>
                    <span className={`px-2 py-1 rounded text-sm ${
                      test.status === 'pass' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      Score: {(test.score * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-4">
                  {test.findings.map((finding, findingIdx) => (
                    <div key={findingIdx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{finding.category}</span>
                        <span className={`px-2 py-1 rounded text-xs ${getSeverityColor(finding.severity)}`}>
                          {finding.severity.toUpperCase()} Severity
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{finding.finding}</p>
                      <div className="pl-4 border-l-2 border-blue-200">
                        <p className="text-sm font-medium text-blue-800">Recommendation:</p>
                        <p className="text-sm text-gray-600">{finding.recommendation}</p>
                      </div>
                      {finding.regulatoryImplications && (
                        <div className="flex gap-2">
                          {finding.regulatoryImplications.map((reg, regIdx) => (
                            <span key={regIdx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {reg}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Alert className="bg-blue-50">
            <AlertDescription>
              <div className="text-blue-800">
                <p className="font-medium">Blockchain Verification</p>
                <p className="text-sm mt-1">
                  This report is cryptographically verified on the blockchain with hash:
                  <span className="font-mono text-xs block mt-1">{recommendations.blockchainHash}</span>
                </p>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </CardContent>
    </Card>
  );
};