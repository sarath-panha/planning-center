import DSDHero from '@/components/sections/digital-smile-design/dsd-hero';
import DSDServices from '@/components/sections/digital-smile-design/dsd-services';
import DSDDeliverables from '@/components/sections/digital-smile-design/dsd-deliverables';

export default function DigitalSmileDesignPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <DSDHero />
      <DSDServices />
      <DSDDeliverables />
    </div>
  );
}
