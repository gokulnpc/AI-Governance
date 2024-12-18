export const calculateOverallScore = (metrics: { score: number }[]): number => {
  return metrics.reduce((acc, curr) => acc + curr.score, 0) / metrics.length;
};

export const formatPercentage = (value: number): string => {
  return `${(value * 100).toFixed(1)}%`;
};

export const getStatusColor = (status: 'success' | 'warning' | 'error'): string => {
  const colors = {
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600'
  };
  return colors[status];
};