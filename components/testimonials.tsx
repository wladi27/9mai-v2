"use client"

import { Card, CardContent } from '@/components/ui/card'
import { useState, useEffect } from 'react'
import { Star, Quote, MapPin, CheckCircle, Users, DollarSign, TrendingUp, Shield, Award, Clock, Globe, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Mari Paz',
    country: 'España',
    role: 'Inversionista desde 2023',
    content: 'Entré en 9M por la confianza que me dio la trazabilidad en blockchain y el uso de Cobo como institución intermediaria y de autocustodia del capital. Valoro especialmente la claridad del sistema y la rapidez en los retiros.',
    highlight: 'Trazabilidad en blockchain • Rapidez en retiros',
    avatarColor: 'from-blue-500 to-blue-600',
    rating: 5,
    duration: '6 meses'
  },
  {
    id: 2,
    name: 'Isaac C.',
    country: 'El Salvador',
    role: 'Empresario & Inversor',
    content: 'Desde el primer contacto sentí confianza porque la propuesta fue clara y honesta. Valoro la profesionalidad, el acompañamiento constante y el método bien definido, que me permitió avanzar con calma y seguridad.',
    highlight: 'Profesionalidad • Acompañamiento constante',
    avatarColor: 'from-emerald-500 to-emerald-600',
    rating: 5,
    duration: '8 meses'
  },
  {
    id: 3,
    name: 'Armando G.',
    country: 'México',
    role: 'Profesional Financiero',
    content: 'Lo que más me dio confianza fue el equipo corporativo y la simplicidad de un plan de compensación sostenible. Valoro la libertad de elegir el plazo de inversión y la comunidad que se está formando.',
    highlight: 'Plan sostenible • Libertad de plazo',
    avatarColor: 'from-purple-500 to-purple-600',
    rating: 5,
    duration: '10 meses'
  },
  {
    id: 4,
    name: 'Ramón A.',
    country: 'República Dominicana',
    role: 'Inversor Institucional',
    content: 'Me dio confianza saber que es una empresa registrada y con licencias para operar legalmente. Destaco la estabilidad del sistema, la seguridad y la rapidez en los pagos.',
    highlight: 'Licencias oficiales • Seguridad garantizada',
    avatarColor: 'from-amber-500 to-amber-600',
    rating: 5,
    duration: '12 meses'
  },
  {
    id: 5,
    name: 'Álinson P.',
    country: 'Venezuela',
    role: 'Emprendedor Digital',
    content: 'Entré en 9M buscando una forma de generar ingresos pasivos mientras me dedicaba a otros proyectos. Me dio confianza entender cómo funciona el sistema y el uso del trading automatizado con IA.',
    highlight: 'Ingresos pasivos • Trading automatizado IA',
    avatarColor: 'from-red-500 to-red-600',
    rating: 5,
    duration: '7 meses'
  },
]

const stats = [
  { value: '15,000+', label: 'Inversores Activos', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
  { value: '$500M+', label: 'Capital Administrado', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  { value: '96.5%', label: 'Tasa de Satisfacción', icon: TrendingUp, color: 'text-amber-600', bg: 'bg-amber-100' },
  { value: '20+', label: 'Países', icon: Globe, color: 'text-purple-600', bg: 'bg-purple-100' },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000) // Cambia cada 5 segundos
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, currentIndex])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonios" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-blue-50/30 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-600/10 to-transparent -z-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full mb-8 shadow-lg border border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">TESTIMONIOS VERIFICADOS</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            <span className="text-gray-900">Historias de</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mt-2">
              Éxito Real
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo inversores de todo el mundo están transformando su futuro financiero
            con la tecnología de vanguardia de 9M AI.
          </p>
        </div>

        {/* Main Slider */}
        <div className="mb-20">
          {/* Slider Navigation */}
          <div className="flex justify-center items-center gap-8 mb-10">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-3 rounded-full bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
              >
                {isAutoPlaying ? (
                  <Pause className="w-5 h-5 text-gray-700" />
                ) : (
                  <Play className="w-5 h-5 text-gray-700" />
                )}
              </button>
              <div className="text-sm text-gray-600">
                Auto-reproducción {isAutoPlaying ? 'ON' : 'OFF'}
              </div>
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Current Testimonial Display */}
          <div className="relative bg-gradient-to-br from-white to-blue-50/30 rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full translate-x-32 translate-y-32"></div>
            
            {/* Progress Bar */}
            <div className="h-1.5 bg-gray-200">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              ></div>
            </div>
            
            <div className="p-12">
              {/* Testimonial Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-6">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${currentTestimonial.avatarColor} flex items-center justify-center text-white font-bold text-3xl shadow-lg`}>
                    {currentTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{currentTestimonial.name}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-5 h-5" />
                        <span className="text-lg">{currentTestimonial.country}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 text-lg">{currentTestimonial.role}</span>
                      <span className="text-gray-400">•</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {currentTestimonial.duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  <div className="flex gap-1 mb-3">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">Calificación perfecta</span>
                </div>
              </div>
              
              {/* Quote Content */}
              <div className="relative mb-10">
                <Quote className="absolute -top-6 -left-6 w-16 h-16 text-blue-100 -z-10" />
                <p className="text-2xl text-gray-800 leading-relaxed font-medium pl-8">
                  "{currentTestimonial.content}"
                </p>
              </div>
              
              {/* Highlight Box */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl border border-blue-200">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Lo que más valoró:</h4>
                    <p className="text-lg text-gray-700 font-medium">
                      {currentTestimonial.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Slider Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-800 w-10' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}