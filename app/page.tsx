import React from 'react';
import Hero from '@/components/sections/hero';
import Partners from '@/components/sections/partners';
import BentoGrid from '@/components/sections/bento-grid';
import WhyChooseUs from '@/components/sections/why-choose-us';
import Workflow from '@/components/sections/workflow';

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Hero />
      <BentoGrid />
      <WhyChooseUs />
      <Partners />
      <Workflow />
    </div>
  );
}
