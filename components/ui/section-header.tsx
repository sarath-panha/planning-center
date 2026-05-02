import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader = ({ 
  badge, 
  title, 
  description, 
  align = 'left', 
  className 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      "flex flex-col gap-4 mb-12",
      align === 'center' ? "items-center text-center mx-auto max-w-3xl" : "items-start",
      className
    )}>
      {badge && (
        <Badge variant="outline" className="px-3 py-1 bg-primary/5 text-primary border-primary/20 font-semibold uppercase tracking-wider text-[10px]">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-gradient">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
