import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { SolutionsSection } from "@/components/solutions-section"
import { BlockchainExplainer } from "@/components/blockchain-explainer"
import { TokenRewards } from "@/components/token-rewards"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <BlockchainExplainer />
      <SolutionsSection />
      <TokenRewards />
      <CTASection />
      <Footer />
    </main>
  )
}

