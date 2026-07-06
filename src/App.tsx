import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Product } from './components/Product'
import { UseCases } from './components/UseCases'
import { Stats } from './components/Stats'
import { CustomerStories } from './components/CustomerStories'
import { Security } from './components/Security'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative bg-bg">
      {/* Navbar component */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Product Section */}
      <Product />

      {/* Use Cases Section */}
      <UseCases />

      {/* Stats Counters Row */}
      <Stats />

      {/* Customer Stories Testimonials */}
      <CustomerStories />

      {/* Security Section */}
      <Security />

      {/* Complete Responsive Footer */}
      <Footer />
    </div>
  )
}
export { App }
