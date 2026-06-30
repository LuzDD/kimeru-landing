import { useMotionValue, useSpring, useTransform, motion, useScroll } from 'framer-motion'
import Button from '../ui/Button'

// ─── Imágenes — descomenta cada import cuando Lucy provea el archivo ───────────
// Carpeta: src/assets/layers/
//
import imgSky   from '../../assets/layers/layer-sky.jpg'
import imgFar   from '../../assets/layers/layer-mountains-far.png'
import imgMid1  from '../../assets/layers/layer-mountains-mid.png'
import imgMid2  from '../../assets/layers/layer-mountains-near.png'
import imgFront from '../../assets/layers/layer-ground.png'
//
// Luego en cada capa reemplaza el <div> placeholder por un <img> con object-bottom


export default function HeroParallax() {
  const { scrollY } = useScroll()

  // ── Mouse tracking (valores normalizados −0.5 a 0.5) ─────────────────────
  const rawMX = useMotionValue(0)
  const rawMY = useMotionValue(0)

  // Spring para suavizar el movimiento del mouse
  const mx = useSpring(rawMX, { stiffness: 75, damping: 18, mass: 0.5 })
  const my = useSpring(rawMY, { stiffness: 75, damping: 18, mass: 0.5 })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    rawMX.set((e.clientX - r.left  - r.width  / 2) / r.width)
    rawMY.set((e.clientY - r.top   - r.height / 2) / r.height)
  }
  const onMouseLeave = () => { rawMX.set(0); rawMY.set(0) }

  // ── Parallax por scroll — cuánto sube cada capa al scrollear ─────────────
  // Las lejanas se mueven MÁS (se alejan), la frontal menos (se queda cerca)
  const sScrollFar  = useTransform(scrollY, [0, 800], [0, -75])
  const sScrollMid1 = useTransform(scrollY, [0, 800], [0, -48])
  const sScrollMid2 = useTransform(scrollY, [0, 800], [0, -24])
  // Capa frontal: no se mueve con scroll → evita hueco en la parte inferior

  // ── Y combinado = scroll + mouse ─────────────────────────────────────────
  const farY  = useTransform([sScrollFar,  my], ([s, m]: number[]) => s + m * 15)
  const mid1Y = useTransform([sScrollMid1, my], ([s, m]: number[]) => s + m * 10)
  const mid2Y = useTransform([sScrollMid2, my], ([s, m]: number[]) => s + m *  5)
  const frontY = useTransform(my, (m) => m * 2)

  // ── X solo mouse (las lejanas se mueven menos en X, las cercanas más) ────
  const farX  = useTransform(mx, (m) => m * -30)
  const mid1X = useTransform(mx, (m) => m * -20)
  const mid2X = useTransform(mx, (m) => m * -12)
  const frontX = useTransform(mx, (m) => m * -6)

  return (
    <section
      className="sticky top-0 z-0 h-screen overflow-hidden flex items-center justify-center select-none"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >

      {/* ══ CAPA 0 — CIELO (estática, no se mueve) ══════════════════════════ */}
      <div className="absolute inset-0">
        <img src={imgSky} alt="" className="w-full h-full object-cover" />
      </div>

      {/* ══ CAPA 1 — MONTAÑAS LEJANAS (se mueven más) ═══════════════════════ */}
      <motion.div
        style={{ x: farX, y: farY, scale: 1.2 }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={imgFar}
          alt=""
          className="absolute bottom-0 left-0 w-full"
          style={{ height: '75vh', objectFit: 'cover', objectPosition: 'bottom center' }}
        />
      </motion.div>

      {/* ══ CAPA 2 — MONTAÑAS MEDIAS ════════════════════════════════════════ */}
      <motion.div
        style={{ x: mid1X, y: mid1Y, scale: 1.2 }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={imgMid1}
          alt=""
          className="absolute bottom-0 left-0 w-full"
          style={{ height: '55vh', objectFit: 'cover', objectPosition: 'bottom center' }}
        />
      </motion.div>

      {/* ══ CAPA 3 — MONTAÑAS CERCANAS ══════════════════════════════════════ */}
      <motion.div
        style={{ x: mid2X, y: mid2Y, scale: 1.2 }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={imgMid2}
          alt=""
          className="absolute bottom-0 left-0 w-full"
          style={{ height: 'auto' }}
        />
      </motion.div>

      {/* ══ CAPA 4 — PRIMER PLANO VERDE (la que menos se mueve) ════════════ */}
      <motion.div
        style={{ x: frontX, y: frontY, scale: 1.2 }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={imgFront}
          alt=""
          className="absolute bottom-0 left-0 w-full"
          style={{ height: 'auto' }}
        />
      </motion.div>

      {/* ══ TEXTO CENTRADO (sobre todas las capas) ══════════════════════════ */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pb-[22vh]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/35 backdrop-blur-md border border-white/50 rounded-3xl px-6 py-10 md:px-12 md:py-12 shadow-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-kimeru-verde-profundo drop-shadow-sm"
          >
            El campo colombiano,{' '}
            <span className="text-white drop-shadow-md">ahora con voz propia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-800 mb-10 leading-relaxed"
          >
            Kimeru empodera a agricultores con herramientas digitales accesibles
            desde WhatsApp para vender mejor y vivir mejor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="#" variant="primary" className="text-base px-8 py-4">
              Prueba nuestra solución
            </Button>
            <Button
              href="#quienes-somos"
              variant="outline"
              className="text-base px-8 py-4 !border-white !text-white hover:!bg-white hover:!text-kimeru-naranja"
            >
              Conoce Kimeru
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* ══ DEGRADADO INFERIOR → transición a sección siguiente ════════════ */}
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none z-20"
        style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
      />

      {/* ══ FLECHA SCROLL ════════════════════════════════════════════════════ */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 z-30"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
