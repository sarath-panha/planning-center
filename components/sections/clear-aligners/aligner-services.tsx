import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';

const AlignerServices = () => {
  const services = [
    { name: "Diagnostic Setup", desc: "Full 3D orthodontic analysis and goal setting.", price: "$80" },
    { name: "Full Aligner Design", desc: "Complete stage-by-stage movement design.", price: "$350" },
    { name: "Refinement Planning", desc: "Mid-treatment adjustments and new scans.", price: "$150" },
    { name: "IPR & Attachment Report", desc: "Detailed clinical protocol for the dentist.", price: "$50" },
    { name: "Retainer Design", desc: "Precision design for post-treatment stability.", price: "$40" },
    { name: "Indirect Bonding Tray", desc: "Digital bracket placement and tray design.", price: "$120" }
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <SectionHeader
              badge="Orthodontic Fees"
              title="Predictable Aligner Planning"
              description="Transparent, per-case or per-arch pricing designed to help you grow your orthodontic practice."
            />
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-premium transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">{service.name}</h4>
                    <span className="text-primary font-black">{service.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AlignerServices;
