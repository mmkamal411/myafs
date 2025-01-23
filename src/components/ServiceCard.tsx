import React from 'react';
import { ServiceCatalogItem } from '../types';
import { AlertCircle, CheckCircle2, AlertTriangle } from 'lucide-react';

const StatusIcon = ({ status }: { status: ServiceCatalogItem['status'] }) => {
  switch (status) {
    case 'healthy':
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    case 'error':
      return <AlertCircle className="w-5 h-5 text-red-500" />;
  }
};

const ServiceCard = ({ service }: { service: ServiceCatalogItem }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{service.description}</p>
        </div>
        <StatusIcon status={service.status} />
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-gray-500">Owner</p>
          <p className="text-sm font-medium">{service.owner}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Type</p>
          <p className="text-sm font-medium">{service.type}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Last Deployed</p>
          <p className="text-sm font-medium">
            {new Date(service.lastDeployed).toLocaleDateString()}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Repository</p>
          <a
            href={`https://${service.repository}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            {service.repository.split('/').slice(-1)[0]}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;