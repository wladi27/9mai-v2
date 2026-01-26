import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { InvestmentPlans } from '@/components/investment-plans'
import { GrowthOpportunities } from '@/components/growth-opportunities'
import { WhyUs } from '@/components/why-us'
import { Testimonials } from '@/components/testimonials'
import { CEOSection } from '@/components/ceo-section'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'
import AIDarkComponent from '@/components/coontact'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <InvestmentPlans />
        <GrowthOpportunities />
        <WhyUs />
        <Testimonials />
        <CEOSection />
        <FAQ />
        <AIDarkComponent />
      </main>
      <Footer/>
    </div>
  )
}
