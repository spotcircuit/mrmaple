# Image Processing Utility

This utility helps download and process images from Mr. Maple's website for the category grid.

## Features

- Downloads images from specified category pages
- Converts images to WebP format for better performance
- Resizes images to optimal dimensions
- Maintains aspect ratios
- Handles various image formats (JPG, PNG, etc.)
- Adds proper compression for web use

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the script:
```bash
python image_processor.py
```

## Configuration

The script will:
- Create a `/public/images/categories` directory if it doesn't exist
- Download images from each category page
- Convert them to WebP format
- Save them with appropriate names

## Output

Images will be saved as:
- japanese-maple-hero.webp
- azalea-pink-bloom.webp
- conifer-blue-spruce.webp
- etc.

Each image will be:
- Converted to WebP
- Resized to max 1200x800 while maintaining aspect ratio
- Compressed for web use (quality: 85)
- Named according to the category system
