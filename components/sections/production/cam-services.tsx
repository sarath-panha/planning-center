import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';

const CAMServices = () => {
  const services = [
    { name: "Zirconia Milling", desc: "High-translucency multi-layer zirconia.", price: "from $40" },
    { name: "PMMA Milling", desc: "Long-term provisionals and mock-ups.", price: "from $25" },
    { name: "Titanium Milling", desc: "Custom abutments and implant bars.", price: "from $120" },
    { name: "3D Resin Printing", desc: "Models, surgical guides, and splints.", price: "from $15" },
    { name: "Sintering Service", desc: "Professional sintering for your in-house mills.", price: "from $10" },
    { name: "Glaze & Stain", desc: "Expert aesthetic finishing for restorations.", price: "from $20" }
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <SectionHeader
              badge="Production Fees"
              title="Industrial Fabrication"
              description="Scalable production services for dental labs and clinics. High-quality materials and rapid turnaround."
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

export default CAMServices;
