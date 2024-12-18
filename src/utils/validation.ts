export const validateModelFile = (file: File): { valid: boolean; error?: string } => {
  const validExtensions = [
    // Deep Learning Formats
    '.h5', '.pb', '.pt', '.pth', '.onnx',
    // Machine Learning Formats
    '.pkl', '.joblib',
    // NLP Model Formats
    '.bin', '.safetensors', '.spacy',
    // Specialized Formats
    '.json', '.ubj', '.jax',
    // Archive Formats
    '.zip', '.tar.gz'
  ];
  
  const maxSize = 500 * 1024 * 1024; // 500MB
  const extension = '.' + file.name.split('.').pop()?.toLowerCase();
  
  if (!validExtensions.includes(extension)) {
    return {
      valid: false,
      error: `Invalid file type. Supported formats: ${validExtensions.join(', ')}`
    };
  }
  
  if (file.size > maxSize) {
    return {
      valid: false,
      error: 'File size too large. Maximum size is 500MB'
    };
  }
  
  return { valid: true };
};

export const validateModelConfig = (config: any): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!config.framework) {
    errors.push('Framework selection is required');
  }
  
  if (!config.name?.trim()) {
    errors.push('Model name is required');
  }
  
  if (!config.version?.trim()) {
    errors.push('Version number is required');
  }
  
  if (config.parameters) {
    if (config.parameters.batchSize < 1 || config.parameters.batchSize > 512) {
      errors.push('Batch size must be between 1 and 512');
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};