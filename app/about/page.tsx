import React from 'react';
import AboutHero from '@/components/sections/about/about-hero';
import AboutMission from '@/components/sections/about/about-mission';
import AboutTechnology from '@/components/sections/about/about-technology';
import AboutValues from '@/components/sections/about/about-values';

export default function AboutPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <AboutHero />
      <AboutMission />
      <AboutTechnology />
      <AboutValues />
    </div>
  );
}
