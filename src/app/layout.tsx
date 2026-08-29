import { Hanken_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-hanken-grotesk', display: 'swap', weight: ['400', '500', '600', '700'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap', weight: ['400', '500', '600'] })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono', display: 'swap', weight: ['400', '500'] })

export const metadata: Metadata = {
  title: { default: 'Paras Chem - Global Chemical Solutions', template: '%s | Paras Chem' },
  description: 'Leading distributor of industrial, water treatment, and specialty chemicals across India. 30+ years of operational excellence.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body-md text-body-md bg-background text-on-background antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
