import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '9MX - Inteligencia Artificial para Inversión Automática',
  description: 'Mientras descansas, la IA trabaja para ti. Invierte con 9MX y transforma tu tiempo en ingresos automáticos con la potencia de NovaMind',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/9M-favicon.png',
      },
    ],
    apple: '/9M-favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
