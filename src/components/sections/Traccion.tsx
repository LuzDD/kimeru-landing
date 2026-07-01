import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUp, stagger } from '../../hooks/useScrollAnimation'
import { TRACCION } from '../../lib/constants'
import AnimatedCounter from '../ui/AnimatedCounter'

export default function Traccion() {
  const { ref, animate } = useScrollAnimation()

  return (
    <section id="traccion" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={animate}>
          <motion.div variants={fadeUp} className="text-center mb-4">
            <span className="text-kimeru-naranja text-sm font-semibold uppercase tracking-widest">
              Validado en campo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-kimeru-verde-profundo mt-3">
              {TRACCION.titulo}
            </h2>
            <p className="text-gray-500 mt-3">{TRACCION.subtitulo}</p>
          </motion.div>

          <motion.p variants={fadeUp} className="text-gray-400 text-sm text-center max-w-2xl mx-auto mb-12">
            Estos son los resultados de nuestros pilotos activos, no de un
            producto lanzado a escala comercial — son la prueba de que el
            modelo funciona en territorio real.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {TRACCION.metricas.map(metrica => (
              <motion.div
                key={metrica.etiqueta}
                variants={fadeUp}
                className="text-center bg-gray-50 rounded-2xl p-4 md:p-6 border border-gray-100"
              >
                <p className="text-3xl md:text-5xl font-bold text-kimeru-verde-profundo mb-2">
                  <AnimatedCounter value={metrica.valor} suffix={metrica.sufijo} />
                </p>
                <p className="text-gray-500 text-sm leading-tight">{metrica.etiqueta}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
