import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Drill, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight,
  Monitor,
  Zap,
  Target
} from 'lucide-react';

export default function ImplantPlanning() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      {/* 8.1: Service Hero */}
      <section className="relative">
        <div className="absolute top-0 left-0 -z-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeader 
                badge="Surgical Planning"
                title="Guided Surgery: Precision from Start to Finish."
                description="Minimize risks and maximize surgical outcomes with our comprehensive implant planning service. We convert your patient scans into a flawless digital surgical blueprint."
              />
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full shadow-lg shadow-primary/20" asChild>
                  <Link href="/portal/start">Start Planning Case</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <Link href="/pricing">View Planning Fees</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-muted group">
              <img src="/images/implants.png" alt="Guided Surgery Planning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8">
                 <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/30 text-white">
                   <Monitor className="h-5 w-5" />
                   <span className="text-sm font-bold uppercase tracking-widest">Live exocad Session</span>
                 </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* 8.2: Clinical Workflow */}
      <section className="py-24 bg-muted/30 border-y border-muted/50">
        <MaxWidthWrapper>
          <SectionHeader 
            badge="The Protocol"
            title="A Systematic Approach"
            description="Our technicians follow a rigorous clinical protocol to ensure every guide is safe and accurate."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {[
              {
                title: "Data Merging",
                desc: "Precise alignment of CBCT (DICOM) and Intraoral scans (STL) to create a virtual patient model.",
                icon: <Zap className="h-5 w-5" />
              },
              {
                title: "Prosthetic Driven",
                desc: "We plan implant positions based on the final tooth position (wax-up) for optimal aesthetics and load.",
                icon: <Target className="h-5 w-5" />
              },
              {
                title: "Surgical Design",
                desc: "Designing the guide with optimal support (tooth, mucosa, or bone) and sleeve placement.",
                icon: <Drill className="h-5 w-5" />
              }
            ].map((step, i) => (
              <Card key={i} className="border-none shadow-sm bg-background hover:shadow-md transition-all duration-300 rounded-3xl overflow-hidden group">
                <CardContent className="p-8 space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">{step.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* 8.4: Deliverables */}
      <section>
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <SectionHeader 
                badge="What You Get"
                title="Comprehensive Case Deliverables"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Virtual Planning Report (PDF)",
                  "Surgical Guide (Physical/STL)",
                  "Custom Healing Abutments",
                  "Immediate Prov. Stl Files",
                  "Drill Protocol Sheet",
                  "Bone Reduction Guides"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-muted/50 rounded-2xl border border-muted">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-12 rounded-[3rem] bg-primary text-primary-foreground relative overflow-hidden flex flex-col justify-center">
              <div className="relative z-10 space-y-6">
                 <ShieldCheck className="h-12 w-12 text-white/50" />
                 <h3 className="text-3xl font-bold leading-tight">Guaranteed Accuracy. Clinically Proven.</h3>
                 <p className="text-primary-foreground/80 leading-relaxed text-lg">
                   Our planning center has processed over 10,000 implants with zero planning failures. We stand by our precision.
                 </p>
                 <div className="pt-4">
                    <Button variant="secondary" size="lg" className="rounded-full font-bold group" asChild>
                       <Link href="/portfolio">
                         View Clinical Cases
                         <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                       </Link>
                    </Button>
                 </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
