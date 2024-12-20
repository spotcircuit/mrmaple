import { MenuItem } from '@/types/navigation';

export const mainMenuItems: MenuItem[] = [
  {
    name: 'Shop',
    href: '/shop',
    description: 'Explore our extensive collection of rare and unique trees',
    featuredImage: {
      src: '/images/featured/japanese-maple.jpg',
      alt: 'Beautiful Japanese Maple'
    },
    categories: [
      {
        name: 'Japanese Maples',
        href: '/shop/japanese-maples',
        subcategories: [
          { name: 'Variegated Cultivars', href: '/shop/japanese-maples/variegated' },
          { name: 'Weeping Maples', href: '/shop/japanese-maples/weeping' },
          { name: 'Specimen Trees', href: '/shop/japanese-maples/specimen' }
        ]
      },
      {
        name: 'Azaleas & Rhododendrons',
        href: '/shop/azaleas'
      },
      {
        name: 'Conifers',
        href: '/shop/conifers',
        subcategories: [
          { name: 'Arborvitae', href: '/shop/conifers/arborvitae' },
          { name: 'Cedars', href: '/shop/conifers/cedars' },
          { name: 'Firs', href: '/shop/conifers/firs' },
          { name: 'Pines', href: '/shop/conifers/pines' },
          { name: 'Spruces', href: '/shop/conifers/spruces' }
        ]
      },
      { name: 'Dogwoods', href: '/shop/dogwoods' },
      { name: 'Ginkgos', href: '/shop/ginkgos' },
      { name: 'Rare Plants', href: '/shop/rare-plants' },
      { name: 'Gift Cards', href: '/shop/gift-cards' }
    ]
  },
  {
    name: 'Collections',
    href: '/collections',
    description: 'Explore our specially curated maple collections',
    featuredImage: {
      src: '/images/featured/collections.jpg',
      alt: 'Featured Collections'
    },
    categories: [
      { 
        name: '10@10 Collection',
        href: '/collections/10-at-10',
        description: 'Exclusive releases every Tuesday & Thursday at 10AM EST'
      },
      { 
        name: 'Best Sellers',
        href: '/collections/best-sellers',
        description: 'Our most popular and sought-after maples'
      },
      { 
        name: 'Limited Availability',
        href: '/collections/limited',
        description: 'Rare and unique trees available for a short time'
      }
    ]
  },
  {
    name: 'Care Information',
    href: '/care',
    description: 'Expert guides and tips for tree care',
    featuredImage: {
      src: '/images/featured/care-guide.jpg',
      alt: 'Tree Care Guide'
    },
    categories: [
      { name: 'Japanese Maple Care', href: '/care/japanese-maple' },
      { name: 'Bonsai Guides', href: '/care/bonsai' },
      { name: 'Seasonal Tips', href: '/care/seasonal' },
      { name: 'Soil & Watering Advice', href: '/care/soil-water' }
    ]
  },
  {
    name: 'Maple Info',
    href: '/maple-info',
    description: 'Comprehensive resources about Japanese Maples',
    featuredImage: {
      src: '/images/featured/maple-info.jpg',
      alt: 'Maple Information'
    },
    categories: [
      { name: 'Designing Gardens', href: '/maple-info/garden-design' },
      { name: 'The MrMaple Files', href: '/maple-info/resource-hub' },
      { name: 'E-Book', href: '/maple-info/ebook' }
    ]
  },
  {
    name: 'About Us',
    href: '/about',
    description: 'Learn about our story and mission',
    featuredImage: {
      src: '/images/featured/about-us.jpg',
      alt: 'About MrMaple'
    },
    categories: [
      { name: 'Our Story', href: '/about/story' },
      { name: 'Contact Us', href: '/about/contact' },
      { name: 'FAQs', href: '/about/faqs' }
    ]
  }
] as const;
