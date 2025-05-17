import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import PortfolioPreview from '@/components/PortfolioPreview'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <PortfolioPreview />
      <Contact />
    </main>
  );
}
