import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Button } from '@/components/ui/button';
import { Layers, ArrowRight } from 'lucide-react';

const CADHero = () => {
  return (
    <section className="relative h-screen flex items-center bg-slate-950 py-20 lg:py-0">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cad-hero.png"
          alt="CAD Design Suite"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <MaxWidthWrapper className="relative z-10">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-[10px] font-bold uppercase tracking-widest">
            <Layers className="h-3 w-3" />
            <span>Digital Prosthetics</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Expert CAD. <br />
            <span className="text-primary">Flawless Fit.</span>
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
            Our expert technicians leverage exocad's most advanced tools to design high-precision crowns, bridges, and complex implant restorations with micron-level accuracy.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="xl" className="rounded-full shadow-2xl shadow-primary/30 group bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/portal/start">
                Submit Design Case
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="#pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CADHero;
