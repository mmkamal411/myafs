import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import PlanPage from './pages/PlanPage';
import DesignPage from './pages/DesignPage';
import CodePage from './pages/CodePage';
import TestPage from './pages/TestPage';
import DeployPage from './pages/DeployPage';
import MonitorPage from './pages/MonitorPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';
import AvaChat from './components/AvaChat';

function App() {
  const [externalUrl, setExternalUrl] = useState<string | null>(null);

  return (
    <Router>
      <div className="min-h-screen bg-light-50">
        <Header onExternalNavigation={setExternalUrl} />
        <main className="pt-16">
          {externalUrl ? (
            <iframe
              src={externalUrl}
              className="w-full h-[calc(100vh-4rem)] border-none"
              title="External content"
            />
          ) : (
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/plan" element={<PlanPage />} />
              <Route path="/design" element={<DesignPage />} />
              <Route path="/code" element={<CodePage />} />
              <Route path="/test" element={<TestPage />} />
              <Route path="/deploy" element={<DeployPage />} />
              <Route path="/monitor" element={<MonitorPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          )}
        </main>
        <AvaChat />
      </div>
    </Router>
  );
}

export default App;