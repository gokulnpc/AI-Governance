export interface Test {
  date: string;
  type: string;
  score: number;
  status: string;
}

export interface Model {
  id: number;
  name: string;
  version: string;
  uploadDate: string;
  status: string;
  type: string;
  framework: string;
  hash: string;
  tests: Test[];
}