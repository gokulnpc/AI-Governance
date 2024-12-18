import React from "react";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export const NavLogo: React.FC = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 hover:opacity-90 transition-opacity"
    >
      <Shield className="h-8 w-8 text-blue-600" />
      <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Block Convey
      </span>
    </Link>
  );
};
