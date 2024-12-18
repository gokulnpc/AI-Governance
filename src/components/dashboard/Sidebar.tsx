import React from 'react';
import { Eye, BarChart2, FileText, Scale, Shield, Headphones, Users } from 'lucide-react';

const menuItems = [
  { icon: Eye, label: 'Monitoring', active: true },
  { icon: BarChart2, label: 'Analytics' },
  { icon: FileText, label: 'Explainability' },
  { icon: Scale, label: 'Fairness' },
  { icon: Shield, label: 'Security and compliance' },
  { icon: Headphones, label: 'Enablement and support' },
  { icon: Users, label: 'Expert services' },
];

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="space-y-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              item.active 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};