import { notFound } from "next/navigation";
import { getAllCollections, getCollectionProducts, formatPrice } from "@/lib/shopify";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  try {
    const collections = await getAllCollections();
    return collections.map((c) => ({ handle: c.handle }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props) {
  const { handle } = await params;
  const collections = await getAllCollections();
  const collection = collections.find((c) => c.handle === handle);
  if (!collection) return {};
  return {
    title: `${collection.title} — GiveHugz`,
    description: collection.body_html?.replace(/<[^>]*>/g, "").slice(0, 160) || `Browse our ${collection.title} collection.`,
  };
}

export default async function CollectionPage({ params }: Props) {
  const { handle } = await params;
  const [collections, products] = await Promise.all([
    getAllCollections(),
    getCollectionProducts(handle),
  ]);

  const collection = collections.find((c) => c.handle === handle);
  if (!collection) notFound();

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div className="bg-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-deep-teal/40 mb-6">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <span className="text-deep-teal/60">{collection.title}</span>
          </nav>
          <h1 className="font-petrona text-4xl sm:text-5xl font-bold text-deep-teal mb-4">
            {collection.title}
          </h1>
          {collection.body_html && (
            <p className="text-base text-deep-teal/45 max-w-lg mx-auto">
              {collection.body_html.replace(/<[^>]*>/g, "").slice(0, 200)}
            </p>
          )}
          <p className="text-sm text-deep-teal/30 mt-4">{products.length} companions</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-deep-teal/40 font-poppins">No products in this collection yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.handle}`}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-sm group-hover:shadow-lg transition-shadow duration-300 mb-3">
                  {product.images[0] ? (
                    <Image
                      src={product.images[0].src}
                      alt={product.images[0].alt || product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-cream">
                      <svg width="40" height="40" viewBox="0 0 32 32" fill="#108474" opacity="0.15">
                        <path d="M16 28s-12-7.4-12-16C4 7.6 7.6 4 12 4c2.4 0 4.4 1.2 4 3.2C15.6 5.2 17.6 4 20 4c4.4 0 8 3.6 8 8 0 8.6-12 16-12 16z"/>
                      </svg>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                    <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm text-deep-teal font-poppins text-xs font-semibold px-3 py-2 rounded-full">
                      Meet {product.title.split(" ")[0]}
                    </span>
                  </div>
                </div>
                <h3 className="font-petrona font-semibold text-deep-teal text-sm">
                  {product.title}
                </h3>
                <p className="font-poppins text-xs text-teal font-medium mt-0.5">
                  From {formatPrice(product.variants[0]?.price || "0")}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
