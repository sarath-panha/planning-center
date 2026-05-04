import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { BadgeDollarSign } from 'lucide-react';

const PricingHero = () => {
  return (
    <section className="relative pt-40 pb-24 flex items-center bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cad-hero.png"
          alt="Transparent Value"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      <MaxWidthWrapper className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-[10px] font-bold uppercase tracking-widest mx-auto">
              <BadgeDollarSign className="h-3 w-3" />
              <span>Transparent Value</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Value-Driven <br />
              <span className="text-primary">Clinical Partners.</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-xl mx-auto">
              Predictable fee schedules designed to help you grow your practice. No subscriptions, no hidden setup costs—just pure clinical output.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PricingHero;
