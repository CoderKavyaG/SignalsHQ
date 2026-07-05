import { Navbar } from './components/Navbar'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative select-none">
      {/* Navbar component */}
      <Navbar />

      {/* Main Content with vertical height placeholders to enable scroll test */}
      <main className="flex-grow pt-32 px-6 flex flex-col items-center">
        <div className="max-w-xl w-full p-8 rounded-2xl bg-bg-elevated border border-border relative overflow-hidden shadow-2xl mt-12 mb-24">
          {/* Decorative Brand Gradient Header */}
          <div 
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ background: 'var(--brand-gradient)' }}
          />
          
          {/* Eyebrow Label (JetBrains Mono) */}
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-faint bg-bg/50 px-3 py-1 rounded-full border border-border inline-block mb-6">
            System Initialized
          </span>

          {/* Headline (Cabinet Grotesk) */}
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
            Navbar Integration Active
          </h1>

          {/* Description (Inter) */}
          <p className="font-body text-text-muted text-base md:text-lg mb-8 leading-relaxed">
            Scroll down to test the sticky Navbar transition. The background will shift from transparent to a semi-opaque background color with a bottom border hairline once you scroll past 40px.
          </p>

          {/* Buttons / Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button 
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-accent-cta text-accent-cta-text font-mono text-sm font-semibold tracking-wide transition-transform active:scale-95 hover:opacity-90 cursor-pointer"
            >
              LAUNCH PROJECT
            </button>
            
            <button 
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-border bg-bg hover:bg-bg-elevated text-text-primary font-mono text-sm font-medium tracking-wide transition-all cursor-pointer"
            >
              DOCUMENTATION
            </button>
          </div>
        </div>

        {/* Height placeholder cards to make scrolling natural */}
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
