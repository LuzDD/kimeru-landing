import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Users, BarChart3, Check } from 'lucide-react'
import { useScrollAnimation, fadeUp, stagger } from '../../hooks/useScrollAnimation'
import { SEGMENTOS } from '../../lib/constants'
import bgImg from '../../assets/para-quien-es-bg.jpg'

const iconMap: Record<string, ReactNode> = {
  Smartphone: <Smartphone size={26} />,
  Users:      <Users size={26} />,
  BarChart3:  <BarChart3 size={26} />,
}

export default function ParaQuienEs() {
  const { ref, animate } = useScrollAnimation()

  return (
    <section
      id="para-quien-es"
      className="relative py-24 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="relative max-w-6xl mx-auto">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={animate}>
          <motion.div variants={fadeUp} className="flex justify-center mb-16">
            <div className="bg-white/25 backdrop-blur-md border border-white/60 rounded-2xl px-8 py-7 text-center shadow-lg">
              <span className="text-kimeru-naranja text-sm font-semibold uppercase tracking-widest">
                La solución
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-kimeru-verde-profundo mt-3">
                Kimeru funciona distinto para cada uno
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {SEGMENTOS.map(segmento => (
              <motion.div
                key={segmento.titulo}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-kimeru-verde-profundo rounded-xl flex items-center justify-center text-kimeru-verde-claro mb-5">
                  {iconMap[segmento.icono]}
                </div>
                <h3 className="text-lg font-bold text-kimeru-verde-profundo mb-1">
                  {segmento.titulo}
                </h3>
                <p className="text-kimeru-naranja text-sm font-semibold mb-3">{segmento.resumen}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{segmento.descripcion}</p>
                <ul className="space-y-2">
                  {segmento.entrega.map(item => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <Check size={16} className="text-kimeru-verde-profundo shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
