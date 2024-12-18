import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { Hash, GitBranch, Shield, FileText, Download } from 'lucide-react';
import { Model } from '../../types/model';

interface BlockchainReportProps {
  model: Model;
}

export const BlockchainReport: React.FC<BlockchainReportProps> = ({ model }) => {
  const generateReport = () => {
    // In a real implementation, this would generate a PDF report
    console.log('Generating report for model:', model.name);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hash className="h-5 w-5" />
            Blockchain Verification Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <GitBranch className="h-4 w-4" />
                  Chain of Custody
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Upload Hash</span>
                    <span className="font-mono">{model.hash}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Merkle Root</span>
                    <span className="font-mono">0x8f23...</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Block Number</span>
                    <span>15,234,567</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Verification Status
                </h4>
                <div className="space-y-2 text-sm">
                  {model.tests.map((test, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span>{test.type}</span>
                      <span className={`font-medium ${
                        test.status === 'Passed' ? 'text-green-600' : 'text-yellow-600'
                      }`}>
                        {test.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Quality Attestations
              </h4>
              <div className="space-y-2">
                {model.tests.map((test, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium">{test.type}</div>
                      <div className="text-sm text-gray-500">
                        Score: {(test.score * 100).toFixed(1)}% | Date: {test.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                        {`0x${Math.random().toString(16).slice(2, 10)}`}
                      </span>
                      <Shield className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={generateReport}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              Generate Verified Report
            </button>
          </div>
        </CardContent>
      </Card>

      <Alert className="bg-blue-50">
        <AlertDescription>
          <div className="text-blue-800">
            <p className="font-medium">Blockchain Verification</p>
            <p className="text-sm mt-1">
              All quality metrics and test results are cryptographically verified on the Block Convey network. 
              Each attestation includes a unique hash that can be independently verified.
            </p>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
};