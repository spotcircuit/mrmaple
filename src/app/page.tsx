import TopBar from '@/components/TopBar'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import DealOfDay from '@/components/DealOfDay'
import CategoryGrid from '@/components/CategoryGrid'
import BestSellers from '@/components/BestSellers'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navigation />
      <Hero />
      <DealOfDay />
      <CategoryGrid />
      <BestSellers />
      <Newsletter />
      <Footer />
    </main>
  )
}
