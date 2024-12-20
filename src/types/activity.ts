export interface Activity {
  id: string;
  type: "upload" | "test" | "verification" | "compliance";
  modelName: string;
  hash?: string;
  timestamp: string;
  user: string;
  status: "completed" | "in_progress" | "failed";
  details?: string;
}
