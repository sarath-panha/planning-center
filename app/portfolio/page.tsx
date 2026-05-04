import PortfolioHero from '@/components/sections/portfolio/portfolio-hero';
import PortfolioGallery from '@/components/sections/portfolio/portfolio-gallery';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <PortfolioHero />
      <PortfolioGallery />
    </div>
  );
}
