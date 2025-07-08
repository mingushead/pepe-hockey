import Header from '@/features/header'
import './globals.scss'
import './animations.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pepe Hockey',
  description: 'Spectator-friendly Crypto Betting Hockey Game',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"font-ph-mono"}>{children}</body>
    </html>
  )
}
