import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { BadgeDollarSign, ShieldCheck, Zap } from 'lucide-react';

const PricingHero = () => {
  return (
    <section className="relative h-[70vh] flex items-center bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cad-hero.png"
          alt="Transparent Value"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      <MaxWidthWrapper className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-[10px] font-bold uppercase tracking-widest">
              <BadgeDollarSign className="h-3 w-3" />
              <span>Transparent Value</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Value-Driven <br />
              <span className="text-primary">Clinical Partners.</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              Predictable fee schedules designed to help you grow your practice. No subscriptions, no hidden setup costs—just pure clinical output.
            </p>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { icon: <ShieldCheck />, title: "No Subscriptions", desc: "Pay only for the cases you submit." },
              { icon: <Zap />, title: "Flat Fees", desc: "Simple per-case or per-arch pricing." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 space-y-4 hover:bg-white/10 transition-colors">
                <div className="text-primary">{React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { className: "h-8 w-8" })}</div>
                <h4 className="text-white font-bold">{feature.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PricingHero;
