"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  candidateName: string;
  donationUrl: string;
}

// 1. Centralize your links here
const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'News', href: '/news' },
  { name: 'Volunteer', href: '/volunteer' },
];

export default function Header({ candidateName, donationUrl }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const displayName = candidateName || "Candidate Name";

  return (
    <header className="bg-white border-b-2 border-brand-blue2 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo / Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-brand-blue2 hover:opacity-80 transition-opacity">
              {displayName}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-brand-blue2 hover:opacity-70 transition-opacity"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href={donationUrl || "/"}
              className="px-6 py-2 rounded font-semibold text-white bg-brand-blue hover:opacity-90 transition-opacity"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-blue2 hover:bg-slate-50 rounded transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-brand-blue2 bg-white">
            <div className="flex flex-col space-y-4 w-full px-2">

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)} // Auto-close on click
                  className="block w-full text-center pb-2 text-base font-medium text-brand-blue2 border-b-1 border-brand-blue2 hover:opacity-70 transition-opacity"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href={donationUrl || "/"}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 mt-2 rounded font-semibold text-white bg-brand-blue hover:opacity-90 transition-opacity shadow-md"
              >
                Donate
              </Link>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
