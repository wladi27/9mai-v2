'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: '¿Qué es 9M AI y qué lo hace diferente?',
    answer: '9M AI es un ecosistema de educación financiera e inversión apoyado por inteligencia artificial, diseñado para ayudar a las personas a tomar decisiones más informadas en la era de las finanzas digitales. Su enfoque combina tecnología, formación y comunidad, con acceso a operaciones 24/7 impulsadas por el motor propietario NovaMind™.',
  },
  {
    question: '¿Cómo se generan las ganancias dentro del sistema?',
    answer: 'Las ganancias provienen de la operativa y estrategias del ecosistema impulsadas por IA. El sistema de recompensas está diseñado para distribuir beneficios de forma estructurada basados en tus inversiones y participación en la red, sin depender de los depósitos de nuevos usuarios.',
  },
  {
    question: '¿Necesito experiencia previa en inversiones o en IA?',
    answer: 'No. 9M AI está pensado tanto para principiantes como para usuarios avanzados. La academia 9M AI Academy y el acompañamiento educativo estructurado permiten que cualquier persona pueda entender el sistema y participar de forma progresiva.',
  },
  {
    question: '¿Qué papel juegan el rango y la inversión en las recompensas?',
    answer: 'Las recompensas dependen del monto invertido y del rango alcanzado dentro del sistema. A mayor compromiso y desarrollo de equipo, mayores beneficios potenciales, siempre dentro de los límites establecidos en el plan de compensación.',
  },
  {
    question: '¿Es 9M AI un proyecto a corto o largo plazo?',
    answer: '9M AI está diseñado como un proyecto de largo plazo, con una visión de crecimiento sostenible, expansión global y desarrollo continuo de su tecnología y comunidad. Operamos con licencias regulatorias en múltiples jurisdicciones.',
  },
  {
    question: '¿Cuál es el mínimo para comenzar a invertir?',
    answer: 'El mínimo de entrada es de 100 USDT. Esto permite que cualquier persona, independientemente de su capital inicial, pueda comenzar a generar ganancias con 9M AI.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-foreground/70">Respuestas a las dudas más comunes sobre 9M AI</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
              <AccordionTrigger className="hover:text-primary transition-colors">
                <span className="text-primary font-semibold mr-3">{index + 1}</span>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
