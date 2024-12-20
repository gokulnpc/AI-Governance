import { Activity } from "../types/activity";
import { generateBlockchainHash } from "../utils/blockchain";

export const recentActivities: Activity[] = [
  {
    id: "1",
    type: "upload",
    modelName: "Customer Churn Predictor v2.1",
    hash: generateBlockchainHash(),
    timestamp: "2024-12-15T14:30:00Z",
    user: "Sarah Chen",
    status: "completed",
    details: "Model uploaded successfully",
  },
  {
    id: "2",
    type: "test",
    modelName: "Customer Churn Predictor v2.1",
    timestamp: "2024-11-15T14:35:00Z",
    user: "System",
    status: "completed",
    details: "Bias testing completed - 98.5% fairness score",
  },
  {
    id: "3",
    type: "verification",
    modelName: "Fraud Detection System v1.5",
    hash: generateBlockchainHash(),
    timestamp: "2024-10-15T13:45:00Z",
    user: "Michael Rodriguez",
    status: "completed",
    details: "Blockchain verification successful",
  },
  {
    id: "4",
    type: "compliance",
    modelName: "Credit Risk Assessment v3.0",
    timestamp: "2024-09-15T13:30:00Z",
    user: "Emma Watson",
    status: "in_progress",
    details: "GDPR compliance check in progress",
  },
  {
    id: "5",
    type: "upload",
    modelName: "Product Recommendation Engine v2.0",
    hash: generateBlockchainHash(),
    timestamp: "2024-08-15T12:15:00Z",
    user: "John Smith",
    status: "completed",
    details: "New model version uploaded",
  },
];
