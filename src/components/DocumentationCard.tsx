import React from 'react';
import { Documentation } from '../types';
import { FileText } from 'lucide-react';

const DocumentationCard = ({ doc }: { doc: Documentation }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-purple-100 rounded-lg">
          <FileText className="w-6 h-6 text-purple-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{doc.title}</h3>
          <p className="text-sm text-gray-500 mt-1">
            Last updated by {doc.author} on{' '}
            {new Date(doc.lastUpdated).toLocaleDateString()}
          </p>
          
          <div className="mt-3">
            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
              {doc.category}
            </span>
          </div>
          
          <a
            href={doc.path}
            className="mt-4 inline-flex items-center text-sm text-purple-600 hover:text-purple-800"
          >
            View Documentation →
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocumentationCard;