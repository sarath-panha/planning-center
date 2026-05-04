import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';

const DSDServices = () => {
  const services = [
    { name: "2D Smile Simulation", desc: "Digital before/after for patient motivation.", price: "$60" },
    { name: "3D Mock-up Design", desc: "Facially-driven 3D teeth design in exocad.", price: "$120" },
    { name: "Diagnostic Wax-up", desc: "Complete STL mesh for printing and mock-up.", price: "$180" },
    { name: "Aesthetic Crown Design", desc: "High-end design for anterior restorations.", price: "$45" },
    { name: "Smile Design Veneers", desc: "Ultra-thin design for minimal prep cases.", price: "$50" },
    { name: "Integrated Mock-up", desc: "Merged face scan and 3D wax-up datasets.", price: "$200" }
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <SectionHeader
              badge="Design Fees"
              title="Aesthetic Planning"
              description="Invest in predictability. Our smile design services ensure patient satisfaction before the first bur touches a tooth."
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

export default DSDServices;
