import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mr. Maple - Premium Japanese Maples',
  description: 'Discover our curated collection of rare and beautiful Japanese Maples',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
