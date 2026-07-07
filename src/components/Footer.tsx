export function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Security", href: "#security" },
        { label: "Roadmap", href: "#roadmap" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Careers", href: "#careers" },
        { label: "Press", href: "#press" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#docs" },
        { label: "Help Center", href: "#help" },
        { label: "Tax Guides", href: "#guides" },
        { label: "API Reference", href: "#api" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "Data Processing", href: "#dpa" },
        { label: "Compliance", href: "#compliance" },
      ],
    },
  ]

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      ),
    },
    {
      label: "Discord",
      href: "https://discord.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="relative py-16 md:py-24 px-6 bg-bg border-t border-border/40 select-none overflow-hidden">
      {/* Faint dot-grid background texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-16">
          
          {/* Logo column */}
          <div className="md:col-span-4 flex flex-col items-start text-left gap-4">
            <a 
              href="/" 
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 rounded-lg p-1"
            >
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
                    <linearGradient id="footer-brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="50%" stopColor="#EC4899" />
                      <stop offset="100%" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" 
                    fill="url(#footer-brand-grad)" 
                  />
                </svg>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-text-primary">
                SignalsHQ
              </span>
            </a>
            <p className="font-body text-xs md:text-sm font-medium text-text-muted leading-relaxed max-w-xs">
              AI-driven tax automation infrastructure. Scaling productivity, compliance, and growth for modern accounting firms.
            </p>
          </div>

          {/* Links columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {sections.map((sec, idx) => (
              <div key={idx} className="flex flex-col items-start text-left">
                <span className="font-mono text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">
                  {sec.title}
                </span>
                <ul className="space-y-3">
                  {sec.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a 
                        href={link.href}
                        className="font-body text-xs md:text-sm font-medium text-text-faint hover:text-text-primary transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 rounded"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-body text-xs text-text-faint">
            &copy; {currentYear} SignalsHQ. All rights reserved.
          </span>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                aria-label={`Visit our ${social.label} page`}
                className="w-8 h-8 rounded-lg bg-bg-elevated/40 hover:bg-bg-elevated border border-border flex items-center justify-center text-text-faint hover:text-text-primary transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
