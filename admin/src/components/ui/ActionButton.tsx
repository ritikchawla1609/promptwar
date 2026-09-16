import React from 'react';
import { LucideIcon } from 'lucide-react';

export type ActionButtonVariant = 'blue' | 'green' | 'orange' | 'red' | 'uv';
export type ActionButtonSize = 'sm' | 'md' | 'lg';

export interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: ActionButtonVariant;
  icon?: LucideIcon;
  size?: ActionButtonSize;
}

const variantStyles: Record<ActionButtonVariant, string> = {
  blue: 'bg-admin-blue/20 text-admin-blue border-admin-blue/50 hover:bg-admin-blue/30',
  green: 'bg-admin-green/20 text-admin-green border-admin-green/50 hover:bg-admin-green/30',
  orange: 'bg-admin-orange/20 text-admin-orange border-admin-orange/50 hover:bg-admin-orange/30',
  red: 'bg-admin-red/20 text-admin-red border-admin-red/50 hover:bg-admin-red/30',
  uv: 'bg-admin-uv/20 text-admin-uv border-admin-uv/50 hover:bg-admin-uv/30',
};

const sizeStyles: Record<ActionButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2 gap-2',
  lg: 'px-6 py-3 text-lg gap-2.5',
};

const iconSizes: Record<ActionButtonSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export default function ActionButton({
  label,
  variant = 'blue',
  icon: Icon,
  size = 'md',
  className = '',
  disabled,
  children,
  ...props
}: ActionButtonProps) {
  const vStyle = variantStyles[variant];
  const sStyle = sizeStyles[size];
  const iSize = iconSizes[size];

  return (
    <button
      disabled={disabled}
      className={`
        inline-flex items-center justify-center 
        rounded-lg border 
        font-medium uppercase tracking-wider
        transition-colors
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-admin-bg
        disabled:opacity-50 disabled:cursor-not-allowed
        ${vStyle} ${sStyle} ${className}
      `}
      {...props}
    >
      {Icon && <Icon className={iSize} />}
      {label || children}
    </button>
  );
}
