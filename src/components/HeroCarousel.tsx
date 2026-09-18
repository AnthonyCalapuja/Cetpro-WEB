'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, GraduationCap, Sparkles, ArrowRight } from 'lucide-react';
import { PROGRAMS } from '@/data/programsData';

interface Slide {
  id: string;
  image: string;
  imagePosition?: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  tags: { text: string; highlight?: boolean }[];
  primaryBtn: { text: string; href: string };
  secondaryBtn: { text: string; href: string };
}

const WELCOME_SLIDE: Slide = {
  id: 'bienvenida',
  image: '/images/banner-bienvenida.png',
  imagePosition: 'object-center lg:object-right',
  badge: '¡Bienvenidos al Portal Oficial! • CETPRO 01 Abancay',
  titlePrefix: 'Bienvenidos a la Web,',
  titleHighlight: 'CETPRO 01 de Abancay',
  description:
    'Te damos la más cordial bienvenida a nuestra institución líder en educación técnico-productiva. Formamos profesionales capacitados para el emprendimiento, la innovación y el éxito laboral en Apurímac.',
  tags: [
    { text: 'Licenciado por MINEDU' },
    { text: 'Educación Técnico-Productiva' },
    { text: 'Admisión Abierta', highlight: true },
  ],
  primaryBtn: { text: 'Conocer Especialidades', href: '/programas' },
  secondaryBtn: { text: 'Proceso de Admisión', href: '/admision' },
};

const PROGRAM_SLIDES: Slide[] = PROGRAMS.slice(0, 5).map((item) => ({
  id: item.id,
  image: item.image,
  imagePosition: 'object-center',
  badge: `CETPRO 01 • ${item.title}`,
  titlePrefix: 'Estás aquí,',
  titleHighlight: 'tu camino al éxito profesional.',
  description: item.description,
  tags: [
    { text: `Ciclo ${item.cycle}` },
    { text: item.duration },
    { text: 'Inserción Laboral Inmediata', highlight: true },
  ],
  primaryBtn: { text: 'Inscribirme Ahora', href: '/admision' },
  secondaryBtn: { text: 'Ver Especialidades', href: '/programas' },
}));

const HERO_SLIDES: Slide[] = [WELCOME_SLIDE, ...PROGRAM_SLIDES];

export const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
  };

  return (
    <div className="relative w-full h-[520px] sm:h-[600px] lg:h-[680px] overflow-hidden rounded-3xl shadow-2xl bg-[#1E2D3B]">
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isCurrent = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isCurrent ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.badge}
              fill
              className={`object-cover ${slide.imagePosition || 'object-center'} transform scale-105 transition-transform duration-10000 ease-out`}
              priority={index === 0}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2D3B] via-[#1E2D3B]/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E2D3B]/95 via-[#1E2D3B]/70 to-transparent"></div>

            {/* Banner Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full">
                <div className="max-w-2xl space-y-6">
                  
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#A8DADC]/20 border border-[#A8DADC]/40 backdrop-blur-md">
                    <Sparkles className="w-4 h-4 text-[#A8DADC]" />
                    <span className="text-xs sm:text-sm font-semibold text-[#A8DADC] uppercase tracking-wider">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Main Slogan & Headline */}
                  <div className="space-y-3">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-md">
                      {slide.titlePrefix} <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A8DADC] via-white to-[#F8C8C8]">
                        {slide.titleHighlight}
                      </span>
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-200 line-clamp-2 sm:line-clamp-3 leading-relaxed font-light">
                      {slide.description}
                    </p>
                  </div>

                  {/* Badges Info */}
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-white pt-2">
                    {slide.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={
                          tag.highlight
                            ? 'px-3 py-1 bg-[#F8C8C8]/20 text-[#F8C8C8] backdrop-blur-md rounded-lg border border-[#F8C8C8]/30'
                            : 'px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/10'
                        }
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>

                  {/* Call to Actions */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                      href={slide.primaryBtn.href}
                      className="px-6 py-3.5 rounded-2xl bg-[#A8DADC] text-[#1E2D3B] font-bold text-sm sm:text-base hover:bg-[#8ecae6] shadow-xl hover:shadow-[#A8DADC]/30 transition-all flex items-center space-x-2"
                    >
                      <span>{slide.primaryBtn.text}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>

                    <Link
                      href={slide.secondaryBtn.href}
                      className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all flex items-center space-x-2"
                    >
                      <span>{slide.secondaryBtn.text}</span>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/40 hover:bg-slate-900/70 text-white backdrop-blur-md border border-white/10 transition-all hover:scale-110"
        aria-label="Anterior slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/40 hover:bg-slate-900/70 text-white backdrop-blur-md border border-white/10 transition-all hover:scale-110"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2 bg-slate-900/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-8 bg-[#A8DADC]' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
