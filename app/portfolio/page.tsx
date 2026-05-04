import React from 'react';
import PortfolioHero from '@/components/sections/portfolio/portfolio-hero';
import PortfolioGallery from '@/components/sections/portfolio/portfolio-gallery';
import ImagingCTA from '@/components/sections/imaging-center/imaging-cta';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <PortfolioHero />
      <PortfolioGallery />
      <ImagingCTA />
    </div>
  );
}
