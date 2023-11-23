import type { Metadata } from 'next'
import { Inter, Heebo } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable : '--font-inter',
   subsets: ['latin'] 
  })

const heebo = Heebo({
  variable : '--font-heebo',
  subsets : ['latin'],
  weight : []
})

export const metadata: Metadata = {
  title: 'Portifólio - Matheus Leal',
  description: 'Meu portifolio pessoal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className= {`${inter.variable} ${heebo.variable}`}>
      <body className='bg-[#171023]'>{children}</body>
    </html>
  )
}
