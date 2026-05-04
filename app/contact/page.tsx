import React from 'react';
import ContactHero from '@/components/sections/contact/contact-hero';
import ContactForm from '@/components/sections/contact/contact-form';
import ContactFAQ from '@/components/sections/contact/contact-faq';

export default function ContactPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
    </div>
  );
}
