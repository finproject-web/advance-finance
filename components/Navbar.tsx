'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: '#loans', label: 'Loans' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 4L6 10V20C6 26.6 11.4 32.6 18 34C24.6 32.6 30 26.6 30 20V10L18 4Z" fill="#F5A623"/>
              <path d="M14 18L17 21L23 15" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[1.35rem] font-extrabold text-[#0f1f3d] tracking-tight leading-none">
              Advance<span className="text-[#0f1f3d]">America</span><span className="text-[#F5A623]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#0f1f3d] hover:text-[#E8521A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/apply-now"
              className="bg-[#0f1f3d] hover:bg-[#1a2f55] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-[#0f1f3d] hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-3">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#0f1f3d] hover:text-[#E8521A] py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/apply-now"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#0f1f3d] text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center transition-colors"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
