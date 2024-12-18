import React from "react";
import { Link } from "react-router-dom";

export const NavActions: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Link
        to="/signup"
        className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
      >
        Sign in
      </Link>
      <Link
        to="/signup"
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity font-medium"
      >
        Request demo
      </Link>
    </div>
  );
};
