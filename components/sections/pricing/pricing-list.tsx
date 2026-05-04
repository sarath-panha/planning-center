'use client';

import React, { useState } from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Camera, Drill, Sparkles, Zap, Cpu, Check } from 'lucide-react';

const pricingData = [
  {
    category: "Imaging Center",
    icon: <Camera />,
    type: "planning",
    items: [
      { name: "CBCT - Full Arch", price: "$120", desc: "Dual arch volumetric scan" },
      { name: "CBCT - Targeted FOV", price: "$85", desc: "Local region of interest" },
      { name: "3D Facial Scan", price: "$65", desc: "High-res aesthetic mapping" },
      { name: "Intraoral Scan (STL)", price: "$45", desc: "Digital impression" },
      { name: "Clinical Photo Set", price: "$40", desc: "Full orthodontic series" }
    ]
  },
  {
    category: "Implant Planning",
    icon: <Drill />,
    type: "planning",
    items: [
      { name: "Single Implant Plan", price: "$150", desc: "Virtual placement & report" },
      { name: "Multi-Unit Plan (2-4)", price: "$280", desc: "Quadrant optimization" },
      { name: "Full Arch All-on-X", price: "$450", desc: "Comprehensive restorative plan" },
      { name: "Surgical Guide Design", price: "$80", desc: "Design-only STL" },
      { name: "Bone Reduction Design", price: "$120", desc: "Complex surgical protocol" }
    ]
  },
  {
    category: "Digital Smile Design",
    icon: <Sparkles />,
    type: "planning",
    items: [
      { name: "2D Smile Simulation", price: "$60", desc: "Before/After motivation" },
      { name: "3D Aesthetic Mock-up", price: "$120", desc: "Facially-driven exocad design" },
      { name: "Diagnostic Wax-up", price: "$180", desc: "Full arch functional design" },
      { name: "Crown/Veneer Design", price: "$45", desc: "Single unit aesthetic CAD" },
      { name: "Mock-up Printing", price: "$30", desc: "Direct-to-print STL" }
    ]
  },
  {
    category: "Orthodontic Setup",
    icon: <Zap />,
    type: "planning",
    items: [
      { name: "Full Aligner Design", price: "$350", desc: "All stages included" },
      { name: "Orthodontic Analysis", price: "$80", desc: "Cephalometric & Model study" },
      { name: "Refinement Case", price: "$150", desc: "Mid-treatment adjustment" },
      { name: "Indirect Bonding Tray", price: "$120", desc: "Bracket placement design" },
      { name: "Post-Treatment Retainer", price: "$40", desc: "Stability design" }
    ]
  },
  {
    category: "CAM Production",
    icon: <Cpu />,
    type: "production",
    items: [
      { name: "Zirconia Crown", price: "from $40", desc: "Monolithic Multi-layer" },
      { name: "PMMA Provisional", price: "from $25", desc: "High-strength milled" },
      { name: "Titanium Abutment", price: "from $120", desc: "Custom interface" },
      { name: "Surgical Guide Print", price: "from $45", desc: "Biocompatible resin" },
      { name: "3D Printed Model", price: "from $15", desc: "High-fidelity hollow print" }
    ]
  }
];

const PricingList = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'planning' | 'production'>('all');

  const filteredData = activeTab === 'all' 
    ? pricingData 
    : pricingData.filter(d => d.type === activeTab);

  return (
    <section className="py-24 bg-white relative">
      <MaxWidthWrapper>
        {/* Type Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-slate-100 p-1 rounded-full border border-slate-200">
            {['all', 'planning', 'production'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={cn(
                  "px-8 py-2.5 rounded-full text-sm font-bold capitalize transition-all duration-300",
                  activeTab === tab 
                    ? "bg-white text-primary shadow-sm" 
                    : "text-slate-500 hover:text-slate-900"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((section, i) => (
            <Card key={i} className="rounded-[2.5rem] border-none shadow-premium bg-white overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="p-10 pb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {React.cloneElement(section.icon as React.ReactElement<{ className?: string }>, { className: "h-7 w-7" })}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">{section.category}</h3>
                <p className="text-xs font-bold text-primary uppercase tracking-widest opacity-60">Professional Suite</p>
              </div>
              
              <CardContent className="px-10 pb-10 flex-grow">
                <div className="space-y-6">
                  {section.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-start group/item border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                      <div className="space-y-1">
                        <span className="text-slate-800 font-bold block transition-colors group-hover/item:text-primary">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">{item.desc}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-black text-slate-900 text-lg">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-slate-50 space-y-3">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <Check className="h-3 w-3 text-primary" />
                    Expert Clinical Review
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <Check className="h-3 w-3 text-primary" />
                    Native Project Files
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PricingList;
