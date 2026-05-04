import React from 'react';
import CAMHero from '@/components/sections/production/cam-hero';
import CAMServices from '@/components/sections/production/cam-services';
import CAMDeliverables from '@/components/sections/production/cam-deliverables';
import CAMCTA from '@/components/sections/production/cam-cta';

export default function CAMProductionPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <CAMHero />
      <CAMServices />
      <CAMDeliverables />
      <CAMCTA />
    </div>
  );
}
