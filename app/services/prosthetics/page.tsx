import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Ruler, 
  CheckCircle2, 
  ArrowRight, 
  Monitor, 
  Cpu,
  Layers,
  Zap,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function Prosthetics() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative">
        <div className="absolute top-0 left-0 -z-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeader 
                badge="CAD Design"
                title="Superior Morphology. <br /><span className='text-primary'>Perfect Occlusion.</span>"
                description="Our expert CAD team specializes in high-detail restorative design. Whether it is a single crown or a complex full-arch hybrid, we deliver restorations that fit perfectly and look natural."
              />
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full shadow-lg shadow-primary/20" asChild>
                  <Link href="/portal/start">Send CAD Case</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <Link href="/pricing">View CAD Fees</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-muted group">
            <img src="/images/zirconia-disc.png" alt="Zirconia Disc Fabrication" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8">
               <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/30 text-white">
                 <Monitor className="h-5 w-5" />
                 <span className="text-sm font-bold uppercase tracking-widest">High-Precision CAD Design</span>
               </div>
            </div>
          </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="py-24 bg-muted/30 border-y">
        <MaxWidthWrapper>
          <SectionHeader 
            badge="Expertise"
            title="Restorative Capabilities"
            description="From simple units to complex frameworks."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {[
              "Single & Multi Crowns",
              "Aesthetic Veneers",
              "Implant Abutments",
              "All-on-X Hybrids"
            ].map((cap, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-background border shadow-sm flex flex-col items-center text-center space-y-4 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-lg">{cap}</h4>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-8">
               <SectionHeader 
                 badge="Integration"
                 title="Optimized for Your Lab"
                 description="We speak your language. Whether you mill in-house or rely on us for fabrication, our designs are calibrated to your specific hardware."
               />
               <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6">
                 "If you mill in-house, we tailor design parameters to match your specific 5-axis mill. If we manufacture it, we guarantee a flawless fit."
               </p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="p-8 rounded-3xl bg-foreground text-background space-y-4">
                  <Monitor className="h-8 w-8 opacity-50" />
                  <h4 className="font-bold text-xl text-white">Digital Download</h4>
                  <p className="text-sm text-muted-foreground">Receive exocad or 3Shape construction files instantly.</p>
               </div>
               <div className="p-8 rounded-3xl bg-primary text-primary-foreground space-y-4">
                  <Layers className="h-8 w-8 opacity-50" />
                  <h4 className="font-bold text-xl text-white">Physical Product</h4>
                  <p className="text-sm text-primary-foreground/80">We mill, stain, and glaze the restoration for you.</p>
               </div>
             </div>
           </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
