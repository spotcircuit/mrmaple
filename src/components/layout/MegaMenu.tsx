'use client';

import { MenuItem } from '@/types/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react';

interface MegaMenuProps {
  item: MenuItem;
  isOpen: boolean;
}

export function MegaMenu({ item, isOpen }: MegaMenuProps) {
  if (!item.categories?.length) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className="absolute bg-[#F9F6F1] shadow-lg border-t z-[60] rounded-b-lg"
          style={{ 
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'min(800px, 95vw)'
          }}
        >
          <div className="p-6">
            {/* Header with title and description */}
            <div className="mb-6 border-b pb-4">
              <h2 className="text-xl font-semibold text-[#333333] mb-2 flex items-center">
                <Leaf className="w-5 h-5 mr-2 text-primary-dark" />
                {item.name}
              </h2>
              {item.description && (
                <p className="text-[#666666]">{item.description}</p>
              )}
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* Categories Section */}
              <div className="col-span-8">
                <div className="grid grid-cols-3 gap-4">
                  {item.categories.map((category) => (
                    <div 
                      key={category.name} 
                      className="group rounded-lg p-3"
                    >
                      <Link
                        href={category.href}
                        className="block text-sm font-medium text-[#333333] hover:text-primary-dark transition-colors mb-2"
                      >
                        {category.name}
                      </Link>
                      
                      {category.subcategories && (
                        <ul className="space-y-1.5">
                          {category.subcategories.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.href}
                                className="block text-xs text-[#666666] hover:text-primary-dark transition-colors pl-2 border-l border-[#E5E5E5] hover:border-primary-dark"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Section */}
              <div className="col-span-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  {item.featuredImage ? (
                    <div className="space-y-3">
                      <div className="relative h-32 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
                        <Image
                          src={item.featuredImage.src || '/images/placeholder-maple.jpg'}
                          alt={item.featuredImage.alt || `Featured ${item.name}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <h3 className="absolute bottom-2 left-3 right-3 text-sm font-medium text-white">
                          {item.featuredImage?.title || item.name}
                        </h3>
                      </div>
                      {item.description && (
                        <p className="text-xs text-[#666666]">{item.description}</p>
                      )}
                      <Link
                        href={item.href}
                        className="inline-flex items-center text-xs text-primary-dark hover:text-primary-red font-medium space-x-1 group bg-[#F9F6F1] px-3 py-1.5 rounded-full shadow-sm hover:shadow transition-all duration-200"
                      >
                        <span>Explore {item.name}</span>
                        <span className="transform transition-transform group-hover:translate-x-0.5">→</span>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="h-32 bg-[#F9F6F1] rounded-lg shadow-inner flex items-center justify-center p-4 text-center">
                        <div>
                          <Leaf className="w-8 h-8 text-primary-dark mx-auto mb-2 opacity-50" />
                          <p className="text-xs text-[#333333] font-medium">Discover our selection of {item.name}</p>
                        </div>
                      </div>
                      <Link
                        href={item.href}
                        className="inline-flex items-center text-xs text-primary-dark hover:text-primary-red font-medium space-x-1 group bg-[#F9F6F1] px-3 py-1.5 rounded-full shadow-sm hover:shadow transition-all duration-200 w-full justify-center"
                      >
                        <span>Browse All {item.name}</span>
                        <span className="transform transition-transform group-hover:translate-x-0.5">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
