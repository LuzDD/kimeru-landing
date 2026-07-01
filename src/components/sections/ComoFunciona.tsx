import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, TrendingUp, ShoppingBag } from 'lucide-react'
import { useScrollAnimation, fadeUp, stagger } from '../../hooks/useScrollAnimation'
import { PASOS } from '../../lib/constants'

const iconMap: Record<string, ReactNode> = {
  MessageCircle: <MessageCircle size={26} />,
  TrendingUp:    <TrendingUp size={26} />,
  ShoppingBag:   <ShoppingBag size={26} />,
}

export default function ComoFunciona() {
  const { ref, animate } = useScrollAnimation()

  return (
    <section id="como-funciona" className="py-16 md:py-24 px-6 bg-kimeru-verde-profundo">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={animate}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="text-kimeru-verde-claro text-sm font-semibold uppercase tracking-widest">
              Así de simple
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Cómo funciona Kimeru
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {PASOS.map(paso => (
              <motion.div
                key={paso.numero}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 text-center"
              >
                <div className="w-14 h-14 bg-kimeru-verde-profundo rounded-xl flex items-center justify-center text-kimeru-verde-claro mx-auto mb-5">
                  {iconMap[paso.icono]}
                </div>
                <span className="text-kimeru-naranja font-bold text-sm tracking-widest">{paso.numero}</span>
                <h3 className="text-lg font-bold text-kimeru-verde-profundo mt-2 mb-3">
                  {paso.titulo}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{paso.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
