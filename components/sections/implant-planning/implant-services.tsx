import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';

const ImplantServices = () => {
  const services = [
    { name: "Single Implant Planning", desc: "Complete prosthetic-driven planning and guide design.", price: "$150" },
    { name: "Multi-Unit Planning", desc: "Targeted planning for 2-4 implants in a single quadrant.", price: "$280" },
    { name: "Full Arch Planning", desc: "Comprehensive All-on-X planning and bone reduction.", price: "$450" },
    { name: "Surgical Guide Design", desc: "Clean STL design ready for in-house printing.", price: "$80" },
    { name: "Bone Reduction Guide", desc: "Precision design for complex surgical protocols.", price: "$120" },
    { name: "Immediate Provisionals", desc: "Same-day prosthetic design for immediate load.", price: "$100" }
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <SectionHeader
              badge="Planning Fees"
              title="Predictable Case Costs"
              description="Standardized pricing for every complexity level. Transparent, clinical-focused planning services."
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

export default ImplantServices;
