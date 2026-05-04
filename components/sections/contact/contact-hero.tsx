import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { MessageSquare } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative h-[75vh] flex items-center bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/why-choose-us-bg.png"
          alt="Contact EcoDent"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      <MaxWidthWrapper className="relative z-10">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-[10px] font-bold uppercase tracking-widest">
            <MessageSquare className="h-3 w-3" />
            <span>Direct Access</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Let's Build Your <br />
            <span className="text-primary">Digital Workflow.</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl">
            Have a complex case or need technical guidance? Our clinical support team is standing by to help you integrate precision planning into your practice.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactHero;
