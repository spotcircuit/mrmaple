'use client';

import { Suspense } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { ServiceHighlights } from '@/components/home/ServiceHighlights';
import { Newsletter } from '@/components/home/Newsletter';
import { Testimonials } from '@/components/home/Testimonials';
import { BrandHighlights } from '@/components/home/BrandHighlights';
import { CollectionShowcase } from '@/components/home/CollectionShowcase';

function LoadingComponent() {
  return <div>Loading...</div>;
}

export default function Home() {
  return (
    <div>
      <Suspense fallback={<LoadingComponent />}>
        <HeroSection />
        <BrandHighlights />
        <CategoryGrid />
        <CollectionShowcase />
        <ServiceHighlights />
        <Newsletter />
        <Testimonials />
      </Suspense>
    </div>
  );
}
