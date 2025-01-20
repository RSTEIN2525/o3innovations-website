import React from 'react';

const headshots = [
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    alt: "Sarah Chen"
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    alt: "Michael Rodriguez"
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    alt: "David Park"
  }
];

export function HeadshotStack() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-3">
        {headshots.map((headshot, index) => (
          <div
            key={headshot.alt}
            className="w-8 h-8 rounded-full border-2 border-black overflow-hidden"
            style={{ zIndex: headshots.length - index }}
          >
            <img
              src={headshot.image}
              alt={headshot.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <span className="text-sm text-white/80">
        Join 10+ Industry Leaders
      </span>
    </div>
  );
}