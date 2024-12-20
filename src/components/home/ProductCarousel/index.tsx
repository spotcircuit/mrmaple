'use client';

console.log('Loading: ProductCarousel/index.tsx');

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type Section } from './types';
import { promotionalSections } from '@/config/promotions';

function ProductCarousel() {
  console.log('Rendering ProductCarousel component');
  console.log('ProductCarousel function type:', typeof ProductCarousel);
  
  useEffect(() => {
    console.log('ProductCarousel mounted');
    return () => console.log('ProductCarousel unmounted');
  }, []);

  return (
    <section className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {promotionalSections.map((section, index) => (
          <Link 
            key={index}
            href={section.link}
            className="group relative aspect-[16/9] overflow-hidden rounded-lg"
          >
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-[#2A5B3D] text-white text-sm mb-2">
                  {section.badge}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{section.title}</h3>
                <p className="text-white/90">{section.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export { ProductCarousel };
