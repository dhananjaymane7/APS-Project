'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { HeroSlide } from '@/lib/site-content';

interface HeroMedia extends HeroSlide {
  videoUrl?: string;
  isVideo?: boolean;
}

const fallbackSlides: HeroMedia[] = [
  {
    id: '1',
    title: 'Welcome to Army Public School',
    subtitle: 'Excellence in Education, Character Development, and Holistic Growth',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-cdae8dfddee0?w=1200&h=400&fit=crop',
    isVideo: false,
  },
  {
    id: '2',
    title: 'Academic Excellence',
    subtitle: 'Inspiring minds, building futures',
    imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=400&fit=crop',
    isVideo: false,
  },
  {
    id: '3',
    title: 'Holistic Development',
    subtitle: 'Sports, Arts, and Co-Curricular Activities',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop',
    isVideo: false,
  },
];

export default function HeroCarousel({ slides, videos }: { slides?: HeroSlide[]; videos?: HeroMedia[] }) {
  const allMedia = useMemo(() => {
    if (videos?.length) return videos;
    if (slides?.length) return slides as HeroMedia[];
    return fallbackSlides;
  }, [slides, videos]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allMedia.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [allMedia.length]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide && allMedia[currentSlide]?.isVideo) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide, allMedia]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % allMedia.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + allMedia.length) % allMedia.length);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Slides/Videos */}
      {allMedia.map((media, index) => (
        <div
          key={media.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {media.isVideo && media.videoUrl ? (
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={media.imageUrl}
              className="w-full h-full object-cover"
            >
              <source src={media.videoUrl} type="video/mp4" />
            </video>
          ) : (
            <img
              src={media.imageUrl}
              alt={media.title}
              className="w-full h-full object-cover"
            />
          )}

          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* Title and Subtitle - Bottom Right */}
          {media.title && (
            <div className="absolute bottom-6 sm:bottom-10 md:bottom-16 right-6 sm:right-10 md:right-16 text-right z-20">
              <div className="space-y-1 sm:space-y-2 md:space-y-3">
                <p className="text-white text-xs sm:text-sm md:text-base uppercase tracking-widest font-light">
                  {media.subtitle || 'SCHOOL'}
                </p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-yellow-400 leading-none break-words">
                  {media.title}
                </h2>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows - Bottom Left */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-6 sm:left-8 md:left-10 flex gap-1 sm:gap-2 z-10">
        <button
          onClick={prevSlide}
          className="bg-[#da251c] hover:bg-[#da251c]/80 text-white p-2 sm:p-3 md:p-4 rounded transition duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#da251c] hover:bg-[#da251c]/80 text-white p-2 sm:p-3 md:p-4 rounded transition duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Dot Indicators - Bottom Center */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {allMedia.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition duration-300 ${
              index === currentSlide ? 'bg-[#da251c]' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter - Top Right */}
      <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 bg-black/60 text-white px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded text-xs sm:text-sm md:text-base z-10 font-semibold">
        {currentSlide + 1}/{allMedia.length}
      </div>
    </div>
  );
}
