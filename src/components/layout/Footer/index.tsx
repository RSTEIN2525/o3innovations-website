import React from 'react';
import { Logo } from '../../shared/Logo';
import { FooterNav } from './FooterNav';
import { SocialLinks } from './SocialLinks';
import { LegalLinks } from './LegalLinks';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo />
            <p className="text-white/60 text-sm max-w-xs">
              Pioneering AI solutions that transform businesses and drive innovation.
            </p>
            <SocialLinks />
          </div>

          {/* Navigation Columns */}
          <FooterNav />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-sm">
            © 2024 o3 Innovations. All rights reserved.
          </div>
          <LegalLinks />
        </div>
      </div>
    </footer>
  );
}