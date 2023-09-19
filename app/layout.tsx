import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '30DC',
  description: 'Blog page pf 30 days coding community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gradient-to-r from-black via-teal-950 to-black`}>
        <Navbar/>
        <main className='max-w-3xl mx-auto pt-4 px-4 sm:px-6 lg:px-8'>
          {children}
        </main>
      </body>
    </html>
  )
}
