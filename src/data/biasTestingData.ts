export const biasTestingScenarios = {
  modelName: "Customer Churn Predictor v2.1",
  scenarios: [
    {
      name: "Demographic Fairness",
      metrics: [
        {
          category: "Gender Balance",
          score: 0.92,
          status: "pass",
          description: "Model shows consistent performance across gender groups with minimal disparate impact."
        },
        {
          category: "Age Distribution",
          score: 0.88,
          status: "warning",
          description: "Slight bias detected in predictions for age groups 55+. Monitoring recommended."
        },
        {
          category: "Ethnic Diversity",
          score: 0.95,
          status: "pass",
          description: "Equal odds ratio maintained across ethnic groups."
        }
      ],
      overallScore: 0.92
    },
    {
      name: "Geographic Distribution",
      metrics: [
        {
          category: "Urban vs Rural",
          score: 0.85,
          status: "warning",
          description: "Model shows slightly lower accuracy for rural customers. Additional training data recommended."
        },
        {
          category: "Regional Balance",
          score: 0.94,
          status: "pass",
          description: "Consistent performance across different regions."
        }
      ],
      overallScore: 0.89
    },
    {
      name: "Socioeconomic Factors",
      metrics: [
        {
          category: "Income Levels",
          score: 0.91,
          status: "pass",
          description: "Balanced predictions across income brackets."
        },
        {
          category: "Education Levels",
          score: 0.93,
          status: "pass",
          description: "No significant bias detected across education levels."
        }
      ],
      overallScore: 0.92
    }
  ]
};

export const scenarioBreakdownData = [
  {
    scenario: "Demographic",
    accuracy: 0.92,
    fairness: 0.89,
    reliability: 0.94
  },
  {
    scenario: "Geographic",
    accuracy: 0.88,
    fairness: 0.92,
    reliability: 0.90
  },
  {
    scenario: "Socioeconomic",
    accuracy: 0.91,
    fairness: 0.93,
    reliability: 0.89
  }
];