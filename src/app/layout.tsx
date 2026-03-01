import type { Metadata } from 'next'
import MainNav from '@/components/Nav/MainNav'
import Footer from '@/components/Layout/Footer'
import './globals.css'

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
    images: [{ url: '/socialshare.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TGC',
    images: ['/socialshare.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-ui antialiased bg-[#fbfbfa] text-charcoal">
        <MainNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
