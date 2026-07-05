import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative bg-bg">
      {/* Navbar component */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Spacer sections below the fold to allow scrolling */}
      <main className="px-6 flex flex-col items-center">
        <div className="w-full max-w-4xl space-y-8 pb-32">
          <div className="h-64 rounded-xl border border-border bg-bg-elevated/40 flex items-center justify-center">
            <span className="text-text-faint font-mono text-sm">Features Section Placeholder</span>
          </div>
          <div className="h-64 rounded-xl border border-border bg-bg-elevated/40 flex items-center justify-center">
            <span className="text-text-faint font-mono text-sm">Pricing Section Placeholder</span>
          </div>
        </div>
      </main>
    </div>
  )
}
export { App }
