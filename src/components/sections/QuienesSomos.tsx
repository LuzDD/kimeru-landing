import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUp, stagger } from '../../hooks/useScrollAnimation'
import { EMPRESA } from '../../lib/constants'
import fotoEquipo from '../../assets/quienes-somos.jpg'

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
              El problema
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-kimeru-verde-profundo mt-3 mb-6 leading-tight"
            >
              No es un problema de producción, es un problema de información
            </motion.h2>

            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
              En Colombia, 2.2 millones de pequeños productores generan el 80%
              de los alimentos que se consumen en el país. Sin embargo, por la
              falta de visibilidad sobre su propia producción, pierden hasta el{' '}
              <strong className="text-kimeru-verde-profundo">48.7% de sus ingresos</strong>{' '}
              (DANE, 2016).
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed">
              Del otro lado, las agroindustrias enfrentan hasta un{' '}
              <strong className="text-kimeru-verde-profundo">37.8% más en costos de abastecimiento</strong>{' '}
              por esa misma falta de visibilidad (FAO / Rabobank). {EMPRESA.razonSocial}{' '}
              construyó {EMPRESA.nombre} para organizar la información productiva del
              territorio antes de que el producto esté listo para vender —
              cerrando esa brecha en ambos lados del mercado.
            </motion.p>
          </div>

          {/* Imagen */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl overflow-hidden aspect-[4/3] bg-kimeru-verde-profundo"
          >
            <img
              src={fotoEquipo}
              alt="Equipo de Kimeru en campo con productores colombianos"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
