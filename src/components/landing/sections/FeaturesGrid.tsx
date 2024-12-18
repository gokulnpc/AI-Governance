import React from "react";
import { Shield, Eye, Scale } from "lucide-react";
import { FeatureCard } from "../cards/FeatureCard";

const features = [
  {
    icon: Shield,
    title: "Proactive Risk Shield",
    description:
      "Prevent costly compliance violations and reputational damage with real-time monitoring.",
    bulletPoints: [
      "24/7 automated risk detection",
      "Early warning system",
      "Compliance violation prevention",
      "Reputation protection",
    ],
  },
  {
    icon: Eye,
    title: "Complete Model Visibility",
    description:
      "Get unprecedented visibility into your AI operations with comprehensive monitoring.",
    bulletPoints: [
      "Real-time performance tracking",
      "Bias detection systems",
      "Quality metrics dashboard",
      "Operational insights",
    ],
  },
  {
    icon: Scale,
    title: "Bias Prevention System",
    description:
      "Detect and eliminate bias across multiple dimensions before it impacts decisions.",
    bulletPoints: [
      "Multi-dimensional bias analysis",
      "Demographic fairness testing",
      "Automated bias detection",
      "Mitigation recommendations",
    ],
  },
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Enterprise-Grade Protection for Your AI Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your AI operations with comprehensive monitoring, bias
            detection, and regulatory compliance, all backed by immutable
            blockchain verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
