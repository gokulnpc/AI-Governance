import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { Loader2, CheckCircle2 } from 'lucide-react';

interface StorageConfirmationProps {
  uploadData: {
    file: File | null;
    name: string;
    version: string;
    framework: string;
    description: string;
  };
  testConfig: {
    accuracy: boolean;
    fairness: boolean;
    reliability: boolean;
    threshold: string;
  };
  onComplete: (hash: string) => void;
}

export const StorageConfirmation: React.FC<StorageConfirmationProps> = ({
  uploadData,
  testConfig,
  onComplete
}) => {
  const [uploading, setUploading] = useState(false);
  const [hash, setHash] = useState<string | null>(null);

  const handleConfirm = async () => {
    setUploading(true);
    
    try {
      // Simulate blockchain transaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const transactionHash = '0x' + Array.from(
        {length: 40}, 
        () => Math.floor(Math.random() * 16).toString(16)
      ).join('');
      
      setHash(transactionHash);
      onComplete(transactionHash);
    } catch (error) {
      console.error('Storage error:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5" />
          Confirm and Store
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium mb-2">Model Details</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Name: {uploadData.name}</div>
                <div>Version: {uploadData.version}</div>
                <div>Framework: {uploadData.framework}</div>
                <div>File: {uploadData.file?.name}</div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium mb-2">Test Configuration</h4>
              <div className="space-y-1 text-sm">
                {Object.entries(testConfig).map(([key, value]) => (
                  <div key={key} className="capitalize">
                    {key}: {String(value)}
                  </div>
                ))}
              </div>
            </div>

            {!hash && (
              <button
                onClick={handleConfirm}
                disabled={uploading}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-blue-400 flex items-center justify-center"
              >
                {uploading ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Creating Blockchain Record...
                  </>
                ) : (
                  'Confirm and Store'
                )}
              </button>
            )}
          </div>

          {hash && (
            <Alert className="bg-green-50">
              <AlertDescription>
                <div className="text-green-800">
                  <p className="font-medium">Model uploaded successfully!</p>
                  <p className="text-sm mt-1">Transaction Hash: {hash}</p>
                  <p className="text-xs mt-1">
                    This hash uniquely identifies your model on the Block Convey network
                  </p>
                </div>
              </AlertDescription>
            </Alert>
          )}
        </div>
      </CardContent>
    </Card>
  );
};