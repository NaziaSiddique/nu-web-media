import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NU Web & Media',
  description: 'Web development agency for elegant and powerful sites.',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  )
}
