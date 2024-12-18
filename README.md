# Mr Maple Website

A modern e-commerce website for Mr Maple, specializing in Japanese maple trees and related products, built with Next.js and TypeScript.

## Getting Started with v1.2

1. Clone the repository:
```bash
git clone https://github.com/spotcircuit/mrmaple.git
```

2. Switch to version 1.2:
```bash
git checkout v1.2
```

3. Clean install of dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure
The main files you'll be working with:

```
mrmaple/
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Homepage
│   └── components/       # All components directly here
        ├── TopBar.tsx
        ├── Navigation.tsx
        ├── Hero.tsx
        ├── DealOfDay.tsx
        ├── CategoryGrid.tsx
        ├── BestSellers.tsx
        ├── Newsletter.tsx
        └── Footer.tsx
```

## Features

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive design for all screen sizes
- Category Grid Layout:
  - Japanese Maple Trees (2×2 grid)
  - Row 1: Azaleas, Conifers, Dogwoods, Hydrangea
  - Row 2: Ginkgo, Redbuds, Rare Plants, All Available Plants
  - Row 3: New Weekly Selection, Gift Cards, Hats & T-Shirts

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## License

This project is proprietary and all rights are reserved.

## Contact

For any inquiries, please reach out through the GitHub repository.
