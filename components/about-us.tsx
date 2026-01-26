import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AboutUs() {
  return (
    <section id="sobre-nosotros" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-foreground/70 text-pretty">
            9M AI es una empresa fintech de inteligencia artificial con sede en Nueva York, 
            fundada por ex ejecutivos de Goldman Sachs, científicos de IA de la Universidad 
            de Columbia y los mejores ingenieros cuantitativos.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Nuestros Orígenes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/70">
              <p>
                En 2021, motivados por la frustración con un sistema financiero que solo beneficia 
                a unos pocos privilegiados, nuestros fundadores dejaron Wall Street y escribieron 
                las primeras líneas de código en una oficina compartida de WeWork.
              </p>
              <p className="font-semibold text-foreground">
                Su misión era clara: reconstruir la puerta de entrada a las finanzas usando IA 
                —empoderando a todos con capacidades de inversión al nivel de Wall Street.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Hito Importante: 2024</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/70">
              <p>
                En 2024, el equipo formó una alianza profunda con el Laboratorio de IA de la 
                Universidad de Columbia y lanzó oficialmente el Sistema Financiero Inteligente 9M 
                —un marco de gestión de activos de nueva generación impulsado por nueve modelos 
                propietarios de trading basados en IA.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle>Tecnología NovaMind™</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/70">
              <p>
                El sistema 9M AI integra grandes modelos de IA, aprendizaje automático, motores 
                cuantitativos de pila completa e infraestructura blockchain. Permite la toma de 
                decisiones autónoma 24/7, ejecución de operaciones y control de riesgos, cubriendo 
                tanto mercados de acciones como criptomonedas.
              </p>
              <p>
                Proporciona soluciones de gestión de activos interpretables, auditables y en 
                constante optimización para individuos de alto patrimonio, familias, inversionistas 
                minoristas globales y participantes de activos digitales.
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/30 bg-accent/5">
            <CardHeader>
              <CardTitle>Nuestra Visión: Asistente Financiero de IA al Nivel de Wall Street</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/70">
              <p>
                9M AI es la primera plataforma de inversión verdaderamente autónoma que delega 
                completamente en la IA capacidades tradicionalmente reservadas para inversionistas 
                humanos élite —aprovechando la tecnología para desbloquear oportunidades de 
                creación de riqueza para más personas.
              </p>
              <p>
                Operamos con centros estratégicos en EE.UU., Asia y otros mercados clave, una 
                hoja de ruta clara y una visión orientada a largo plazo dentro del sector fintech 
                e IA.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
