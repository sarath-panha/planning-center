'use client';

import React, { useState } from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { cn } from '@/lib/utils';
import { 
  Camera, 
  Drill, 
  Sparkles, 
  Zap, 
  Cpu, 
  Search,
  Table as TableIcon,
  LayoutGrid
} from 'lucide-react';

const pricingData = [
  {
    category: "Imaging Center",
    icon: <Camera className="h-5 w-5" />,
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
    icon: <Drill className="h-5 w-5" />,
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
    icon: <Sparkles className="h-5 w-5" />,
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
    icon: <Zap className="h-5 w-5" />,
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
    icon: <Cpu className="h-5 w-5" />,
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
  return (
    <section className="py-24 bg-white relative">
      <MaxWidthWrapper>
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-premium bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-10 py-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400">Service Department / Description</th>
                <th className="px-10 py-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400 text-right">Professional Fee</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((category, idx) => (
                <React.Fragment key={idx}>
                  {/* Category Header Row */}
                  <tr className="bg-slate-50/50">
                    <td colSpan={2} className="px-10 py-5 border-y border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {category.icon}
                        </div>
                        <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">{category.category}</h3>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Item Rows */}
                  {category.items.map((item, i) => (
                    <tr key={i} className="group hover:bg-slate-50/80 transition-colors border-b border-slate-100 last:border-0">
                      <td className="px-10 py-6">
                        <div className="flex flex-col gap-1">
                          <span className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors">{item.name}</span>
                          <span className="text-xs text-slate-400 font-medium">{item.desc}</span>
                        </div>
                      </td>
                      <td className="px-10 py-6 text-right">
                        <span className="text-lg font-black text-slate-900">{item.price}</span>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-[2.5rem] bg-slate-950 text-white shadow-2xl">
          <div className="space-y-2">
            <h4 className="text-xl font-bold">Large Case Networking?</h4>
            <p className="text-slate-400 text-sm">Access volume-based tier discounts for processing more than 20 cases per month.</p>
          </div>
          <button className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-lg shadow-primary/20">
            Inquire Bulk Rates
          </button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PricingList;
