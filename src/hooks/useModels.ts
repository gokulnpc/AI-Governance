import { useState, useEffect } from "react";
import { Model } from "../types/model";

const STORAGE_KEY = "block_convey_models";

export const useModels = () => {
  // Initialize state from localStorage or default to empty array
  const [models, setModels] = useState<Model[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  // Persist models to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(models));
  }, [models]);

  const addModel = (model: Omit<Model, "id">) => {
    const newModel: Model = {
      ...model,
      id: Date.now(), // Generate unique ID based on timestamp
    };
    setModels((prev) => [newModel, ...prev]);
    return newModel;
  };

  const updateModel = (id: number, updates: Partial<Model>) => {
    setModels((prev) =>
      prev.map((model) => (model.id === id ? { ...model, ...updates } : model))
    );
  };

  const deleteModel = (id: number) => {
    setModels((prev) => prev.filter((model) => model.id !== id));
  };

  return {
    models,
    addModel,
    updateModel,
    deleteModel,
  };
};
