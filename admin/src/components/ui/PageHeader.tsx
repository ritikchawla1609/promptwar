import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
}

export default function PageHeader({ title, subtitle, icon: Icon, children }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-4">
        {Icon && (
          <div className="p-3 bg-admin-panel border border-gray-800 rounded-xl">
            <Icon className="w-6 h-6 text-gray-400" />
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold text-gray-100 tracking-tight">{title}</h1>
          {subtitle && (
            <p className="text-gray-400 mt-1">{subtitle}</p>
          )}
        </div>
      </div>
      
      {children && (
        <div className="flex items-center gap-3">
          {children}
        </div>
      )}
    </div>
  );
}
