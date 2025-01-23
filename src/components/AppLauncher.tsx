import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutGrid, FolderKanban, Calendar, 
  MessageSquare, FileText, BarChart2, 
  CheckSquare, Settings, HelpCircle, X,
  Clock, Users, Briefcase, Sparkles,
  Bug, Shield
} from 'lucide-react';

interface AppLauncherProps {
  isOpen: boolean;
  onClose: () => void;
  onExternalNavigation: (url: string | null) => void;
}

const internalApps = [
  {
    name: 'Dashboard',
    icon: LayoutGrid,
    path: '/',
    color: 'blue'
  },
  {
    name: 'Projects',
    icon: FolderKanban,
    path: '/projects',
    color: 'purple'
  },
  {
    name: 'Calendar',
    icon: Calendar,
    path: '/calendar',
    color: 'green'
  },
  {
    name: 'Messages',
    icon: MessageSquare,
    path: '/messages',
    color: 'yellow'
  },
  {
    name: 'Documents',
    icon: FileText,
    path: '/documents',
    color: 'red'
  },
  {
    name: 'Analytics',
    icon: BarChart2,
    path: '/analytics',
    color: 'indigo'
  },
  {
    name: 'Tasks',
    icon: CheckSquare,
    path: '/tasks',
    color: 'pink'
  },
  {
    name: 'Settings',
    icon: Settings,
    path: '/settings',
    color: 'gray'
  },
  {
    name: 'Help',
    icon: HelpCircle,
    path: '/help',
    color: 'cyan'
  }
];

const externalApps = [
  {
    name: 'Cost Point',
    icon: Clock,
    url: 'https://go.afs.com/time',
    color: 'emerald'
  },
  {
    name: 'Staffr',
    icon: Users,
    url: 'https://01156-afsdefense.msappproxy.us/staffr/',
    color: 'orange'
  },
  {
    name: 'SMaRT',
    icon: Briefcase,
    url: 'https://outlook.office365.us/mail/',
    color: 'sky'
  },
  {
    name: 'GenAI Hub',
    icon: Sparkles,
    url: 'https://genaihub.accenturefederaldefense.com/',
    color: 'violet'
  },
  {
    name: 'Jira',
    icon: Bug,
    url: 'https://01110-afsdefense.msappproxy.us',
    color: 'blue'
  },
  {
    name: 'Cayosoft',
    icon: Shield,
    url: 'https://iam-afsdefense.msappproxy.us/cayosoftwebadmin/#!/app/home',
    color: 'indigo'
  }
];

const AppLauncher = ({ isOpen, onClose, onExternalNavigation }: AppLauncherProps) => {
  const navigate = useNavigate();

  const handleAppClick = (path: string) => {
    onExternalNavigation(null);
    navigate(path);
    onClose();
  };

  const handleExternalAppClick = (url: string) => {
    onExternalNavigation(url);
    onClose();
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string, text: string }> = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
      red: { bg: 'bg-red-100', text: 'text-red-600' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-600' },
      gray: { bg: 'bg-gray-100', text: 'text-gray-600' },
      cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600' },
      emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
      sky: { bg: 'bg-sky-100', text: 'text-sky-600' },
      violet: { bg: 'bg-violet-100', text: 'text-violet-600' }
    };
    return colorMap[color];
  };

  return (
    <div
      className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity z-50 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed top-20 right-4 w-[640px] bg-white rounded-2xl shadow-xl transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-light-900">
              Apps
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-light-100 transition-colors"
              aria-label="Close app launcher"
            >
              <X className="w-5 h-5 text-light-500" />
            </button>
          </div>

          {/* Internal Apps Section */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-light-500 mb-4">Internal Apps</h3>
            <div className="grid grid-cols-4 gap-4">
              {internalApps.map((app) => {
                const Icon = app.icon;
                const colors = getColorClasses(app.color);
                return (
                  <button
                    key={app.name}
                    onClick={() => handleAppClick(app.path)}
                    className="group flex flex-col items-center p-4 rounded-xl hover:bg-light-50 transition-all duration-300"
                    aria-label={`Open ${app.name}`}
                  >
                    <div className={`w-12 h-12 mb-3 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-light-700">
                      {app.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* External Apps Section */}
          <div>
            <h3 className="text-sm font-medium text-light-500 mb-4">External Apps</h3>
            <div className="grid grid-cols-4 gap-4">
              {externalApps.map((app) => {
                const Icon = app.icon;
                const colors = getColorClasses(app.color);
                return (
                  <button
                    key={app.name}
                    onClick={() => handleExternalAppClick(app.url)}
                    className="group flex flex-col items-center p-4 rounded-xl hover:bg-light-50 transition-all duration-300"
                    aria-label={`Open ${app.name}`}
                  >
                    <div className={`w-12 h-12 mb-3 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-light-700">
                      {app.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLauncher;
