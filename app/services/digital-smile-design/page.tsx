import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import SectionHeader from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Smile, 
  CheckCircle2, 
  ArrowRight, 
  Monitor, 
  Sparkles,
  Zap,
  ChevronRight,
  Camera
} from 'lucide-react';

export default function DigitalSmileDesign() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeader 
                badge="Aesthetic Simulation"
                title="Visualize Perfection. <br /><span className='text-primary'>Increase Acceptance.</span>"
                description="Allow your patients to test-drive their new smiles before you pick up a handpiece. Our facial-driven design process harmonizes dental aesthetics with unique facial proportions."
              />
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full shadow-lg shadow-primary/20" asChild>
                  <Link href="/portal/start">Request Smile Design</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                   <Link href="/portfolio">View Case Studies</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-muted group">
            <img src="/images/smile.png" alt="Digital Smile Simulation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8">
               <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/30 text-white">
                 <Camera className="h-5 w-5" />
                 <span className="text-sm font-bold uppercase tracking-widest">Facially-Driven Aesthetics</span>
               </div>
            </div>
          </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="py-24 bg-muted/30 border-y">
        <MaxWidthWrapper>
          <SectionHeader 
            badge="The Workflow"
            title="Facial-Driven SMILE Design"
            description="We go beyond the teeth to analyze the whole face."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8">
            {[
              { title: "Facial Analysis", desc: "Analyzing midlines and facial proportions.", icon: <Camera className="h-8 w-8" /> },
              { title: "2D Simulation", desc: "Digital mockup over clinical photos.", icon: <Monitor className="h-8 w-8" /> },
              { title: "3D Translation", desc: "Converting 2D aesthetic plans to 3D wax-ups.", icon: <Sparkles className="h-8 w-8" /> },
              { title: "Try-In Matrix", desc: "Printable models for clinical try-ins.", icon: <CheckCircle2 className="h-8 w-8" /> }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-3xl bg-background border flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  {step.icon}
                </div>
                <h4 className="font-bold">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-8">
               <SectionHeader 
                 badge="Clinical Applications"
                 title="Versatility in Aesthetics"
               />
               <div className="space-y-4">
                 {[
                   "Anterior Veneer Planning",
                   "Crown Lengthening Guides",
                   "Full Mouth Aesthetic Rehabilitations",
                   "Motivational Patient Presentations"
                 ].map((app, i) => (
                   <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-muted group hover:border-primary/30 transition-colors">
                     <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                       <CheckCircle2 className="h-5 w-5" />
                     </div>
                     <span className="font-bold">{app}</span>
                   </div>
                 ))}
               </div>
             </div>
             <div className="aspect-square rounded-[3rem] bg-foreground flex flex-col items-center justify-center p-12 text-center space-y-6">
                <h3 className="text-3xl font-bold text-white">Drive Case Acceptance</h3>
                <p className="text-muted-foreground">The clinical mockup is the most powerful closing tool in modern dentistry. We provide the digital and physical assets to make it happen.</p>
                <Button size="xl" variant="secondary" className="rounded-full font-bold px-12" asChild>
                  <Link href="/portal/start">Get a Mockup STL</Link>
                </Button>
             </div>
           </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
