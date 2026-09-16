import React from 'react';
import { LucideIcon } from 'lucide-react';

export type StatCardColor = 'blue' | 'green' | 'orange' | 'red' | 'uv';

export interface StatCardProps {
  label: string;
  value: string | number;
  color?: StatCardColor;
  icon?: LucideIcon;
}

const colorMap = {
  blue: { border: 'border-t-admin-blue', text: 'text-admin-blue' },
  green: { border: 'border-t-admin-green', text: 'text-admin-green' },
  orange: { border: 'border-t-admin-orange', text: 'text-admin-orange' },
  red: { border: 'border-t-admin-red', text: 'text-admin-red' },
  uv: { border: 'border-t-admin-uv', text: 'text-admin-uv' },
};

export default function StatCard({ label, value, color = 'blue', icon: Icon }: StatCardProps) {
  const styles = colorMap[color];

  return (
    <div className={`bg-admin-panel rounded-xl border border-gray-800 border-t-4 ${styles.border} p-6 flex items-center justify-between`}>
      <div>
        <p className="text-gray-400 uppercase tracking-wider text-sm font-semibold mb-2">{label}</p>
        <p className={`text-4xl font-bold font-mono ${styles.text}`}>{value}</p>
      </div>
      {Icon && (
        <div className="p-4 rounded-lg bg-opacity-10 bg-gray-900">
          <Icon className={`w-8 h-8 ${styles.text}`} />
        </div>
      )}
    </div>
  );
}
