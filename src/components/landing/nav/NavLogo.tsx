import React from "react";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
export const NavLogo: React.FC = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 hover:opacity-90 transition-opacity"
    >
      <img src={logo} alt="Block Convey" className="h-12 w-25" />
    </Link>
  );
};
