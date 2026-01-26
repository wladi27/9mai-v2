"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Award, Briefcase, Globe, Target, TrendingUp, Users, ChevronRight, CheckCircle } from 'lucide-react'

export function CEOSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section - Compacta */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6 border border-blue-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-semibold">LIDERAZGO VISIONARIO</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">La Mente Detrás de </span>
            <span className="text-blue-600">9M AI</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce al visionario que está redefiniendo la inversión inteligente
          </p>
        </div>

        {/* Main CEO Card - Más Compacta */}
        <Card className="border-2 border-gray-200 shadow-xl overflow-hidden bg-white">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* CEO Image Section */}
              <div className="relative min-h-[400px] lg:min-h-[500px] overflow-hidden bg-gray-100">
                <div className="absolute inset-0">
                  <img
                    src="/ceo.png"
                    alt="Chris Chang, CEO & Fundador de 9M AI"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/ceo.svg' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                
                {/* Floating Badges */}
                <div className="absolute top-4 left-4">
                  <div className="flex flex-col gap-2">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
                      <div className="flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        <span>CEO Visionario</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Chris Chang</h4>
                        <p className="text-blue-600 text-sm font-semibold">Fundador & CEO</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-600">Experiencia</div>
                        <div className="text-lg font-bold text-gray-900">15+ años</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CEO Content Section - Más Compacta */}
              <div className="p-8 lg:p-10">
                {/* Quick Stats - Compacta */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <div className="text-lg font-bold text-blue-600">2009</div>
                    <div className="text-xs text-gray-700">Primera empresa</div>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                    <div className="text-lg font-bold text-emerald-600">NASDAQ</div>
                    <div className="text-xs text-gray-700">Cotización 2012</div>
                  </div>
                </div>

                {/* Introduction */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full mb-4 text-sm border border-blue-300">
                    <Briefcase className="w-3 h-3" />
                    <span>Perfil Ejecutivo</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Chris Chang es un emprendedor autodidacta e inversor visionario con trayectoria 
                    en la creación y expansión de proyectos multisectoriales a nivel global.
                  </p>
                </div>

                {/* Key Achievements - Compacta */}
                <div className="mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Logros Destacados</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg border border-blue-200 flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 text-sm mb-1">Empresa LED Fortune 500</h5>
                        <p className="text-gray-600 text-sm">
                          Fundó empresa de LED para clientes Fortune 500, con cotización en NASDAQ en 2012.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-emerald-100 rounded-lg border border-emerald-200 flex-shrink-0">
                        <Globe className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 text-sm mb-1">Visión Global</h5>
                        <p className="text-gray-600 text-sm">
                          Combina innovación tecnológica con perspicacia empresarial internacional.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg border border-purple-200 flex-shrink-0">
                        <Users className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 text-sm mb-1">Liderazgo en 9M AI</h5>
                        <p className="text-gray-600 text-sm">
                          Crea ecosistema único en la intersección de finanzas y tecnología con IA.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Philosophy - Compacta */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl p-6 border border-blue-200 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white rounded-lg border border-blue-200">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Filosofía de Liderazgo</h4>
                      <p className="text-gray-700 text-sm mb-4 italic">
                        "Creo en el poder de la tecnología para democratizar el acceso a oportunidades 
                        de inversión de alto nivel."
                      </p>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <ChevronRight className="w-3 h-3 text-blue-600" />
                        <span>— Chris Chang, Fundador & CEO</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action - Compacta */}
               
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Company Values Section - Más Compacta */}
        
      </div>
    </section>
  )
}