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
    name: '10@10 Trees',
    href: '/10-at-10',
    description: 'Exclusive releases every Tuesday & Thursday at 10AM EST',
    featuredImage: {
      src: '/images/featured/10-at-10.jpg',
      alt: 'Featured 10@10 Trees'
    },
    categories: [
      { name: 'Current Releases', href: '/10-at-10/current' },
      { name: 'Past Highlights', href: '/10-at-10/past' }
    ]
  },
  {
    name: 'Expert Picks',
    href: '/expert-picks',
    description: 'Curated selections from our expert team',
    featuredImage: {
      src: '/images/featured/expert-picks.jpg',
      alt: 'Expert Selected Trees'
    },
    categories: [
      { name: 'Best Sellers', href: '/expert-picks/best-sellers' },
      { name: 'Limited Availability', href: '/expert-picks/limited' },
      { name: 'Rare Finds', href: '/expert-picks/rare' }
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
      alt: 'Our Nursery'
    },
    categories: [
      { name: 'Visit the Nursery', href: '/about/visit' },
      { name: 'Speaking Engagements', href: '/about/speaking' },
      { name: 'Our Story', href: '/about/story' }
    ]
  },
  {
    name: 'Blog/Media',
    href: '/blog',
    description: 'Latest updates and media content',
    featuredImage: {
      src: '/images/featured/blog-media.jpg',
      alt: 'Blog and Media'
    },
    categories: [
      { name: 'The MrMaple Show', href: '/blog/show' },
      { name: 'The MrMaple Podcast', href: '/blog/podcast' }
    ]
  },
  {
    name: 'Contact Us',
    href: '/contact',
    description: 'Get in touch with us',
    featuredImage: {
      src: '/images/featured/contact.jpg',
      alt: 'Contact Us'
    },
    categories: [
      { name: 'Contact Form', href: '/contact/form' },
      { name: 'Schedule an Appointment', href: '/contact/schedule' },
      { name: 'Shipping & Refund Policies', href: '/contact/policies' }
    ]
  }
];
