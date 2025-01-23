import React from 'react';
import { FolderKanban, Plus } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Website Redesign',
    status: 'In Progress',
    progress: 65,
    team: 'Frontend Team',
    deadline: '2024-04-15'
  },
  {
    id: 2,
    name: 'API Integration',
    status: 'Planning',
    progress: 25,
    team: 'Backend Team',
    deadline: '2024-04-30'
  },
  {
    id: 3,
    name: 'Mobile App',
    status: 'Review',
    progress: 90,
    team: 'Mobile Team',
    deadline: '2024-04-10'
  }
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <FolderKanban className="w-6 h-6 text-purple-600" />
          </div>
          <h1 className="text-2xl font-bold">Projects</h1>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gradient text-white font-medium rounded-xl hover:shadow-md transition-all duration-300">
          <Plus className="w-5 h-5" />
          New Project
        </button>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                {project.status}
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent-gradient rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-gray-600">Team:</span>
                  <span className="ml-2 font-medium">{project.team}</span>
                </div>
                <div>
                  <span className="text-gray-600">Deadline:</span>
                  <span className="ml-2 font-medium">
                    {new Date(project.deadline).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;