import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  variant?: 'danger' | 'warning';
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = 'CONFIRM',
  variant = 'danger'
}: ConfirmModalProps) {
  const [inputValue, setInputValue] = useState('');

  if (!isOpen) return null;

  const isDanger = variant === 'danger';
  const colorClass = isDanger ? 'text-admin-red' : 'text-admin-orange';
  const bgClass = isDanger ? 'bg-admin-red' : 'bg-admin-orange';
  const borderClass = isDanger ? 'border-admin-red' : 'border-admin-orange';

  const isConfirmed = inputValue === confirmText;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-admin-panel border border-gray-800 rounded-xl max-w-md w-full shadow-2xl overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <AlertTriangle className={`w-5 h-5 ${colorClass}`} />
            <h2 className="text-gray-100 font-bold uppercase tracking-wider">{title}</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-300 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-400 mb-6">{description}</p>
          
          <div className="space-y-2 mb-6">
            <label className="block text-sm text-gray-500 uppercase tracking-wider">
              Type <span className={`font-bold ${colorClass}`}>"{confirmText}"</span> to confirm
            </label>
            <input
              type="text"
              className="w-full bg-admin-bg border border-gray-800 rounded-lg p-3 text-gray-100 font-mono focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-all"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={confirmText}
            />
          </div>
          
          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors border border-gray-700 font-medium"
            >
              CANCEL
            </button>
            <button
              onClick={() => {
                if (isConfirmed) {
                  onConfirm();
                  setInputValue('');
                }
              }}
              disabled={!isConfirmed}
              className={`px-4 py-2 rounded-lg ${bgClass}/20 ${colorClass} border ${borderClass}/50 hover:${bgClass}/30 transition-colors font-bold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
