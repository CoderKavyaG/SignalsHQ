import { motion } from 'framer-motion'

interface Testimonial {
  quote: string
  initials: string
  gradient: string
  name: string
  role: string
  company: string
}

export function CustomerStories() {
  const testimonials: Testimonial[] = [
    {
      quote: "SignalsHQ cut down our business tax prep time by more than half. Instead of manual data entry, our staff focuses on checking the tax calculations and providing high-level advisory insights.",
      initials: "MK",
      gradient: "from-brand-purple to-brand-blue",
      name: "Marcus Kael",
      role: "Managing Partner",
      company: "Kael & Associates CPA",
    },
    {
      quote: "The document auto-extraction is incredibly accurate. It parses complicated K-1s and 1099s in seconds. It has completely transformed our review workflow during peak season.",
      initials: "SL",
      gradient: "from-brand-pink to-brand-purple",
      name: "Sarah Lin",
      role: "Tax Director",
      company: "Apex Advisory Group",
    },
  ]

  return (
    <section className="relative py-24 px-6 bg-bg border-t border-border/40 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-bg-elevated/50 font-mono text-xs text-text-muted uppercase tracking-widest mb-6">
            <span className="w-1 h-1 rounded-full bg-brand-pink" />
            <span>Customer Stories</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight max-w-2xl leading-tight">
            Trusted by firms across the board.
          </h2>
        </div>

        {/* 2 Testimonial Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
              className="bg-bg-elevated/40 border border-border/80 rounded-2xl p-8 md:p-10 flex flex-col justify-between text-left relative overflow-hidden group hover:border-text-faint/60 transition-all duration-300"
            >
              {/* Quote Icon Background decoration */}
              <span className="absolute top-4 right-6 font-display font-black text-7xl md:text-8xl text-text-faint/15 select-none pointer-events-none transition-colors group-hover:text-text-faint/25">
                “
              </span>

              {/* Quote Text */}
              <p className="font-body text-base md:text-lg italic text-text-primary mb-8 leading-relaxed relative z-10">
                "{item.quote}"
              </p>

              {/* Footer */}
              <div className="flex items-center gap-4 border-t border-border/40 pt-6 mt-auto">
                {/* Circular Gradient Initials Avatar */}
                <div 
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center font-mono text-xs text-text-primary font-bold shadow-md`}
                >
                  {item.initials}
                </div>

                <div className="flex flex-col">
                  <span className="font-body text-sm font-bold text-text-primary">
                    {item.name}
                  </span>
                  <span className="font-body text-2xs md:text-xs text-text-muted">
                    {item.role}, <span className="font-semibold text-text-faint">{item.company}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export { CustomerStories }
