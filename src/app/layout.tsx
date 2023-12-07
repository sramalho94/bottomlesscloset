import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/global/Nav'
import Nav2 from '@/components/global/Nav2'
import { Montserrat, Open_Sans } from '@next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bottomless Closet',
  description:
    'Empowering women for professional success through tailored support, attire, and resources'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.svg" sizes="any" />
      <body className="fonts-mont min-h-screen max-w-screen flex flex-col justify-between">
        {' '}
        {/* <Nav /> */}
        <Nav2 />
        {children}
        <Footer />
      </body>
    </html>
  )
}
