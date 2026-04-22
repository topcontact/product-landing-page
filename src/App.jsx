import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductShowcase from './components/ProductShowcase'
import Specs from './components/Specs'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <Hero />
      <Features />
      <ProductShowcase />
      <Specs />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
