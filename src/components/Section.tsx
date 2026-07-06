import React from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export function Section({ children, id, className = '' }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full py-12 lg:py-20 select-none ${className}`}
    >
      {children}
    </motion.section>
  )
}
