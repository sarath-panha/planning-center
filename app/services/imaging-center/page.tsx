import ImagingHero from '@/components/sections/imaging-center/imaging-hero';
import ImagingServices from '@/components/sections/imaging-center/imaging-services';
import ImagingDeliverables from '@/components/sections/imaging-center/imaging-deliverables';

export default function ImagingCenterPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <ImagingHero />
      <ImagingServices />
      <ImagingDeliverables />
    </div>
  );
}
