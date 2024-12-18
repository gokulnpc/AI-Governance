export interface QualityMetric {
  date: string;
  accuracy: number;
  fairness: number;
  reliability: number;
}

export interface AuditLog {
  time: string;
  user: string;
  action: string;
  model: string;
  hash?: string;
}

export interface QualityTest {
  model: string;
  progress: string;
  tests: string[];
}

export interface ComplianceReport {
  name: string;
  date: string;
  status: string;
}

export interface VerificationMetric {
  metric: string;
  value: string;
}