import { Framework } from '../types/framework';

export const frameworks: Framework[] = [
  // Deep Learning Frameworks
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'deep-learning',
    description: 'Open-source deep learning framework by Google Brain',
    features: [
      'End-to-end ML platform',
      'Production-ready deployment',
      'Hardware acceleration',
      'Distributed training'
    ],
    modelFormats: ['.h5', '.pb', '.keras', '.json'],
    version: '2.x',
    website: 'https://tensorflow.org'
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'deep-learning',
    description: 'Dynamic deep learning framework by Meta AI',
    features: [
      'Dynamic computational graphs',
      'Python-first development',
      'Rich ecosystem',
      'Research-friendly'
    ],
    modelFormats: ['.pt', '.pth', '.json'],
    version: '2.x',
    website: 'https://pytorch.org'
  },
  {
    id: 'jax',
    name: 'JAX',
    category: 'deep-learning',
    description: 'High-performance numerical computing and ML research',
    features: [
      'Automatic differentiation',
      'XLA compilation',
      'Functional programming',
      'GPU/TPU support'
    ],
    modelFormats: ['.jax', '.json'],
    version: '0.4.x',
    website: 'https://github.com/google/jax'
  },
  {
    id: 'mxnet',
    name: 'Apache MXNet',
    category: 'deep-learning',
    description: 'Flexible deep learning framework',
    features: [
      'Multiple language support',
      'Hybrid programming model',
      'Distributed training',
      'Model serving'
    ],
    modelFormats: ['.params', '.json'],
    version: '1.x',
    website: 'https://mxnet.apache.org'
  },
  {
    id: 'paddlepaddle',
    name: 'PaddlePaddle',
    category: 'deep-learning',
    description: 'Easy-to-use deep learning platform',
    features: [
      'Industrial deployment',
      'Mobile optimization',
      'Visual development',
      'Pre-trained models'
    ],
    modelFormats: ['.pdmodel', '.json'],
    version: '2.x',
    website: 'https://www.paddlepaddle.org.cn'
  },

  // Machine Learning Frameworks
  {
    id: 'sklearn',
    name: 'scikit-learn',
    category: 'machine-learning',
    description: 'Efficient tools for data analysis',
    features: [
      'Classification',
      'Regression',
      'Clustering',
      'Dimensionality reduction'
    ],
    modelFormats: ['.pkl', '.joblib', '.json'],
    version: '1.x',
    website: 'https://scikit-learn.org'
  },
  {
    id: 'xgboost',
    name: 'XGBoost',
    category: 'machine-learning',
    description: 'Optimized gradient boosting library',
    features: [
      'Gradient boosting',
      'Distributed computing',
      'GPU acceleration',
      'Feature importance'
    ],
    modelFormats: ['.json', '.ubj'],
    version: '2.x',
    website: 'https://xgboost.ai'
  },
  {
    id: 'lightgbm',
    name: 'LightGBM',
    category: 'machine-learning',
    description: 'Light Gradient Boosting Machine',
    features: [
      'Faster training speed',
      'Lower memory usage',
      'Better accuracy',
      'Parallel learning'
    ],
    modelFormats: ['.txt', '.json'],
    version: '3.x',
    website: 'https://lightgbm.readthedocs.io'
  },

  // NLP Frameworks
  {
    id: 'transformers',
    name: 'Hugging Face Transformers',
    category: 'nlp',
    description: 'State-of-the-art Natural Language Processing',
    features: [
      'Pre-trained models',
      'Fine-tuning',
      'Multiple architectures',
      'Easy deployment'
    ],
    modelFormats: ['.bin', '.safetensors', '.json'],
    version: '4.x',
    website: 'https://huggingface.co'
  },
  {
    id: 'spacy',
    name: 'spaCy',
    category: 'nlp',
    description: 'Industrial-strength NLP',
    features: [
      'Named Entity Recognition',
      'POS Tagging',
      'Dependency Parsing',
      'Word Vectors'
    ],
    modelFormats: ['.spacy', '.json'],
    version: '3.x',
    website: 'https://spacy.io'
  },
  {
    id: 'stanza',
    name: 'Stanza',
    category: 'nlp',
    description: 'Stanford NLP toolkit',
    features: [
      'Multi-language support',
      'Neural pipeline',
      'Biomedical domain',
      'Python interface'
    ],
    modelFormats: ['.pt', '.json'],
    version: '1.x',
    website: 'https://stanfordnlp.github.io/stanza'
  },

  // Computer Vision Frameworks
  {
    id: 'detectron2',
    name: 'Detectron2',
    category: 'computer-vision',
    description: 'Meta AI computer vision platform',
    features: [
      'Object Detection',
      'Instance Segmentation',
      'Keypoint Detection',
      'Panoptic Segmentation'
    ],
    modelFormats: ['.pth', '.pkl', '.json'],
    version: '0.6',
    website: 'https://github.com/facebookresearch/detectron2'
  },
  {
    id: 'mmdetection',
    name: 'MMDetection',
    category: 'computer-vision',
    description: 'OpenMMLab Detection Toolbox',
    features: [
      'Object Detection',
      'Instance Segmentation',
      'Multiple architectures',
      'Pre-trained models'
    ],
    modelFormats: ['.pth', '.json'],
    version: '3.x',
    website: 'https://github.com/open-mmlab/mmdetection'
  },
  {
    id: 'yolov5',
    name: 'YOLOv5',
    category: 'computer-vision',
    description: 'Real-time object detection',
    features: [
      'Fast inference',
      'Easy training',
      'Mobile deployment',
      'Multiple formats'
    ],
    modelFormats: ['.pt', '.onnx', '.json'],
    version: '7.x',
    website: 'https://github.com/ultralytics/yolov5'
  }
];