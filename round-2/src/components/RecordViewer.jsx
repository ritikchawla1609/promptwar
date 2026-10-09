import React, { useState, useMemo } from 'react';
import { INTELLIGENCE_RECORDS } from '../data/records.js';
import { Search, X, ChevronRight, FileText, ArrowLeft, Shield, Clock, MapPin } from 'lucide-react';

export default function RecordViewer({
  isOpen,
  onClose,
  initialRecordId = null,
  discoveredSources = []
}) {
  const [selectedRecordId, setSelectedRecordId] = useState(initialRecordId);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Sync if initialRecordId changes
  React.useEffect(() => {
    if (initialRecordId) {
      setSelectedRecordId(initialRecordId);
    }
  }, [initialRecordId]);

  const categories = [
    { id: 'all', label: 'All Records' },
    { id: 'telemetry', label: 'Telemetry' },
    { id: 'system', label: 'System Logs' },
    { id: 'access', label: 'Access Control' },
    { id: 'incident', label: 'Incident Reports' },
    { id: 'administrative', label: 'Administrative' }
  ];

  const filteredRecords = useMemo(() => {
    return INTELLIGENCE_RECORDS.filter(record => {
      const matchesCategory = activeCategory === 'all' || record.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        record.id.toLowerCase().includes(q) ||
        record.title.toLowerCase().includes(q) ||
        record.type.toLowerCase().includes(q) ||
        record.summary.toLowerCase().includes(q) ||
        record.content.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, activeCategory]);

  const activeRecord = useMemo(() => {
    if (!selectedRecordId) return null;
    return INTELLIGENCE_RECORDS.find(r => r.id === selectedRecordId) || null;
  }, [selectedRecordId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-archive-950/80 backdrop-blur-sm animate-fadeIn">
      {/* Drawer Panel */}
      <div 
        className="w-full max-w-3xl bg-archive-900 border-l border-archive-700 flex flex-col h-full shadow-2xl transition-transform duration-300"
        role="dialog"
        aria-label="Intelligence Records Archive"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-archive-700 bg-archive-900/90">
          <div className="flex items-center space-x-3">
            {activeRecord ? (
              <button
                onClick={() => setSelectedRecordId(null)}
                className="flex items-center space-x-1.5 text-xs text-ivory-400 hover:text-ivory-100 transition-colors mr-2"
                title="Back to all records"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Records</span>
              </button>
            ) : null}
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <h2 className="text-sm font-semibold tracking-wide uppercase text-ivory-100">
              {activeRecord ? activeRecord.id : 'Available Records Archive'}
            </h2>
            <span className="text-xs font-mono text-ivory-500">
              ({INTELLIGENCE_RECORDS.length} Documents)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-ivory-400 hover:text-ivory-100 hover:bg-archive-800 transition-colors"
            title="Close records drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conditional View: Document Reader or Searchable Record List */}
        {activeRecord ? (
          /* Focused Document Reading View */
          <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 space-y-6">
            {/* Document Header Metadata */}
            <div className="space-y-4 pb-6 border-b border-archive-700">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono px-2.5 py-1 bg-archive-800 border border-archive-700 text-amber-500 rounded">
                  {activeRecord.id}
                </span>
                <span className="text-xs font-mono text-ivory-400 flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-ivory-500" />
                  <span>{activeRecord.timestamp}</span>
                </span>
              </div>

              <h1 className="text-2xl font-medium text-ivory-100">
                {activeRecord.title}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="bg-archive-850 p-3 rounded border border-archive-700/80 flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-ivory-500">Facility Sector</span>
                    <span className="text-ivory-200 font-medium">{activeRecord.facilityZone}</span>
                  </div>
                </div>

                <div className="bg-archive-850 p-3 rounded border border-archive-700/80 flex items-start space-x-2">
                  <Shield className="w-4 h-4 text-ivory-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-ivory-500">Reliability Rating</span>
                    <span className="text-ivory-200 font-medium">{activeRecord.reliability}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Body */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-ivory-400">
                Declassified Record Text
              </h3>
              <div className="bg-archive-950 border border-archive-700/80 rounded-lg p-5 sm:p-6 font-mono text-xs sm:text-sm text-ivory-200 leading-relaxed whitespace-pre-wrap selection:bg-amber-500/20">
                {activeRecord.content}
              </div>
            </div>

            {/* Auditor Summary */}
            <div className="bg-archive-850 border border-archive-700 rounded-lg p-4 text-xs text-ivory-400 space-y-1">
              <span className="font-semibold text-ivory-300 uppercase tracking-wider block">
                Auditor Note
              </span>
              <p className="leading-relaxed">
                {activeRecord.summary}
              </p>
            </div>
          </div>
        ) : (
          /* Searchable Records List View */
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Search Bar & Filters */}
            <div className="p-6 border-b border-archive-700 space-y-4 bg-archive-900/50">
              <div className="relative">
                <Search className="w-4 h-4 text-ivory-500 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search records by keyword, system, or source ID..."
                  className="w-full bg-archive-950 border border-archive-700 text-ivory-100 pl-10 pr-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-ivory-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-3 text-ivory-500 hover:text-ivory-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 text-xs">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      activeCategory === cat.id
                        ? 'bg-amber-500 text-archive-950 font-medium'
                        : 'bg-archive-800 text-ivory-400 hover:text-ivory-200 hover:bg-archive-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* List of Records */}
            <div className="flex-1 overflow-y-auto divide-y divide-archive-700/60 p-4 sm:p-6 space-y-2">
              {filteredRecords.length === 0 ? (
                <div className="text-center py-16 text-ivory-500 text-sm">
                  No records match the active query. Try searching for &quot;telemetry&quot;, &quot;script&quot;, or &quot;REC-02&quot;.
                </div>
              ) : (
                filteredRecords.map(record => {
                  const isDiscovered = (discoveredSources || []).includes(record.id);
                  return (
                    <div
                      key={record.id}
                      onClick={() => setSelectedRecordId(record.id)}
                      className="group bg-archive-850 hover:bg-archive-800/80 border border-archive-700/80 hover:border-archive-600 rounded-lg p-4 cursor-pointer transition-all duration-150 flex items-start justify-between space-x-4"
                    >
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div className="flex items-center space-x-2.5">
                          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-archive-800 border border-archive-700 text-amber-500">
                            {record.id}
                          </span>
                          <span className="text-xs text-ivory-500 font-mono">
                            {record.type}
                          </span>
                          {isDiscovered && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded">
                              Cited in Briefing
                            </span>
                          )}
                        </div>

                        <h3 className="text-sm font-medium text-ivory-100 group-hover:text-amber-400 transition-colors truncate">
                          {record.title}
                        </h3>

                        <p className="text-xs text-ivory-400 line-clamp-2 leading-relaxed">
                          {record.summary}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2 flex-shrink-0 self-center text-ivory-500 group-hover:text-ivory-200">
                        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
