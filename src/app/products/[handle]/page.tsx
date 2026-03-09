import { notFound } from "next/navigation";
import { getProduct, getAllProducts, formatPrice, getCheckoutUrl } from "@/lib/shopify";
import { ProductPageClient } from "./ProductPageClient";

interface Props {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  try {
    const products = await getAllProducts();
    return products.map((p) => ({ handle: p.handle }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) return {};
  return {
    title: `${product.title} — GiveHugz`,
    description: product.body_html?.replace(/<[^>]*>/g, "").slice(0, 160) || `Meet ${product.title}, your new weighted companion.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) notFound();

  const allProducts = await getAllProducts();
  const related = allProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return <ProductPageClient product={product} related={related} />;
}
