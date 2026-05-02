'use client';

import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { 
  Scan, 
  Monitor, 
  CheckCircle2 
} from 'lucide-react';

const Workflow = () => {
  const steps = [
    { 
      title: "Digital Capture", 
      desc: "Upload IOS scans and clinical photos to our secure portal.",
      icon: <Scan className="h-6 w-6" />
    },
    { 
      title: "AI-Assisted Planning", 
      desc: "Drafted by master technicians in exocad or 3Shape.",
      icon: <Monitor className="h-6 w-6" />
    },
    { 
      title: "Clinician Approval", 
      desc: "Review and refine the 3D plan. Move to fabrication.",
      icon: <CheckCircle2 className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-32 bg-slate-50 border-y border-slate-200">
      <MaxWidthWrapper>
        <div className="max-w-5xl mx-auto space-y-20">
          <div className="text-center">
            <SectionHeader 
              badge="Streamlined Pipeline"
              title="Your Laboratory, Integrated."
              description="Our clinical workflow is designed to feel like an extension of your chairside practice. Fast, transparent, and absolutely precise."
              className="items-center"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Desktop Horizontal Connecting Line */}
            <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden md:block" />
            
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center space-y-6 group">
                <div className="w-20 h-20 rounded-[2rem] bg-white shadow-premium flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10">
                  {step.icon}
                </div>
                <div className="space-y-3">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded">Phase 0{i+1}</span>
                    <h4 className="font-bold text-xl">{step.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Workflow;
