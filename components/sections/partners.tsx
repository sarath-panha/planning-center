'use client';

import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';

const Partners = () => {
  const brands = [
    "Straumann", "Nobel Biocare", "Osstem", "Invisalign", "Spark", "Shining3D", 
    "exocad", "3Shape", "Medit", "Formlabs", "Roland DGA", "vhf"
  ];

  // Double the brands for infinite scroll
  const allBrands = [...brands, ...brands];

  return (
    <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
      <MaxWidthWrapper>
        <div className="text-center mb-8">
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">Compatible with Industry Leaders</p>
        </div>
      </MaxWidthWrapper>
      
      <div className="relative group">
        {/* Edge Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-20" />
        
        <div className="flex w-[200%] animate-marquee">
          {allBrands.map((brand, i) => (
            <div key={i} className="flex items-center justify-center px-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
              <span className="text-xl font-black tracking-tighter text-foreground whitespace-nowrap">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
