import { ModelHistory } from '../types/history';

export const modelHistoryData: ModelHistory[] = [
  {
    id: 1,
    name: "Credit Risk Assessment Model",
    version: "2.1.0",
    uploadDate: "2024-03-15",
    profile: {
      type: "Credit Risk Assessment",
      industry: "Financial Services"
    },
    testResults: {
      biasMetrics: [
        {
          category: "Age Group Fairness",
          score: 0.92,
          status: "warning",
          details: "Slight bias detected for applicants over 55 years old"
        },
        {
          category: "Gender Neutrality",
          score: 0.95,
          status: "pass",
          details: "Model demonstrates consistent fairness across gender groups"
        },
        {
          category: "Geographic Distribution",
          score: 0.88,
          status: "warning",
          details: "Lower accuracy observed for rural applicants"
        }
      ],
      complianceChecks: [
        {
          framework: "ECOA",
          status: "compliant",
          details: "Model meets Equal Credit Opportunity Act requirements",
          date: "2024-03-15"
        },
        {
          framework: "FCRA",
          status: "warning",
          details: "Additional documentation needed for Fair Credit Reporting Act compliance",
          date: "2024-03-15"
        }
      ],
      performanceMetrics: [
        {
          metric: "Accuracy",
          value: 0.94,
          threshold: 0.90,
          status: "pass"
        },
        {
          metric: "F1 Score",
          value: 0.92,
          threshold: 0.85,
          status: "pass"
        }
      ]
    },
    recommendations: [
      {
        category: "Age Bias Mitigation",
        severity: "medium",
        finding: "Model shows reduced accuracy for older applicants",
        action: "Implement age-based fairness constraints in model training",
        status: "open"
      },
      {
        category: "Geographic Fairness",
        severity: "medium",
        finding: "Lower performance in rural areas",
        action: "Enhance training data representation for rural applicants",
        status: "in-progress"
      }
    ],
    blockchainVerification: {
      hash: "0x7d9c4f8b3a2e1d6c5b4a3f2e1d8c7b6a5f4e3d2c1",
      timestamp: "2024-03-15T14:30:00Z",
      status: "verified"
    }
  }
];