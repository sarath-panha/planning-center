import ImplantHero from '@/components/sections/implant-planning/implant-hero';
import ImplantServices from '@/components/sections/implant-planning/implant-services';
import ImplantDeliverables from '@/components/sections/implant-planning/implant-deliverables';

export default function ImplantPlanningPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <ImplantHero />
      <ImplantServices />
      <ImplantDeliverables />
    </div>
  );
}
