import React, { useState } from 'react';
import { X, Clock, ChevronDown, ChevronUp, FileText } from 'lucide-react';

export default function PromptHistoryModal({
  isOpen,
  onClose,
  history = [],
  onOpenRecord
}) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-archive-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-archive-900 border border-archive-700 rounded-xl flex flex-col max-h-[85vh] shadow-2xl overflow-hidden"
        role="dialog"
        aria-label="Prompt History"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-archive-700 bg-archive-900">
          <div className="flex items-center space-x-2.5">
            <Clock className="w-4 h-4 text-amber-500" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ivory-100">
              Prompt History ({history.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-ivory-400 hover:text-ivory-100 hover:bg-archive-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {history.length === 0 ? (
            <div className="text-center py-12 text-ivory-500 text-sm">
              No prompts have been submitted in this session yet.
            </div>
          ) : (
            history.map((entry, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-archive-850 border border-archive-700/80 rounded-lg overflow-hidden transition-colors"
                >
                  <div
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    className="p-4 flex items-start justify-between cursor-pointer hover:bg-archive-800/50 space-x-4"
                  >
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center space-x-3 text-xs">
                        <span className="font-mono text-amber-500 font-semibold">
                          #{history.length - idx}
                        </span>
                        <span className="text-ivory-500 font-mono">
                          {entry.timestamp}
                        </span>
                        {entry.response?.citations?.length > 0 && (
                          <span className="font-mono text-[11px] text-ivory-400">
                            Citations: {entry.response.citations.join(', ')}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-ivory-200 font-mono truncate">
                        &quot;{entry.prompt}&quot;
                      </p>
                    </div>

                    <div className="text-ivory-500 pt-1">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-4 pb-4 pt-2 border-t border-archive-700/60 bg-archive-900/60 space-y-3 text-xs">
                      <div>
                        <span className="text-ivory-500 uppercase tracking-wider block text-[10px] mb-1">
                          Full Query
                        </span>
                        <p className="text-ivory-200 font-mono bg-archive-950 p-3 rounded border border-archive-700/80 leading-relaxed whitespace-pre-wrap">
                          {entry.prompt}
                        </p>
                      </div>

                      <div>
                        <span className="text-ivory-500 uppercase tracking-wider block text-[10px] mb-1">
                          Briefing Summary
                        </span>
                        <p className="text-ivory-300 leading-relaxed">
                          {entry.response?.summary}
                        </p>
                      </div>

                      {entry.response?.citations?.length > 0 && (
                        <div className="flex items-center space-x-2 pt-1">
                          <span className="text-ivory-500 text-[10px] uppercase tracking-wider">
                            Linked Sources:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {entry.response.citations.map(cid => (
                              <button
                                key={cid}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onOpenRecord?.(cid);
                                }}
                                className="font-mono text-xs px-2 py-0.5 rounded bg-archive-800 border border-archive-700 text-amber-400 hover:border-amber-500 transition-colors"
                              >
                                {cid}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
