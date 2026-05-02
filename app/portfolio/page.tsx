import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section>
        <MaxWidthWrapper>
          <SectionHeader 
            badge="Clinical Evidence"
            title="Success by Design."
            description="Explore our archive of successful clinical outcomes. Every case presented here was planned and produced in our digital ecosystem."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            {[
              {
                title: "Full-Arch Guided Surgery",
                category: "Implant Planning",
                challenge: "Terminal dentition with severe bone resorption.",
                solution: "Bone-supported surgical guide with immediate provisional loading.",
                outcome: "Successful 6-implant placement with perfect primary stability."
              },
              {
                title: "Anterior Aesthetic Rehab",
                category: "Prosthetics",
                challenge: "Multiple diastemas and peg laterals.",
                solution: "Digital Smile Design followed by 8 ultra-thin Zirconia veneers.",
                outcome: "Minimally invasive preparation with 100% patient satisfaction."
              }
            ].map((caseStudy, i) => (
              <Card key={i} className="rounded-[2.5rem] border-none shadow-xl overflow-hidden group bg-muted/20">
                <div className="aspect-video bg-muted border-b flex items-center justify-center text-muted-foreground relative">
                  <span className="font-bold uppercase tracking-widest opacity-40">Clinical Case Photos</span>
                  <Badge className="absolute top-6 left-6 rounded-full">{caseStudy.category}</Badge>
                </div>
                <CardContent className="p-10 space-y-8">
                  <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Challenge</p>
                      <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Solution</p>
                      <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <p className="text-xs font-bold text-primary italic">Outcome: {caseStudy.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
