import React from 'react';
import ImplantHero from '@/components/sections/implant-planning/implant-hero';
import ImplantServices from '@/components/sections/implant-planning/implant-services';
import ImplantDeliverables from '@/components/sections/implant-planning/implant-deliverables';
import ImplantCTA from '@/components/sections/implant-planning/implant-cta';

export default function ImplantPlanningPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <ImplantHero />
      <ImplantServices />
      <ImplantDeliverables />
      <ImplantCTA />
    </div>
  );
}
