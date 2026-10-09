import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminProvider } from './context/AdminContext';
import { Sidebar } from './components/layout/Sidebar';
import { Navbar } from './components/layout/Navbar';
import OverviewPage from './pages/OverviewPage';
import LiveControlPage from './pages/LiveControlPage';
import RoundsPage from './pages/RoundsPage';
import TeamsPage from './pages/TeamsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';
import ActivityLogPage from './pages/ActivityLogPage';

export function App() {
  return (
    <AdminProvider>
      <BrowserRouter>
        <div className="flex h-screen bg-[#070a12] text-slate-100 overflow-hidden font-sans selection:bg-blue-600/30 selection:text-blue-200">
          {/* Persistent Sidebar */}
          <Sidebar />

          {/* Main Console Deck */}
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            {/* Top Bar with Live Telemetry */}
            <Navbar />

            {/* Scrollable Viewport */}
            <main className="flex-1 overflow-y-auto bg-[#080d18]">
              <Routes>
                <Route path="/" element={<OverviewPage />} />
                <Route path="/control" element={<LiveControlPage />} />
                <Route path="/rounds" element={<RoundsPage />} />
                <Route path="/teams" element={<TeamsPage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/audit" element={<ActivityLogPage />} />

                {/* Backward compatibility redirects */}
                <Route path="/event" element={<Navigate to="/control" replace />} />
                <Route path="/more/*" element={<Navigate to="/settings" replace />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </AdminProvider>
  );
}

export default App;
