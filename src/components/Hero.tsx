import { motion } from 'framer-motion'
import { SignalField } from './SignalField'

export function Hero() {
  const quotes = [
    {
      text: "Review queue is jammed again",
      position: "top-[15%] left-[4%] md:left-[12%]",
      color: "bg-brand-purple",
      delay: 0,
      duration: 5,
    },
    {
      text: "W-2s and 1099s everywhere - help!",
      position: "top-[25%] right-[4%] md:right-[10%]",
      color: "bg-brand-pink",
      delay: 0.8,
      duration: 5.5,
    },
    {
      text: "K-1s are slowing everything down",
      position: "bottom-[35%] left-[2%] md:left-[8%]",
      color: "bg-brand-blue",
      delay: 0.4,
      duration: 4.8,
    },
    {
      text: "What's the nexus rule in California?",
      position: "bottom-[28%] right-[2%] md:right-[8%]",
      color: "bg-brand-purple",
      delay: 1.2,
      duration: 6,
    },
    {
      text: "We're double-entering the same data!",
      position: "bottom-[12%] left-[15%] md:left-[28%]",
      color: "bg-brand-pink",
      delay: 1.6,
      duration: 5.2,
    },
  ]

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 px-6 select-none bg-bg">
      {/* 2D Canvas Background & Glowing Blob Layer */}
      <SignalField />

      {/* Floating Quote Bubbles */}
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-none overflow-hidden">
        {quotes.map((q, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: q.delay + 0.2 },
              y: {
                repeat: Infinity,
                duration: q.duration,
                ease: 'easeInOut',
                delay: q.delay,
              },
            }}
            className={`absolute ${q.position} pointer-events-auto px-4 py-2.5 rounded-full bg-bg-elevated/75 border border-border backdrop-blur-md text-xs md:text-sm font-body text-text-muted flex items-center gap-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)] whitespace-nowrap transition-colors hover:border-text-faint`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${q.color}`} />
            <span>{q.text}</span>
          </motion.div>
        ))}
      </div>

      {/* Centered Hero Text Content */}
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-bg-elevated/50 font-mono text-[10px] md:text-xs text-text-muted uppercase tracking-widest mb-8"
        >
          <span className="w-1 h-1 rounded-full bg-brand-purple animate-pulse" />
          <span>AI Infrastructure for Tax</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-extrabold text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] text-text-primary tracking-tight mb-6 max-w-3xl"
        >
          Powering Tax Experts.
          <br />
          Fueling Firm Growth.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-text-muted text-lg md:text-xl max-w-xl mb-10 font-medium"
        >
          Smart Automation Built for Scaling Tax Firms
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="#demo"
            whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent-cta text-accent-cta-text font-body text-base font-semibold tracking-wide shadow-lg cursor-pointer"
          >
            Book a Demo →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
