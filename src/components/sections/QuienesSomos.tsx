import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUp, stagger } from '../../hooks/useScrollAnimation'
import { EMPRESA } from '../../lib/constants'

export default function QuienesSomos() {
  const { ref, animate } = useScrollAnimation()

  return (
    <section id="quienes-somos" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={animate}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Texto */}
          <div>
            <motion.span
              variants={fadeUp}
              className="text-kimeru-naranja text-sm font-semibold uppercase tracking-widest"
            >
              Nuestra misión
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-kimeru-verde-profundo mt-3 mb-6 leading-tight"
            >
              Tecnología al servicio del agricultor colombiano
            </motion.h2>

            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
              Kimeru nació con una convicción: la tecnología debe llegar al campo,
              no el campo a la tecnología. Por eso construimos herramientas que
              funcionan donde el agricultor ya está — en WhatsApp.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed">
              Somos parte de{' '}
              <strong className="text-kimeru-verde-profundo">{EMPRESA.razonSocial}</strong>,
              una empresa colombiana comprometida con democratizar el acceso a información
              de mercado para pequeños productores del campo.
            </motion.p>
          </div>

          {/* Imagen — placeholder hasta que Lucy provea el asset */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl overflow-hidden aspect-[4/3] bg-kimeru-verde-profundo flex items-center justify-center"
          >
            <p className="text-kimeru-verde-claro/50 text-sm text-center px-8 leading-relaxed">
              [Foto del equipo o campo colombiano — pendiente de Lucy]
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
