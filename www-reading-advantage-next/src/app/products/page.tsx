import ProductHero from "@/components/products/hero";
import B2BSolutions from "@/components/products/b2b-solutions";
import B2CSolutions from "@/components/products/b2c-solutions";
import TutorAdvantage from "@/components/products/tutor-advantage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products - Reading Advantage Thailand",
  description: "Comprehensive curriculum solutions for schools and specialized programs for individual learners, powered by advanced AI technology.",
}

export default function ProductsPage() {
  return (
    <main className="flex-1">
      <ProductHero />
      <B2BSolutions />
      <B2CSolutions />
      <TutorAdvantage />
    </main>
  )
}
