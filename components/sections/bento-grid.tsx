'use client';

import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { 
  Drill, 
  Camera, 
  Activity, 
  Sparkles, 
  Monitor, 
  Box, 
  ChevronRight 
} from 'lucide-react';

const BentoGrid = () => {
  return (
    <section className="py-24 bg-white">
      <MaxWidthWrapper>
        <SectionHeader 
          badge="Full Service Suite"
          title="Comprehensive Digital Solutions"
          description="We bridge the gap between digital data and clinical success with a specialized department for every stage of your workflow."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-full md:h-[900px]">
          {/* 1. Implant Planning (Large) */}
          <Link href="/services/implant-planning" className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-background p-8 hover:shadow-premium hover:glow transition-all duration-500 shadow-sm">
            <div className="relative z-20 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold tracking-tight text-white transition-colors">Implant Planning <br />& Guides</h3>
                  <p className="text-white/80 max-w-xs text-sm leading-relaxed transition-colors">Safe, prosthetically-driven guided surgery blueprints from single units to full-arch.</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Drill className="h-6 w-6" />
                </div>
              </div>
              <div className="flex items-center text-white font-bold text-sm transition-colors">
                View Protocol <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <img src="/images/implants.png" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-60 transition-all duration-700 scale-100 group-hover:scale-110" alt="" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 transition-opacity duration-500" />
          </Link>

          {/* 2. Imaging Center (Wide) */}
          <Link href="/services/imaging-center" className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-background p-8 hover:shadow-premium hover:glow transition-all duration-500 shadow-sm">
            <div className="relative z-20 flex flex-col h-full justify-between">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white transition-colors">Imaging Center</h3>
                  <p className="text-sm text-white/80 max-w-xs transition-colors">High-fidelity CBCT and professional facial scanning.</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <Camera className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center text-white font-bold text-sm transition-colors">
                View Protocol <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <img src="/images/imaging.png" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-60 transition-all duration-700 scale-100 group-hover:scale-110" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 transition-opacity duration-500" />
          </Link>

          {/* 3. Clear Aligners (Small) */}
          <Link href="/services/clear-aligners" className="group relative overflow-hidden rounded-[2.5rem] bg-background p-8 hover:shadow-premium hover:glow transition-all duration-500 shadow-sm">
            <div className="relative z-20 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white transition-colors">Aligner Staging</h3>
                  <p className="text-xs text-white/70 transition-colors">Digital movement planning.</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <Activity className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center text-white font-bold text-xs transition-colors">
                View <ChevronRight className="ml-1 h-3 w-3" />
              </div>
            </div>
            <img src="/images/aligners.png" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-60 transition-all duration-700 scale-110 group-hover:scale-125" alt="" />
            <div className="absolute inset-0 bg-black/40 z-10 transition-colors" />
          </Link>

          {/* 4. Digital Smile Design (Small) */}
          <Link href="/services/digital-smile-design" className="group relative overflow-hidden rounded-[2.5rem] bg-background p-8 hover:shadow-premium hover:glow transition-all duration-500 shadow-sm">
            <div className="relative z-20 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white transition-colors">Smile Design</h3>
                  <p className="text-xs text-white/70 transition-colors">Aesthetic simulations.</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center text-white font-bold text-xs transition-colors">
                View <ChevronRight className="ml-1 h-3 w-3" />
              </div>
            </div>
            <img src="/images/smile.png" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-60 transition-all duration-700 scale-110 group-hover:scale-125" alt="" />
            <div className="absolute inset-0 bg-black/40 z-10 transition-colors" />
          </Link>

          {/* 5. CAD Prosthetics (Wide) */}
          <Link href="/services/prosthetics" className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-background p-8 hover:shadow-premium hover:glow transition-all duration-500 shadow-sm">
            <div className="relative z-20 flex flex-col h-full justify-between">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white transition-colors">CAD Prosthetics</h3>
                  <p className="text-sm text-white/80 max-w-xs transition-colors">Single crowns to complex All-on-X restorative frameworks.</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <Monitor className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center text-white font-bold text-sm transition-colors">
                View Protocol <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <img src="/images/cad.png" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-60 transition-all duration-700 scale-100 group-hover:scale-110" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 transition-opacity duration-500" />
          </Link>

          {/* 6. Production & Fabrication (Wide) */}
          <Link href="/services/production" className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] border bg-background p-8 hover:border-primary/50 hover:shadow-premium hover:glow transition-all duration-500 shadow-sm">
            <div className="relative z-20 flex flex-col h-full justify-between">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white transition-colors">Fabrication Center</h3>
                  <p className="text-sm text-white/80 max-w-xs transition-colors">Industrial 5-axis milling and precision 3D printing facility.</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <Box className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center text-white font-bold text-sm transition-colors">
                View Protocol <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <img src="/images/milling.png" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-60 transition-all duration-700 scale-100 group-hover:scale-110" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 transition-opacity duration-500" />
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default BentoGrid;
