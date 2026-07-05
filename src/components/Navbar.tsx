import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
      initial={{ backgroundColor: 'rgba(8, 8, 11, 0)' }}
      animate={{
        backgroundColor: isScrolled ? 'rgba(8, 8, 11, 0.85)' : 'rgba(8, 8, 11, 0)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
        borderBottomColor: isScrolled ? 'var(--color-border, #232329)' : 'rgba(35, 35, 41, 0)',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Side: Logo */}
        <a href="/" className="flex items-center gap-3 group select-none">
          {/* Spark SVG with Brand Gradient */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 transform transition-transform group-hover:rotate-45 duration-500"
            >
              <defs>
                <linearGradient id="logo-brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
              </defs>
              <path 
                d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" 
                fill="url(#logo-brand-grad)" 
              />
            </svg>
          </div>
          {/* Wordmark */}
          <span className="font-display font-bold text-xl tracking-tight text-text-primary">
            SignalsHQ
          </span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#features" 
            className="font-body text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="font-body text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            Pricing
          </a>
          <a 
            href="#usecase" 
            className="font-body text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            Use Case
          </a>
          <a 
            href="#security" 
            className="font-body text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            Security
          </a>
          
          {/* Resources Dropdown Trigger */}
          <div className="relative group/dropdown">
            <button 
              className="flex items-center gap-1 font-body text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer"
            >
              Resources
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-3.5 h-3.5 transform transition-transform group-hover/dropdown:translate-y-0.5 duration-200"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

          <a 
            href="#contact" 
            className="font-body text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Right Side: CTA Button */}
        <div>
          <motion.a
            href="#demo"
            whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent-cta text-accent-cta-text font-body text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer"
          >
            Book a Demo →
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}
