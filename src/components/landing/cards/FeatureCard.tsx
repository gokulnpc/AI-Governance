import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bulletPoints: string[];
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  bulletPoints,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      <ul className="space-y-3">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            <span className="text-sm text-gray-700">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
