import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

const DSDHero = () => {
  return (
    <section className="relative pt-40 pb-24 flex items-center bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/dsd-hero.png"
          alt="Digital Smile Design Suite"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      <MaxWidthWrapper className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-[10px] font-bold uppercase tracking-widest mx-auto">
            <Sparkles className="h-3 w-3" />
            <span>Aesthetic Excellence</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Facially Driven. <br />
            <span className="text-primary">Emotionally Targeted.</span>
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            We bridge the gap between clinical requirements and patient desires using state-of-the-art Digital Smile Design protocols that guarantee aesthetic predictability.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="xl" className="rounded-full shadow-2xl shadow-primary/30 group bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/portal/start">
                Start Smile Design
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default DSDHero;
