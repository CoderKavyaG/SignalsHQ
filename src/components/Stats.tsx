import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatItemProps {
  value: number
  suffix: string
  label: string
}

function StatCounter({ value, suffix, label }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const duration = 1200 // 1.2s
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing: ease-out quad
      const easeProgress = progress * (2 - progress)
      
      setCount(Math.floor(easeProgress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="font-mono text-5xl md:text-7xl font-medium text-text-primary tracking-tight mb-2">
        <span>{count}</span>
        <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--brand-gradient)' }}>
          {suffix}
        </span>
      </div>
      <span className="font-body text-xs md:text-sm font-semibold uppercase tracking-wider text-text-muted">
        {label}
      </span>
    </div>
  )
}

export function Stats() {
  const statsList: StatItemProps[] = [
    { value: 4, suffix: '+ hrs', label: "Time saved" },
    { value: 2, suffix: 'X', label: "Advisory Revenue" },
    { value: 95, suffix: '%+', label: "Client Satisfaction" },
  ]

  return (
    <section className="relative py-16 px-6 bg-bg border-t border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border/60"
        >
          {statsList.map((stat, idx) => (
            <StatCounter
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
export { Stats }
