'use client';

import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { 
  Camera, 
  Monitor, 
  PenTool, 
  Cpu 
} from 'lucide-react';

const Workflow = () => {
  const steps = [
    { 
      title: "Digital Imaging", 
      desc: "Capturing high-definition CBCT and 3D intraoral data to establish a precise digital foundation.",
      icon: <Camera className="h-6 w-6" />
    },
    { 
      title: "Digital Planning", 
      desc: "Comprehensive case analysis and treatment mapping driven by expert clinical insight.",
      icon: <Monitor className="h-6 w-6" />
    },
    { 
      title: "CAD Design", 
      desc: "Precision engineering and digital sculpting in exocad and 3Shape for restorative excellence.",
      icon: <PenTool className="h-6 w-6" />
    },
    { 
      title: "CAM Production", 
      desc: "State-of-the-art 5-axis milling and 3D printing to fabricate high-precision dental appliances.",
      icon: <Cpu className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-32 bg-slate-50 border-y border-slate-200">
      <MaxWidthWrapper>
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center">
            <SectionHeader 
              badge="Precision Pipeline"
              title="Our Integrated Workflow"
              description="A seamless, end-to-end digital journey designed to provide absolute predictability and clinical excellence for every case."
              align="center"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Desktop Horizontal Connecting Line */}
            <div className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden lg:block" />
            
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center space-y-6 group">
                <div className="w-20 h-20 rounded-[2rem] bg-white shadow-premium flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10 border border-slate-100">
                  {step.icon}
                </div>
                <div className="space-y-3">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded">Stage 0{i+1}</span>
                    <h4 className="font-bold text-lg">{step.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
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
