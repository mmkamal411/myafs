import React from 'react';
import { CheckSquare, Clock, AlertCircle } from 'lucide-react';

const tasks = [
  {
    id: 1,
    title: 'Review Pull Request #123',
    priority: 'High',
    dueDate: '2024-03-20',
    status: 'In Progress'
  },
  {
    id: 2,
    title: 'Update Documentation',
    priority: 'Medium',
    dueDate: '2024-03-22',
    status: 'Todo'
  },
  {
    id: 3,
    title: 'Deploy to Production',
    priority: 'Critical',
    dueDate: '2024-03-19',
    status: 'Review'
  }
];

const TasksPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-pink-100 rounded-lg">
          <CheckSquare className="w-6 h-6 text-pink-600" />
        </div>
        <h1 className="text-2xl font-bold">Tasks</h1>
      </div>

      <div className="grid gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold mb-2">{task.title}</h3>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Due {new Date(task.dueDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <AlertCircle className="w-4 h-4" />
                    <span>{task.priority}</span>
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                task.status === 'In Progress' ? 'bg-blue-100 text-blue-600' :
                task.status === 'Review' ? 'bg-yellow-100 text-yellow-600' :
                'bg-gray-100 text-gray-600'
              }`}>
                {task.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;