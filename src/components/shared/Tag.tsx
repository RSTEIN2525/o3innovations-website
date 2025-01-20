import React from 'react';
import { cn } from '../../utils/cn';

interface TagProps {
  name: string;
  className?: string;
}

export function Tag({ name, className }: TagProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full",
      "text-sm text-white/80 bg-white/5 border border-white/10",
      "hover:bg-white/10 transition-colors duration-200",
      className
    )}>
      <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
      {name}
    </span>
  );
}