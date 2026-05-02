import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShieldCheck, Lock, User, ChevronLeft } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center relative py-20">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 -z-10 w-64 h-64 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
      
      <MaxWidthWrapper className="max-w-md">
        <Link href="/" className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-8 group">
          <ChevronLeft className="mr-1 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Website
        </Link>

        <Card className="rounded-[2.5rem] shadow-2xl border-none p-4 md:p-8">
          <CardHeader className="space-y-4 text-center">
            <div className="w-16 h-16 rounded-3xl bg-primary flex items-center justify-center text-primary-foreground font-black text-2xl mx-auto shadow-xl shadow-primary/20">
              DP
            </div>
            <div className="space-y-2">
              <CardTitle className="text-3xl font-bold tracking-tight">Client Portal</CardTitle>
              <CardDescription>Secure access for clinical planning partners.</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="dentist@clinic.com" className="pl-10 rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">Forgot?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="password" type="password" className="pl-10 rounded-xl" />
                </div>
              </div>
            </div>

            <Button className="w-full rounded-xl py-6 font-bold shadow-lg shadow-primary/20">
              Secure Login
            </Button>

            <div className="pt-4 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-green-600" />
              HIPAA Compliant Session
            </div>
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/contact" className="text-primary font-bold hover:underline">Request access</Link>
        </p>
      </MaxWidthWrapper>
    </div>
  );
}
