'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Upload, 
  User, 
  Stethoscope, 
  Calendar as CalendarIcon,
  ChevronRight,
  FileText,
  ShieldCheck,
  ClipboardList
} from 'lucide-react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import DentalChart from '@/components/dental-chart';
import { cn } from '@/lib/utils';

type Step = 'clinic' | 'patient' | 'service' | 'details' | 'upload' | 'success';

export default function SubmissionPortal() {
  const [step, setStep] = React.useState<Step>('clinic');
  const [caseType, setCaseType] = React.useState<'referral' | 'lab'>('lab');
  const [selectedTeeth, setSelectedTeeth] = React.useState<number[]>([]);

  const toggleTooth = (num: number) => {
    setSelectedTeeth(prev => 
      prev.includes(num) ? prev.filter(t => t !== num) : [...prev, num]
    );
  };

  const renderStepIndicator = () => {
    const steps: { key: Step; label: string }[] = [
      { key: 'clinic', label: 'Clinic' },
      { key: 'patient', label: 'Patient' },
      { key: 'service', label: 'Service' },
      { key: 'details', label: 'Details' },
      { key: 'upload', label: 'Upload' },
    ];

    return (
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-muted -translate-y-1/2 -z-10" />
        {steps.map((s, i) => {
          const isActive = step === s.key;
          const isPast = steps.findIndex(x => x.key === step) > i;
          
          return (
            <div key={s.key} className="flex flex-col items-center gap-2 bg-background px-4">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all",
                isActive ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-110" : 
                isPast ? "bg-primary/10 border-primary text-primary" : "bg-background border-muted text-muted-foreground"
              )}>
                {isPast ? <CheckCircle2 className="h-5 w-5" /> : i + 1}
              </div>
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest",
                isActive ? "text-primary" : "text-muted-foreground"
              )}>{s.label}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const renderClinicStep = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Referring Information</h2>
        <p className="text-sm text-muted-foreground">Select your clinic or add a new referral source.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="clinicName">Clinic Name</Label>
          <Input id="clinicName" placeholder="Elite Dental Clinic" className="rounded-xl" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dentistName">Requesting Clinician</Label>
          <Input id="dentistName" placeholder="Dr. Jane Smith" className="rounded-xl" />
        </div>
      </div>
      <div className="p-6 rounded-2xl border bg-primary/5 border-primary/10 flex items-center gap-4">
        <RadioGroup defaultValue="lab" className="flex flex-col sm:flex-row gap-6" onValueChange={(v) => setCaseType(v as any)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="referral" id="r1" />
            <Label htmlFor="r1" className="font-bold">Imaging Referral</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="lab" id="r2" />
            <Label htmlFor="r2" className="font-bold">Digital Lab Case</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );

  const renderPatientStep = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
       <div className="space-y-2">
        <h2 className="text-2xl font-bold">Patient Demographics</h2>
        <p className="text-sm text-muted-foreground">Ensure all information matches the clinical record.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="pName">Patient Full Name</Label>
          <Input id="pName" placeholder="John Doe" className="rounded-xl" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pDob">Date of Birth</Label>
          <Input id="pDob" type="date" className="rounded-xl" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="pNotes">Clinical History (Optional)</Label>
        <Input id="pNotes" placeholder="Previous trauma on upper right..." className="rounded-xl" />
      </div>
    </div>
  );

  const renderDetailsStep = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
       <div className="space-y-2">
        <h2 className="text-2xl font-bold">Clinical Selection</h2>
        <p className="text-sm text-muted-foreground">Select the specific teeth involved in this treatment plan.</p>
      </div>
      <DentalChart selectedTeeth={selectedTeeth} onToggleTooth={toggleTooth} />
      <div className="p-6 rounded-2xl border bg-muted/20 space-y-4">
        <Label className="font-bold">Specific Instructions</Label>
        <textarea 
          className="w-full min-h-[120px] rounded-xl border bg-background p-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
          placeholder="Please plan for a 4.5 x 11mm implant with 2mm clearance from the nerve..."
        />
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="flex flex-col items-center text-center space-y-8 py-12 animate-in zoom-in duration-500">
      <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center">
        <CheckCircle2 className="h-12 w-12" />
      </div>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold uppercase tracking-tight">Case Submitted Successfully</h2>
        <p className="text-muted-foreground max-w-md">Your case (Ref: DP-9821) has been received. Our technicians will review the data and provide a planning proposal within 24 hours.</p>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" className="rounded-full px-8" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
        <Button className="rounded-full px-8" onClick={() => { setStep('clinic'); setSelectedTeeth([]); }}>
          Submit Another Case
        </Button>
      </div>
    </div>
  );

  if (step === 'success') return <MaxWidthWrapper className="py-20">{renderSuccess()}</MaxWidthWrapper>;

  return (
    <MaxWidthWrapper className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Main Wizard Area */}
        <div className="lg:col-span-8 space-y-8">
          <div className="p-8 md:p-12 rounded-[2.5rem] border bg-background shadow-2xl shadow-primary/5">
            {renderStepIndicator()}
            
            <div className="min-h-[400px]">
              {step === 'clinic' && renderClinicStep()}
              {step === 'patient' && renderPatientStep()}
              {step === 'details' && renderDetailsStep()}
              {(step === 'service' || step === 'upload') && (
                <div className="flex flex-col items-center justify-center h-[400px] text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">Module UI pending selection...</p>
                  <Button variant="outline" onClick={() => setStep(step === 'service' ? 'details' : 'success')}>Simulate Next</Button>
                </div>
              )}
            </div>

            <div className="mt-12 pt-8 border-t flex justify-between items-center">
              <Button 
                variant="ghost" 
                onClick={() => {
                  if (step === 'patient') setStep('clinic');
                  if (step === 'service') setStep('patient');
                  if (step === 'details') setStep('service');
                  if (step === 'upload') setStep('details');
                }}
                disabled={step === 'clinic'}
                className="rounded-full px-8"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                onClick={() => {
                  if (step === 'clinic') setStep('patient');
                  else if (step === 'patient') setStep('service');
                  else if (step === 'service') setStep('details');
                  else if (step === 'details') setStep('upload');
                  else if (step === 'upload') setStep('success');
                }}
                className="rounded-full px-10 shadow-lg shadow-primary/20"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Real-time Case Summary Sidebar */}
        <div className="lg:col-span-4 sticky top-24 space-y-6">
          <Card className="rounded-3xl border-none shadow-xl bg-muted/30">
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <ClipboardList className="h-4 w-4" />
                Case Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <SummaryItem label="Case Type" value={caseType === 'lab' ? 'Digital Lab Case' : 'Imaging Referral'} />
                <SummaryItem label="Clinic" value="Elite Dental" />
                <SummaryItem label="Dentist" value="Dr. Jane Smith" />
                <SummaryItem label="Patient" value="John Doe" />
                <SummaryItem 
                  label="Teeth" 
                  value={selectedTeeth.length > 0 ? selectedTeeth.sort((a,b)=>a-b).join(', ') : 'None selected'} 
                />
              </div>
              <div className="pt-6 border-t border-muted-foreground/10 space-y-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  HIPAA Secure Encryption Active
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                   <FileText className="h-4 w-4 text-blue-600" />
                   Review protocol enabled
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
             <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Need help?</h4>
             <p className="text-[11px] text-muted-foreground leading-relaxed">Our clinical support team is available 24/7 for complex case consultation. Call +1-800-DENTA-PLAN.</p>
          </div>
        </div>

      </div>
    </MaxWidthWrapper>
  );
}

const SummaryItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{label}</span>
    <span className="text-sm font-bold">{value}</span>
  </div>
);
