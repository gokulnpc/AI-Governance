import React from "react";
import { NavContainer } from "./nav/NavContainer";
import { NavLogo } from "./nav/NavLogo";
import { NavLinks } from "./nav/NavLinks";
import { NavActions } from "./nav/NavActions";

const navItems = [
  {
    label: "Product",
    subitems: ["Features", "Integration", "Security"],
  },
  {
    label: "Solutions",
    subitems: ["Enterprise", "Financial Services", "Healthcare"],
  },
  {
    label: "Resources",
    subitems: ["Documentation", "API Reference", "Guides"],
  },
  {
    label: "Company",
    subitems: ["About", "Blog", "Careers"],
  },
];

export const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <div className="flex items-center justify-between">
        <NavLogo />
        <NavLinks items={navItems} />
        <NavActions />
      </div>
    </NavContainer>
  );
};
