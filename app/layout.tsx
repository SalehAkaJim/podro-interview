import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.scss'

const IRANSans = localFont({ src: '../public/fonts/IRANSansWeb(FaNum).woff2' })

export const metadata: Metadata = {
  title: 'IP Address Checker',
  description: ''
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={IRANSans.className}>{children}</body>
    </html>
  )
}
