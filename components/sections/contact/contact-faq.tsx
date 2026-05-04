'use client';

import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { 
  Plus, 
  Minus, 
  HelpCircle,
  FileText,
  CreditCard,
  Truck,
  Monitor
} from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    icon: <Monitor />,
    question: "How do I submit my clinical scans?",
    answer: "You can upload STL, PLY, or DICOM files directly through our clinical portal. We also support direct integration with iTero, 3Shape, and Medit Link."
  },
  {
    icon: <CreditCard />,
    question: "What is your standard fee schedule?",
    answer: "We operate on a flat-fee basis for most planning and production services. Detailed pricing for complex cases can be found in our Pricing section or discussed with a technician."
  },
  {
    icon: <Truck />,
    question: "What are your fabrication lead times?",
    answer: "Digital designs are typically completed within 24-48 hours. Physical production and shipping generally follow within another 48 hours for standard cases."
  },
  {
    icon: <FileText />,
    question: "Do you provide clinical planning reports?",
    answer: "Yes, every guided surgery or aesthetic wax-up case includes a comprehensive PDF planning report for clinical review and patient consultation."
  }
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <MaxWidthWrapper>
        <SectionHeader
          badge="Common Queries"
          title="Clinical FAQ"
          description="Quick answers to our most frequently asked technical questions."
          align="center"
        />

        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={cn(
                "p-8 rounded-[2.5rem] transition-all duration-500 cursor-pointer border",
                openIndex === i 
                  ? "bg-white border-primary/20 shadow-premium" 
                  : "bg-white/50 border-slate-200 hover:border-primary/20"
              )}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                  openIndex === i ? "bg-primary text-white" : "bg-slate-100 text-slate-400"
                )}>
                  {React.cloneElement(faq.icon as React.ReactElement<{ className?: string }>, { className: "h-5 w-5" })}
                </div>
                <div className="flex-1 space-y-3">
                  <h4 className="font-bold text-slate-900 leading-tight">{faq.question}</h4>
                  <p className={cn(
                    "text-sm text-slate-500 leading-relaxed overflow-hidden transition-all duration-500",
                    openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    {faq.answer}
                  </p>
                </div>
                <div className="text-slate-300">
                  {openIndex === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactFAQ;
