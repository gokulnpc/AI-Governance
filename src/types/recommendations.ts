export interface BiasRecommendation {
  category: string;
  severity: 'high' | 'medium' | 'low';
  finding: string;
  recommendation: string;
  impact: string;
  regulatoryImplications?: string[];
}

export interface TestRecommendation {
  testName: string;
  score: number;
  status: 'pass' | 'warning' | 'fail';
  findings: BiasRecommendation[];
  timestamp: string;
}

export interface ModelRecommendations {
  modelId: number;
  modelName: string;
  version: string;
  profile: {
    type: string;
    industry: string;
  };
  overallScore: number;
  recommendations: TestRecommendation[];
  generatedAt: string;
  blockchainHash: string;
}