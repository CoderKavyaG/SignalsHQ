import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className="fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 rounded-full border bg-bg/85 backdrop-blur-md shadow-2xl transition-all duration-300 ease-in-out"
      initial={{ top: '16px', y: 0 }}
      animate={{
        top: isScrolled ? '12px' : '16px',
        backgroundColor: isScrolled || isMobileMenuOpen ? 'rgba(18, 18, 24, 0.92)' : 'rgba(8, 8, 11, 0.85)',
        borderColor: isScrolled || isMobileMenuOpen ? 'var(--color-border, #232329)' : 'rgba(35, 35, 41, 0.5)',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.7)' : '0 4px 20px -5px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="px-6 h-16 flex items-center justify-between relative">
        {/* Left Side: Logo */}
        <a 
          href="/" 
          aria-label="SignalsHQ Home"
          className="flex items-center select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 rounded-lg p-1 shrink-0"
        >
          <img 
            src="/logo.png" 
            alt="SignalsHQ Logo" 
            className="h-[22px] md:h-[26px] w-auto object-contain transition-opacity duration-200 hover:opacity-90"
          />
        </a>

        {/* Center: Navigation Links (Desktop only) */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#features" 
            className="font-body text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 rounded p-1"
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="font-body text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 rounded p-1"
          >
            Pricing
          </a>
          <a 
            href="#usecase" 
            className="font-body text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 rounded p-1"
          >
            Use Case
          </a>
          <a 
            href="#security" 
            className="font-body text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 rounded p-1"
          >
            Security
          </a>
          
          {/* Resources Dropdown Trigger */}
          <div className="relative group/dropdown">
            <button 
              className="flex items-center gap-1 font-body text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 rounded p-1"
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
            className="font-body text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 rounded p-1"
          >
            Contact
          </a>
        </nav>

        {/* Right Side: CTA Button (Desktop only) */}
        <div className="hidden md:block shrink-0">
          <motion.a
            href="#demo"
            whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-accent-cta text-accent-cta-text font-body text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50"
          >
            Book a Demo →
          </motion.a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center shrink-0">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-border bg-bg-elevated/50 text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 transition-all duration-200 ease-in-out cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-4.5 h-4.5 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
            >
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Slide-Down Dropdown Menu (Detached Card Container) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="md:hidden border border-border bg-bg/95 backdrop-blur-lg overflow-hidden rounded-2xl shadow-2xl absolute top-[76px] left-0 right-0 z-40"
            >
              <div className="flex flex-col gap-4 px-6 py-6 text-left">
                <a
                  href="#features"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-sm font-semibold text-text-muted hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 rounded p-1"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-sm font-semibold text-text-muted hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 rounded p-1"
                >
                  Pricing
                </a>
                <a
                  href="#usecase"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-sm font-semibold text-text-muted hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 rounded p-1"
                >
                  Use Case
                </a>
                <a
                  href="#security"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-sm font-semibold text-text-muted hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 rounded p-1"
                >
                  Security
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-sm font-semibold text-text-muted hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 rounded p-1"
                >
                  Contact
                </a>
                
                <div className="pt-3 border-t border-border/40">
                  <a
                    href="#demo"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent-cta text-accent-cta-text font-body text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50"
                  >
                    Book a Demo →
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
