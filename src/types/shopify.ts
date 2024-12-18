export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }>;
  };
}

export interface ShopifyCollection {
  id: string;
  title: string;
  handle: string;
  description: string;
  products: {
    edges: Array<{
      node: ShopifyProduct;
    }>;
  };
}

// This will be used when we implement the Shopify integration
export interface ShopifyConfig {
  shopifyDomain: string;
  storefrontAccessToken: string;
}
