import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TopContactBar from '@/components/TopContactBar'
import WhatsAppButton from '@/components/WhatsAppButton'
import './globals.css'
import type { Metadata } from 'next'

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta', display: 'swap', weight: ['400', '500', '600', '700', '800'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap', weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  title: { default: 'Paras Chem India - Leading Chemical Distributor', template: '%s | Paras Chem India' },
  description: 'One of the leading suppliers of a wide range of chemicals — pharmaceuticals, paints, oils, specialty chemicals, detergents, preservatives & cleaning chemicals. 27+ years of operational excellence.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body-md text-body-md bg-background text-on-background antialiased min-h-screen flex flex-col">
        <TopContactBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
