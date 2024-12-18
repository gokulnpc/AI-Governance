import { QualityMetric, AuditLog, QualityTest, ComplianceReport, VerificationMetric } from '../types/dashboard';

export const qualityData: QualityMetric[] = [
  { date: '2024-01', accuracy: 0.95, fairness: 0.92, reliability: 0.94 },
  { date: '2024-02', accuracy: 0.96, fairness: 0.93, reliability: 0.95 },
  { date: '2024-03', accuracy: 0.94, fairness: 0.95, reliability: 0.93 }
];

export const auditLogs: AuditLog[] = [
  { time: "2024-05-02 10:30", user: "John Smith", action: "Quality Test", model: "Churn Predictor v2" },
  { time: "2024-05-02 09:45", user: "Sarah Lee", action: "Bias Check", model: "Recommendation Engine v1" },
  { time: "2024-05-02 09:15", user: "Mike Johnson", action: "Model Upload", model: "Sentiment Analyzer v3" }
];

export const qualityTests: QualityTest[] = [
  { model: "Customer Churn Predictor v2.1", progress: "85%", tests: ["Accuracy", "Bias", "Reliability"] },
  { model: "Fraud Detection System v1.5", progress: "92%", tests: ["Precision", "Recall", "F1 Score"] },
  { model: "Product Recommendation v3.0", progress: "78%", tests: ["Coverage", "Diversity", "Relevance"] }
];

export const complianceReports: ComplianceReport[] = [
  { name: "Monthly Quality Assessment", date: "2024-05-01", status: "Verified" },
  { name: "Bias Audit Report", date: "2024-04-15", status: "Verified" },
  { name: "Model Performance Review", date: "2024-04-01", status: "Verified" }
];

export const verificationMetrics: VerificationMetric[] = [
  { metric: "Test Results Verified", value: "100%" },
  { metric: "Audit Trail Complete", value: "100%" },
  { metric: "Data Integrity", value: "100%" }
];