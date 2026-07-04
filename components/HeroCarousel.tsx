'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { HeroSlide } from '@/lib/site-content';

const fallbackSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'Welcome to Army Public School',
    subtitle: 'Excellence in Education, Character Development, and Holistic Growth',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-cdae8dfddee0?w=1200&h=400&fit=crop',
  },
  {
    id: '2',
    title: 'Academic Excellence',
    subtitle: 'Inspiring minds, building futures',
    imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=400&fit=crop',
  },
  {
    id: '3',
    title: 'Holistic Development',
    subtitle: 'Sports, Arts, and Co-Curricular Activities',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop',
  },
];

export default function HeroCarousel({ slides }: { slides?: HeroSlide[] }) {
  const heroSlides = useMemo(() => {
    const s = slides?.length ? slides : fallbackSlides;
    return s.length ? s : fallbackSlides;
  }, [slides]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden shadow-lg">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.imageUrl} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a305f]/75 via-[#0a305f]/55 to-[#da251c]/65 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.title}</h2>
            <p className="text-xl md:text-2xl text-white/95">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full transition z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full transition z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-[#da251c]' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 bg-primary/80 text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold z-10">
        {currentSlide + 1}/{heroSlides.length}
      </div>
    </div>
  );
}
