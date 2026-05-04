import PricingHero from '@/components/sections/pricing/pricing-hero';
import PricingList from '@/components/sections/pricing/pricing-list';

export default function PricingPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <PricingHero />
      <PricingList />
    </div>
  );
}
