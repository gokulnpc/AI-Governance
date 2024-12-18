import React from "react";

export const NavContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[1200px] max-w-[90%]">
      <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg">
        <div className="px-6 py-4">{children}</div>
      </div>
    </nav>
  );
};
