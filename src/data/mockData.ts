import { ServiceTemplate, ServiceCatalogItem, Documentation } from '../types';

export const serviceTemplates: ServiceTemplate[] = [
  {
    id: '1',
    name: 'React Microservice',
    description: 'Production-ready React service with TypeScript and testing setup',
    type: 'service',
    language: 'TypeScript',
    framework: 'React'
  },
  {
    id: '2',
    name: 'Node.js API',
    description: 'RESTful API service with Express and OpenAPI documentation',
    type: 'service',
    language: 'TypeScript',
    framework: 'Express'
  },
  {
    id: '3',
    name: 'Python Data Service',
    description: 'Data processing service with FastAPI and pandas',
    type: 'service',
    language: 'Python',
    framework: 'FastAPI'
  }
];

export const serviceCatalog: ServiceCatalogItem[] = [
  {
    id: '1',
    name: 'User Authentication Service',
    description: 'Handles user authentication and authorization',
    owner: 'Security Team',
    type: 'Microservice',
    status: 'healthy',
    lastDeployed: '2024-03-10T14:30:00Z',
    repository: 'github.com/org/auth-service'
  },
  {
    id: '2',
    name: 'Payment Processing API',
    description: 'Processes customer payments and subscriptions',
    owner: 'Payments Team',
    type: 'API',
    status: 'warning',
    lastDeployed: '2024-03-09T09:15:00Z',
    repository: 'github.com/org/payments-api'
  },
  {
    id: '3',
    name: 'Customer Dashboard',
    description: 'Customer-facing dashboard application',
    owner: 'Frontend Team',
    type: 'Website',
    status: 'error',
    lastDeployed: '2024-03-08T16:45:00Z',
    repository: 'github.com/org/customer-dashboard'
  }
];

export const documentation: Documentation[] = [
  {
    id: '1',
    title: 'Getting Started Guide',
    category: 'Onboarding',
    lastUpdated: '2024-03-10T10:00:00Z',
    author: 'Developer Experience Team',
    path: '/docs/getting-started'
  },
  {
    id: '2',
    title: 'Service Creation Guidelines',
    category: 'Best Practices',
    lastUpdated: '2024-03-09T15:30:00Z',
    author: 'Architecture Team',
    path: '/docs/service-guidelines'
  },
  {
    id: '3',
    title: 'CI/CD Pipeline Documentation',
    category: 'Infrastructure',
    lastUpdated: '2024-03-08T11:20:00Z',
    author: 'DevOps Team',
    path: '/docs/cicd'
  }
];