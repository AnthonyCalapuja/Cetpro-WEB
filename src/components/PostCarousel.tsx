'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { urlForImage } from '@/sanity/lib/image';

interface CarouselImage {
  image?: any;
  alt?: string;
  caption?: string;
}

interface PostCarouselProps {
  title?: string;
  images: CarouselImage[];
}

export const PostCarousel: React.FC<PostCarouselProps> = ({ title, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const currentImage = images[currentIndex];
  const imageUrl = currentImage?.image ? urlForImage(currentImage.image).width(1200).url() : null;

  return (
    <div className="my-10 rounded-3xl overflow-hidden border border-[#A8DADC]/40 shadow-xl bg-[#1E2D3B] text-white">
      {/* Header if title is present */}
      {title && (
        <div className="px-6 py-3 bg-[#1E2D3B]/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm font-bold text-[#A8DADC]">
            <Images className="w-4 h-4" />
            <span>{title}</span>
          </div>
          <span className="text-xs text-slate-300 font-mono">
            {currentIndex + 1} de {images.length}
          </span>
        </div>
      )}

      {/* Main Image Slider View */}
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] bg-slate-900 overflow-hidden flex items-center justify-center">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={currentImage?.alt || `Foto ${currentIndex + 1} de la galería`}
            className="w-full h-full object-contain"
          />
        )}

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all shadow-lg hover:scale-105"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all shadow-lg hover:scale-105"
              aria-label="Foto siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Floating Counter when no title */}
        {!title && images.length > 1 && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-white">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Caption & Indicators */}
      <div className="p-4 bg-[#1E2D3B] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <p className="text-slate-300 italic text-center sm:text-left">
          {currentImage?.caption || currentImage?.alt || `Fotografía ${currentIndex + 1}`}
        </p>

        {/* Dot Indicators */}
        {images.length > 1 && (
          <div className="flex space-x-1.5 shrink-0">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-6 bg-[#A8DADC]' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Ver foto ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
