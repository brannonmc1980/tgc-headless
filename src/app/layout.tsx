import type { Metadata } from 'next'
import { EB_Garamond, Inter } from 'next/font/google'
import MainNav from '@/components/Nav/MainNav'
import Footer from '@/components/Layout/Footer'
import './globals.css'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'The Gospel Coalition',
    template: '%s | The Gospel Coalition',
  },
  description:
    'The Gospel Coalition exists to help Christians know and love the gospel of Jesus Christ through biblical truth, spiritual formation, and thoughtful cultural engagement.',
  metadataBase: new URL('https://tgc-headless.vercel.app'),
  openGraph: {
    type: 'website',
    siteName: 'The Gospel Coalition',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TGC',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${inter.variable}`}>
      <body className="font-ui antialiased bg-[#f5f5f2] text-charcoal">
        <MainNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
