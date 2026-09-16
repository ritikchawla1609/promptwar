import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import OverviewPage from './pages/OverviewPage';
import EventPage from './pages/EventPage';
import TeamsPage from './pages/TeamsPage';
import ControlPage from './pages/ControlPage';
import RoundsPage from './pages/RoundsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import AnalyticsPage from './pages/AnalyticsPage';
import MorePage from './pages/MorePage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-admin-bg text-gray-100 overflow-hidden relative selection:bg-admin-uv/30 font-sans">
        {/* Atmospheric background effects — subtle anime energy */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top-left blue/water energy */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-admin-blue/[0.03] blur-[120px]" />
          {/* Bottom-right red/fire energy */}
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-admin-red/[0.03] blur-[120px]" />
          {/* Center UV/purple haze */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-admin-uv/[0.02] blur-[150px]" />
        </div>

        {/* Sidebar Navigation */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto relative z-10">
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/control" element={<ControlPage />} />
            <Route path="/rounds" element={<RoundsPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/more/*" element={<MorePage />} />
            <Route path="*" element={
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-300 mb-2">Page Not Found</h2>
                  <p className="text-gray-500">This section is under construction.</p>
                </div>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
