import os
import requests
from PIL import Image
from io import BytesIO

# Define image mappings with descriptive names and CDN URLs
IMAGE_MAPPINGS = {
    # Placeholders for utility sections only
    'nursery-overview': 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',  # Garden nursery image
    'gift-card-display': 'https://images.unsplash.com/photo-1561715276-a2d087060f1d?w=800&q=80',  # Gift card image
    'merch-collection': 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80'   # T-shirt and hat display
}

# Define image sizes
SIZES = {
    'large': (1200, 800),
    'medium': (800, 600),
    'small': (400, 300)
}

def create_output_dir():
    """Create the output directory if it doesn't exist"""
    output_dir = '../public/images/categories'
    os.makedirs(output_dir, exist_ok=True)
    return output_dir

def download_image(url):
    """Download image from URL"""
    try:
        response = requests.get(url)
        response.raise_for_status()
        return Image.open(BytesIO(response.content))
    except Exception as e:
        print(f"Error downloading image from {url}: {e}")
        return None

def process_image(image, size):
    """Process image to specified size"""
    if image.mode in ('RGBA', 'LA'):
        background = Image.new('RGB', image.size, 'WHITE')
        background.paste(image, mask=image.split()[-1])
        image = background
    return image.resize(size, Image.Resampling.LANCZOS)

def save_webp(image, output_path):
    """Save image in WebP format"""
    try:
        image.save(output_path, 'WEBP', quality=85, method=6)
        print(f"Successfully processed: {os.path.basename(output_path)}")
    except Exception as e:
        print(f"Error saving {output_path}: {e}")

def main():
    output_dir = create_output_dir()
    
    for image_name, url in IMAGE_MAPPINGS.items():
        print(f"\nProcessing image: {image_name}")
        image = download_image(url)
        if image:
            for size_name, dimensions in SIZES.items():
                processed = process_image(image, dimensions)
                output_path = os.path.join(output_dir, f"{image_name}-{size_name}.webp")
                save_webp(processed, output_path)

if __name__ == "__main__":
    main()
