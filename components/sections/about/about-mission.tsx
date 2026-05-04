import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Target, Eye } from 'lucide-react';

const AboutMission = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 space-y-6 group hover:border-primary/20 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-bold">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              To empower clinicians with the highest level of digital precision, reducing chair-time and enhancing patient outcomes through expert planning and industrial-grade production.
            </p>
          </div>
          <div className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 space-y-6 group hover:border-primary/20 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <Eye className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-bold">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              To be the global benchmark for digital dental partnerships, where technology and clinical artistry meet seamlessly to define the future of restorative dentistry.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutMission;
