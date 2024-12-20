export interface SubCategory {
  name: string;
  href: string;
  description?: string;
}

export interface Category {
  name: string;
  href: string;
  description?: string;
  subcategories?: SubCategory[];
}

export interface MenuItem {
  name: string;
  href: string;
  description?: string;
  featuredImage?: {
    src: string;
    alt: string;
  };
  categories?: Category[];
  icon?: string; // Lucide icon name or custom icon path
}
