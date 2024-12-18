import React from "react";
import { ChevronDown } from "lucide-react";

interface NavLinksProps {
  items: Array<{
    label: string;
    subitems: string[];
  }>;
}

export const NavLinks: React.FC<NavLinksProps> = ({ items }) => {
  return (
    <div className="hidden md:flex items-center gap-8">
      {items.map((item) => (
        <NavDropdown
          key={item.label}
          label={item.label}
          items={item.subitems}
        />
      ))}
    </div>
  );
};

const NavDropdown: React.FC<{ label: string; items: string[] }> = ({
  label,
  items,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 font-medium"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {label}
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 transform origin-top transition-all"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
