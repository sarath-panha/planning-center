import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section>
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <SectionHeader 
                badge="Get in Touch"
                title="Let's Build the Future of Your Clinic."
                description="Have questions about our workflow or pricing? Our clinical support team is here to help you integrate digital dentistry seamlessly."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Mail />, label: "Email Us", value: "support@dentaplan.com" },
                  { icon: <Phone />, label: "Call Us", value: "+1-800-DENTA-PLAN" },
                  { icon: <MapPin />, label: "HQ Office", value: "Innovation Way, Ste 100" },
                  { icon: <Clock />, label: "Response Time", value: "< 2 Hours" }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "h-5 w-5" })}
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-bold">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-[2rem] bg-muted/30 border space-y-4">
                 <div className="flex items-center gap-3 text-primary">
                    <MessageSquare className="h-6 w-6" />
                    <h4 className="font-bold">Technical Consultation</h4>
                 </div>
                 <p className="text-sm text-muted-foreground leading-relaxed">Need to discuss a complex full-arch case with a master technician? Schedule a 15-minute video call through our portal.</p>
              </div>
            </div>

            <Card className="rounded-[2.5rem] border-none shadow-2xl p-4 md:p-10">
              <CardContent className="space-y-8 p-0">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Inquiry Form</h3>
                  <p className="text-sm text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="rounded-xl h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@clinic.com" className="rounded-xl h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Inquiry Type</Label>
                  <Input id="subject" placeholder="New Account / Case Discussion" className="rounded-xl h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px] rounded-xl" />
                </div>
                <Button className="w-full rounded-full h-14 font-bold shadow-lg shadow-primary/20 group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
