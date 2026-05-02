import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Monitor, 
  Printer,
  Box,
  LayoutGrid,
  Zap,
  ChevronRight
} from 'lucide-react';

export default function ClearAligners() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-7xl h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeader 
                badge="Orthodontic Staging"
                title="White-Label Aligner Staging. <br /><span className='text-primary'>Your Clinic, Your Brand.</span>"
                description="Stop losing margins to major aligner brands. We provide the expert staging and manufacturing—you provide the clinical care. Scale your orthodontic department with confidence."
              />
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full shadow-lg shadow-primary/20" asChild>
                  <Link href="/portal/start">Start Aligner Case</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <Link href="/pricing">Pricing Guide</Link>
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="relative aspect-video rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-muted group">
                <img src="/images/aligners.png" alt="Clear Aligner Therapy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/30 text-white">
                    <Zap className="h-5 w-5" />
                    <span className="text-sm font-bold uppercase tracking-widest">Digital Orthodontics</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-background border shadow-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <p className="font-bold text-sm">Bio-Mechanical <br />Optimized</p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="py-24 bg-foreground text-background rounded-[3rem] mx-4 sm:mx-8">
        <MaxWidthWrapper>
          <SectionHeader 
            badge="The Process"
            title="Professional Orthodontic Staging"
            description="Our technicians use advanced AI-assisted software to calculate incremental tooth movements based on your clinical prescription."
            className="text-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
            {[
              { title: "Occlusal Evaluation", desc: "Analyzing the initial bite and determining optimal tooth positions for stability." },
              { title: "Incremental Staging", desc: "Calculating the exact number of steps and movement per aligner for safety." },
              { title: "IPR & Attachments", desc: "Strategic planning of Interproximal Reduction and resin attachment positions." }
            ].map((step, i) => (
              <div key={i} className="space-y-4">
                <div className="text-primary font-black text-5xl opacity-30">0{i+1}</div>
                <h4 className="text-xl font-bold text-white">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="p-10 rounded-[2.5rem] border bg-muted/30 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Monitor className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Digital Staging Package</h3>
                <p className="text-muted-foreground leading-relaxed">Everything you need to manufacture aligners in your own lab.</p>
                <ul className="space-y-3">
                  {["3D Consultation Simulation", "IPR & Attachment Protocol", "Sequential STL Files"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
             </div>

             <div className="p-10 rounded-[2.5rem] border bg-primary text-primary-foreground space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center">
                  <Printer className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Full Fabrication</h3>
                <p className="text-primary-foreground/80 leading-relaxed">Receive a complete, ready-to-deliver treatment boxed for your patient.</p>
                <ul className="space-y-3">
                  {["Sequential Models", "Premium Laser-Marked Aligners", "Clinical Packaging"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4 text-white/50" /> {item}
                    </li>
                  ))}
                </ul>
             </div>
           </div>
        </MaxWidthWrapper>
      </section>
      {/* Fabrication Excellence Section */}
      <section className="py-24 bg-muted/30">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                  <img src="/images/aligner-print.png" alt="3D Printing Aligners" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 rounded-3xl bg-background border shadow-sm">
                  <p className="text-xs font-bold uppercase text-primary">01. High-Res Printing</p>
                  <p className="text-sm text-muted-foreground mt-2">100 micron precision for every orthodontic movement.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-6 rounded-3xl bg-background border shadow-sm">
                  <p className="text-xs font-bold uppercase text-primary">02. Manual Finishing</p>
                  <p className="text-sm text-muted-foreground mt-2">Hand-trimmed edges for maximum patient comfort.</p>
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                  <img src="/images/aligner-finish.png" alt="Manual Finishing" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader 
                badge="In-House Fabrication"
                title="Industrial Precision. <br/> Patient Comfort."
                description="We don't just plan; we produce. Our aligners are fabricated using high-resolution 3D printing technology and hand-finished for a seamless fit."
              />
              <ul className="space-y-6 mt-8">
                {[
                  "Medical-grade biocompatible resins",
                  "Automated thermoforming for consistent thickness",
                  "Double-stage quality control inspection",
                  "Serialized tracking for every aligner"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
