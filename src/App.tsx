export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="max-w-xl w-full p-8 rounded-2xl bg-bg-elevated border border-border relative overflow-hidden shadow-2xl">
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
          SignalsHQ Redesign
        </h1>

        {/* Description (Inter) */}
        <p className="font-body text-text-muted text-base md:text-lg mb-8 leading-relaxed">
          The foundation is set. Custom design tokens, Google Fonts, Fontshare typography, and the fixed dot-grid background texture are now active and ready.
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

        {/* Color Palette Verification Grid */}
        <div className="mt-8 pt-6 border-t border-border/50 grid grid-cols-5 gap-2">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-md bg-brand-purple border border-border" />
            <span className="font-mono text-[9px] text-text-faint mt-1">Purple</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-md bg-brand-pink border border-border" />
            <span className="font-mono text-[9px] text-text-faint mt-1">Pink</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-md bg-brand-blue border border-border" />
            <span className="font-mono text-[9px] text-text-faint mt-1">Blue</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-md bg-bg-elevated border border-border" />
            <span className="font-mono text-[9px] text-text-faint mt-1">Elevated</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-md bg-accent-cta border border-border" />
            <span className="font-mono text-[9px] text-text-faint mt-1">CTA</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export { App }
