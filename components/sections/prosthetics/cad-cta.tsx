import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Button } from '@/components/ui/button';
import { Layers } from 'lucide-react';

const CADCTA = () => {
  return (
    <section className="py-20">
      <MaxWidthWrapper>
        <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center space-y-8 relative overflow-hidden shadow-2xl shadow-primary/40">
          <div className="absolute top-0 left-0 -z-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
          <Layers className="h-16 w-16 text-white/20 mx-auto relative z-10" />
          <h2 className="text-3xl md:text-5xl font-bold text-white relative z-10">High-Precision Design on Demand</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto relative z-10">
            Professional exocad design services for labs and clinics. Scalable, accurate, and ready for production.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Button size="xl" variant="secondary" className="rounded-full font-bold" asChild>
              <Link href="/portal/start">Launch Design Case</Link>
            </Button>
            <Button size="xl" variant="outline" className="rounded-full text-white border-white/30 hover:bg-white/10" asChild>
              <Link href="/contact">Consult a Designer</Link>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CADCTA;
