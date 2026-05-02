import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section>
        <MaxWidthWrapper>
          <SectionHeader 
            badge="Transparent Value"
            title="Professional Fee Schedule."
            description="Simple, flat-fee pricing for all clinical departments. No hidden costs, just predictable digital planning."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {[
              {
                title: "Planning Only",
                price: "$150",
                desc: "Expert CAD planning for in-house production.",
                features: ["Virtual Planning Report", "STL Design Download", "Native Project Files", "Clinical Review Session"]
              },
              {
                title: "Planning + Guide",
                price: "$295",
                desc: "Complete planning and physical guide fabrication.",
                features: ["Everything in Planning", "3D Printed Surgical Guide", "Master Model", "Overnight Shipping"],
                popular: true
              },
              {
                title: "Full Restorative",
                price: "Custom",
                desc: "Comprehensive CAD/CAM restorations.",
                features: ["Custom Abutments", "Monolithic Zirconia", "Stain & Glaze Finish", "Direct Tech Access"]
              }
            ].map((tier, i) => (
              <Card key={i} className={cn(
                "rounded-[2.5rem] border-none shadow-xl flex flex-col p-4",
                tier.popular ? "bg-primary text-primary-foreground scale-105" : "bg-muted/30"
              )}>
                <CardHeader className="p-8 text-center space-y-4">
                  <h3 className="text-xl font-bold uppercase tracking-widest opacity-60">{tier.title}</h3>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-4xl font-black">{tier.price}</span>
                    {tier.price !== "Custom" && <span className="text-sm opacity-60">/case</span>}
                  </div>
                  <p className={cn("text-sm", tier.popular ? "text-primary-foreground/80" : "text-muted-foreground")}>
                    {tier.desc}
                  </p>
                </CardHeader>
                <CardContent className="p-8 flex-1 flex flex-col gap-8">
                  <ul className="space-y-4 flex-1">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm font-medium">
                        <CheckCircle2 className={cn("h-4 w-4", tier.popular ? "text-white" : "text-primary")} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant={tier.popular ? "secondary" : "default"} className="w-full rounded-full font-bold h-12" asChild>
                    <Link href="/portal/start">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Bulk Pricing CTA */}
      <section>
        <MaxWidthWrapper>
          <div className="p-12 rounded-[3rem] bg-foreground text-background flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
            <div className="relative z-10 space-y-6 max-w-xl">
               <h3 className="text-3xl font-bold">Large Clinic or Lab Network?</h3>
               <p className="text-muted-foreground leading-relaxed">We offer volume-based tiered pricing for clinics processing more than 20 cases per month. Contact our accounts team for a custom quote.</p>
               <Button variant="secondary" className="rounded-full" asChild>
                 <Link href="/contact">Inquire About Bulk Rates</Link>
               </Button>
            </div>
            <Zap className="h-48 w-48 text-primary absolute right-[-20px] bottom-[-40px] opacity-20 -rotate-12" />
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

// Helper to handle conditional classes since I'm in a file write
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
