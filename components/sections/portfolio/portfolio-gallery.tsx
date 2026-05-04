'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { CheckCircle2, Search } from 'lucide-react';
import { cases, categories } from '@/lib/data/portfolio';

const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCases = activeCategory === "All" 
    ? cases 
    : cases.filter(c => c.category === activeCategory);

  return (
    <section className="py-24 bg-white">
      <MaxWidthWrapper>
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border",
                activeCategory === cat 
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
                  : "bg-transparent border-slate-200 text-slate-500 hover:border-primary/30 hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item, i) => (
            <Link key={i} href={`/portfolio/${item.slug}`} className="group relative block">
              <Card className="rounded-[2.5rem] border-none shadow-premium hover:shadow-2xl transition-all duration-500 overflow-hidden bg-slate-50 flex flex-col h-full p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Badge className="absolute top-6 left-6 rounded-full bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/40">
                    {item.category}
                  </Badge>
                </div>
                
                <CardContent className="p-8 flex flex-col flex-grow space-y-6">
                  <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                  
                  <div className="space-y-4 mb-4">
                    <div className="space-y-1">
                      <p className="text-[9px] font-black uppercase tracking-widest text-primary/60">Challenge</p>
                      <p className="text-xs text-slate-600 line-clamp-2">{item.challenge}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] font-black uppercase tracking-widest text-primary/60">Solution</p>
                      <p className="text-xs text-slate-600 line-clamp-2">{item.solution}</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-200 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-900 italic">Outcome: {item.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="py-24 text-center">
            <Search className="h-12 w-12 text-slate-200 mx-auto mb-4" />
            <p className="text-slate-500">No cases found in this category.</p>
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
};

export default PortfolioGallery;
