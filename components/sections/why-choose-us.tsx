'use client';

import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { 
  Camera, 
  Monitor, 
  Box, 
  Zap 
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Comprehensive Imaging",
      desc: "On-site state-of-the-art CBCT, facial scanning, and intraoral capture for flawless data foundations.",
      icon: <Camera className="h-6 w-6" />
    },
    {
      title: "Clinical Precision",
      desc: "Every case is planned by master technicians and reviewed by clinical experts for anatomical accuracy.",
      icon: <Monitor className="h-6 w-6" />
    },
    {
      title: "In-House Production",
      desc: "Industrial-grade 3D printing and 5-axis milling ensure your restorations exceed industrial standards.",
      icon: <Box className="h-6 w-6" />
    },
    {
      title: "Rapid Turnaround",
      desc: "Digital designs within 24-48 hours and physical products shipped fast to keep your clinic moving.",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/why-choose-us-bg.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      <MaxWidthWrapper className="relative z-10">
        <div className="space-y-20">
          <div className="text-center">
            <SectionHeader 
              badge="The EcoDent Advantage"
              title="Your True End-to-End Partner"
              description="Transitioning to a fully digital workflow shouldn't slow you down. We act as an extension of your clinic, providing a seamless bridge from capture to fabrication."
              align="center"
              className="[&>h2]:text-white [&>p]:text-white/70 [&>div>div]:bg-white/10 [&>div>div]:text-primary-foreground [&>div>div]:border-white/20"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-start p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-primary/50 group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-6 border border-white/10">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-lg mb-3 text-white">{feature.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default WhyChooseUs;
