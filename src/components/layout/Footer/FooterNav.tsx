import React from 'react';

const navigation = {
  Solutions: [
    { name: 'AI Assistant', href: '#' },
    { name: 'Customer Support', href: '#' },
    { name: 'Social Media', href: '#' },
    { name: 'Website Builder', href: '#' },
  ],
  Company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press', href: '#' },
  ],
  Resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Status', href: '#' },
  ],
};

export function FooterNav() {
  return (
    <>
      {Object.entries(navigation).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-white font-semibold mb-4">{category}</h3>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}