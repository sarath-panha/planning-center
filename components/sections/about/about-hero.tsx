import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Target } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative h-screen flex items-center bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/imaging-suite.png"
          alt="EcoDent Lab"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <MaxWidthWrapper className="relative z-10">
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-[10px] font-bold uppercase tracking-widest">
            <Target className="h-3 w-3" />
            <span>Our Vision</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Digital Artistry. <br />
            <span className="text-primary">Clinical Precision.</span>
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-3xl">
            EcoDent is a premier digital planning and production center dedicated to bridging the gap between clinical expertise and cutting-edge digital technology. We provide an uninterrupted, end-to-end digital workflow for clinics worldwide.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutHero;
