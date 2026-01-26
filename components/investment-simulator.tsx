"use client"

import { useMemo, useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'

const TERMS = [
  { label: '7 Días', days: 7, rate: 10, color: 'from-blue-100 to-cyan-100' },
  { label: '30 Días', days: 30, rate: 13, color: 'from-cyan-100 to-blue-100' },
  { label: '90 Días', days: 90, rate: 16, color: 'from-blue-100 to-cyan-100' },
  { label: '180 Días', days: 180, rate: 18, color: 'from-cyan-50 to-blue-100' },
  { label: '360 Días', days: 360, rate: 21, color: 'from-blue-100 to-cyan-100' },
]

export function InvestmentSimulator() {
  const [principal, setPrincipal] = useState<string>('1000')
  const [termIndex, setTermIndex] = useState<number>(2)
  const [result, setResult] = useState<{ finalAmount: number; profit: number; dailyProfit: number } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [animatedProfit, setAnimatedProfit] = useState(0)
  const [animatedFinalAmount, setAnimatedFinalAmount] = useState(0)
  const animationRef = useRef<number>()

  const selectedTerm = TERMS[termIndex]

  const principalNumber = useMemo(() => Number(principal.replace(/[^0-9.]/g, '')) || 0, [principal])

  const animateValue = (start: number, end: number, duration: number, setter: (value: number) => void) => {
    const startTime = performance.now()
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = progress < 0.5 
        ? 2 * progress * progress 
        : -1 + (4 - 2 * progress) * progress
      
      const currentValue = start + (end - start) * easedProgress
      setter(currentValue)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step)
      }
    }
    animationRef.current = requestAnimationFrame(step)
  }

  const handleCalculate = () => {
    setError(null)
    setIsCalculating(true)

    if (isNaN(principalNumber) || principalNumber <= 0) {
      setError('Introduce un monto válido')
      setResult(null)
      setIsCalculating(false)
      return
    }

    if (principalNumber < 100) {
      setError('La inversión inicial debe ser al menos $100')
      setResult(null)
      setIsCalculating(false)
      return
    }

    // Pequeño delay para la animación
    setTimeout(() => {
      const rate = selectedTerm.rate / 100
      const finalAmount = +(principalNumber * (1 + rate)).toFixed(2)
      const profit = +(finalAmount - principalNumber).toFixed(2)
      const dailyProfit = +(profit / selectedTerm.days).toFixed(2)

      const newResult = { finalAmount, profit, dailyProfit }
      setResult(newResult)
      
      // Animaciones
      setAnimatedProfit(0)
      setAnimatedFinalAmount(principalNumber)
      
      setTimeout(() => {
        animateValue(0, profit, 1000, setAnimatedProfit)
        animateValue(principalNumber, finalAmount, 1000, setAnimatedFinalAmount)
        setIsCalculating(false)
      }, 100)
    }, 300)
  }

  const handleReset = () => {
    setPrincipal('1000')
    setTermIndex(2)
    setResult(null)
    setError(null)
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
  }

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <section aria-label="Simulador de Inversión" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Contenido principal */}
        <div className="relative z-10">
          {/* Header con badge */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 backdrop-blur-sm rounded-full border border-cyan-100 mb-4">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-cyan-700">
                  SIMULADOR INTELIGENTE
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Calcula tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Potencial de Ganancia</span></h3>
              <p className="text-gray-600 mt-2 md:mt-3 text-base md:text-lg">Simula tu inversión y descubre el poder del interés compuesto con NovaMind AI</p>
            </div>
            
            {/* Stats rápidas */}
            <div className="flex gap-4 md:gap-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">21%</div>
                <div className="text-xs sm:text-sm text-cyan-600">Máxima tasa</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">99.5%</div>
                <div className="text-xs sm:text-sm text-cyan-600">Precisión</div>
              </div>
            </div>
          </div>

          {/* Tarjeta principal */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
            <div className="p-2 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-sm font-medium text-gray-700">simulador.novamind.ai</span>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                  <span className="text-xs text-cyan-600">En Tiempo Real</span>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* Panel izquierdo - Entradas */}
                <div className="space-y-6">
                  {/* Monto de inversión */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                      <label className="text-sm font-medium text-gray-900">Inversión Inicial (USD)</label>
                      <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Mínimo: $100</div>
                    </div>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</div>
                      <input
                        type="number"
                        min="100"
                        step="100"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                        className="w-full h-12 md:h-14 pl-10 pr-4 rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        placeholder="Ej: 1000"
                      />
                    </div>
                    
                    {/* Quick select buttons */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {[100, 500, 1000, 5000, 10000].map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setPrincipal(amount.toString())}
                          className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                            principalNumber === amount
                              ? 'bg-cyan-600 text-white shadow-sm'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          ${amount.toLocaleString('en-US')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Plazos con cards */}
                  <div>
                    <label className="text-sm font-medium text-gray-900 mb-3 block">Selecciona el Plazo</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                      {TERMS.map((term, index) => (
                        <button
                          key={term.label}
                          onClick={() => setTermIndex(index)}
                          className={`relative rounded-xl p-3 md:p-4 border-2 transition-all duration-300 ${
                              termIndex === index
                                ? 'border-cyan-500 bg-gradient-to-br from-cyan-50 to-transparent scale-105 shadow-sm'
                                : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                            }`}
                        >
                          <div className="text-center">
                            <div className="text-base md:text-lg font-bold text-gray-900 mb-1">{term.label}</div>
                            <div className={`text-sm font-semibold ${
                              termIndex === index ? 'text-emerald-600' : 'text-gray-600'
                            }`}>
                              {term.rate}%
                            </div>
                            <div className="text-xs text-gray-500 mt-1">Tasa</div>
                          </div>
                          
                          {termIndex === index && (
                            <>
                              <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2">
                                <div className="w-5 h-5 md:w-6 md:h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              </div>
                              <div className={`absolute inset-0 bg-gradient-to-br ${term.color} rounded-xl -z-10 opacity-30`} />
                            </>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Botones de acción */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      onClick={handleCalculate}
                      disabled={isCalculating}
                      className="flex-1 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isCalculating ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Calculando...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          Calcular Rentabilidad
                        </div>
                      )}
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={handleReset}
                      className="h-12 px-6 rounded-xl border-2 border-gray-300 hover:border-blue-400 bg-white hover:bg-blue-500 text-gray-700"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Reiniciar
                    </Button>
                  </div>

                  {error && (
                    <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-red-700">Error de validación</div>
                          <div className="text-sm text-red-600">{error}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Panel derecho - Resultados */}
                <div className="space-y-6">
                  {result ? (
                    <>
                      {/* Header resultados */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <div className="text-sm text-cyan-700">Resultados Simulados</div>
                            <div className="text-base md:text-lg font-bold text-gray-900">{selectedTerm.label} • {selectedTerm.rate}% Tasa</div>
                          </div>
                          <div className="text-xs text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">
                            Actualizado: Ahora
                          </div>
                        </div>
                      </div>

                      {/* Cards de resultados */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 md:p-5 rounded-xl bg-gray-50 border border-gray-200">
                          <div className="text-sm text-gray-600 mb-2">Inversión Inicial</div>
                          <div className="text-xl md:text-2xl font-bold text-gray-900">${principalNumber.toLocaleString('en-US')}</div>
                          <div className="text-xs text-gray-500 mt-2">Capital inicial invertido</div>
                        </div>
                        
                        <div className="p-4 md:p-5 rounded-xl bg-cyan-50 border border-cyan-200">
                          <div className="text-sm text-gray-600 mb-2">Ganancia Total</div>
                          <div className="text-xl md:text-2xl font-bold text-cyan-700">
                            ${animatedProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                          <div className="text-xs text-cyan-700 mt-2">
                            +{selectedTerm.rate}% del capital
                          </div>
                        </div>
                        
                        <div className="p-4 md:p-5 rounded-xl bg-cyan-50 border border-cyan-200">
                          <div className="text-sm text-gray-600 mb-2">Valor Final</div>
                          <div className="text-xl md:text-2xl font-bold text-cyan-700">
                            ${animatedFinalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                          <div className="text-xs text-cyan-700 mt-2">
                            Retorno total estimado
                          </div>
                        </div>
                      </div>

                      {/* Detalles adicionales */}
                      <div className="p-4 md:p-5 rounded-xl bg-gray-50 border border-gray-200">
                        <div className="text-sm font-medium text-gray-900 mb-4">Desglose Detallado</div>
                        <div className="space-y-3 md:space-y-4">
                          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1">
                            <div className="text-gray-600">Ganancia diaria promedio</div>
                            <div className="text-base md:text-lg font-bold text-gray-900">${result.dailyProfit.toFixed(2)}</div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1">
                            <div className="text-gray-600">Tasa efectiva anualizada</div>
                            <div className="text-base md:text-lg font-bold text-emerald-600">
                              {((Math.pow(1 + selectedTerm.rate/100, 365/selectedTerm.days) - 1) * 100).toFixed(1)}%
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1">
                            <div className="text-gray-600">Período total</div>
                            <div className="text-base md:text-lg font-bold text-gray-900">{selectedTerm.days} días</div>
                          </div>
                        </div>
                      </div>

                      {/* Indicador de éxito */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-transparent border border-emerald-200">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">¡Inversión óptima!</div>
                            <div className="text-sm text-emerald-700">Esta configuración maximiza tu retorno en el plazo seleccionado</div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Estado inicial - Placeholder */
                    <div className="h-full flex flex-col items-center justify-center p-6 md:p-8 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-emerald-100 to-cyan-100 flex items-center justify-center mb-4 md:mb-6">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-lg font-semibold text-gray-900 mb-2 text-center">Simulación Pendiente</div>
                      <div className="text-gray-600 text-center max-w-sm text-sm md:text-base">
                        Introduce tu inversión y selecciona un plazo para ver tu potencial de ganancia estimado
                      </div>
                      <div className="mt-6 text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                          Cálculos en tiempo real
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer con info adicional */}
            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-3">
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span>Simulación precisa</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                    <span>Sin comisiones ocultas</span>
                  </div>
                </div>
                <div className="text-gray-500">Powered by NovaMind AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestmentSimulator