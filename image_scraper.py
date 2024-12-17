import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin
import time

def download_image(url, folder):
    """Download an image from a URL and save it to the specified folder"""
    try:
        response = requests.get(url, stream=True)
        if response.status_code == 200:
            # Extract filename from URL
            filename = os.path.join(folder, url.split('/')[-1])
            
            # Ensure the filename is valid
            filename = ''.join(c for c in filename if c.isalnum() or c in ('./\_-'))
            
            with open(filename, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    if chunk:
                        f.write(chunk)
            return filename
    except Exception as e:
        print(f"Error downloading {url}: {str(e)}")
    return None

def scrape_images():
    # Create images directory if it doesn't exist
    image_folder = 'mrmaple_images'
    os.makedirs(image_folder, exist_ok=True)
    
    # URL of the website
    url = 'https://www.mrmaple.com'
    
    try:
        # Send GET request to the website
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        # Parse HTML content
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find all img tags
        images = soup.find_all('img')
        
        print(f"Found {len(images)} images on the page")
        downloaded_images = []
        
        # Download each image
        for img in images:
            src = img.get('src')
            if src:
                # Handle relative URLs
                full_url = urljoin(url, src)
                
                # Download the image
                filename = download_image(full_url, image_folder)
                if filename:
                    downloaded_images.append(filename)
                    print(f"Downloaded: {filename}")
                
                # Be nice to the server
                time.sleep(0.5)
        
        print(f"\nSuccessfully downloaded {len(downloaded_images)} images")
        return downloaded_images
    
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return []

if __name__ == "__main__":
    scrape_images()
