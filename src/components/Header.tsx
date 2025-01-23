import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, Grid, Bell, User, X, 
  Workflow, Paintbrush, Code, TestTube, Rocket, 
  Activity, Settings, LogOut, FileText, Layers, Compass
} from 'lucide-react';
import AppLauncher from './AppLauncher';
import SearchBar from './SearchBar';

interface MenuItem {
  icon: React.ElementType;
  text: string;
  path: string;
}

interface ExternalLink {
  text: string;
  icon: React.ElementType;
  url: string;
}

interface HeaderProps {
  onExternalNavigation: (url: string | null) => void;
}

const Header = ({ onExternalNavigation }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppLauncherOpen, setIsAppLauncherOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Implement search functionality here
  };

  const externalLinks: ExternalLink[] = [
    { text: 'Catalog', icon: Layers, url: 'https://google.com' },
    { text: 'Templates', icon: FileText, url: 'https://google.com' },
    { text: 'Documentation', icon: FileText, url: 'https://google.com' },
    { text: 'Explore', icon: Compass, url: 'https://google.com' }
  ];

  const primaryNavItems: MenuItem[] = [
    {
      icon: Workflow,
      text: 'Plan',
      path: '/plan'
    },
    {
      icon: Paintbrush,
      text: 'Design',
      path: '/design'
    },
    {
      icon: Code,
      text: 'Code',
      path: '/code'
    },
    {
      icon: TestTube,
      text: 'Test',
      path: '/test'
    },
    {
      icon: Rocket,
      text: 'Deploy',
      path: '/deploy'
    },
    {
      icon: Activity,
      text: 'Monitor',
      path: '/monitor'
    }
  ];

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-light-200 z-50">
        <div className="h-full px-4 sm:px-6 flex items-center justify-between max-w-7xl mx-auto">
          {/* Left Section - Menu and Brand */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-3 min-w-[44px] min-h-[44px] rounded-lg hover:bg-light-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-light-700" />
            </button>
            
            <span 
              onClick={() => {
                onExternalNavigation(null);
                navigate('/');
              }}
              className="text-xl font-sans font-bold text-accent-500 tracking-tight cursor-pointer"
            >
              myAFS.io
            </span>

            {/* External Links */}
            <nav className="hidden md:flex items-center gap-1 ml-8">
              {externalLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.text}
                    onClick={() => onExternalNavigation(link.url)}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-light-700 hover:text-accent-600 hover:bg-light-50 rounded-lg transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {link.text}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Center Section - Search */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <SearchBar
              onSearch={handleSearch}
              placeholder="Search APIs, Services, ETL..."
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAppLauncherOpen(true)}
              className="p-3 min-w-[44px] min-h-[44px] rounded-lg hover:bg-light-100 transition-colors"
              aria-label="App launcher"
            >
              <Grid className="w-5 h-5 text-light-700" />
            </button>
            
            <button
              className="p-3 min-w-[44px] min-h-[44px] rounded-lg hover:bg-light-100 transition-colors relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 text-light-700" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            
            <button
              className="ml-2 w-11 h-11 rounded-lg bg-accent-gradient flex items-center justify-center min-w-[44px] min-h-[44px]"
              aria-label="User profile"
            >
              <User className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Hamburger Menu */}
      <div
        className={`fixed inset-0 bg-black/60 transition-opacity z-50 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 w-80 h-full bg-white shadow-xl transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Header */}
          <div className="p-6 border-b border-light-200">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xl font-sans font-bold text-accent-500 tracking-tight">
                  myAFS.io
                </span>
                <p className="text-sm text-light-500">
                  Developer Platform
                </p>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-light-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-light-700" />
              </button>
            </div>
          </div>

          {/* Menu Content */}
          <div className="h-[calc(100%-160px)] flex flex-col">
            <nav className="flex-1 py-4">
              <div className="px-4 space-y-1">
                {primaryNavItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.text}
                      onClick={() => {
                        onExternalNavigation(null);
                        navigate(item.path);
                        setIsMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-6 py-4 text-base font-medium text-light-700 hover:bg-light-100 rounded-lg transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="flex-1">{item.text}</span>
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Menu Footer */}
            <div className="mt-auto p-4 border-t border-light-200">
              <div className="space-y-2">
                <button 
                  onClick={() => {
                    onExternalNavigation(null);
                    navigate('/settings');
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-6 py-4 text-base font-medium text-light-700 hover:bg-light-100 rounded-lg transition-colors"
                >
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 px-6 py-4 text-base font-medium text-red-600 hover:bg-light-100 rounded-lg transition-colors">
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Launcher */}
      <AppLauncher 
        isOpen={isAppLauncherOpen}
        onClose={() => setIsAppLauncherOpen(false)}
        onExternalNavigation={onExternalNavigation}
      />
    </>
  );
};

export default Header;