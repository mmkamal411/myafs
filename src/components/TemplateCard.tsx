import React from 'react';
import { ServiceTemplate } from '../types';
import { Box } from 'lucide-react';

const TemplateCard = ({ template }: { template: ServiceTemplate }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Box className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
          <p className="text-sm text-gray-600">{template.description}</p>
        </div>
      </div>
      
      <div className="mt-4 flex gap-2">
        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
          {template.language}
        </span>
        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
          {template.framework}
        </span>
        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
          {template.type}
        </span>
      </div>
    </div>
  );
};

export default TemplateCard;