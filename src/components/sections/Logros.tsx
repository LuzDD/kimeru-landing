import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUp, stagger } from '../../hooks/useScrollAnimation'
import { LOGROS } from '../../lib/constants'
import AnimatedCounter from '../ui/AnimatedCounter'

export default function Logros() {
  const { ref, animate } = useScrollAnimation()

  return (
    <section id="logros" className="py-24 px-6 bg-kimeru-verde-profundo">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={animate}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="text-kimeru-verde-claro text-sm font-semibold uppercase tracking-widest">
              Nuestro impacto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Números que hablan por el campo
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {LOGROS.map(logro => (
              <motion.div
                key={logro.etiqueta}
                variants={fadeUp}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5"
              >
                <p className="text-4xl md:text-5xl font-bold text-kimeru-naranja mb-2">
                  <AnimatedCounter value={logro.valor} suffix={logro.sufijo} />
                </p>
                <p className="text-white/60 text-sm leading-tight">{logro.etiqueta}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
