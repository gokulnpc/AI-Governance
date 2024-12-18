import React, { useState } from 'react';
import { UploadForm } from './UploadForm';
import { ModelProfileSelection } from './steps/ModelProfileSelection';
import { TestingProgress } from './steps/TestingProgress';
import { Recommendations } from './steps/Recommendations';
import { Settings, Database, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert';

interface UploadStepsProps {
  onComplete: () => void;
}

export const UploadSteps: React.FC<UploadStepsProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadData, setUploadData] = useState({
    file: null as File | null,
    name: '',
    version: '',
    framework: '',
    description: ''
  });
  const [selectedProfile, setSelectedProfile] = useState<{
    id: string;
    name: string;
    description: string;
    requirements: string[];
  } | null>(null);
  const [testResults, setTestResults] = useState<any[]>([]);
  const [transitionAlert, setTransitionAlert] = useState('');

  const handleUploadComplete = (data: typeof uploadData) => {
    setUploadData(data);
    setTransitionAlert('Model uploaded successfully! Now select a testing profile.');
    setTimeout(() => {
      setCurrentStep(2);
      setTransitionAlert('');
    }, 1500);
  };

  const handleProfileSelect = (profile: typeof selectedProfile) => {
    setSelectedProfile(profile);
    setTransitionAlert('Profile selected! Starting automated tests...');
    setTimeout(() => {
      setCurrentStep(3);
      setTransitionAlert('');
    }, 1500);
  };

  const handleTestingComplete = (results: any[]) => {
    setTestResults(results);
    setTransitionAlert('Testing complete! Generating recommendations...');
    setTimeout(() => {
      setCurrentStep(4);
      setTransitionAlert('');
    }, 1500);
  };

  const handleGenerateReport = () => {
    setTransitionAlert('Generating comprehensive report...');
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Settings className="h-5 w-5 text-blue-500" />;
      case 2:
        return <Database className="h-5 w-5 text-blue-500" />;
      case 3:
        return <AlertTriangle className="h-5 w-5 text-blue-500" />;
      case 4:
        return <CheckCircle2 className="h-5 w-5 text-blue-500" />;
      default:
        return null;
    }
  };

  const getStepName = (step: number) => {
    switch (step) {
      case 1:
        return 'Model Upload';
      case 2:
        return 'Profile Selection';
      case 3:
        return 'Testing Progress';
      case 4:
        return 'Recommendations';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-6">
      {transitionAlert && (
        <Alert className="bg-blue-50">
          <AlertDescription className="text-blue-800">
            {transitionAlert}
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-4">
        {currentStep === 1 && (
          <UploadForm 
            initialData={uploadData}
            onComplete={handleUploadComplete}
          />
        )}
        
        {currentStep === 2 && (
          <ModelProfileSelection
            onProfileSelect={handleProfileSelect}
          />
        )}
        
        {currentStep === 3 && selectedProfile && (
          <TestingProgress
            profile={selectedProfile}
            onComplete={handleTestingComplete}
          />
        )}

        {currentStep === 4 && selectedProfile && (
          <Recommendations
            profile={selectedProfile}
            testResults={testResults}
            onGenerateReport={handleGenerateReport}
          />
        )}
      </div>

      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2">
          {getStepIcon(currentStep)}
          <span className="text-sm font-medium">
            Step {currentStep} of 4: {getStepName(currentStep)}
          </span>
        </div>
        <div className="text-sm text-gray-500">
          {Math.round((currentStep / 4) * 100)}% Complete
        </div>
      </div>
    </div>
  );
};