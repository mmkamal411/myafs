export interface ServiceTemplate {
  id: string;
  name: string;
  description: string;
  type: 'service' | 'website' | 'library';
  language: string;
  framework: string;
}

export interface ServiceCatalogItem {
  id: string;
  name: string;
  description: string;
  owner: string;
  type: string;
  status: 'healthy' | 'warning' | 'error';
  lastDeployed: string;
  repository: string;
}

export interface Documentation {
  id: string;
  title: string;
  category: string;
  lastUpdated: string;
  author: string;
  path: string;
}