import React from 'react';

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Cookie Policy', href: '#' },
];

export function LegalLinks() {
  return (
    <div className="flex gap-6">
      {legalLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-white/40 hover:text-white/60 transition-colors text-sm"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}