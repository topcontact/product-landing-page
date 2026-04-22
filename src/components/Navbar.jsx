import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#features', label: 'คุณสมบัติ' },
    { href: '#showcase', label: 'สินค้า' },
    { href: '#specs', label: 'Specs' },
    { href: '#reviews', label: 'รีวิว' },
    { href: '#pricing', label: 'ราคา' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'navbar-scrolled py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-transform group-hover:scale-110">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>
          <span className="font-display text-white text-xl font-bold tracking-tight">
            LUXE<span className="text-primary-light">.</span>audio
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="btn-glow bg-gradient-to-r from-primary to-accent text-white px-6 py-2.5 text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            ซื้อเลย
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5 transition-all">
            <span
              className={`block h-[2px] bg-gradient-to-r from-primary to-accent rounded transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-[2px] bg-gradient-to-r from-primary to-accent rounded transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] bg-gradient-to-r from-primary to-accent rounded transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-surface/95 backdrop-blur-xl px-4 py-6 space-y-3 border-t border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-white/70 hover:text-white text-sm font-medium py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setMobileOpen(false)}
            className="block bg-gradient-to-r from-primary to-accent text-white text-center px-6 py-3 text-sm font-semibold rounded-xl mt-4"
          >
            ซื้อเลย
          </a>
        </div>
      </div>
    </nav>
  )
}
