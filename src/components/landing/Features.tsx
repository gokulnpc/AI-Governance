import React from "react";
import { Shield, Database, Scale, Eye, Lock, Zap } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Proactive Risk Shield",
      description:
        "Prevent costly compliance violations and reputational damage with real-time risk monitoring and automated alerts.",
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "Complete Model Visibility",
      description:
        "Get unprecedented visibility into your AI operations with our comprehensive monitoring and tracking system.",
    },
    {
      icon: <Scale className="h-8 w-8 text-blue-600" />,
      title: "Bias Prevention System",
      description:
        "Detect and eliminate bias across demographic, geographic, and socioeconomic dimensions before it impacts decisions.",
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: "Regulatory Compliance",
      description:
        "Stay ahead of GDPR, FCRA, ECOA, and other regulations with automated compliance checks and documentation.",
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Immutable Audit Trail",
      description:
        "Maintain complete accountability with our blockchain-backed record keeping system.",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Rapid Response System",
      description:
        "Identify and address issues in real-time with automated alerts and mitigation recommendations.",
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Enterprise-Grade Protection for Your AI Systems
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Secure your AI operations with comprehensive monitoring, bias
            detection, and regulatory compliance, all backed by immutable
            blockchain verification.
          </p>
        </div>
        <div className="mt-12 mb-8 p-8 bg-blue-50 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-black-800 flex items-center justify-center gap-2">
            <Lock className="h-8 w-8 text-blue-600" />
            Blockchain-Verified Security
          </h3>

          <h3 className="text-xl font-semibold mb-4"></h3>
          <p className="text-gray-600">
            Every model check, test result, and compliance verification is
            cryptographically secured on the Block Convey network, ensuring
            complete accountability and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-2 inline-block bg-blue-100 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Why AI Governance Matters
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="font-medium text-blue-800 text-lg">
                Protect Your Investment
              </h4>
              <p className="text-gray-600">
                Safeguard your AI systems from costly compliance violations and
                reputational damage with proactive monitoring and risk
                detection.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-blue-800 text-lg">Build Trust</h4>
              <p className="text-gray-600">
                Demonstrate commitment to ethical AI practices with transparent
                operations and comprehensive audit trails.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-blue-800 text-lg">
                Stay Compliant
              </h4>
              <p className="text-gray-600">
                Navigate complex regulatory requirements with automated
                compliance checks and detailed documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
