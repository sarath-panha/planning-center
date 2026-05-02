import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Box, 
  CheckCircle2, 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  Zap,
  Printer,
  Drill,
  Sparkles,
  ChevronRight,
  Search,
  Settings
} from 'lucide-react';

export default function Production() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeader 
                badge="Manufacturing"
                title="Industrial Fabrication. <br /><span className='text-primary'>Clinical Precision.</span>"
                description="Our state-of-the-art production center utilizes industrial-grade equipment and biocompatible materials to fabricate products that exceed clinical standards."
              />
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full shadow-lg shadow-primary/20" asChild>
                  <Link href="/portal/start">Order Fabrication</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                   <Link href="/pricing">Material Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-muted group">
            <img src="/images/milling.png" alt="Industrial Dental Milling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8">
               <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/30 text-white">
                 <Settings className="h-5 w-5" />
                 <span className="text-sm font-bold uppercase tracking-widest">5-Axis Milling & Printing</span>
               </div>
            </div>
          </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="py-24 bg-muted/30 border-y">
        <MaxWidthWrapper>
          <SectionHeader 
            badge="Capabilities"
            title="Industrial Grade Output"
            description="We utilize the best hardware in the industry for repeatable excellence."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
            {[
              { icon: <Drill />, title: "5-Axis Milling", desc: "Uncompromising accuracy for Zirconia, Titanium, and PMMA.", apps: ["Crowns & Bridges", "Abutments"] },
              { icon: <Printer />, title: "3D Printing", desc: "High-resolution resin printing for clinical appliances.", apps: ["Surgical Guides", "Models"] },
              { icon: <Sparkles />, title: "Characterization", desc: "Master technician finishing, staining, and glazing.", apps: ["Vitality Glaze", "Polishing"] }
            ].map((cap, i) => (
              <Card key={i} className="border-none shadow-sm rounded-3xl overflow-hidden group bg-background">
                <CardContent className="p-8 space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    {React.cloneElement(cap.icon as React.ReactElement<{ className?: string }>, { className: "h-6 w-6" })}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">{cap.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                  <div className="pt-4 border-t space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Applications</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.apps.map((app, j) => (
                        <span key={j} className="text-[11px] px-2 py-1 rounded bg-muted font-medium">{app}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="py-24 bg-foreground text-background rounded-[3rem] mx-4 sm:mx-8">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white tracking-tight leading-tight">Rapid Turnaround. <br />Global Delivery.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Because design and fabrication happen under one roof, we eliminate third-party delays. Experience the efficiency of an integrated workflow.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <p className="text-3xl font-black text-primary">24h</p>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-60">Design Phase</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-black text-primary">48h</p>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-60">Production</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl space-y-8">
               <div className="flex items-center gap-4">
                 <Truck className="h-10 w-10 text-primary" />
                 <h3 className="text-2xl font-bold text-white">Logistics Support</h3>
               </div>
               <p className="text-muted-foreground text-sm">We provide secure, tracked shipping for every case, ensuring your restorations arrive in pristine condition.</p>
               <Button variant="secondary" className="w-full rounded-full font-bold" asChild>
                 <Link href="/portal/start">Start a Production Order</Link>
               </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* Quality Control Section */}
      <section className="py-24 bg-muted/30">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeader 
                badge="Quality Assurance"
                title="Microscopic Precision. <br/> Certified Materials."
                description="Our production facility adheres to strict medical-grade standards. Every restoration is inspected under magnification before dispatch."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                {[
                  { icon: <ShieldCheck className="h-5 w-5" />, title: "CE & ISO Materials", desc: "We only use certified biocompatible Zirconia and Titanium." },
                  { icon: <Search className="h-5 w-5" />, title: "Microscopic Audit", desc: "100% inspection of margins and fit under 20x magnification." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                 <img src="/images/zirconia-disc.png" alt="Zirconia Disc" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-square rounded-3xl overflow-hidden shadow-xl mt-12">
                 <img src="/images/inspection.png" alt="Microscope Inspection" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
