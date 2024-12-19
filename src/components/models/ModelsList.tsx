// import React from "react";
// import { ModelCard } from "./ModelCard";
// import { Model } from "../../types/model";
// import { models } from "../../data/models";

// interface ModelsListProps {
//   onSelectModel: (model: Model) => void;
// }

// export const ModelsList: React.FC<ModelsListProps> = ({ onSelectModel }) => {
//   return (
//     <div className="grid gap-4">
//       {models.map((model) => (
//         <ModelCard key={model.id} model={model} onClick={onSelectModel} />
//       ))}
//     </div>
//   );
// };

import React from "react";
import { ModelCard } from "./ModelCard";
import { Model } from "../../types/model";
import { useModels } from "../../hooks/useModels";
import { AlertTriangle } from "lucide-react";

interface ModelsListProps {
  onSelectModel: (model: Model) => void;
}

export const ModelsList: React.FC<ModelsListProps> = ({ onSelectModel }) => {
  const { models } = useModels();

  if (models.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-gray-500">
        <AlertTriangle className="h-12 w-12 text-gray-400 mb-4" />
        <p className="text-lg font-medium mb-2">No Models Found</p>
        <p className="text-sm text-gray-500">
          Upload your first model to get started with quality testing
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {models.map((model) => (
        <ModelCard key={model.id} model={model} onClick={onSelectModel} />
      ))}
    </div>
  );
};
