'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface DentalChartProps {
  selectedTeeth: number[];
  onToggleTooth: (tooth: number) => void;
  className?: string;
}

const DentalChart = ({ selectedTeeth, onToggleTooth, className }: DentalChartProps) => {
  // Tooth numbers 1-32 (Universal System)
  const upperTeeth = Array.from({ length: 16 }, (_, i) => i + 1); // 1-16
  const lowerTeeth = Array.from({ length: 16 }, (_, i) => 32 - i); // 32-17 (ordered for display)

  return (
    <div className={cn("space-y-12 p-8 border rounded-3xl bg-muted/20", className)}>
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Universal Numbering System</h4>
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-background">Anterior: 6-11, 22-27</Badge>
          <Badge variant="outline" className="bg-background">Posterior: 1-5, 12-16, 17-21, 28-32</Badge>
        </div>
      </div>

      <div className="space-y-16">
        {/* Upper Arch */}
        <div className="space-y-4">
          <div className="flex justify-between text-[10px] font-bold text-muted-foreground/60 px-2">
            <span>UPPER RIGHT</span>
            <span>UPPER ANTERIOR</span>
            <span>UPPER LEFT</span>
          </div>
          <div className="grid grid-cols-8 md:grid-cols-16 gap-2">
            {upperTeeth.map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => onToggleTooth(num)}
                className={cn(
                  "aspect-square flex flex-col items-center justify-center rounded-xl border-2 transition-all duration-200 group relative",
                  selectedTeeth.includes(num)
                    ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                    : "bg-background border-muted hover:border-primary/50 text-muted-foreground"
                )}
              >
                <span className="text-xs font-bold">{num}</span>
                {/* Visual indicator of tooth shape/type (simplified) */}
                <div className={cn(
                  "w-2 h-3 mt-1 rounded-sm",
                  selectedTeeth.includes(num) ? "bg-white/40" : "bg-muted group-hover:bg-primary/20"
                )} />
                
                {selectedTeeth.includes(num) && (
                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Lower Arch */}
        <div className="space-y-4">
          <div className="flex justify-between text-[10px] font-bold text-muted-foreground/60 px-2">
            <span>LOWER RIGHT</span>
            <span>LOWER ANTERIOR</span>
            <span>LOWER LEFT</span>
          </div>
          <div className="grid grid-cols-8 md:grid-cols-16 gap-2">
            {lowerTeeth.map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => onToggleTooth(num)}
                className={cn(
                  "aspect-square flex flex-col items-center justify-center rounded-xl border-2 transition-all duration-200 group relative",
                  selectedTeeth.includes(num)
                    ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                    : "bg-background border-muted hover:border-primary/50 text-muted-foreground"
                )}
              >
                 {/* Visual indicator of tooth shape/type (simplified, inverted for lower) */}
                <div className={cn(
                  "w-2 h-3 mb-1 rounded-sm",
                  selectedTeeth.includes(num) ? "bg-white/40" : "bg-muted group-hover:bg-primary/20"
                )} />
                <span className="text-xs font-bold">{num}</span>
                
                {selectedTeeth.includes(num) && (
                   <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-6 border-t flex flex-wrap gap-4 items-center">
         <p className="text-xs font-bold text-muted-foreground uppercase">Selection:</p>
         {selectedTeeth.length === 0 ? (
           <span className="text-xs italic text-muted-foreground/60">No teeth selected</span>
         ) : (
           <div className="flex flex-wrap gap-1">
             {selectedTeeth.sort((a, b) => a - b).map(num => (
               <Badge key={num} variant="secondary" className="bg-primary/10 text-primary border-none">#{num}</Badge>
             ))}
           </div>
         )}
      </div>
    </div>
  );
};

export default DentalChart;
