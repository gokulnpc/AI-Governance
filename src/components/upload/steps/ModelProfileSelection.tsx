import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  Shield,
  CreditCard,
  LineChart,
  Briefcase,
  AlertTriangle,
  Lock,
} from "lucide-react";

interface Profile {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  requirements: string[];
  riskLevel: "high" | "medium" | "low";
  regulatoryFrameworks: string[];
}

// const profiles: Profile[] = [
//   {
//     id: 'credit',
//     name: 'Credit Risk Assessment',
//     description: 'Models for credit scoring and loan approval decisions',
//     icon: CreditCard,
//     riskLevel: 'high',
//     regulatoryFrameworks: ['FCRA', 'ECOA', 'GDPR'],
//     requirements: [
//       'Equal treatment across demographic groups',
//       'Transparent decision rationale',
//       'Historical bias mitigation',
//       'Income-based fairness',
//       'Protected class variable handling'
//     ]
//   },
//   {
//     id: 'financial',
//     name: 'Financial Advisory',
//     description: 'Investment and financial planning recommendation systems',
//     icon: LineChart,
//     riskLevel: 'medium',
//     regulatoryFrameworks: ['SEC Guidelines', 'MiFID II'],
//     requirements: [
//       'Risk tolerance assessment',
//       'Age-appropriate recommendations',
//       'Socioeconomic fairness',
//       'Clear risk communication',
//       'Investment suitability checks'
//     ]
//   },
//   {
//     id: 'insurance',
//     name: 'Insurance Claims',
//     description: 'Automated claims processing and risk assessment',
//     icon: Shield,
//     riskLevel: 'high',
//     regulatoryFrameworks: ['HIPAA', 'State Insurance Regulations'],
//     requirements: [
//       'Geographic fairness',
//       'Demographic neutrality',
//       'Consistent evaluation criteria',
//       'Explainable decisions',
//       'Protected health information handling'
//     ]
//   }
// ];

const profiles: Profile[] = [
  {
    id: "credit",
    name: "Credit Risk Assessment",
    description: "Models for credit scoring and loan approval decisions",
    icon: CreditCard,
    riskLevel: "high",
    regulatoryFrameworks: ["FCRA", "ECOA", "GDPR"],
    requirements: [
      "Equal treatment across demographic groups",
      "Transparent decision rationale",
      "Historical bias mitigation",
      "Income-based fairness",
      "Protected class variable handling",
    ],
  },
  {
    id: "financial",
    name: "Financial Advisory",
    description: "Investment and financial planning recommendation systems",
    icon: LineChart,
    riskLevel: "medium",
    regulatoryFrameworks: ["SEC Guidelines", "MiFID II"],
    requirements: [
      "Risk tolerance assessment",
      "Age-appropriate recommendations",
      "Socioeconomic fairness",
      "Clear risk communication",
      "Investment suitability checks",
    ],
  },
  {
    id: "insurance",
    name: "Insurance Claims",
    description: "Automated claims processing and risk assessment",
    icon: Shield,
    riskLevel: "high",
    regulatoryFrameworks: ["HIPAA", "State Insurance Regulations"],
    requirements: [
      "Geographic fairness",
      "Demographic neutrality",
      "Consistent evaluation criteria",
      "Explainable decisions",
      "Protected health information handling",
    ],
  },
  {
    id: "fraud",
    name: "Fraud Detection Governance",
    description: "Systems for detecting and preventing fraudulent activities",
    icon: Lock,
    riskLevel: "high",
    regulatoryFrameworks: ["AML", "GDPR", "CFT"],
    requirements: [
      "Anomaly detection accuracy",
      "Bias minimization in flagged cases",
      "Real-time monitoring capabilities",
      "Data privacy safeguards",
      "Transparent and explainable alerts",
    ],
  },
];

interface ModelProfileSelectionProps {
  onProfileSelect: (profile: Profile) => void;
}

export const ModelProfileSelection: React.FC<ModelProfileSelectionProps> = ({
  onProfileSelect,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          Select Model Application Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-yellow-50 rounded-lg flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1" />
            <div>
              <p className="font-medium text-yellow-800">Important Notice</p>
              <p className="text-sm text-yellow-700">
                The selected profile will determine the specific bias testing
                scenarios and regulatory compliance checks applied to your
                model.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {profiles.map((profile) => {
              const Icon = profile.icon;
              return (
                <div
                  key={profile.id}
                  onClick={() => onProfileSelect(profile)}
                  className="p-4 border rounded-lg hover:border-blue-500 cursor-pointer transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{profile.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {profile.description}
                      </p>

                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium mb-2">
                            Testing Requirements:
                          </h4>
                          <div className="space-y-1">
                            {profile.requirements.map((req, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-sm text-gray-600"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                {req}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium mb-2">
                            Regulatory Frameworks:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {profile.regulatoryFrameworks.map(
                              (framework, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                                >
                                  {framework}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
