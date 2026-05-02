import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Cpu, Settings, Award, ShieldCheck, Microscope, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      
      {/* 2.1: Introduction */}
      <section className="relative">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <MaxWidthWrapper>
          <div className="max-w-4xl">
            <SectionHeader 
              badge="Our Story"
              title="The Future of Dentistry: Captured, Planned, and Produced Today."
              description="At DENTAPLAN, we bridge the gap between clinical expertise and cutting-edge digital technology."
            />
            <div className="text-lg leading-relaxed text-muted-foreground space-y-6">
              <p>
                Founded by a team of forward-thinking dental professionals and elite CAD/CAM technicians, our mission is to provide an uninterrupted, end-to-end digital workflow—making advanced dentistry accessible, efficient, and highly predictable for clinics worldwide.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* 2.2: Mission & Vision */}
      <section className="bg-muted/30 py-24 border-y border-muted">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-background border shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower clinicians with the highest level of digital precision, reducing chair-time and enhancing patient outcomes through expert planning and production.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-background border shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global benchmark for digital dental partnerships, where technology and clinical artistry meet seamlessly.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* 2.3: Technology Stack */}
      <section>
        <MaxWidthWrapper>
          <SectionHeader 
            badge="Technical Foundation"
            title="Industrial-Grade Infrastructure"
            description="We invest in the best technology so you don't have to. Our facility is equipped with industry-standard hardware and software."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {[
              { icon: <Cpu />, name: "Exocad & 3Shape", desc: "Native CAD workstations" },
              { icon: <Microscope />, name: "High-Res Printing", desc: "Biocompatible resin output" },
              { icon: <Settings />, name: "5-Axis Milling", desc: "Industrial precision margins" },
              { icon: <ShieldCheck />, name: "Secure Cloud", desc: "HIPAA-compliant data" }
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {React.cloneElement(tech.icon as React.ReactElement<{ className?: string }>, { className: "h-8 w-8" })}
                </div>
                <h4 className="font-bold">{tech.name}</h4>
                <p className="text-sm text-muted-foreground">{tech.desc}</p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* 2.4: Values */}
      <section className="py-24 bg-foreground text-background rounded-[3rem] mx-4 sm:mx-8">
        <MaxWidthWrapper>
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Why Clinics Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Precision First", desc: "Every case is reviewed by a master technician for clinical feasibility." },
              { title: "Rapid Turnaround", desc: "Digital design approval in 24h, fabrication and shipping in 48h." },
              { title: "Peer-to-Peer Support", desc: "Direct access to our planning technicians for clinical discussion." }
            ].map((val, i) => (
              <div key={i} className="space-y-4">
                <div className="text-primary font-black text-4xl opacity-50">0{i+1}</div>
                <h4 className="text-xl font-bold text-white">{val.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
