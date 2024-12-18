export interface ModelHistory {
  id: number;
  name: string;
  version: string;
  uploadDate: string;
  profile: {
    type: string;
    industry: string;
  };
  testResults: {
    biasMetrics: {
      category: string;
      score: number;
      status: 'pass' | 'warning' | 'fail';
      details: string;
    }[];
    complianceChecks: {
      framework: string;
      status: 'compliant' | 'warning' | 'non-compliant';
      details: string;
      date: string;
    }[];
    performanceMetrics: {
      metric: string;
      value: number;
      threshold: number;
      status: 'pass' | 'warning' | 'fail';
    }[];
  };
  recommendations: {
    category: string;
    severity: 'high' | 'medium' | 'low';
    finding: string;
    action: string;
    status: 'open' | 'in-progress' | 'resolved';
  }[];
  blockchainVerification: {
    hash: string;
    timestamp: string;
    status: 'verified' | 'pending';
  };
}