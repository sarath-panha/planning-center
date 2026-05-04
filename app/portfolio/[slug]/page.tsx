import React from 'react';
import { notFound } from 'next/navigation';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Cpu, 
  Layers, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import { cases } from '@/lib/data/portfolio';
import ImagingCTA from '@/components/sections/imaging-center/imaging-cta';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = cases.find((c) => c.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Detail Hero */}
      <section className="relative h-[70vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <MaxWidthWrapper className="relative z-10 pt-20">
          <div className="max-w-4xl space-y-8">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center text-white/60 hover:text-white transition-colors group mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
            <div className="space-y-4">
              <Badge className="rounded-full px-4 py-1 bg-primary/20 border-primary/30 text-primary-foreground">
                {caseStudy.category}
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
                {caseStudy.challenge}
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Case Details */}
      <section className="py-24 bg-white relative">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-16">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Case Overview</h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {caseStudy.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 space-y-6">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">The Challenge</div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {caseStudy.challenge}
                  </p>
                </div>
                <div className="p-10 rounded-[3rem] bg-primary/5 border border-primary/10 space-y-6">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">The Solution</div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>

              <div className="p-12 rounded-[3rem] bg-slate-950 text-white flex items-center justify-between shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] rounded-full" />
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-1">Success Outcome</div>
                    <p className="text-xl font-bold">{caseStudy.outcome}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 rounded-[2.5rem] border border-slate-100 bg-white shadow-premium space-y-8 sticky top-32">
                <h3 className="font-bold text-xl px-2">Technical Specs</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 px-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Software Suite</div>
                      <div className="font-bold text-slate-900">{caseStudy.specs.software}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 px-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Primary Material</div>
                      <div className="font-bold text-slate-900">{caseStudy.specs.material}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 px-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Case Turnaround</div>
                      <div className="font-bold text-slate-900">{caseStudy.specs.turnaround}</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full rounded-full py-6 font-bold text-lg shadow-xl shadow-primary/20" asChild>
                  <Link href="/portal/start">Start Similar Case</Link>
                </Button>

                <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-2">
                  <ShieldCheck className="h-3 w-3 text-primary" />
                  EcoDent Certified Quality
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

    </div>
  );
}
