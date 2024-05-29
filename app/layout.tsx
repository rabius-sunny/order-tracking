import type { Metadata } from 'next'
import { Roboto_Slab } from 'next/font/google'
import './globals.css'
import Provider from '~/configs/Provider'

const nunito = Roboto_Slab({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Order Track',
  description: 'Track your order status'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
