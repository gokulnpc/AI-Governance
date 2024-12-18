import React, { useState } from 'react';
import { frameworks } from '../../data/frameworks';
import { frameworkCategories } from '../../types/framework';
import { Globe, ChevronDown, Info } from 'lucide-react';

interface FrameworkSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const FrameworkSelector: React.FC<FrameworkSelectorProps> = ({
  value,
  onChange
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const selectedFramework = frameworks.find(f => f.id === value);
  const filteredFrameworks = selectedCategory
    ? frameworks.filter(f => f.category === selectedCategory)
    : frameworks;

  return (
    <div className="relative">
      <label className="block text-sm font-medium mb-1">
        Framework / Library
      </label>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-2.5 border rounded-lg bg-white hover:bg-gray-50 transition-colors"
      >
        {selectedFramework ? (
          <div className="flex items-center gap-2">
            <span className="font-medium">{selectedFramework.name}</span>
            {selectedFramework.version && (
              <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                v{selectedFramework.version}
              </span>
            )}
          </div>
        ) : (
          <span className="text-gray-500">Select Framework</span>
        )}
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border rounded-lg shadow-lg">
          <div className="p-2 border-b">
            <div className="flex gap-1 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1.5 text-sm rounded-full whitespace-nowrap ${
                  !selectedCategory
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Frameworks
              </button>
              {frameworkCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1.5 text-sm rounded-full whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="max-h-[300px] overflow-y-auto">
            {filteredFrameworks.map(framework => (
              <div
                key={framework.id}
                className="p-3 hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  onChange(framework.id);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{framework.name}</span>
                    {framework.version && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                        v{framework.version}
                      </span>
                    )}
                  </div>
                  {framework.website && (
                    <a
                      href={framework.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 hover:bg-gray-100 rounded"
                      onClick={e => e.stopPropagation()}
                    >
                      <Globe className="h-4 w-4 text-gray-400" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {framework.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {framework.modelFormats.map(format => (
                    <span
                      key={format}
                      className="text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded"
                    >
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {selectedFramework && (
            <div className="p-3 border-t bg-gray-50">
              <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                <Info className="h-4 w-4" />
                <span>Framework Features:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedFramework.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white text-gray-700 px-2 py-1 rounded-full border"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};