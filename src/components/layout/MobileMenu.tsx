'use client';

import { MenuItem } from '@/types/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

interface MobileMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ items, isOpen, onClose }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (itemName: string) => {
    setExpandedItems(current =>
      current.includes(itemName)
        ? current.filter(name => name !== itemName)
        : [...current, itemName]
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[80vw] max-w-md bg-white shadow-xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-medium">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {items.map((item) => (
                <div key={item.name} className="border-b">
                  <div className="flex items-center justify-between p-4">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="text-gray-900 font-medium"
                    >
                      {item.name}
                    </Link>
                    {item.categories && item.categories.length > 0 && (
                      <button
                        onClick={() => toggleItem(item.name)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <motion.div
                          animate={{ rotate: expandedItems.includes(item.name) ? 180 : 0 }}
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </button>
                    )}
                  </div>

                  {/* Submenu */}
                  <AnimatePresence>
                    {expandedItems.includes(item.name) && item.categories && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50"
                      >
                        <div className="p-4 space-y-4">
                          {item.categories.map((category) => (
                            <div key={category.name} className="space-y-2">
                              <Link
                                href={category.href}
                                onClick={onClose}
                                className="block text-gray-900"
                              >
                                {category.name}
                              </Link>
                              {category.subcategories && (
                                <div className="pl-4 space-y-2">
                                  {category.subcategories.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      href={sub.href}
                                      onClick={onClose}
                                      className="block text-sm text-gray-600 hover:text-green-600"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
