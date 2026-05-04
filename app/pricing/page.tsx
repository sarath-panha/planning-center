import React from 'react';
import PricingHero from '@/components/sections/pricing/pricing-hero';
import PricingList from '@/components/sections/pricing/pricing-list';
import ImagingCTA from '@/components/sections/imaging-center/imaging-cta';

export default function PricingPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <PricingHero />
      <PricingList />
      <div className="py-24">
        <ImagingCTA />
      </div>
    </div>
  );
}
