# Mr Maple Website

A modern e-commerce website for Mr Maple, specializing in Japanese maple trees and related products, built with Next.js and TypeScript.

## Recent Updates

### December 18, 2023
- Migrated to Next.js framework with TypeScript
- Updated Category Grid layout (v1.2)
  - Japanese Maple Trees (2×2 grid)
  - Row 1: Azaleas, Conifers, Dogwoods, Hydrangea (1 col each)
  - Row 2: Ginkgo, Redbuds (1 col each), Rare Plants (2 cols), All Available Plants (2 cols)
  - Row 3: New Weekly Selection (2 cols), Gift Cards (1 col), Hats & T-Shirts (1 col)
- Optimized images with WebP format
- Added responsive design for all screen sizes

## Features

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive Navigation with Mega Menu
- Hero Slider for featured products
- Category Grid for easy navigation
- Features Bar highlighting key selling points
- Deal of the Day section
- Best Sellers section
- Newsletter signup
- Responsive footer with social links

## Technical Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- React
- Modern ES6+ features

### Image Processing
- Python scripts for image optimization
- WebP format for better performance

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/spotcircuit/mrmaple.git
```

2. Navigate to the project directory:
```bash
cd mrmaple
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Image Processing Setup (Optional)

1. Navigate to the scripts directory:
```bash
cd scripts
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Run the image processor:
```bash
python image_processor.py
```

## Project Structure

```
mrmaple/
├── public/
│   └── images/          # Optimized images
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   └── types/          # TypeScript type definitions
├── scripts/            # Python image processing scripts
└── package.json        # Project dependencies
```

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
