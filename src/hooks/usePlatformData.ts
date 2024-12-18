import { useState, useEffect } from 'react';
import { Model } from '../types/model';
import { models } from '../data/models';

export const usePlatformData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<{
    models: Model[];
    stats: {
      totalModels: number;
      activeTests: number;
      complianceRate: number;
      alerts: number;
    };
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        setData({
          models,
          stats: {
            totalModels: models.length,
            activeTests: 3,
            complianceRate: 98.2,
            alerts: 2
          }
        });
      } catch (err) {
        setError('Failed to load platform data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error, data };
};