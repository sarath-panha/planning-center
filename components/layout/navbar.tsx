'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight, Activity, Camera, Drill, Scan, Ruler, Box } from 'lucide-react';

const services = [
  {
    title: 'Imaging Center',
    href: '/services/imaging-center',
    description: 'CBCT, 3D face scans, and clinical photography.',
    icon: <Camera className="h-4 w-4" />,
  },
  {
    title: 'Implant Planning',
    href: '/services/implant-planning',
    description: 'Safe, flawless guided implant placement.',
    icon: <Drill className="h-4 w-4" />,
  },
  {
    title: 'Clear Aligners',
    href: '/services/clear-aligners',
    description: 'Predictable step-by-step digital setups.',
    icon: <Activity className="h-4 w-4" />,
  },
  {
    title: 'Smile Design',
    href: '/services/digital-smile-design',
    description: 'Facial-driven aesthetic simulations.',
    icon: <Scan className="h-4 w-4" />,
  },
  {
    title: 'CAD Prosthetics',
    href: '/services/prosthetics',
    description: 'Exquisite restorations for every case.',
    icon: <Ruler className="h-4 w-4" />,
  },
  {
    title: 'Fabrication',
    href: '/services/production',
    description: 'Premium 3D printing and 5-axis milling.',
    icon: <Box className="h-4 w-4" />,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const isFused = isHome && !isScrolled;

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isFused 
        ? "bg-transparent border-none py-4" 
        : "bg-white/95 backdrop-blur-md border-b shadow-sm py-0"
    )}>
      <MaxWidthWrapper>
        <div className={cn(
          "flex items-center justify-between transition-all duration-300",
          isFused ? "h-20" : "h-16"
        )}>
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <img 
              src="/images/ecodent.png" 
              alt="EcoDent Logo" 
              className="h-7 md:h-8 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
            <span className={cn(
              "text-[9px] font-bold uppercase tracking-[0.35em] mt-1 transition-colors leading-none",
              isFused ? "text-white/80" : "text-primary/80"
            )}>
              Digital Planning Center
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavigationMenu value={openMenu} onValueChange={setOpenMenu}>
              <NavigationMenuList>
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' }
                ].map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={cn(
                        navigationMenuTriggerStyle(), 
                        "bg-transparent transition-all px-4 rounded-full",
                        isFused 
                          ? "text-white/90 hover:text-white hover:bg-white/10" 
                          : "text-foreground hover:bg-primary/5 hover:text-primary",
                        pathname === item.href && (
                          isFused 
                            ? "bg-white/15 text-white font-bold" 
                            : "bg-primary/10 text-primary font-bold"
                        )
                      )}>
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem value="services">
                  <NavigationMenuTrigger 
                    onClick={(e) => {
                      // Toggle on click, prevent default hover behavior if needed
                      setOpenMenu(openMenu === "services" ? "" : "services");
                    }}
                    onPointerMove={(e) => e.preventDefault()} // Disable hover open
                    onPointerLeave={(e) => e.preventDefault()} // Disable hover close
                    className={cn(
                      "bg-transparent transition-all px-4 rounded-full",
                      isFused 
                        ? "text-white/90 hover:text-white hover:bg-white/10 data-[state=open]:bg-white/15" 
                        : "text-foreground hover:bg-primary/5 hover:text-primary data-[state=open]:bg-primary/5",
                      pathname.startsWith('/services') && (
                        isFused 
                          ? "bg-white/15 text-white font-bold" 
                          : "bg-primary/10 text-primary font-bold"
                      )
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-6 p-6 md:grid-cols-2 lg:w-[750px]">
                      <div className="flex flex-col justify-between rounded-xl bg-primary/5 p-6 space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold leading-none text-foreground">Our Expertise</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Comprehensive end-to-end digital dental solutions powered by precision technology.
                          </p>
                        </div>
                        <Button variant="link" className="p-0 h-fit text-primary justify-start" asChild>
                          <Link href="/services" onClick={() => setOpenMenu("")}>Browse all services <ChevronRight className="ml-1 h-3 w-3" /></Link>
                        </Button>
                      </div>
                      <ul className="grid grid-cols-1 gap-1">
                        {services.map((service) => (
                          <li key={service.title}>
                            <Link
                              href={service.href}
                              onClick={() => setOpenMenu("")}
                              className="flex select-none gap-3 rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-primary/5 hover:text-accent-foreground group"
                            >
                              <div className="p-2 rounded bg-primary/10 text-primary group-hover:scale-110 transition-transform h-fit">
                                {service.icon}
                              </div>
                              <div className="space-y-1">
                                <div className="text-sm font-bold leading-none">{service.title}</div>
                                <p className="line-clamp-2 text-[12px] leading-snug text-muted-foreground/80">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {[
                  { label: 'Portfolio', href: '/portfolio' },
                  { label: 'Pricing', href: '/pricing' },
                  { label: 'Contact', href: '/contact' }
                ].map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={cn(
                        navigationMenuTriggerStyle(), 
                        "bg-transparent transition-all px-4 rounded-full",
                        isFused 
                          ? "text-white/90 hover:text-white hover:bg-white/10" 
                          : "text-foreground hover:bg-primary/5 hover:text-primary",
                        pathname === item.href && (
                          isFused 
                            ? "bg-white/15 text-white font-bold" 
                            : "bg-primary/10 text-primary font-bold"
                        )
                      )}>
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/login" 
              className={cn(
                "text-sm font-semibold transition-colors",
                isFused ? "text-white hover:text-white/80" : "text-foreground hover:text-primary"
              )}
            >
              Login
            </Link>
            <Button 
              size="sm" 
              className={cn(
                "rounded-full px-6 transition-all duration-300 shadow-lg",
                isFused 
                  ? "bg-primary text-white border border-white/20 hover:bg-primary/90 shadow-primary/40" 
                  : "bg-primary text-primary-foreground shadow-primary/20"
              )} 
              asChild
            >
              <Link href="/portal/start">Submit Case</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(isFused ? "text-white hover:bg-white/10" : "text-foreground")}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-lg p-6 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-6">
            <Link href="/" className="text-xl font-bold" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className="text-xl font-bold" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Services</span>
              <div className="grid grid-cols-1 gap-3">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="p-2 rounded bg-primary/10 text-primary">{service.icon}</div>
                    <span className="font-medium">{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/portfolio" className="text-xl font-bold" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
            <Link href="/pricing" className="text-xl font-bold" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
            <Link href="/contact" className="text-xl font-bold" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <div className="pt-4 flex flex-col gap-4">
              <Button variant="outline" asChild className="w-full">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Client Login</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/portal/start" onClick={() => setIsMobileMenuOpen(false)}>Submit a Case</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'flex select-none gap-3 rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-primary/5 hover:text-accent-foreground focus:bg-primary/5 focus:text-accent-foreground group',
            className
          )}
          {...props}
        >
          <div className="p-2 rounded bg-primary/10 text-primary group-hover:scale-110 transition-transform h-fit">
            {icon}
          </div>
          <div className="space-y-1">
            <div className="text-sm font-bold leading-none">{title}</div>
            <p className="line-clamp-2 text-[12px] leading-snug text-muted-foreground/80">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default Navbar;
