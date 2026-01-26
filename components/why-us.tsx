import { Shield, Zap, Users, GraduationCap, Globe, CheckCircle, Target, BarChart3, ExternalLink, FileText, BadgeCheck, Lock } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Cumplimiento y Licencias EE.UU.',
    description: 'Registros oficiales en FinCEN, NFA y SEC para marco legal sólido.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-900/30',
    borderColor: 'border-blue-700',
    hoverColor: 'hover:border-blue-500'
  },
  {
    icon: Zap,
    title: 'IA Propia: NovaMind™',
    description: 'Motor de IA con análisis cuantitativo y gestión de riesgo 24/7.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-900/30',
    borderColor: 'border-blue-700',
    hoverColor: 'hover:border-blue-500'
  },
  {
    icon: Users,
    title: 'Equipo Institucional',
    description: 'Experiencia en Wall Street, Ivy League y grandes tech.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-900/30',
    borderColor: 'border-blue-700',
    hoverColor: 'hover:border-blue-500'
  },
  {
    icon: GraduationCap,
    title: 'Formación Global',
    description: 'Academia con sistema educativo estructurado y mentores.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-900/30',
    borderColor: 'border-blue-700',
    hoverColor: 'hover:border-blue-500'
  },
  {
    icon: Globe,
    title: 'Presencia Global',
    description: 'Operaciones en EE.UU., Asia y mercados clave con visión fintech.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-900/30',
    borderColor: 'border-blue-700',
    hoverColor: 'hover:border-blue-500'
  },
]

const licenses = [
  {
    title: 'FinCEN MSB Registration',
    description: 'Registro oficial como Money Services Business en el Departamento del Tesoro de EE.UU.',
    image: '/l1.png',
    link: 'https://www.fincen.gov/msb-state-selector',
    icon: FileText,
    number: '31000297728667',
    bgGradient: 'from-blue-900/20 to-blue-800/10',
    borderColor: 'border-blue-700'
  },
  {
    title: 'NFA Registration',
    description: 'Registro como Commodity Trading Advisor y Commodity Pool Operator ante la NFA.',
    image: '/l2.png',
    link: 'https://www.nfa.futures.org/ExemptionsNonReg/LOGIN.ASPX',
    icon: BadgeCheck,
    number: '0570618',
    bgGradient: 'from-blue-900/20 to-blue-800/10',
    borderColor: 'border-blue-700'
  },
  {
    title: 'SEC Filing',
    description: 'Registro ante la Securities and Exchange Commission de los Estados Unidos.',
    image: '/l3.png',
    link: 'https://www.sec.gov/edgar/browse/?CIK=2066917',
    icon: Lock,
    number: '2066917',
    bgGradient: 'from-blue-900/20 to-blue-800/10',
    borderColor: 'border-blue-700'
  }
]

export function WhyUs() {
  return (
    <section id="por-que" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado compacto */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/40 text-blue-300 rounded-full mb-4 border border-blue-700/50">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Ventajas Competitivas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Por qué elegirnos para invertir?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Confianza regulatoria, tecnología propia y equipo experto en un solo lugar
          </p>
        </div>

        {/* Layout de dos columnas: imagen a la izquierda, tarjetas a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
          {/* Columna izquierda - Imagen referencial */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[500px] border-2 border-gray-800 bg-gray-900">
            {/* Imagen de la carpeta public */}
            <div className="absolute inset-0">
              <img
                src="/invertir.jpeg"
                alt="Inversión Inteligente"
                className="w-full h-full object-cover"
              />
              {/* Overlay oscuro para mejor legibilidad del texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
            </div>

            {/* Capa de contenido encima de la imagen */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <div className="text-white">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3">Inversión Inteligente</h3>
                  <p className="text-gray-300">
                    Tecnología avanzada al servicio de tus inversiones
                  </p>
                </div>
                
                {/* Mini tarjetas de certificación dentro de la imagen */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-blue-500/20 backdrop-blur-md rounded-lg border border-blue-400/30 text-center">
                    <Shield className="w-5 h-5 text-blue-300 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-blue-300">FinCEN</p>
                  </div>
                  <div className="p-3 bg-blue-500/20 backdrop-blur-md rounded-lg border border-blue-400/30 text-center">
                    <Target className="w-5 h-5 text-blue-300 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-blue-300">NFA</p>
                  </div>
                  <div className="p-3 bg-blue-500/20 backdrop-blur-md rounded-lg border border-blue-400/30 text-center">
                    <BarChart3 className="w-5 h-5 text-blue-300 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-blue-300">SEC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemento decorativo */}
            <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg z-20 border border-blue-700">
              <span className="text-sm font-semibold text-blue-400">NovaMind™</span>
            </div>
          </div>

          {/* Columna derecha - Tarjetas apiladas verticalmente */}
          <div className="space-y-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div
                  key={index}
                  className="border-2 border-gray-800 rounded-lg p-5 hover:border-blue-500 hover:shadow-lg transition-all duration-200 bg-gray-900/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    {/* Icono */}
                    <div className={`p-3 rounded-lg ${reason.bgColor} border border-gray-700 flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${reason.color}`} />
                    </div>
                    
                    {/* Contenido */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-blue-400">
                          0{index + 1}
                        </span>
                        <h3 className="text-lg font-semibold leading-tight text-white">
                          {reason.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Tarjeta extra de acción */}
            <div className="border-2 border-blue-700 rounded-lg p-6 bg-gradient-to-r from-blue-900/20 to-blue-800/10 backdrop-blur-sm mt-6">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2 text-white">¿Listo para comenzar?</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Únete a miles de inversores que ya confían en nuestra plataforma
                </p>
                <a href="#contacto" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 border-2 border-blue-600 hover:shadow-lg hover:shadow-blue-500/20">
                  Comenzar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Licencias y Certificaciones */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/40 text-blue-300 rounded-full mb-4 border border-blue-700/50">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Certificaciones Oficiales</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Licencias y Registros Regulatorios
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Verifica nuestras credenciales oficiales en las entidades reguladoras de EE.UU.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {licenses.map((license, index) => {
              const Icon = license.icon
              return (
                <a
                  key={index}
                  href={license.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className={`border-2 ${license.borderColor} rounded-xl overflow-hidden bg-gradient-to-br ${license.bgGradient} hover:border-blue-500 hover:shadow-2xl transition-all duration-300 h-full backdrop-blur-sm`}>
                    {/* Imagen de la licencia */}
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                        <div className="w-full h-full flex items-center justify-center">
                          <img
                            src={license.image}
                            alt={license.title}
                            className="max-h-32 max-w-full object-contain mx-auto"
                          />
                        </div>
                        {/* Badge de número de registro */}
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                          ID: {license.number}
                        </div>
                      </div>

                    {/* Contenido de la tarjeta */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                        {license.title}
                      </h4>
                      <p className="text-gray-300 mb-4">
                        {license.description}
                      </p>
                      
                      {/* Enlace de verificación */}
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700">
                        <div className="text-sm text-blue-400 font-semibold flex items-center gap-2 group-hover:text-blue-300 transition-colors">
                          <span>Verificar registro oficial</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                        <div className="px-3 py-1 bg-blue-900/40 text-blue-300 text-xs font-semibold rounded border border-blue-700">
                          Verificado
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Nota informativa */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-400">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Todas las licencias están activas y verificables en los sitios oficiales</span>
            </div>
          </div>
        </div>

        {/* Sección de confianza adicional */}
        <div className="border-2 border-blue-700 rounded-xl p-8 bg-gradient-to-r from-blue-900/20 to-blue-800/10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="p-4 bg-gray-900 rounded-xl border-2 border-blue-700">
                <Shield className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold mb-4 text-white">Total Transparencia y Cumplimiento</h4>
              <p className="text-gray-300 mb-6">
                9M AI opera bajo los más altos estándares regulatorios internacionales. 
                Cada uno de nuestros registros puede ser verificado públicamente en los 
                portales oficiales de las entidades reguladoras correspondientes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg border border-gray-700 backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-200">Auditorías periódicas</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg border border-gray-700 backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-200">Seguridad de fondos</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg border border-gray-700 backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-200">Reportes transparentes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}