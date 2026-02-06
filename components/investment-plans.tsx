import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, TrendingUp, Target, Clock, Shield, Zap, DollarSign, BarChart3 } from 'lucide-react'
import InvestmentSimulator from './investment-simulator'

const plans = [
  { period: '90 Días', percentage: 4.5, days: 90 },
  { period: '180 Días', percentage: 9, days: 180 },
  { period: '360 Días', percentage: 15, days: 360 },
]

const steps = [
  {
    number: '01',
    title: 'Escoge tu inversión',
    description: 'Selecciona el monto y período que mejor se adapte a tus objetivos financieros.',
    icon: DollarSign,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    number: '02',
    title: 'Configura tu estrategia',
    description: 'Nuestra IA optimiza automáticamente tu portafolio basado en el riesgo y horizonte.',
    icon: Zap,
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    number: '03',
    title: 'Recibe retornos',
    description: 'Disfruta de rendimientos fijos basados en el período seleccionado.',
    icon: TrendingUp,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    number: '04',
    title: 'Reinvierte o retira',
    description: 'Flexibilidad total para capitalizar ganancias o retirar fondos según tu conveniencia.',
    icon: Clock,
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
]

export function InvestmentPlans() {
  return (
    <>
      <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-300">
              <Shield className="w-4 h-4 mr-2" />
              Inversión Simplificada
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900">
              ¿Cómo funciona invertir
              <span className="block text-blue-600">en 9MX?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transforma tu capital con tecnología de inteligencia artificial avanzada y estrategias 
              de inversión probadas institucionalmente.
            </p>
          </div>

          {/* Steps Section - Horizontal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <Card 
                  key={step.number} 
                  className={`border-2 ${step.borderColor} bg-white hover:border-blue-400 transition-all duration-300 hover:shadow-lg group`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${step.bgColor} border ${step.borderColor}`}>
                        <Icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <span className="text-3xl font-bold text-gray-200">{step.number}</span>
                    </div>
                    <CardTitle className="text-xl mb-3 text-gray-800">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Proceso automatizado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Plans Section - CENTRADO */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Planes de Rendimiento
                <span className="block text-lg font-normal text-gray-600 mt-2">
                  Selecciona el período que mejor se adapte a tu estrategia
                </span>
              </h3>
            </div>

            {/* Cambio principal: justify-center y ajuste en grid-cols */}
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
                {plans.map((plan) => (
                  <div 
                    key={plan.period} 
                    className="relative p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-blue-400 transition-all duration-300 group hover:shadow-lg"
                  >
                    <div className="absolute -top-3 left-4">
                      <Badge className="bg-blue-600 text-white px-3 py-1 border-0">
                        {plan.days} días
                      </Badge>
                    </div>
                    
                    <div className="text-center pt-2">
                      <div className="text-4xl font-bold mb-2 text-blue-600">
                        {plan.percentage}%
                      </div>
                      <div className="text-sm text-gray-500 mb-1">Rendimiento diario definido</div>
                      <div className="text-xl font-semibold mb-6 text-gray-800">{plan.period}</div>
                      
                      <div className="space-y-3 text-sm text-gray-600 mb-6">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Retorno garantizado</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <BarChart3 className="w-4 h-4 text-blue-500" />
                          <span>Liquidación diaria</span>
                        </div>
                      </div>
                      
                      <button className="w-full py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors border-2 border-blue-600">
                        Seleccionar Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transparencia del sistema de ganancias - Card actualizada */}
          <Card className="border-2 border-blue-200 bg-blue-50 overflow-hidden mb-12">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-blue-100 rounded-xl border border-blue-200">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-6 text-gray-900">Transparencia del sistema de ganancias</h4>
                  
                  

                  {/* Separador */}
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent my-8"></div>

                  {/* Información adicional */}
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-lg font-semibold mb-3 text-gray-900">
                        Los planes de 9MX ofrecen porcentajes diarios definidos durante cada periodo seleccionado.
                      </h5>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        Una vez activado un plan, el rendimiento diario se mantiene estable durante todo su ciclo.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Estos planes son posibles gracias a NovaMind™, el sistema de inteligencia artificial que opera en mercados 
                        reales utilizando estrategias avanzadas y gestión de riesgo, garantizando sostenibilidad y continuidad del ecosistema.
                      </p>
                    </div>

                    
                  </div>

                  <div className="mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-800">Mínimo garantizado según plan</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-800">Sin comisiones ocultas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl border-2 border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">$100</div>
              <div className="text-sm text-gray-600">Inversión mínima</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border-2 border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Operación continua</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border-2 border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-sm text-gray-600">Planes disponibles</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border-2 border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">Instantáneo</div>
              <div className="text-sm text-gray-600">Retiro de fondos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulador de inversión */}
      <InvestmentSimulator />
    </>
  )
}