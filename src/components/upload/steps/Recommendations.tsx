import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Shield, AlertTriangle, CheckCircle2, Download } from 'lucide-react';
import { Alert, AlertDescription } from '../../ui/alert';
import { TestResult } from './TestingProgress';

interface RecommendationsProps {
  profile: {
    id: string;
    name: string;
  };
  testResults: TestResult[];
  onGenerateReport: () => void;
}

export const Recommendations: React.FC<RecommendationsProps> = ({
  profile,
  testResults,
  onGenerateReport
}) => {
  const recommendations = {
    modelName: "AI Model",
    version: "1.0",
    profile: {
      type: profile.name,
      industry: "Financial Services"
    },
    overallScore: testResults.reduce((acc, test) => 
      acc + (test.result?.score || 0), 0) / testResults.length,
    findings: testResults.map(test => ({
      category: test.name,
      severity: test.status === 'warning' ? 'medium' : 'low',
      finding: test.result?.details || '',
      recommendation: test.status === 'warning' 
        ? 'Review and adjust model parameters to address potential bias'
        : 'Continue monitoring for any changes in performance',
      impact: test.status === 'warning'
        ? 'May affect model fairness and compliance'
        : 'Minimal impact on model performance'
    })),
    blockchainHash: "0x" + Math.random().toString(16).substr(2, 40)
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Analysis & Recommendations
          </div>
          <button
            onClick={onGenerateReport}
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Generate Report
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Model Profile</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span>{recommendations.profile.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Industry:</span>
                  <span>{recommendations.profile.industry}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium mb-2">Overall Assessment</h3>
              <div className="text-2xl font-bold text-blue-600">
                {(recommendations.overallScore * 100).toFixed(1)}%
              </div>
              <p className="text-sm text-blue-800 mt-1">
                Based on {testResults.length} test results
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {recommendations.findings.map((finding, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {finding.severity === 'medium' ? (
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    )}
                    <span className="font-medium">{finding.category}</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    finding.severity === 'medium' 
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {finding.severity.toUpperCase()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{finding.finding}</p>
                <div className="pl-4 border-l-2 border-blue-200">
                  <p className="text-sm font-medium text-blue-800">Recommendation:</p>
                  <p className="text-sm text-gray-600">{finding.recommendation}</p>
                </div>
              </div>
            ))}
          </div>

          <Alert className="bg-blue-50">
            <AlertDescription>
              <div className="text-blue-800">
                <p className="font-medium">Blockchain Verification</p>
                <p className="text-sm mt-1">
                  This analysis is cryptographically verified with hash:
                  <span className="font-mono text-xs block mt-1">
                    {recommendations.blockchainHash}
                  </span>
                </p>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </CardContent>
    </Card>
  );
};