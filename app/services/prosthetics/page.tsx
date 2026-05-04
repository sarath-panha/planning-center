import React from 'react';
import CADHero from '@/components/sections/prosthetics/cad-hero';
import CADServices from '@/components/sections/prosthetics/cad-services';
import CADDeliverables from '@/components/sections/prosthetics/cad-deliverables';
import CADCTA from '@/components/sections/prosthetics/cad-cta';

export default function CADDesignPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <CADHero />
      <CADServices />
      <CADDeliverables />
    </div>
  );
}
