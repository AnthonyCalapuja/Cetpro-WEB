'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { GraduationCap, Menu, X, ChevronRight, Phone, Mail } from 'lucide-react';
import { MoodleModal } from './MoodleModal';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoodleModalOpen, setIsMoodleModalOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Institución', href: '/institucion' },
    { name: 'Programas', href: '/programas' },
    { name: 'Admisión', href: '/admision' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Bar Banner */}
      <div className="bg-[#1E2D3B] text-white text-xs py-2 px-4 border-b border-[#6F8FA6]/20">
        <div className="max-w-7xl mx-mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center space-x-1 text-[#A8DADC]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-medium">Licenciado por MINEDU</span>
            </span>
            <span className="hidden md:inline text-[#6F8FA6]">|</span>
            <span className="hidden md:inline text-slate-300">Educación Técnico-Productiva de Calidad</span>
          </div>
          <div className="flex items-center space-x-4 text-slate-300">
            <a href="mailto:admision@cetpro.edu.pe" className="hover:text-[#A8DADC] transition-colors flex items-center space-x-1">
              <Mail className="w-3.5 h-3.5" />
              <span>admision@cetpro.edu.pe</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md border border-[#A8DADC]/40 group-hover:scale-105 transition-transform bg-white">
                <Image
                  src="/images/logo-cetpro.jpg"
                  alt="Logo CETPRO 01"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-[#1E2D3B]">
                  CETPRO <span className="text-[#6F8FA6]">01</span>
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-[#4A607A]">
                  Centro de Ed. Técnico-Productiva
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      active
                        ? 'bg-[#A8DADC]/30 text-[#1E2D3B] shadow-sm'
                        : 'text-[#4A607A] hover:text-[#1E2D3B] hover:bg-[#F0F7F9]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Aula Virtual Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setIsMoodleModalOpen(true)}
                className="relative inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#1E2D3B] text-white hover:bg-[#4A607A] font-semibold text-sm shadow-md transition-all group overflow-hidden"
              >
                <div className="p-1 bg-[#A8DADC] text-[#1E2D3B] rounded-lg group-hover:rotate-12 transition-transform">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span>Aula Virtual</span>
                <span className="ml-1 px-1.5 py-0.5 text-[10px] uppercase font-bold bg-[#F8C8C8] text-[#1E2D3B] rounded-md">
                  Moodle
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => setIsMoodleModalOpen(true)}
                className="p-2 bg-[#1E2D3B] text-[#A8DADC] rounded-xl text-xs font-bold"
                aria-label="Aula Virtual"
              >
                <GraduationCap className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl text-[#1E2D3B] hover:bg-[#F0F7F9] transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#6F8FA6]/20 bg-white/95 backdrop-blur-lg px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="space-y-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      active
                        ? 'bg-[#A8DADC]/40 text-[#1E2D3B]'
                        : 'text-[#4A607A] hover:bg-[#F0F7F9] hover:text-[#1E2D3B]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-60" />
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsMoodleModalOpen(true);
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#1E2D3B] text-white font-semibold text-sm flex items-center justify-center space-x-2 shadow-md"
              >
                <GraduationCap className="w-5 h-5 text-[#A8DADC]" />
                <span>Ingresar al Aula Virtual (Moodle)</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Moodle Info Modal */}
      <MoodleModal isOpen={isMoodleModalOpen} onClose={() => setIsMoodleModalOpen(false)} />
    </>
  );
};
