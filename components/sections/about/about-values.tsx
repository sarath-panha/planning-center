import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';

const AboutValues = () => {
  const values = [
    { title: "Precision First", desc: "Every case is reviewed by a master technician for clinical feasibility and technical accuracy." },
    { title: "Rapid Turnaround", desc: "Digital design approval within 24 hours, with fabrication and shipping following within 48 hours." },
    { title: "Peer-to-Peer Support", desc: "Direct access to our planning technicians for clinical discussion and case optimization." }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Why Clinics <br /><span className="text-primary">Choose Us.</span></h2>
            <p className="text-white/60 text-lg leading-relaxed">
              We don't just provide services; we build long-term partnerships based on trust, accuracy, and shared success.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-6 hover:bg-white/10 transition-colors">
                <div className="text-primary font-black text-5xl opacity-40">0{i+1}</div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold">{val.title}</h4>
                  <p className="text-white/50 leading-relaxed text-sm">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutValues;
