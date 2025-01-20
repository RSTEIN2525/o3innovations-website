import React from 'react';
import { NavigationMenu } from './NavigationMenu';
import { Logo } from '../Navbar/Logo';
import { useScrollState } from '../Navbar/hooks/useScrollState';
import { cn } from '../../../utils/cn';

export function ServicesNavbar() {
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
            ? 'bg-black/80 backdrop-blur-md rounded-full p-2'
            : 'container px-4 py-4'
        )}
      >
        <div className={cn(
          'flex items-center',
          isScrolled ? 'justify-end' : 'justify-between'
        )}>
          {!isScrolled && <Logo />}
          <NavigationMenu isScrolled={isScrolled} />
        </div>
      </div>
    </nav>
  );
}