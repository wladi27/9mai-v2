import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">9MX</h3>
            <p className="text-sm text-blue-300 font-semibold mb-2">
              Agente autorizado 
            </p>
            <p className="text-sm text-gray-300">
              Transformando el acceso a inversiones inteligentes impulsadas por IA.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/nosotros" className="text-blue-300 hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-blue-300 hover:text-white transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1yIquLf-r3NVAEtOVaHj-EYHkn2kpkI8f/view" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li> 
                <a href="https://www.9mc.ai/news/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
                  Noticias
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://youtu.be/xHQIep8YFTY" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
                  Presentación
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1L7e5ecrdXxU-5AuVZIvD__Tn3woHkhRO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
                  PDF
                </a>
              </li>
              
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://drive.google.com/file/d/1KE6EKBkgVUQLxp0z7W5ALQf2Hz25-9Qg/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1QC1VNdj6_QaHQrB9OW3PeR6vT-FsiQoo/view" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
                  White Paper
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
          <p>© 2026 9MX. Todos los derechos reservados.</p>
          <p>
            Regulado por: <span className="text-blue-300 font-semibold">FinCEN • NFA • SEC</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
