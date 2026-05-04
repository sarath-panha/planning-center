'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Camera,
  Monitor,
  Box
} from 'lucide-react';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 'imaging',
    badge: 'Imaging Center',
    icon: <Camera className="h-3 w-3" />,
    title: 'Advanced Anatomical Diagnostics',
    description: 'Utilizing ultra-high-definition CBCT and 3D facial imaging to establish a precise digital foundation for comprehensive clinical success.',
    image: '/images/imaging.png',
  },
  {
    id: 'planning',
    badge: 'Planning Center',
    icon: <Monitor className="h-3 w-3" />,
    title: 'Prosthetically-Driven Digital Design',
    description: 'Leveraging expert CAD engineering and clinical insight to transform complex diagnostics into optimized, predictable treatment pathways.',
    image: '/images/hero.png',
  },
  {
    id: 'production',
    badge: 'Fabrication Center',
    icon: <Box className="h-3 w-3" />,
    title: 'Precision Industrial Fabrication',
    description: 'Delivering uncompromising quality through state-of-the-art 5-axis milling and additive manufacturing, engineered for restorative excellence.',
    image: '/images/milling.png',
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-foreground">
      {/* Dynamic Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 z-0 transition-all duration-1000 ease-in-out",
            index === currentSlide ? "opacity-60 scale-100" : "opacity-0 scale-105"
          )}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </div>
      ))}

      <MaxWidthWrapper className="relative z-10">
        <div className="max-w-4xl flex flex-col items-start space-y-8 py-20">
          <div className="space-y-6">
            {slides.map((slide, index) => (
              index === currentSlide && (
                <div key={slide.id} className="animate-in fade-in slide-in-from-left-8 duration-700">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-xs font-bold uppercase tracking-widest mb-6">
                    {slide.icon}
                    <span>{slide.badge}</span>
                  </div>
                  <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl leading-[1.1] mb-6">
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i} className={i >= 2 ? "text-primary" : ""}>
                        {word}{' '}
                        {i === 1}
                      </span>
                    ))}
                  </h1>
                  <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>
                </div>
              )
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <Button size="xl" className="rounded-full shadow-2xl shadow-primary/30 group bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/portal/start">
                Start Submission
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/services">Our Workflow</Link>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Slide Indicator Dots & Progress - Bottom Center */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className="group relative h-1.5 transition-all duration-500"
            style={{ width: i === currentSlide ? '60px' : '16px' }}
          >
            <div className={cn(
              "absolute inset-0 rounded-full transition-all duration-500",
              i === currentSlide ? "bg-primary" : "bg-white/20 group-hover:bg-white/40"
            )} />
            {i === currentSlide && (
              <div className="absolute inset-0 bg-white/40 rounded-full animate-[progress_6s_linear]" />
            )}
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
