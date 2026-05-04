import CADHero from '@/components/sections/prosthetics/cad-hero';
import CADServices from '@/components/sections/prosthetics/cad-services';
import CADDeliverables from '@/components/sections/prosthetics/cad-deliverables';

export default function CADDesignPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <CADHero />
      <CADServices />
      <CADDeliverables />
    </div>
  );
}
