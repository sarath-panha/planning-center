import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { UserCheck, Sparkles, ShieldCheck } from 'lucide-react';

const ImagingWhyUs = () => {
  return (
    <section className="py-24 bg-white">
      <MaxWidthWrapper>
        <div className="text-center mb-20">
          <SectionHeader
            badge="Why Choose EcoDent"
            title="A Professional Extension of Your Clinic"
            description="We treat your patients with the same care and professionalism you do, while providing the technical data you need to excel."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Calibration",
              desc: "Our technicians are trained in clinical protocols to ensure correct FOV and patient positioning, eliminating retakes.",
              icon: <UserCheck />
            },
            {
              title: "Patient Experience",
              desc: "A boutique clinical environment designed to keep patients comfortable and confident in your referral.",
              icon: <Sparkles />
            },
            {
              title: "Secure Data Sync",
              desc: "All imaging is automatically synced to your EcoDent portal account within minutes of the appointment.",
              icon: <ShieldCheck />
            }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 shadow-sm border border-slate-100 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                {React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { className: "h-6 w-6" })}
              </div>
              <h4 className="font-bold text-xl">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ImagingWhyUs;
