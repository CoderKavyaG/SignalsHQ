import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Section } from './Section'

// Stagger configurations for checklist items
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export function Product() {
  return (
    <Section id="product" className="border-t border-border/40 select-none overflow-hidden bg-bg">
      {/* Background radial gradient glow for section separation */}
      <div 
        className="absolute top-1/4 right-0 w-[40vw] h-[40vw] rounded-full blur-[160px] opacity-[0.04] pointer-events-none"
        style={{ background: 'var(--brand-gradient)' }}
      />
      <div 
        className="absolute bottom-1/4 left-0 w-[40vw] h-[40vw] rounded-full blur-[160px] opacity-[0.04] pointer-events-none"
        style={{ background: 'var(--brand-gradient)' }}
      />

      {/* Header Container */}
      <div className="max-w-4xl mx-auto text-center mb-20 flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-bg-elevated/50 font-mono text-xs text-text-muted uppercase tracking-widest mb-6">
          <span className="w-1 h-1 rounded-full bg-brand-pink" />
          <span>Product</span>
        </div>

        {/* Headline with mixed font weights */}
        <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight max-w-2xl leading-tight">
          Cut research and preparation hours{' '}
          <span className="font-extrabold text-transparent bg-clip-text" style={{ backgroundImage: 'var(--brand-gradient)' }}>
            with AI-driven automation.
          </span>
        </h2>
      </div>

      {/* Rows Container */}
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Row 1: Tax Assist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-bg-elevated/40 border border-border/80 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
          {/* Text Left */}
          <div className="flex flex-col justify-center order-1">
            <span className="font-mono text-xs font-semibold text-brand-purple tracking-widest uppercase mb-4">
              TAX ASSIST
            </span>
            <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary mb-6 leading-tight">
              Instant, reliable answers to your tax questions.
            </h3>
            
            {/* Checklist */}
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-3.5"
            >
              {[
                "Direct IRS citations & court ruling references",
                "Federal & SALT coverage across all 50 states",
                "Context-aware answers",
                "Exportable memos for client-ready documentation"
              ].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemVariants}
                  className="flex items-start gap-3 text-text-muted text-sm md:text-base font-body font-medium"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5 text-brand-purple mt-0.5 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Visual Right */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center p-4 lg:p-8 order-2 h-72 md:h-96 relative bg-bg/20 rounded-2xl border border-border/40 overflow-hidden"
          >
            {/* Mock Chat Card */}
            <div className="w-full max-w-sm p-5 rounded-2xl bg-bg/95 border border-border shadow-2xl relative z-10 flex flex-col gap-3.5">
              <div className="flex items-center gap-2 border-b border-border/40 pb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-purple animate-pulse" />
                <span className="font-mono text-2xs text-text-muted uppercase tracking-wider">Tax Assist AI Session</span>
              </div>
              <div className="text-left space-y-3">
                <div className="bg-bg-elevated px-3 py-2.5 rounded-xl border border-border text-xs font-body text-text-primary">
                  Is a California resident partner taxed on S-Corp income from NY?
                </div>
                <div className="bg-brand-purple/5 border border-brand-purple/20 px-3.5 py-3 rounded-xl text-2xs md:text-xs font-body text-text-muted leading-relaxed">
                  Yes. California residents are taxed on all income, including distributive shares from out-of-state entities, subject to tax credits <span className="text-brand-purple font-mono underline">[R&TC Sec. 17014]</span>.
                </div>
              </div>
            </div>

            {/* Floating absolute labels */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute top-[12%] left-[10%] px-3.5 py-1.5 rounded-full bg-bg-elevated/90 border border-border shadow-lg font-mono text-[10px] text-text-muted flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
              Federal
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-[15%] right-[8%] px-3.5 py-1.5 rounded-full bg-bg-elevated/90 border border-border shadow-lg font-mono text-[10px] text-text-muted flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
              State
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut', delay: 1 }}
              className="absolute top-[20%] right-[15%] px-3.5 py-1.5 rounded-full bg-bg-elevated/90 border border-border shadow-lg font-mono text-[10px] text-text-muted flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Local
            </motion.div>
          </motion.div>
        </div>

        {/* Row 2: Client Organizer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-bg-elevated/40 border border-border/80 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
          {/* Visual Left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center p-4 lg:p-8 order-2 lg:order-1 h-72 md:h-96 relative bg-bg/20 rounded-2xl border border-border/40 overflow-hidden"
          >
            {/* Avatar chips layout */}
            <div className="w-full max-w-sm p-6 rounded-2xl bg-bg/95 border border-border shadow-2xl relative z-10 flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-border/40 pb-3">
                <span className="font-mono text-2xs text-text-muted uppercase tracking-wider">Document Intake Queue</span>
                <span className="font-mono text-2xs text-brand-pink font-semibold bg-brand-pink/10 px-2 py-0.5 rounded">95%+ Extraction</span>
              </div>
              
              <div className="space-y-3">
                {/* User Row 1 */}
                <div className="flex items-center justify-between bg-bg-elevated/60 border border-border/40 p-2.5 rounded-xl transition-all hover:bg-bg-elevated/80 duration-150 ease-in-out">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center font-mono text-xs text-brand-purple font-bold shadow-md">
                      SC
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-text-primary font-body">Sarah Connor</div>
                      <div className="text-[10px] text-text-faint font-mono uppercase">Form 1065 K-1</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-text-muted bg-bg/80 border border-border/50 px-2 py-0.5 rounded-full">
                    Extracted
                  </span>
                </div>

                {/* User Row 2 */}
                <div className="flex items-center justify-between bg-bg-elevated/60 border border-border/40 p-2.5 rounded-xl transition-all hover:bg-bg-elevated/80 duration-150 ease-in-out">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-pink/20 border border-brand-pink/40 flex items-center justify-center font-mono text-xs text-brand-pink font-bold shadow-md">
                      JD
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-text-primary font-body">John Doe</div>
                      <div className="text-[10px] text-text-faint font-mono uppercase">Form W-2</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-text-muted bg-bg/80 border border-border/50 px-2 py-0.5 rounded-full">
                    Structured
                  </span>
                </div>

                {/* User Row 3 */}
                <div className="flex items-center justify-between bg-bg-elevated/60 border border-border/40 p-2.5 rounded-xl transition-all hover:bg-bg-elevated/80 duration-150 ease-in-out">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center font-mono text-xs text-brand-blue font-bold shadow-md">
                      BW
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-text-primary font-body">Bruce Wayne</div>
                      <div className="text-[10px] text-text-faint font-mono uppercase">1099-NEC</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-text-muted bg-bg/80 border border-border/50 px-2 py-0.5 rounded-full">
                    Review Ready
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Right */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <span className="font-mono text-xs font-semibold text-brand-pink tracking-widest uppercase mb-4">
              CLIENT ORGANIZER
            </span>
            <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary mb-6 leading-tight">
              Client Data in One Place. Structured. Searchable.
            </h3>
            
            {/* Checklist */}
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-3.5"
            >
              {[
                "AI document intake; drag, drop, done",
                "K-1, 1099s, W-2s auto-extraction at 95%+ accuracy",
                "360° client overview with smart categorization",
                "Automated binders"
              ].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemVariants}
                  className="flex items-start gap-3 text-text-muted text-sm md:text-base font-body font-medium"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5 text-brand-pink mt-0.5 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Row 3: Client Review */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-bg-elevated/40 border border-border/80 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
          {/* Text Left */}
          <div className="flex flex-col justify-center order-1">
            <span className="font-mono text-xs font-semibold text-brand-blue tracking-widest uppercase mb-4">
              CLIENT REVIEW
            </span>
            <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary mb-6 leading-tight">
              Get workpaper insight. Zero Manual Grind.
            </h3>
            
            {/* Checklist */}
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-3.5"
            >
              {[
                { text: "Current-year category rollups", badge: false },
                { text: "Multi-entity support for 1040, 1065, 1120-S", badge: false },
                { text: "Auto-Generated Workpapers", badge: false },
                { text: "AI-drafted first-pass returns; 70% faster prep", badge: true }
              ].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemVariants}
                  className="flex items-start gap-3 text-text-muted text-sm md:text-base font-body font-medium"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5 text-brand-blue mt-0.5 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div className="flex flex-wrap items-center gap-2">
                    <span>{item.text}</span>
                    {item.badge && (
                      <span className="inline-block font-mono text-[9px] font-bold text-brand-blue bg-brand-blue/15 border border-brand-blue/25 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                        Coming soon
                      </span>
                    )}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Visual Right */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center p-4 lg:p-8 order-2 h-72 md:h-96 relative bg-bg/20 rounded-2xl border border-border/40 overflow-hidden"
          >
            {/* Savings Insight Card */}
            <div className="w-full max-w-sm p-6 rounded-2xl bg-bg/95 border border-border shadow-2xl relative z-10 flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-border/40 pb-3">
                <span className="font-mono text-2xs text-text-muted uppercase tracking-wider">Savings Analyzer</span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse" />
              </div>
              
              <div className="text-center py-2">
                <span className="block text-2xs font-mono text-text-faint uppercase tracking-widest mb-1">Identified Deductions</span>
                <h4 className="text-3xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue leading-none">
                  $700 – $2,000
                </h4>
              </div>

              {/* Deductions Checklist inside visual */}
              <div className="bg-bg-elevated/50 border border-border/30 rounded-xl p-3.5 space-y-2.5 text-left">
                {[
                  "Child Tax Credit Optimization",
                  "Healthcare Savings Allocation",
                  "Oil & Gas Depletion Audits"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-2xs font-body text-text-muted">
                    <svg 
                      width="12" 
                      height="12" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-3 h-3 text-brand-blue shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </Section>
  )
}
