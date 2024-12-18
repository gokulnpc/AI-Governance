import React from "react";
import { DashboardView } from "../dashboard/DashboardView";
import { UploadSection } from "../upload/UploadSection";
import { ModelsList } from "../models/ModelsList";
import { TestResults } from "../results/TestResults";
import { ComplianceView } from "../compliance/ComplianceView";
import { usePlatform } from "../../context/PlatformContext";

interface PlatformContentProps {
  activeTab: string;
}

export const PlatformContent: React.FC<PlatformContentProps> = ({
  activeTab,
}) => {
  const { selectedModel, setSelectedModel } = usePlatform();

  const content = {
    dashboard: <DashboardView onViewDetails={setSelectedModel} />,
    upload: <UploadSection />,
    models: <ModelsList onSelectModel={setSelectedModel} />,
    results: <TestResults selectedModel={selectedModel} />,
    compliance: <ComplianceView />,
  };

  return (
    <div className="min-h-[600px]">
      {content[activeTab as keyof typeof content]}
    </div>
  );
};
