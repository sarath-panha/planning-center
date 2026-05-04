import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Sparkles } from 'lucide-react';

const PortfolioHero = () => {
  return (
    <section className="relative pt-40 pb-24 flex items-center bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/why-choose-us-bg.png"
          alt="Clinical Excellence"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
      </div>

      <MaxWidthWrapper className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-[10px] font-bold uppercase tracking-widest mx-auto">
            <Sparkles className="h-3 w-3" />
            <span>Success by Design</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Clinical <span className="text-primary">Portfolio.</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Explore our archive of successful clinical outcomes. Every case presented here was planned and produced within the EcoDent digital ecosystem.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PortfolioHero;
