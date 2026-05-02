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
    <section className="py-32 bg-white">
      <MaxWidthWrapper>
        <div className="space-y-20">
          <div className="text-center">
            <SectionHeader 
              badge="The DentaPlan Advantage"
              title="Your True End-to-End Partner"
              description="Transitioning to a fully digital workflow shouldn't slow you down. We act as an extension of your clinic, providing a seamless bridge from capture to fabrication."
              className="items-center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-start p-8 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-premium transition-all duration-500 border border-transparent hover:border-slate-100 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-6">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-lg mb-3">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default WhyChooseUs;
