import React from 'react';
import AlignerHero from '@/components/sections/clear-aligners/aligner-hero';
import AlignerServices from '@/components/sections/clear-aligners/aligner-services';
import AlignerDeliverables from '@/components/sections/clear-aligners/aligner-deliverables';
import AlignerCTA from '@/components/sections/clear-aligners/aligner-cta';

export default function ClearAlignersPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <AlignerHero />
      <AlignerServices />
      <AlignerDeliverables />
      <AlignerCTA />
    </div>
  );
}
