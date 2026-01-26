"use client"

import { Button } from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      alpha: number
      color: string
    }> = []

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2 + 0.3,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.15 + 0.05,
        color: Math.random() > 0.7 ? '#3b82f6' : '#60a5fa'
      })
    }

    const createConnections = () => {
      const connections = []
      for (let i = 0; i < 10; i++) {
        connections.push({
          x1: Math.random() * canvas.width,
          y1: Math.random() * canvas.height,
          x2: Math.random() * canvas.width,
          y2: Math.random() * canvas.height,
          alpha: Math.random() * 0.1 + 0.02
        })
      }
      return connections
    }

    let connections = createConnections()
    let frameCount = 0

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 25, 0.03)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -0.95
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -0.95
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}${Math.round(particle.alpha * 255).toString(16).padStart(2, '0')}`
        ctx.fill()
      })

      if (frameCount % 2 === 0) {
        connections.forEach(conn => {
          ctx.beginPath()
          ctx.moveTo(conn.x1, conn.y1)
          ctx.lineTo(conn.x2, conn.y2)
          ctx.strokeStyle = `rgba(100, 150, 255, ${conn.alpha})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        })
      }

      if (frameCount % 300 === 0) {
        connections = createConnections()
      }

      frameCount++
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  // Inicializar video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume
      videoRef.current.muted = isMuted
      
      const updateTime = () => {
        if (videoRef.current) {
          setCurrentTime(videoRef.current.currentTime)
          setDuration(videoRef.current.duration || 0)
        }
      }
      
      const handleLoadedMetadata = () => {
        if (videoRef.current) {
          setDuration(videoRef.current.duration)
        }
      }
      
      videoRef.current.addEventListener('timeupdate', updateTime)
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata)
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('timeupdate', updateTime)
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata)
        }
      }
    }
  }, [volume, isMuted])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setIsMuted(newVolume === 0)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    setCurrentTime(time)
    if (videoRef.current) {
      videoRef.current.currentTime = time
    }
  }

  const handleVideoError = () => {
    setVideoError(true)
    console.error('Error al cargar el video 9M.mp4')
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <section id="inicio" aria-label="Hero - Introducción" className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden bg-gradient-to-br from-gray-950 via-black to-blue-950/30">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        aria-hidden="true"
      />
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px]" />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-sm font-medium text-blue-400">
                NOVAMIND AI PLATFORM
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-white">Mientras tú descansas, </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
               la IA trabaja para ti
              </span>
              
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Transforma tu tiempo
en ingresos automáticos con la
potencia de NovaMind
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="h-14 px-10 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20"
              >
                <a href="#contacto" className="flex items-center gap-3">
                  Comenzar Ahora
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </Button>
              
             
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12">
              {[
                { value: "99.8%", label: "Precisión", desc: "Operaciones perfectas" },
                { value: "24/7", label: "Disponibilidad", desc: "Sin interrupciones" },
                { value: "+2.5K", label: "Clientes", desc: "Confían en nosotros" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-blue-400 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm shadow-xl">
              <div className="p-6 border-b border-white/10 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-sm font-medium text-white">demo.novamind.ai</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-green-400">Reproduciendo</span>
                  </div>
                </div>
              </div>

              <div className="relative aspect-video bg-black overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                
                {videoError ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Error al cargar el video</h3>
                      <p className="text-gray-400 mb-4">Asegúrate de que el archivo 9M.mp4 esté en la carpeta public</p>
                      <Button 
                        size="sm"
                        onClick={() => setVideoError(false)}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Reintentar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <video
                      ref={videoRef}
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      onError={handleVideoError}
                      preload="metadata"
                    >
                      <source
                        src="/9M.mp4"
                        type="video/mp4"
                      />
                      Tu navegador no soporta videos HTML5.
                    </video>

                    {/* Overlay de controles personalizados */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                      {/* Barra de progreso superior */}
                      <div className="px-4 pt-4">
                        <div className="relative h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer group">
                          <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={currentTime}
                            onChange={handleSeek}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                          />
                          <div 
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-100"
                            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                          />
                          <div className="absolute left-0 top-0 w-full h-full bg-white/10 rounded-full" />
                          <div 
                            className="absolute top-1/2 w-3 h-3 bg-white rounded-full shadow-lg -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            style={{ left: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                          />
                        </div>
                      </div>

                      {/* Controles inferiores */}
                      <div className="px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {/* Botón Play/Pause */}
                          <button
                            onClick={togglePlay}
                            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                            aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                          >
                            {isPlaying ? (
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            )}
                          </button>

                          {/* Controles de volumen */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={toggleMute}
                              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors duration-200"
                              aria-label={isMuted || volume === 0 ? "Activar sonido" : "Silenciar"}
                            >
                              {isMuted || volume === 0 ? (
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                                </svg>
                              ) : volume > 0.5 ? (
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                                </svg>
                              )}
                            </button>

                            <div className="relative w-24 h-1.5 bg-white/20 rounded-full overflow-hidden group">
                              <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                              />
                              <div 
                                className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-100"
                                style={{ width: `${volume * 100}%` }}
                              />
                              <div className="absolute left-0 top-0 w-full h-full bg-white/10 rounded-full" />
                              <div 
                                className="absolute top-1/2 w-3 h-3 bg-white rounded-full shadow-lg -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                style={{ left: `${volume * 100}%` }}
                              />
                            </div>
                          </div>

                          {/* Tiempo actual */}
                          <div className="text-sm text-white font-mono min-w-[80px]">
                            {formatTime(currentTime)} / {formatTime(duration)}
                          </div>
                        </div>

                        {/* Botón de pantalla completa */}
                        <button
                          onClick={() => {
                            if (videoRef.current) {
                              if (document.fullscreenElement) {
                                document.exitFullscreen()
                              } else {
                                videoRef.current.requestFullscreen()
                              }
                            }
                          }}
                          className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors duration-200"
                          aria-label="Pantalla completa"
                        >
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Información del video actualizada */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      NovaMind AI en Acción - Demostración Completa
                    </h3>
                    <p className="text-sm text-gray-400">
                      Descubre cómo nuestra IA automatiza procesos complejos en tiempo real
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full ${isPlaying ? 'bg-green-500/20' : 'bg-yellow-500/20'} flex items-center justify-center`}>
                      {isPlaying ? (
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                {/* Métricas del video actualizadas */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Estado</div>
                    <div className="text-xl font-bold text-white">
                      {isPlaying ? 'Reproduciendo' : 'Pausado'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Volumen</div>
                    <div className="text-xl font-bold text-white">
                      {Math.round(volume * 100)}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Duración</div>
                    <div className="text-xl font-bold text-white">
                      {formatTime(duration)}
                    </div>
                  </div>
                </div>

                {/* Botones de control del video */}
                
              </div>

              {/* Indicador actualizado */}
              <div className="absolute -top-3 -right-3 z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/20 blur-md rounded-lg" />
                  <div className="relative px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg shadow-lg">
                    <span className="text-xs font-bold text-white tracking-widest">PLAY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjetas flotantes actualizadas */}
            <div className="absolute -bottom-4 -left-4 w-60 bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-white">Estado Video</span>
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500' : 'bg-yellow-500'}`} />
                  <span className="text-xs text-green-400">{isPlaying ? 'Reproduciendo' : 'Pausado'}</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {Math.round(volume * 100)}%
              </div>
              <div className="text-xs text-gray-400">Volumen actual</div>
            </div>

            <div className="absolute -top-4 -right-4 w-52 bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-lg">
              <div className="text-sm font-medium text-white mb-3">Calificación IA</div>
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <div className="text-lg font-bold text-white">4.9</div>
              </div>
              <div className="text-xs text-gray-400 mt-2">+512 reseñas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}