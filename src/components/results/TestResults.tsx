import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Model } from '../../types/model';
import { BlockchainReport } from '../blockchain/BlockchainReport';
import { Alert, AlertDescription } from '../ui/alert';
import { FileBarChart, AlertTriangle, CheckCircle2, TrendingUp } from 'lucide-react';
import { ScenarioBreakdown } from '../dashboard/ScenarioBreakdown';
import { Progress } from '../ui/progress';

interface TestResultsProps {
  selectedModel: Model | null;
}

export const TestResults: React.FC<TestResultsProps> = ({ selectedModel }) => {
  if (!selectedModel) {
    return (
      <div className="text-center text-gray-500 py-12">
        Select a model to view test results and blockchain verification
      </div>
    );
  }

  const testData = {
    accuracy: {
      score: 0.95,
      metrics: [
        { name: 'Precision', value: 0.94 },
        { name: 'Recall', value: 0.96 },
        { name: 'F1 Score', value: 0.95 },
        { name: 'AUC-ROC', value: 0.97 }
      ]
    },
    robustness: {
      score: 0.92,
      tests: [
        { name: 'Adversarial Attack', status: 'pass', score: 0.93 },
        { name: 'Noise Tolerance', status: 'pass', score: 0.91 },
        { name: 'Edge Cases', status: 'warning', score: 0.88 }
      ]
    },
    fairness: {
      score: 0.94,
      dimensions: [
        { name: 'Gender', score: 0.95, status: 'pass' },
        { name: 'Age', score: 0.92, status: 'pass' },
        { name: 'Ethnicity', score: 0.94, status: 'pass' },
        { name: 'Location', score: 0.91, status: 'warning' }
      ]
    },
    performance: {
      score: 0.96,
      metrics: [
        { name: 'Latency', value: '45ms', status: 'pass' },
        { name: 'Throughput', value: '1200 req/s', status: 'pass' },
        { name: 'Memory Usage', value: '2.4GB', status: 'pass' }
      ]
    }
  };

  const scenarioData = [
    {
      scenario: "Production",
      accuracy: 0.95,
      fairness: 0.94,
      reliability: 0.93
    },
    {
      scenario: "Edge Cases",
      accuracy: 0.88,
      fairness: 0.90,
      reliability: 0.87
    },
    {
      scenario: "Stress Test",
      accuracy: 0.92,
      fairness: 0.91,
      reliability: 0.94
    }
  ];

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileBarChart className="h-5 w-5" />
              Test Results Overview
            </div>
            <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Version {selectedModel.version}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4 mb-6">
            {Object.entries(testData).map(([key, data]) => (
              <div key={key} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium capitalize">{key}</span>
                  <span className={`text-sm font-medium ${
                    data.score >= 0.95 ? 'text-green-600' :
                    data.score >= 0.90 ? 'text-blue-600' : 'text-yellow-600'
                  }`}>
                    {(data.score * 100).toFixed(1)}%
                  </span>
                </div>
                <Progress value={data.score * 100} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Detailed Metrics */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Detailed Metrics</h3>
              <div className="space-y-3">
                {testData.accuracy.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">{metric.name}</span>
                    <span className="text-sm font-medium">{(metric.value * 100).toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Robustness Tests */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Robustness Tests</h3>
              <div className="space-y-3">
                {testData.robustness.tests.map((test, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      {test.status === 'pass' ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      )}
                      <span className="text-sm">{test.name}</span>
                    </div>
                    <span className={`text-sm font-medium ${
                      test.status === 'pass' ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {(test.score * 100).toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fairness Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Fairness Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            {testData.fairness.dimensions.map((dim, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">{dim.name} Fairness</span>
                  {dim.status === 'pass' ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  )}
                </div>
                <Progress value={dim.score * 100} />
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-gray-600">Score</span>
                  <span className="font-medium">{(dim.score * 100).toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {testData.performance.metrics.map((metric, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{metric.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    metric.status === 'pass' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {metric.status.toUpperCase()}
                  </span>
                </div>
                <div className="text-2xl font-bold">{metric.value}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Scenario Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Scenario Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ScenarioBreakdown data={scenarioData} />
        </CardContent>
      </Card>

      {/* Blockchain Verification */}
      <BlockchainReport model={selectedModel} />
    </div>
  );
};