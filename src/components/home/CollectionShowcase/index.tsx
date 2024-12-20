'use client';

console.log('Loading: CollectionShowcase/index.tsx');

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { showcaseCollections } from '@/config/showcase';
import { type ShowcaseItem } from './types';

function CollectionShowcase() {
  console.log('Rendering CollectionShowcase component');
  
  useEffect(() => {
    console.log('CollectionShowcase mounted');
    return () => console.log('CollectionShowcase unmounted');
  }, []);

  return (
    <section className="container mx-auto py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2A5B3D] mb-4">Featured Collections</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore our carefully curated collections of rare and unique Japanese maples and companion plants</p>
      </div>

      {/* Best Sellers Banner */}
      <div className="mb-8">
        <Link
          href="/collections/best-sellers"
          className="group relative aspect-[21/9] block overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Image
            src="/images/collections/best-sellers-banner.jpg"
            alt="Best Selling Japanese Maples"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-colors duration-300" />
          <div className="absolute inset-0 p-8 flex flex-col justify-center max-w-2xl">
            <span className="inline-block px-4 py-1 rounded-full bg-[#2A5B3D] text-white text-sm font-medium mb-4 w-fit shadow-lg">
              Most Popular
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#E8DFD0] transition-colors">
              Best Selling Japanese Maples
            </h3>
            <p className="text-white/90 text-lg mb-6 leading-relaxed group-hover:text-white transition-colors">
              Discover our customers' favorite varieties, chosen for their stunning beauty and exceptional performance
            </p>
            <Button
              variant="outline"
              className="w-fit bg-white/10 hover:bg-[#2A5B3D] text-white border-white/20 hover:border-[#2A5B3D] transition-all duration-300 shadow-lg px-8"
            >
              Shop Best Sellers
            </Button>
          </div>
        </Link>
      </div>

      {/* Collection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {showcaseCollections.map((collection, index) => (
          <Link
            key={index}
            href={collection.link}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/50 transition-colors duration-300" />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div>
                {collection.badge && (
                  <span className="inline-block px-4 py-1 rounded-full bg-[#2A5B3D] text-white text-sm font-medium mb-3 shadow-lg">
                    {collection.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#E8DFD0] transition-colors">
                  {collection.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors">
                  {collection.description}
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full bg-white/10 hover:bg-[#2A5B3D] text-white border-white/20 hover:border-[#2A5B3D] transition-all duration-300 shadow-lg"
              >
                Shop Collection
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export { CollectionShowcase };
