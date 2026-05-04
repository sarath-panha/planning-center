'use client';

import React, { useState, useEffect } from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import {
  FileCode,
  Layers,
  Zap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const CADDeliverables = () => {
  const deliverables = [
    {
      title: "Manufacturing STL",
      desc: "Optimized for milling or 3D printing.",
      image: "/images/cad-crown.png",
      icon: <FileCode />
    },
    {
      title: "Construction Files",
      desc: "Native exocad project files for your library.",
      image: "/images/imaging-stl.png",
      icon: <Layers />
    },
    {
      title: "QC Report",
      desc: "Margin and thickness validation report.",
      image: "/images/cad-hero.png",
      icon: <Zap />
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % deliverables.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [deliverables.length]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % deliverables.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + deliverables.length) % deliverables.length);

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <MaxWidthWrapper>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <SectionHeader
              badge="Design Quality"
              title="Manufacturer-Ready Data"
              description="High-precision design files compatible with all major dental milling machines and 3D printers."
            />

            <div className="space-y-4">
              {deliverables.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 text-left",
                    activeSlide === i
                      ? "bg-primary/5 border-primary/20 shadow-sm"
                      : "bg-transparent border-transparent opacity-60 hover:opacity-100 hover:bg-slate-50"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                    activeSlide === i ? "bg-primary text-white" : "bg-slate-100 text-slate-500"
                  )}>
                    {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "h-5 w-5" })}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-4 flex gap-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12" onClick={prevSlide}>
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12" onClick={nextSlide}>
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-slate-900 group">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className={cn(
                  "absolute inset-0 transition-all duration-700 ease-in-out",
                  activeSlide === i ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-105 translate-x-8"
                )}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em]">
                    Service: EcoDent CAD Design / {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CADDeliverables;
