import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'subtle' | 'accent' | 'ivory';
  hoverEffect?: boolean;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'default',
  hoverEffect = true,
  className,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-white/40 border-white/60 backdrop-blur-xl shadow-glass',
    subtle: 'bg-white/20 border-white/40 backdrop-blur-md shadow-sm',
    accent: 'bg-[#EBF5FE]/60 border-[#D0E8FC] backdrop-blur-xl shadow-soft-glow',
    ivory: 'bg-[#F7F3EB]/80 border-[#E8E0D2] backdrop-blur-md shadow-sm',
  };

  return (
    <div
      className={cn(
        'rounded-2xl border p-6 text-[#14171F] transition-all duration-300',
        variantStyles[variant],
        hoverEffect && 'hover:bg-white/70 hover:border-white/90 hover:shadow-glass-hover hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
