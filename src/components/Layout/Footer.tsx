import Link from 'next/link'

const FOOTER_SECTIONS = [
  {
    title: 'Browse',
    links: [
      { label: 'Arts & Culture', href: '/arts-culture' },
      { label: 'Bible & Theology', href: '/bible-theology' },
      { label: 'Christian Living', href: '/christian-living' },
      { label: 'Current Events', href: '/current-events' },
      { label: 'Faith & Work', href: '/faith-work' },
      { label: 'Ministry', href: '/ministry' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Articles', href: '/articles' },
      { label: 'Podcasts', href: '/podcasts' },
      { label: 'Videos', href: '/videos' },
      { label: 'Essays', href: '/essays' },
      { label: 'Commentary', href: '/commentary' },
      { label: 'Courses', href: '/courses' },
    ],
  },
  {
    title: 'Centers',
    links: [
      { label: 'The Carson Center', href: '/carson-center' },
      { label: 'The Keller Center', href: '/keller-center' },
      { label: 'New City Catechism', href: '/new-city-catechism' },
      { label: "Women's Initiatives", href: '/womens-initiatives' },
      { label: 'TGC Pastors', href: '/tgc-pastors' },
      { label: 'Read the Bible', href: '/read-the-bible' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About TGC', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Newsletters', href: '/newsletters' },
      { label: 'Store', href: '/store' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img
                src="/TGC-logo.svg"
                alt="The Gospel Coalition"
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-stone-300 text-sm font-ui leading-relaxed mt-4">
              We exist to help Christians know and love the gospel of Jesus Christ.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://twitter.com/TGC" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-stone-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://facebook.com/thegospelcoalition" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-stone-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://instagram.com/thegospelcoalition" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-stone-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link sections */}
          {FOOTER_SECTIONS.map(section => (
            <div key={section.title}>
              <h3 className="font-ui font-bold text-xs uppercase tracking-widest text-stone-400 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-stone-300 hover:text-white text-sm font-ui transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <div className="max-w-md">
            <h3 className="font-headline text-xl text-white mb-2">
              Stay informed with our weekly digest
            </h3>
            <p className="text-stone-300 text-sm font-ui mb-4">
              The best of TGC delivered to your inbox every week.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-sm text-white placeholder-stone-400 text-sm font-ui focus:outline-none focus:border-white/40"
              />
              <button className="px-5 py-2.5 bg-crimson text-white text-sm font-ui font-semibold rounded-sm hover:bg-crimson/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-400 text-xs font-ui">
            © {new Date().getFullYear()} The Gospel Coalition. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-stone-400 hover:text-white text-xs font-ui transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-stone-400 hover:text-white text-xs font-ui transition-colors">
              Terms of Use
            </Link>
            <Link href="/contact" className="text-stone-400 hover:text-white text-xs font-ui transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
