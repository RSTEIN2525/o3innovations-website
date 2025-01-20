import React from 'react';
import { Boxes } from 'lucide-react';

export function Logo() {
  return (
    <a href="/" className="inline-flex items-center gap-2">
      <Boxes className="h-8 w-8 text-white" />
      <span className="text-xl font-bold text-white">o3 Innovations</span>
    </a>
  );
}