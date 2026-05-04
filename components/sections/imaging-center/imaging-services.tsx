import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';

const ImagingServices = () => {
  const services = [
    { name: "CBCT - Large FOV", desc: "Full arch maxilla & mandible studies.", price: "$120" },
    { name: "CBCT - Small FOV", desc: "Targeted single site or quadrant studies.", price: "$85" },
    { name: "3D Facial Scan", desc: "Full skin topography for aesthetic planning.", price: "$65" },
    { name: "Intraoral Scan", desc: "High-precision digital impressions (STL).", price: "$45" },
    { name: "Professional Photo Set", desc: "Standardized clinical photography series.", price: "$40" },
    { name: "Integrated Data Merge", desc: "Merged CBCT and Facial Scan datasets.", price: "$150" }
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <SectionHeader
              badge="Service Menu"
              title="Transparent Imaging Fees"
              description="We offer flat-rate pricing for all diagnostic captures. No hidden fees, just high-fidelity data."
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

export default ImagingServices;
