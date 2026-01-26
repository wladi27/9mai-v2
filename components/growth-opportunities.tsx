"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, TrendingUp, Target, Award, Star, Zap, Shield, Crown, Trophy, Sparkles } from 'lucide-react'

const REFERRAL_COMMISSIONS = [
  { level: 'VIP 0', reward: '10%', color: 'from-blue-500/20 to-cyan-500/20' },
  { level: 'VIP 1', reward: '7.5%', color: 'from-emerald-500/20 to-green-500/20' },
  { level: 'VIP 2', reward: '5%', color: 'from-amber-500/20 to-yellow-500/20' },
  { level: 'VIP 3', reward: '0%', color: 'from-gray-500/20 to-gray-600/20' },
  { level: 'VIP 4', reward: '0%', color: 'from-gray-500/20 to-gray-600/20' },
  { level: 'VIP 5', reward: '0%', color: 'from-gray-500/20 to-gray-600/20' },
  { level: 'VIP 6', reward: '0%', color: 'from-gray-500/20 to-gray-600/20' },
  { level: 'VIP 7', reward: '0%', color: 'from-gray-500/20 to-gray-600/20' },
  { level: 'VIP 8', reward: '0%', color: 'from-gray-500/20 to-gray-600/20' },
  { level: 'VIP 9', reward: '0%', color: 'from-gray-500/20 to-gray-600/20' },
]

const VIP_BONUSES = [
  { level: 'VIP 1', daily: '± 6 USD', monthly: '± 180 USD', icon: Star, color: 'from-emerald-500/20 to-emerald-600/20' },
  { level: 'VIP 2', daily: '± 10 USD', monthly: '± 300 USD', icon: Zap, color: 'from-cyan-500/20 to-blue-500/20' },
  { level: 'VIP 3', daily: '± 30 USD', monthly: '± 900 USD', icon: Target, color: 'from-blue-500/20 to-indigo-500/20' },
  { level: 'VIP 4', daily: '± 100 USD', monthly: '± 3,000 USD', icon: Shield, color: 'from-purple-500/20 to-violet-500/20' },
  { level: 'VIP 5', daily: '± 300 USD', monthly: '± 9,000 USD', icon: Award, color: 'from-pink-500/20 to-rose-500/20' },
  { level: 'VIP 6', daily: '± 1,000 USD', monthly: '± 30,000 USD', icon: Crown, color: 'from-orange-500/20 to-amber-500/20' },
  { level: 'VIP 7', daily: '± 3,000 USD', monthly: '± 90,000 USD', icon: Trophy, color: 'from-red-500/20 to-orange-500/20' },
  { level: 'VIP 8', daily: '± 10,000 USD', monthly: '± 300,000 USD', icon: Sparkles, color: 'from-yellow-500/20 to-amber-500/20' },
  { level: 'VIP 9', daily: '± 30,000 USD', monthly: '± 900,000 USD', icon: Crown, color: 'from-emerald-500/20 to-teal-500/20' },
]

export function GrowthOpportunities() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Fondo con degradado elegante dark a azul */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-blue-950" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-indigo-900/10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      
      {/* Efectos de luz y profundidad */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-gradient-to-b from-blue-600/3 to-transparent rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6 hover:border-blue-400/30 transition-all duration-300">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              SISTEMA DE REFERIDOS 9M
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Multiplica tus </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Ganancias
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Construye tu red y accede a dos tipos de recompensas adicionales que potencian 
            tu crecimiento dentro del ecosistema 9M
          </p>
        </div>

        {/* Cards principales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1 - Comisiones por Referidos */}
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-blue-950/40 backdrop-blur-sm shadow-2xl shadow-blue-900/10 overflow-hidden hover:shadow-blue-900/20 hover:border-blue-500/30 transition-all duration-500 group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="p-2 border-b border-white/10 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm font-medium text-white">referidos.9m.ai</span>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-xs text-cyan-300">Activo</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-blue-500/20">
                  <TrendingUp className="w-7 h-7 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Comisiones por Referidos Directos</h3>
                  <p className="text-gray-400">Gana un porcentaje de las comisiones diarias de tu primera línea</p>
                </div>
              </div>

              {/* Tabla de comisiones */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-lg font-semibold text-white">Tabla de Recompensas</div>
                  <div className="text-sm text-gray-400 bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                    Del fondo total del equipo
                  </div>
                </div>
                
                <div className="space-y-3">
                  {REFERRAL_COMMISSIONS.map((item, index) => (
                    <div 
                      key={index}
                      className={`group/card relative flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                        parseInt(item.reward) > 0
                          ? 'border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-transparent hover:from-blue-500/20'
                          : 'border-white/10 bg-white/5 hover:bg-white/10'
                      } backdrop-blur-sm`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          parseInt(item.reward) > 0 
                            ? 'bg-gradient-to-br from-blue-500/30 to-cyan-500/30 shadow-lg shadow-blue-500/20' 
                            : 'bg-gray-500/20'
                        }`}>
                          <span className={`text-sm font-bold ${
                            parseInt(item.reward) > 0 ? 'text-cyan-300' : 'text-gray-400'
                          }`}>
                            {item.level.split(' ')[1]}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-white">{item.level}</div>
                          <div className="text-xs text-gray-500">Nivel VIP</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className={`text-xl font-bold ${
                          parseInt(item.reward) > 0 
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300' 
                            : 'text-gray-400'
                        }`}>
                          {item.reward}
                        </div>
                        <div className="text-xs text-gray-500">Recompensa</div>
                      </div>
                      
                      {parseInt(item.reward) > 0 && (
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl opacity-0 group-hover/card:opacity-20 transition-opacity duration-300 -z-10`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Información adicional */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border border-blue-500/30 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-blue-500/20">
                    <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white mb-2">Condiciones Especiales</div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                        Solo se gana de los directos (Primera Línea)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                        Se paga de las comisiones diarias que está teniendo tus directos
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                        Comisión decreciente según nivel VIP
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicador */}
            <div className="absolute -top-3 -right-3 z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 blur-md rounded-lg" />
                <div className="relative px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg shadow-lg shadow-blue-500/30">
                 
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Bono de Rango */}
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-blue-950/40 backdrop-blur-sm shadow-2xl shadow-blue-900/10 overflow-hidden hover:shadow-emerald-900/20 hover:border-emerald-500/30 transition-all duration-500 group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="p-2 border-b border-white/10 bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm font-medium text-white">bonificaciones.9m.ai</span>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs text-emerald-300">Activo</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-emerald-500/20">
                  <Users className="w-7 h-7 text-emerald-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Bono por Rangos VIP</h3>
                  <p className="text-gray-400">Proyección estimada de ganancias por nivel · 30 días</p>
                </div>
              </div>

              {/* Tabla de bonos */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-lg font-semibold text-white">Ganancias Aproximadas</div>
                  <div className="text-sm text-gray-400 bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                    Proyección mensual
                  </div>
                </div>
                
                <div className="space-y-3">
                  {VIP_BONUSES.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div 
                        key={index}
                        className="group/card relative flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shadow-emerald-500/10`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">{item.level}</div>
                            <div className="text-xs text-gray-500">Nivel VIP</div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-lg font-bold text-white">{item.daily}</div>
                          <div className="text-sm text-gray-500">por día</div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-lg font-bold text-emerald-300">{item.monthly}</div>
                          <div className="text-sm text-gray-500">por mes</div>
                        </div>
                        
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl opacity-0 group-hover/card:opacity-10 transition-opacity duration-300 -z-10`} />
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Gráfico de progresión */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 border border-emerald-500/30 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-emerald-500/20">
                    <svg className="w-4 h-4 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white mb-2">Progresión Exponencial</div>
                    <div className="text-sm text-gray-300">
                      Observa cómo las ganancias crecen de forma exponencial a medida que avanzas 
                      en los niveles VIP, multiplicándose por 3 en cada escalón del sistema 9M.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicador */}
            <div className="absolute -top-3 -right-3 z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-400 blur-md rounded-lg" />
                <div className="relative px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-lg shadow-lg shadow-emerald-500/30">
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}