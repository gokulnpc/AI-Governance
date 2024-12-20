import React from "react";
import { CheckCircle2 } from "lucide-react";

export const SystemStatus: React.FC = () => {
  const services = [
    { name: "Model Testing", status: "operational", latency: "45ms" },
    { name: "Blockchain Network", status: "operational", latency: "120ms" },
    { name: "Storage System", status: "operational", latency: "65ms" },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-900">System Status</h3>
      <div className="space-y-2">
        {services.map((service) => (
          <div key={service.name} className="bg-white p-3 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">{service.name}</span>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-green-500" />
                <span className="text-xs text-green-600">Operational</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Latency: {service.latency}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
