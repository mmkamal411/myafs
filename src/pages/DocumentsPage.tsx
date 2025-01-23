import React from 'react';
import { FileText, Download } from 'lucide-react';

const documents = [
  {
    id: 1,
    name: 'Project Proposal.pdf',
    type: 'PDF',
    size: '2.5 MB',
    lastModified: '2024-03-15',
    author: 'John Doe'
  },
  {
    id: 2,
    name: 'Technical Specs.docx',
    type: 'Word',
    size: '1.8 MB',
    lastModified: '2024-03-14',
    author: 'Jane Smith'
  },
  {
    id: 3,
    name: 'Budget Report.xlsx',
    type: 'Excel',
    size: '3.2 MB',
    lastModified: '2024-03-13',
    author: 'Mike Johnson'
  }
];

const DocumentsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-red-100 rounded-lg">
          <FileText className="w-6 h-6 text-red-600" />
        </div>
        <h1 className="text-2xl font-bold">Documents</h1>
      </div>

      <div className="grid gap-4">
        {documents.map((doc) => (
          <div key={doc.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <FileText className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{doc.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{doc.type}</span>
                    <span>{doc.size}</span>
                    <span>By {doc.author}</span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Download className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsPage;