import { motion } from 'framer-motion'
import { Section } from './Section'

interface SecurityCard {
  icon: React.ReactNode
  title: string
  detail: string
}

export function Security() {
  const cards: SecurityCard[] = [
    {
      icon: (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-brand-purple"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "End-to-end Encryption",
      detail: "AES-256 Vaults",
    },
    {
      icon: (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-brand-pink"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Monitoring Systems",
      detail: "24/7 Threat Intel",
    },
    {
      icon: (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-brand-blue"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" y1="8" x2="20" y2="14" />
          <line x1="23" y1="11" x2="17" y2="11" />
        </svg>
      ),
      title: "Access Control",
      detail: "Multi-Factor MFA",
    },
    {
      icon: (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-brand-purple"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
      title: "Regulation Compliant",
      detail: "SOC 2 Type II",
    },
  ]

  return (
    <Section id="security" className="border-t border-border/40 overflow-hidden bg-bg">
      {/* Localized dot-grid background texture specifically within this section */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative blurred background blob */}
      <div 
        className="absolute bottom-0 right-1/4 w-[35vw] h-[35vw] rounded-full blur-[140px] opacity-[0.05] pointer-events-none"
        style={{ background: 'var(--brand-gradient)' }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Heading & Outline CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-start text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-bg-elevated/50 font-mono text-xs text-text-muted uppercase tracking-widest mb-6">
            <span className="w-1 h-1 rounded-full bg-brand-blue" />
            <span>Security</span>
          </div>

          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight mb-6 leading-tight max-w-md">
            Secure Conversations. Smarter Tax Strategies.
          </h2>

          <p className="font-body text-sm md:text-base font-medium text-text-muted leading-relaxed mb-8 max-w-sm">
            We protect your clients' sensitive financial data with institutional-grade controls. Your information stays encrypted, isolated, and strictly auditable.
          </p>

          <a 
            href="#security-docs"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border bg-bg hover:bg-bg-elevated text-text-primary font-mono text-xs font-semibold tracking-wider transition-all duration-200 ease-in-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50"
          >
            FIND MORE
          </a>
        </motion.div>

        {/* Right Column: 2x2 Grid of Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
              className="bg-bg-elevated/40 border border-border/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between items-start text-left transition-all duration-200 ease-in-out hover:border-text-faint/60 shadow-md hover:shadow-lg"
            >
              {/* Header inside card */}
              <div className="flex items-center justify-between w-full mb-6">
                <div className="w-10 h-10 rounded-xl bg-bg-elevated border border-border flex items-center justify-center shadow-inner">
                  {card.icon}
                </div>
              </div>

              {/* Title & Detail */}
              <div className="w-full">
                <h3 className="font-display font-bold text-base text-text-primary mb-2">
                  {card.title}
                </h3>
                <span className="font-mono text-2xs uppercase tracking-wider text-text-faint bg-bg/40 px-2 py-0.5 rounded border border-border inline-block">
                  {card.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  )
}
