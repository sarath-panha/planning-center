import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Camera,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Scan,
  Layers,
  Zap,
  ChevronRight
} from 'lucide-react';

export default function ImagingCenter() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeader
                badge="Digital Diagnostics"
                title="Capture Every Detail. Eliminate Every Doubt."
                description="Our clinical imaging center is equipped with high-resolution CBCT and facial scanning technology. We provide clinicians with the crystal-clear data required for advanced diagnosis and predictable planning."
              />
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full shadow-lg shadow-primary/20" asChild>
                  <Link href="/portal/start">Book a Patient Scan</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <Link href="/pricing">View Imaging Fees</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-muted group">
              <img src="/images/imaging.png" alt="Clinical Imaging Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/30 text-white">
                  <Camera className="h-5 w-5" />
                  <span className="text-sm font-bold uppercase tracking-widest">CBCT & Facial Scanning</span>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="py-24 bg-muted/30 border-y">
        <MaxWidthWrapper>
          <SectionHeader
            badge="Technology"
            title="Advanced Diagnostic Capture"
            description="We utilize industrial-grade sensors to ensure minimal radiation and maximum clarity."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {[
              { title: "Ultra-High Res CBCT", desc: "Selectable FOV for single tooth or full-arch maxilla/mandible studies.", icon: <Layers /> },
              { title: "3D Facial Scanning", desc: "Integrating facial skin topography for restorative-driven design.", icon: <Scan /> },
              { title: "Clinical Photo Sets", desc: "Standardized orthodontic and aesthetic photography protocols.", icon: <Camera /> }
            ].map((tech, i) => (
              <Card key={i} className="border-none shadow-sm rounded-3xl overflow-hidden group">
                <CardContent className="p-8 space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    {React.cloneElement(tech.icon as React.ReactElement<{ className?: string }>, { className: "h-6 w-6" })}
                  </div>
                  <h4 className="text-xl font-bold">{tech.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tech.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="aspect-video rounded-[2rem] bg-foreground flex items-center justify-center text-background/40">
              <p className="font-bold italic">Visual: Interactive 3D scan viewer</p>
            </div>
            <div className="space-y-8">
              <SectionHeader
                badge="Deliverables"
                title="Manufacturer-Ready Data"
                description="Receive your data in multiple formats compatible with all major planning software."
              />
              <ul className="space-y-4">
                {[
                  "Full DICOM datasets (unencrypted)",
                  "Cleaned and trimmed STL/OBJ surface scans",
                  "Standardized clinical JPG sets",
                  "Integrated Facial/CBCT merged files"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-medium border-b border-muted pb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
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
