import { Model } from '../types/model';

export const models: Model[] = [
  {
    id: 1,
    name: "Customer Churn Predictor",
    version: "2.1",
    uploadDate: "2024-05-01",
    status: "Testing Complete",
    type: "Classification",
    framework: "TensorFlow",
    hash: "0xae72c...9f43",
    tests: [
      {
        date: "2024-05-01",
        type: "Accuracy Test",
        score: 0.95,
        status: "Passed"
      },
      {
        date: "2024-05-01",
        type: "Bias Check",
        score: 0.92,
        status: "Passed"
      },
      {
        date: "2024-05-01",
        type: "Reliability Test",
        score: 0.94,
        status: "Passed"
      }
    ]
  },
  {
    id: 2,
    name: "Product Recommendation Engine",
    version: "1.5",
    uploadDate: "2024-05-02",
    status: "Testing In Progress",
    type: "Recommendation",
    framework: "PyTorch",
    hash: "0xbd91d...7e21",
    tests: [
      {
        date: "2024-05-02",
        type: "Accuracy Test",
        score: 0.88,
        status: "In Progress"
      }
    ]
  }
];