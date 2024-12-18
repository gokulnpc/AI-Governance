import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Progress } from '../../ui/progress';
import { Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';

export interface TestResult {
  name: string;
  status: 'pending' | 'running' | 'complete' | 'warning';
  progress: number;
  result?: {
    score: number;
    details: string;
  };
}

interface TestingProgressProps {
  profile: {
    id: string;
    name: string;
  };
  onComplete: (results: TestResult[]) => void;
}

export const TestingProgress: React.FC<TestingProgressProps> = ({ 
  profile,
  onComplete
}) => {
  const [tests, setTests] = useState<TestResult[]>([
    { name: 'Bias Detection', status: 'pending', progress: 0 },
    { name: 'Fairness Analysis', status: 'pending', progress: 0 },
    { name: 'Regulatory Compliance', status: 'pending', progress: 0 },
    { name: 'Performance Stability', status: 'pending', progress: 0 }
  ]);

  useEffect(() => {
    const runTests = async () => {
      const updatedTests: TestResult[] = [];

      for (let i = 0; i < tests.length; i++) {
        // Update test to running
        setTests(prev => prev.map((test, idx) => 
          idx === i ? { ...test, status: 'running' } : test
        ));

        // Simulate test progress
        for (let progress = 0; progress <= 100; progress += 10) {
          await new Promise(resolve => setTimeout(resolve, 300));
          setTests(prev => prev.map((test, idx) => 
            idx === i ? { ...test, progress } : test
          ));
        }

        // Complete test with results
        const status = Math.random() > 0.7 ? 'warning' : 'complete';
        const result = {
          score: 0.85 + Math.random() * 0.1,
          details: status === 'warning' 
            ? 'Some potential issues detected that require attention'
            : 'Test completed successfully with good results'
        };

        const updatedTest = {
          ...tests[i],
          status,
          progress: 100,
          result
        };

        updatedTests.push(updatedTest);
        setTests(prev => prev.map((test, idx) => 
          idx === i ? updatedTest : test
        ));
      }

      // Notify completion with final results
      setTimeout(() => {
        onComplete(updatedTests);
      }, 1000);
    };

    runTests();
  }, []);

  const getStatusIcon = (status: TestResult['status']) => {
    switch (status) {
      case 'running':
        return <Loader2 className="h-5 w-5 animate-spin text-blue-500" />;
      case 'complete':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Running Tests for {profile.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {tests.map((test, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getStatusIcon(test.status)}
                  <span className="font-medium">{test.name}</span>
                </div>
                <span className="text-sm text-gray-500">
                  {test.progress}%
                </span>
              </div>
              <Progress value={test.progress} />
              {test.result && (
                <div className={`text-sm ${
                  test.status === 'warning' ? 'text-yellow-600' : 'text-green-600'
                }`}>
                  Score: {(test.result.score * 100).toFixed(1)}% - {test.result.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};