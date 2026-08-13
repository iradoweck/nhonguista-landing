import Link from "next/link";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { FeaturedServices } from "@/components/FeaturedServices";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { ProviderCTA } from "@/components/ProviderCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-orange-100 selection:text-orange-900">
      <Header />

      <main className="flex-1">
        
        {/* TEMPORARY COLOR SHOWCASE */}
        <section className="py-12 bg-white dark:bg-black border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Brand Colors Verification</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-full shadow-lg" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                <span className="font-mono text-sm font-semibold">Primary</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-full shadow-lg" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                <span className="font-mono text-sm font-semibold">Accent</span>
              </div>
            </div>
          </div>
        </section>

        <Hero />
        <Categories />
        <FeaturedServices />
        <HowItWorks />
        <ProviderCTA />
        <Stats />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
