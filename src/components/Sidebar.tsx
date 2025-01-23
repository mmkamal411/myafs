import React from 'react';
import { Home, Package, FileText, Settings, Layout, GitBranch } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Layout className="w-6 h-6" />
          Internal DevPlatform
        </h1>
      </div>
      
      <nav className="mt-8">
        <NavItem icon={<Home />} text="Dashboard" active />
        <NavItem icon={<Package />} text="Service Catalog" />
        <NavItem icon={<GitBranch />} text="Templates" />
        <NavItem icon={<FileText />} text="Documentation" />
        <NavItem icon={<Settings />} text="Settings" />
      </nav>
    </div>
  );
};

const NavItem = ({ icon, text, active = false }: { icon: React.ReactNode; text: string; active?: boolean }) => {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-6 py-3 text-sm ${
        active
          ? 'bg-gray-800 border-l-4 border-blue-500'
          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
      }`}
    >
      {icon}
      {text}
    </a>
  );
};

export default Sidebar;