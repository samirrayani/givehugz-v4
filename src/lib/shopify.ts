const STORE_URL = "https://givehugz.co";

export interface ShopifyImage {
  id: number;
  src: string;
  alt: string | null;
  width: number;
  height: number;
}

export interface ShopifyVariant {
  id: number;
  title: string;
  price: string;
  compare_at_price: string | null;
  available: boolean;
  option1: string | null;
  option2: string | null;
}

export interface ShopifyProduct {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  vendor: string;
  product_type: string;
  tags: string[];
  images: ShopifyImage[];
  variants: ShopifyVariant[];
  options: { name: string; values: string[] }[];
}

export interface ShopifyCollection {
  id: number;
  handle: string;
  title: string;
  body_html: string;
  image: ShopifyImage | null;
}

function filterProducts(products: ShopifyProduct[]): ShopifyProduct[] {
  return products.filter(
    (p) => p.handle !== "message" && parseFloat(p.variants[0]?.price || "0") > 0
  );
}

export async function getAllProducts(): Promise<ShopifyProduct[]> {
  const allProducts: ShopifyProduct[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const res = await fetch(`${STORE_URL}/products.json?limit=250&page=${page}`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    const products = data.products || [];
    allProducts.push(...products);
    hasMore = products.length === 250;
    page++;
  }

  return filterProducts(allProducts);
}

export async function getProduct(handle: string): Promise<ShopifyProduct | null> {
  try {
    const res = await fetch(`${STORE_URL}/products/${handle}.json`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.product || null;
  } catch {
    return null;
  }
}

export async function getAllCollections(): Promise<ShopifyCollection[]> {
  const res = await fetch(`${STORE_URL}/collections.json`, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return data.collections || [];
}

export async function getCollectionProducts(
  handle: string
): Promise<ShopifyProduct[]> {
  const res = await fetch(
    `${STORE_URL}/collections/${handle}/products.json?limit=250`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  return filterProducts(data.products || []);
}

export function getCheckoutUrl(variantId: number, quantity: number = 1): string {
  return `${STORE_URL}/cart/${variantId}:${quantity}`;
}

export function formatPrice(price: string): string {
  const num = parseFloat(price);
  return `$${num.toFixed(2)}`;
}
