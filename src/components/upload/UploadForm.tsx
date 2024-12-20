import React, { useState, useRef } from "react";
import { Upload, Loader2, X, FileUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Alert, AlertDescription } from "../ui/alert";
import { FrameworkSelector } from "./FrameworkSelector";
import { validateModelFile } from "../../utils/validation";
import { useModels } from "../../hooks/useModels";
import { generateBlockchainHash } from "../../utils/blockchain";

interface UploadFormData {
  file: File | null;
  name: string;
  version: string;
  framework: string;
  description: string;
}

interface UploadFormProps {
  initialData: UploadFormData;
  onComplete: (data: UploadFormData) => void;
}

export const UploadForm: React.FC<UploadFormProps> = ({
  initialData,
  onComplete,
}) => {
  // const [uploading, setUploading] = useState(false);
  // const [selectedFile, setSelectedFile] = useState<File | null>(
  //   initialData.file
  // );
  // const [formData, setFormData] = useState(initialData);
  // const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(
    initialData.file
  );
  const [formData, setFormData] = useState(initialData);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { addModel } = useModels();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    const validation = validateModelFile(file);

    if (!validation.valid) {
      alert(validation.error);
      return;
    }

    setSelectedFile(file);
    setFormData((prev) => ({ ...prev, file }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!selectedFile) {
  //     alert('Please select a model file to upload');
  //     return;
  //   }

  //   setUploading(true);

  //   try {
  //     await new Promise(resolve => setTimeout(resolve, 1000));
  //     onComplete({ ...formData, file: selectedFile });
  //   } catch (error) {
  //     alert('Error uploading file. Please try again.');
  //   } finally {
  //     setUploading(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a model file to upload");
      return;
    }

    setUploading(true);

    try {
      // Create new model entry
      const newModel = addModel({
        name: formData.name,
        version: formData.version,
        uploadDate: new Date().toISOString().split("T")[0],
        status: "Complete",
        type: selectedFile.type || "Unknown",
        framework: formData.framework,
        hash: generateBlockchainHash(),
        tests: [],
      });
      console.log("New model added:", newModel);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onComplete({ ...formData, file: selectedFile });
    } catch (error) {
      alert("Error uploading file. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFormData((prev) => ({ ...prev, file: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileUp className="h-5 w-5" />
          Upload AI Model
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
              ${
                selectedFile
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 hover:border-blue-500"
              }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept=".h5,.pb,.pt,.onnx,.pkl,.spacy,.bin,.safetensors,.joblib,.json,.ubj,.jax"
              onChange={(e) =>
                e.target.files && handleFileSelect(e.target.files[0])
              }
            />

            {selectedFile ? (
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-600 font-medium">
                  {selectedFile.name}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile();
                  }}
                  className="p-1 hover:bg-green-100 rounded"
                >
                  <X className="h-4 w-4 text-green-600" />
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-lg font-medium">
                  Drag and drop your model file here
                </p>
                <p className="text-sm text-gray-500">
                  or click to browse files
                </p>
                <p className="text-xs text-gray-400">
                  Supported formats: .h5, .pb, .pt, .onnx, .pkl, .spacy, .bin,
                  .safetensors, .joblib, .json, .ubj, .jax
                </p>
                <p className="text-xs text-gray-400">
                  Maximum file size: 100MB
                </p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Model Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter model name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Version
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="e.g., 1.0.0"
                  value={formData.version}
                  onChange={(e) =>
                    setFormData({ ...formData, version: e.target.value })
                  }
                  required
                />
              </div>
              <FrameworkSelector
                value={formData.framework}
                onChange={(value) =>
                  setFormData({ ...formData, framework: value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                className="w-full p-2 border rounded"
                rows={3}
                placeholder="Brief description of the model and its purpose"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              disabled={uploading || !selectedFile}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {uploading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
                  Uploading Model...
                </>
              ) : (
                "Continue to Testing"
              )}
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
