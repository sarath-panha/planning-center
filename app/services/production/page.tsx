import CAMHero from '@/components/sections/production/cam-hero';
import CAMServices from '@/components/sections/production/cam-services';
import CAMDeliverables from '@/components/sections/production/cam-deliverables';

export default function CAMProductionPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <CAMHero />
      <CAMServices />
      <CAMDeliverables />
    </div>
  );
}
