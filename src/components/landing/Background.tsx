import React from "react";
import { BackgroundGradient } from "./background/BackgroundGradient";
import { BackgroundGrid } from "./background/BackgroundGrid";
import { BackgroundEffects } from "./background/BackgroundEffects";

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <BackgroundGradient />
      <BackgroundGrid />
      <BackgroundEffects />
    </div>
  );
};
