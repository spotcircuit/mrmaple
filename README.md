# Mr Maple Bolt Project

This repository contains the Next.js e-commerce project for Mr Maple, featuring a complete redesign inspired by BnBTobacco's layout while maintaining MrMaple's unique brand identity.

## Project Overview

### Objective
Create a visually appealing and user-friendly homepage for MrMaple.com that mirrors the structure and layout of BnBTobacco.com while incorporating MrMaple's unique content and branding. The goal is to showcase MrMaple's products, promotions, and unique modules in a cohesive and professional manner.

### Key Features

#### Top Bar
- Promotional messages display (e.g., "Free Shipping on Orders Over $100")
- Customer Support, Login/Sign-Up, and Cart links
- MrMaple's brand colors (deep greens, browns, subtle reds/oranges)

#### Navigation Bar
- Comprehensive menu: Home, Catalog, Easy Shop, Merch, E-Book, About Us, etc.
- Category dropdowns for Japanese Maples, Bonsai, Azaleas
- Integrated Search Bar

#### Featured Modules
- Expert Picks showcase
- 10@10 Sale with countdown timer
- Limited Availability Sale section
- Flash Sale Fridays
- "Get to Know the Brothers" Podcast section
- Featured Blog Posts

#### Interactive Elements
- Rotating hero banners with CTAs
- Product quick-view options
- Dynamic countdown timers
- Newsletter signup
- Social media integration

## Technical Implementation

### Current Status (Tag 1.3)
- [x] Upgraded to Next.js 14
- [x] Moved all components under src directory
- [x] Fixed layout structure and metadata exports
- [x] Removed duplicate files from root directory
- [ ] Navigation components need to be restored (TopBar and MainNavigation)

### Project Structure
```
src/
├── app/                    # Next.js app directory
│   ├── shop/              # Shop-related pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── home/             # Home page components
│   ├── layout/           # Layout components (navigation, header)
│   ├── providers/        # React context providers
│   └── ui/               # Reusable UI components
├── config/               # Configuration files
├── hooks/               # Custom React hooks
└── lib/                # Utilities and constants
```

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Next Steps
1. Restore navigation components:
   - TopBar component
   - MainNavigation component
   - Integrate with existing layout

2. Implement proper client-side navigation:
   - Category navigation
   - User navigation
   - Mobile responsiveness

3. Add proper error boundaries and loading states:
   - Suspense boundaries
   - Error handling
   - Loading skeletons

### Implementation Details
- **Responsive Design**: Mobile-first approach with seamless adaptation across devices
- **Brand Kit Integration**: Consistent use of MrMaple's color palette and typography
- **Performance Optimization**: Image compression and lazy loading
- **Content Management**: Dynamic content updates capability

## Git Tags
- 1.3: Fixed layout and removed duplicate files
