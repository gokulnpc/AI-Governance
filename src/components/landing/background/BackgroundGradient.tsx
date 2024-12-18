import React from "react";

export const BackgroundGradient: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
    </>
  );
};
