
import React, { useState } from 'react';

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#realisations', label: 'Réalisations' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#accueil" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold text-brand-gray-900 tracking-tight">MT<span className="text-brand-blue-600">build</span></span>
          </a>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-base font-medium text-brand-gray-600 hover:text-brand-blue-600 transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="md:hidden">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray-600 hover:text-brand-gray-900 hover:bg-brand-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue-500"
                aria-label="Ouvrir le menu principal"
            >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-brand-gray-700 hover:text-brand-blue-600 hover:bg-brand-gray-50 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
