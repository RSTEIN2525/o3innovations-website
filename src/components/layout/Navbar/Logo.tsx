import React from 'react';
import { AudioWaveform } from 'lucide-react';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 text-white">
      {/* Adjust size for mobile screens */}
      <AudioWaveform className="h-6 w-6 sm:h-8 sm:w-8" />
      <span className="text-lg font-bold sm:text-xl">
        O<sup>3</sup> Innovations
      </span>
    </a>
  );
}
