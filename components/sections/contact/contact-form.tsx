'use client';

import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaFacebookF } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section className="py-24 bg-white relative">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold tracking-tight">Global Support. <br /><span className="text-primary">Clinical Expertise.</span></h3>
              <p className="text-slate-500 leading-relaxed">
                Connect with our planning center for immediate technical assistance or clinical consultation regarding your digital cases.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { icon: <Mail />, label: "Technical Support", value: "plan@ecodent.com" },
                { icon: <Phone />, label: "Direct Line", value: "+1 800 ECO DENT" },
                { icon: <MapPin />, label: "Production Hub", value: "Innovation District, PC" },
                { icon: <Clock />, label: "SLA Response", value: "< 24 Hours" }
              ].map((item, i) => (
                <div key={i} className="space-y-3 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "h-5 w-5" })}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">{item.label}</p>
                    <p className="font-bold text-slate-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Integration */}
            <div className="space-y-8 pt-8 border-t border-slate-100">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Follow Our Workflow</p>
                <div className="flex gap-4">
                  {[<FaLinkedin />, <FaInstagram />, <FaFacebookF />].map((icon, i) => (
                    <button key={i} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all">
                      {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "h-4 w-4" })}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <Card className="rounded-[3rem] border-none shadow-premium p-4 md:p-12 bg-slate-50">
              <CardContent className="p-0 space-y-10">
                <div className="space-y-2 text-center lg:text-left">
                  <h3 className="text-3xl font-bold">Submit Inquiry</h3>
                  <p className="text-slate-500">Complete the form below for case-specific inquiries.</p>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="firstName" className="ml-2 text-[10px] font-black uppercase tracking-widest text-slate-400">First Name</Label>
                      <Input id="firstName" placeholder="John" className="rounded-2xl h-14 bg-white border-slate-200 focus:ring-primary/20" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="lastName" className="ml-2 text-[10px] font-black uppercase tracking-widest text-slate-400">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="rounded-2xl h-14 bg-white border-slate-200 focus:ring-primary/20" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="ml-2 text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@clinic.com" className="rounded-2xl h-14 bg-white border-slate-200 focus:ring-primary/20" />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="ml-2 text-[10px] font-black uppercase tracking-widest text-slate-400">Clinical Query</Label>
                    <Textarea id="message" placeholder="How can our technicians assist you?" className="min-h-[160px] rounded-[2rem] bg-white border-slate-200 p-6 focus:ring-primary/20" />
                  </div>

                  <Button className="w-full rounded-full h-16 font-bold text-lg shadow-xl shadow-primary/20 group">
                    Send Clinical Inquiry
                    <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactForm;
