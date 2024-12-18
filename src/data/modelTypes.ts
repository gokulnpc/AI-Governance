import { Brain, Network, BarChart, Image, MessageSquare } from 'lucide-react';

export const modelTypes = [
  {
    id: 'neural-network',
    name: 'Neural Network',
    icon: Brain,
    description: 'Deep learning models with multiple layers',
    frameworks: ['tensorflow', 'pytorch', 'jax']
  },
  {
    id: 'transformer',
    name: 'Transformer',
    icon: Network,
    description: 'Attention-based models for sequence data',
    frameworks: ['transformers', 'tensorflow', 'pytorch']
  },
  {
    id: 'statistical',
    name: 'Statistical Model',
    icon: BarChart,
    description: 'Traditional ML algorithms and statistical models',
    frameworks: ['sklearn', 'xgboost']
  },
  {
    id: 'computer-vision',
    name: 'Vision Model',
    icon: Image,
    description: 'Models specialized for image and video processing',
    frameworks: ['detectron2', 'mmdetection']
  },
  {
    id: 'nlp',
    name: 'Language Model',
    icon: MessageSquare,
    description: 'Natural language processing and generation',
    frameworks: ['transformers', 'spacy']
  }
];