import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { Cpu, Microscope, Settings, ShieldCheck } from 'lucide-react';

const AboutTechnology = () => {
  const techStack = [
    { icon: <Cpu />, name: "Exocad & 3Shape", desc: "Native CAD workstations for every specialty." },
    { icon: <Microscope />, name: "High-Res Printing", desc: "Biocompatible resin output for guides and models." },
    { icon: <Settings />, name: "5-Axis Milling", desc: "Industrial precision margins in zirconia and PMMA." },
    { icon: <ShieldCheck />, name: "Secure Cloud", desc: "HIPAA-compliant data sync and portal storage." }
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <MaxWidthWrapper>
        <SectionHeader
          badge="Technical Foundation"
          title="Industrial-Grade Infrastructure"
          description="We invest in the best technology so you don't have to. Our facility is equipped with industry-standard hardware and software."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          {techStack.map((tech, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-6 group">
              <div className="w-20 h-20 rounded-[2rem] bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 group-hover:-translate-y-2">
                {React.cloneElement(tech.icon as React.ReactElement<{ className?: string }>, { className: "h-10 w-10" })}
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-xl">{tech.name}</h4>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutTechnology;
