import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUp, stagger } from '../../hooks/useScrollAnimation'
import logosAliados from '../../assets/aliados-logos.png'

export default function Aliados() {
  const { ref, animate } = useScrollAnimation()

  return (
    <section id="aliados" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={animate}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="text-kimeru-naranja text-sm font-semibold uppercase tracking-widest">
              Colaboraciones
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-kimeru-verde-profundo mt-3">
              Hemos trabajado con estas entidades y empresas para impulsar el agro colombiano
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center">
            <img
              src={logosAliados}
              alt="Logos de Medellín Startups, Creame, Alcaldía de Medellín, UPB, Universidad Nacional de Colombia, Enactus Colombia, Fundación CFA, Sevilla Startups, FAO y Concora"
              className="w-full max-w-6xl h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
