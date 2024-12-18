export interface Framework {
  id: string;
  name: string;
  category: 'deep-learning' | 'machine-learning' | 'nlp' | 'computer-vision' | 'specialized';
  description: string;
  features: string[];
  modelFormats: string[];
  version?: string;
  website?: string;
}

export interface FrameworkCategory {
  id: 'deep-learning' | 'machine-learning' | 'nlp' | 'computer-vision' | 'specialized';
  name: string;
  description: string;
}

export const frameworkCategories: FrameworkCategory[] = [
  {
    id: 'deep-learning',
    name: 'Deep Learning',
    description: 'Frameworks optimized for neural networks and deep learning architectures'
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    description: 'General-purpose machine learning frameworks and libraries'
  },
  {
    id: 'nlp',
    name: 'Natural Language Processing',
    description: 'Specialized frameworks for text and language processing'
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision',
    description: 'Frameworks focused on image and video processing'
  },
  {
    id: 'specialized',
    name: 'Specialized Frameworks',
    description: 'Domain-specific and specialized AI frameworks'
  }
];