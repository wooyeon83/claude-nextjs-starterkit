import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Features } from "@/components/sections/features";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <CTA />
      </main>
      <SiteFooter />
    </>
  );
}
