import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUp, stagger } from '../../hooks/useScrollAnimation'
import { LOGROS } from '../../lib/constants'
import AnimatedCounter from '../ui/AnimatedCounter'
import flor3 from '../../assets/flor3.svg'
import flor4 from '../../assets/flor4.svg'
import flor5 from '../../assets/flor5.svg'

const sway = {
  idle:  { rotate: 0 },
  hover: {
    rotate: [-5, 5],
    transition: { duration: 2.8, repeat: Infinity, repeatType: 'mirror' as const, ease: 'easeInOut' },
  },
}

const flowerImg = 'w-20 select-none'
const flowerStyle = { transformOrigin: 'bottom center' }

export default function Logros() {
  const { ref, animate } = useScrollAnimation()

  return (
    <section id="logros" className="relative py-24 px-6 bg-kimeru-verde-profundo overflow-visible">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={animate}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="text-kimeru-verde-claro text-sm font-semibold uppercase tracking-widest">
              El agro colombiano en cifras
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Una industria que mueve a Colombia
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

        {/* Flores — centradas en móvil/tablet, escondidas en desktop grande (versión desktop está absoluta) */}
        <motion.div
          className="flex xl:hidden items-end justify-center gap-4 mt-10"
          whileHover="hover"
          initial="idle"
        >
          <motion.img src={flor3} alt="" className={flowerImg} style={flowerStyle} variants={sway} />
          <motion.img src={flor4} alt="" className="w-16 select-none" style={flowerStyle} variants={sway} />
          <motion.img src={flor5} alt="" className={flowerImg} style={flowerStyle} variants={sway} />
        </motion.div>
      </div>

      {/* Flores desktop — asoman desde el borde superior derecho */}
      <motion.div
        className="hidden xl:flex absolute top-0 right-10 items-end gap-2 -translate-y-[90%] z-10"
        whileHover="hover"
        initial="idle"
      >
        <motion.img src={flor3} alt="" className={flowerImg} style={flowerStyle} variants={sway} />
        <motion.img src={flor4} alt="" className="w-16 select-none" style={flowerStyle} variants={sway} />
        <motion.img src={flor5} alt="" className={flowerImg} style={flowerStyle} variants={sway} />
      </motion.div>
    </section>
  )
}
