import React from "react";
import { Shield, User, Settings } from "lucide-react";
import { SideNavMenu } from "./SideNavMenu";

export const SideNav: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-18 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-blue-600" />
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto p-4">
        <SideNavMenu />
      </div>
    </div>
  );
};
