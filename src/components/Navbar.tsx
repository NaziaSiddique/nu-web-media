'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-600">
          NU Web & Media
        </Link>

        <div className="hidden md:flex space-x-6 text-lg">
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#services" className="hover:text-red-500">Services</a>
          <a href="#portfolio" className="hover:text-red-500">Portfolio</a>
          <a href="#contact" className="hover:bg-red-600 bg-red-500 text-white px-4 py-2 rounded-full transition">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 text-lg">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded-full">Contact</a>
        </div>
      )}
    </nav>
  );
}
