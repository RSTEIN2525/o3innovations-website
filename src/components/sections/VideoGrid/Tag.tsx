import React from 'react';
import { cn } from '../../../utils/cn';

interface TagProps {
  name: string;
  className?: string;
}

export function Tag({ name, className }: TagProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 text-sm text-white/80",
      className
    )}>
      <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
      {name}
    </span>
  );
}