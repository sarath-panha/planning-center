import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/20 relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-primary/5 blur-[120px] rounded-full" />
      
      <MaxWidthWrapper className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Column 1: Brand & About */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold">DP</div>
              <span className="text-xl font-bold tracking-tight uppercase">Denta<span className="text-primary">Plan</span></span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading the digital transformation in dentistry through precision planning and state-of-the-art production.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaLinkedin className="h-5 w-5" />, href: "#" },
                { icon: <FaInstagram className="h-5 w-5" />, href: "#" },
                { icon: <FaFacebook className="h-5 w-5" />, href: "#" },
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full border border-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Imaging Center', href: '/services/imaging-center' },
                { name: 'Implant Planning', href: '/services/implant-planning' },
                { name: 'Clear Aligners', href: '/services/clear-aligners' },
                { name: 'Smile Design', href: '/services/digital-smile-design' },
                { name: 'Fabrication', href: '/services/production' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    <span className="w-0 h-[1px] bg-primary group-hover:w-3 transition-all mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Clinical Portfolio', href: '/portfolio' },
                { name: 'Pricing Guide', href: '/pricing' },
                { name: 'Contact Support', href: '/contact' },
                { name: 'Client Login', href: '/login' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    <span className="w-0 h-[1px] bg-primary group-hover:w-3 transition-all mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CTA */}
          <div className="space-y-6 lg:p-8 rounded-2xl border border-primary/10 bg-primary/5">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Ready to start?</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Submit your first digital case today and experience the future of dental planning.
            </p>
            <Button className="w-full rounded-full" asChild>
              <Link href="/portal/start">Launch Portal</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] text-muted-foreground">
            © {new Date().getFullYear()} DentaPlan Digital Dental Planning Center. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="text-[12px] text-muted-foreground hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="text-[12px] text-muted-foreground hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
