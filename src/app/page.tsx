import { Hero } from "@/components/sections/Hero";
import { PressMarquee } from "@/components/sections/PressMarquee";
import { OriginStory } from "@/components/sections/OriginStory";
import { StatsBreak } from "@/components/sections/StatsBreak";
import { WhyWeighted } from "@/components/sections/WhyWeighted";
import { Mission } from "@/components/sections/Mission";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Testimonials } from "@/components/sections/Testimonials";
import { GiftCTA } from "@/components/sections/GiftCTA";
import { Newsletter } from "@/components/sections/Newsletter";
import { getAllProducts, getCollectionProducts } from "@/lib/shopify";

export default async function Home() {
  let bestSellers: Awaited<ReturnType<typeof getAllProducts>> = [];
  try {
    bestSellers = await getCollectionProducts("best-sellers");
  } catch {
    bestSellers = [];
  }

  let allProducts: Awaited<ReturnType<typeof getAllProducts>> = [];
  try {
    allProducts = await getAllProducts();
  } catch {
    allProducts = [];
  }

  // Use best sellers if available, fall back to all products
  const featured = bestSellers.length > 0 ? bestSellers : allProducts;

  return (
    <>
      {/* Beat 1: Recognition — "You know that feeling" */}
      <Hero />

      {/* Trust signal — breathing room */}
      <PressMarquee />

      {/* Beat 2: Revelation — "There's a reason weight helps" */}
      <OriginStory />

      {/* Visual punctuation — bold stats */}
      <StatsBreak />

      {/* Deep editorial — the science */}
      <WhyWeighted />

      {/* Beat 5: Purpose — "Every Hugz holds something bigger" */}
      <Mission />

      {/* Beat 3: Meeting — "They have names. They're waiting." */}
      <FeaturedProducts products={featured} />

      {/* Beat 4: Trust — social proof as design moment */}
      <Testimonials />

      {/* Beat 6: Invitation — "Take one home" */}
      <GiftCTA />

      {/* Lead capture */}
      <Newsletter />
    </>
  );
}
