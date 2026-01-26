import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AboutUs } from '@/components/about-us'

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}
