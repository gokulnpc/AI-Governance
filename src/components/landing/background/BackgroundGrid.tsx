import React from "react";

export const BackgroundGrid: React.FC = () => {
  return (
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }}
    />
  );
};
