import { ModelRecommendations } from '../types/recommendations';

export const generateRecommendations = (
  modelName: string,
  profile: string,
  testResults: any[]
): ModelRecommendations => {
  const recommendations: ModelRecommendations = {
    modelId: Math.floor(Math.random() * 1000),
    modelName,
    version: "1.0",
    profile: {
      type: profile,
      industry: "Financial Services"
    },
    overallScore: 0.89,
    recommendations: [
      {
        testName: "Demographic Fairness",
        score: 0.92,
        status: "warning",
        findings: [
          {
            category: "Age Group Bias",
            severity: "medium",
            finding: "Model shows slight bias against applicants over 55",
            recommendation: "Implement age-based fairness constraints in model training",
            impact: "May affect loan approval rates for older applicants",
            regulatoryImplications: ["ECOA", "FCRA"]
          },
          {
            category: "Income Level Fairness",
            severity: "low",
            finding: "Minor disparities in approval rates across income brackets",
            recommendation: "Review income normalization techniques",
            impact: "Potential socioeconomic bias in credit decisions"
          }
        ],
        timestamp: new Date().toISOString()
      },
      {
        testName: "Geographic Distribution",
        score: 0.88,
        status: "warning",
        findings: [
          {
            category: "Rural vs Urban Bias",
            severity: "medium",
            finding: "Lower accuracy for rural applicants",
            recommendation: "Enhance training data representation for rural areas",
            impact: "May disadvantage rural loan applicants",
            regulatoryImplications: ["CRA"]
          }
        ],
        timestamp: new Date().toISOString()
      },
      {
        testName: "Protected Characteristics",
        score: 0.95,
        status: "pass",
        findings: [
          {
            category: "Gender Fairness",
            severity: "low",
            finding: "Model maintains gender neutrality in decisions",
            recommendation: "Continue monitoring for gender-based disparities",
            impact: "Minimal impact on gender-based decisions"
          }
        ],
        timestamp: new Date().toISOString()
      }
    ],
    generatedAt: new Date().toISOString(),
    blockchainHash: "0x" + Math.random().toString(16).substr(2, 40)
  };

  return recommendations;
};