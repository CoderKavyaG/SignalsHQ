import { motion } from 'framer-motion'
import { Section } from './Section'

interface CardItem {
  icon: React.ReactNode
  title: string
  description: string
}

export function UseCases() {
  const cards: CardItem[] = [
    {
      icon: (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-brand-purple"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      title: "Always Current on Tax Rules",
      description: "Real-time updates dynamically linked to active IRS codes and regulations, ensuring your firm stays fully compliant and up to date.",
    },
    {
      icon: (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-brand-pink"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: "Turn Raw Data into Insight",
      description: "Ingest scattered tax paperwork and transform it into clean, structured advisory analytics and actionable client recommendations.",
    },
    {
      icon: (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-brand-blue"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      title: "Surface Savings & Risks",
      description: "Proactively identify tax deductions, credits, and potential compliance audits before filing, maximizing value for your clients.",
    },
  ]

  return (
    <Section id="usecase" className="border-t border-border/40 overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-bg-elevated/50 font-mono text-xs text-text-muted uppercase tracking-widest mb-6">
            <span className="w-1 h-1 rounded-full bg-brand-purple" />
            <span>Use Case</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight max-w-2xl leading-tight">
            Focus on high-value client outcomes.
          </h2>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="bg-bg-elevated/40 border border-border/80 rounded-2xl p-8 flex flex-col items-start text-left transition-all duration-200 ease-in-out hover:border-text-faint/60 hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              {/* Icon in rounded square */}
              <div className="w-12 h-12 rounded-xl bg-bg-elevated border border-border flex items-center justify-center mb-6 shadow-inner">
                {card.icon}
              </div>
              
              <h3 className="font-display font-bold text-lg text-text-primary mb-3">
                {card.title}
              </h3>
              <p className="font-body text-sm font-medium text-text-muted leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
