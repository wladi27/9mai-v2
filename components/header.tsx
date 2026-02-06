"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname() || '/'
  const isNosotros = pathname.startsWith('/nosotros')

  const anchor = (id: string) => (isNosotros ? `/${id}` : `${id}`)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-new.png"
            alt="9M Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href={anchor('#inicio')} className="text-sm font-medium text-blue-200 hover:text-white transition-colors">
            Inicio
          </Link>
          <Link href="/nosotros" className="text-sm font-medium text-blue-200 hover:text-white transition-colors">
            Nosotros
          </Link>
          <Link href={anchor('#como-funciona')} className="text-sm font-medium text-blue-200 hover:text-white transition-colors">
            ¿Cómo funciona?
          </Link>
          <Link href={anchor('#por-que')} className="text-sm font-medium text-blue-200 hover:text-white transition-colors">
            ¿Por qué elegirnos?
          </Link>
          <Link href={anchor('#testimonios')} className="text-sm font-medium text-blue-200 hover:text-white transition-colors">
            Testimonios
          </Link>
          <Link href={anchor('#faq')} className="text-sm font-medium text-blue-200 hover:text-white transition-colors">
            FAQ
          </Link>
          <Link href={anchor('#contacto')} className="text-sm font-medium text-blue-200 hover:text-white transition-colors">
            Contacto
          </Link>
        </nav>

        <Button asChild>
          <a
            href="https://api.whatsapp.com/send/?phone=33768698300&text=Hola%2C+ya+vi+la+pagina+de+Novamind%2C+quiero+empezar+a+trabajar+con+9M+AI&type=phone_number&app_absent=0"
            className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero empezar
          </a>
        </Button>
      </div>
    </header>
  )
}
