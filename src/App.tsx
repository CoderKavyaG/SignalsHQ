import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Product } from './components/Product'
import { UseCases } from './components/UseCases'
import { Stats } from './components/Stats'
import { CustomerStories } from './components/CustomerStories'
import { Security } from './components/Security'

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

      {/* Simple Footer */}
      <footer className="py-12 border-t border-border/40 text-center select-none bg-bg text-text-faint font-mono text-[10px] uppercase tracking-widest">
        &copy; {new Date().getFullYear()} SignalsHQ. All rights reserved.
      </footer>
    </div>
  )
}
export { App }
