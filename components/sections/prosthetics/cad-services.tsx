import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';

const CADServices = () => {
  const services = [
    { name: "Single Crown Design", desc: "Anatomically perfect design for any material.", price: "$25" },
    { name: "3-Unit Bridge Design", desc: "Precision connector and margin design.", price: "$70" },
    { name: "Custom Abutment Design", desc: "Titanium or Zirconia interface optimization.", price: "$45" },
    { name: "Full Arch Bridge Design", desc: "Complex multi-unit restorative design.", price: "$250" },
    { name: "Bite Splint Design", desc: "Functional design for night guards.", price: "$40" },
    { name: "All-on-X Design", desc: "Digital design for hybrid restorations.", price: "$300" }
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <SectionHeader
              badge="Design Fees"
              title="Expert CAD Services"
              description="Professional exocad design services with guaranteed fit and clinical functionality."
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

export default CADServices;
