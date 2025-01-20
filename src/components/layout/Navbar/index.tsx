import React from 'react';
import { NavigationMenu } from './NavigationMenu';
import { Logo } from './Logo';
import { useScrollState } from './hooks/useScrollState';
import { cn } from '../../../utils/cn';

interface NavbarProps {
  isHeroHovered: boolean;
}

export function Navbar({ isHeroHovered }: NavbarProps) {
  const isScrolled = useScrollState();

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'top-4 right-4 w-auto'
          : 'top-0 bg-black/10 backdrop-blur-sm'
      )}
    >
      <div
        className={cn(
          'mx-auto transition-all duration-300 ease-in-out',
          isScrolled
            ? 'bg-black/75 backdrop-blur-sm rounded-full p-2'
            : 'container px-4 py-4'
        )}
      >
        <div className={cn(
          'flex items-center',
          isScrolled ? 'justify-end' : 'justify-between'
        )}>
          {!isScrolled && <Logo isHeroHovered={isHeroHovered} />}
          <NavigationMenu isScrolled={isScrolled} isHeroHovered={isHeroHovered} />
        </div>
      </div>
    </nav>
  );
}