import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera, Activity, Ruler, Scissors, Box, Drill } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Camera className="h-6 w-6 text-primary" />,
      title: "Imaging Center Services",
      image: "/images/imaging.png",
      description: "High-fidelity data is the foundation of digital dentistry. Send your patients to our state-of-the-art center for CBCT, Cephalometric x-rays, 3D face scans, and professional clinical photos.",
      href: "/services/imaging-center"
    },
    {
      icon: <Drill className="h-6 w-6 text-primary" />,
      title: "Implant Planning & Guides",
      image: "/images/implants.png",
      description: "Transition to fully guided implant surgery. We merge patient CBCT data with intraoral scans to evaluate bone density and plan optimal implant positioning.",
      href: "/services/implant-planning"
    },
    {
      icon: <Activity className="h-6 w-6 text-primary" />,
      title: "Clear Aligner Planning",
      image: "/images/aligners.png",
      description: "Take control of your clear aligner cases. Submit your scans and prescription, and our orthodontic technicians will create a step-by-step digital movement plan.",
      href: "/services/clear-aligners"
    },
    {
      icon: <Scissors className="h-6 w-6 text-primary" />,
      title: "Digital Smile Design (DSD)",
      image: "/images/smile.png",
      description: "Show your patients their future smile before touching a single tooth. Using clinical photos and scans, we design proportional, aesthetic restorations.",
      href: "/services/digital-smile-design"
    },
    {
      icon: <Ruler className="h-6 w-6 text-primary" />,
      title: "Crown, Bridge & Prosthetics",
      image: "/images/cad.png",
      description: "From simple single-unit crowns to complex All-on-X hybrid frameworks, our CAD team delivers superior morphology and perfect occlusion.",
      href: "/services/prosthetics"
    },
    {
      icon: <Box className="h-6 w-6 text-primary" />,
      title: "Production & Fabrication",
      image: "/images/milling.png",
      description: "Bring digital designs into physical reality. We offer industrial-grade 3D printing and 5-axis milling for final restorations, guides, and models.",
      href: "/services/production"
    }
  ];

  return (
    <div className="flex flex-col gap-20 pb-20 pt-32">
      <section>
        <MaxWidthWrapper>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Explore our full range of services including advanced imaging, implant guides, clear aligner staging, custom prosthetics, and physical manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link key={i} href={service.href} className="group block h-full">
                <Card className="relative flex flex-col h-[400px] overflow-hidden border-none shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-colors duration-500 group-hover:bg-black/60" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 flex flex-col h-full p-8 text-white">
                    <div className="mb-auto">
                      <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md w-fit border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                        {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "h-6 w-6 text-white" })}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <CardTitle className="text-2xl font-bold tracking-tight">{service.title}</CardTitle>
                      <p className="text-white/80 leading-relaxed text-sm line-clamp-3 group-hover:text-white transition-colors">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center text-sm font-semibold text-white pt-2 group-hover:text-primary-foreground transition-colors">
                        Explore services 
                        <div className="ml-2 p-1 rounded-full bg-white/20 group-hover:bg-primary transition-colors">
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Quick CTA */}
      <section>
        <MaxWidthWrapper>
          <div className="rounded-2xl border bg-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            <div className="max-w-xl relative z-10">
              <h2 className="text-2xl font-bold mb-4">Unsure which service you need?</h2>
              <p className="text-muted-foreground">
                Our clinical experts can help you determine the best workflow for your patient's specific case.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10">
              <Button size="lg" className="rounded-full px-8" asChild>
                <Link href="/contact">Consult an Expert</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
