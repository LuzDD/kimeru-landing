import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, FileText, Trash2 } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroParallax from '../components/sections/HeroParallax'
import QuienesSomos from '../components/sections/QuienesSomos'
import Logros from '../components/sections/Logros'
import ComoFunciona from '../components/sections/ComoFunciona'
import Contacto from '../components/sections/Contacto'
import { useScrollAnimation, stagger, fadeUp } from '../hooks/useScrollAnimation'
import flor1 from '../assets/flor1.svg'
import flor2 from '../assets/flor2.svg'

function SpinFlower({ src, size, style }: { src: string; size: number; style: React.CSSProperties }) {
  return (
    <motion.img
      src={src}
      alt=""
      draggable={false}
      className="absolute pointer-events-none select-none hidden lg:block"
      style={{ width: size, height: size, ...style }}
      animate={{ rotate: 360 }}
      transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
    />
  )
}

const legalItems = [
  {
    to:     '/privacidad',
    icon:   <Shield size={22} />,
    titulo: 'Política de privacidad',
    desc:   'Conoce cómo protegemos tus datos personales.',
  },
  {
    to:     '/terminos',
    icon:   <FileText size={22} />,
    titulo: 'Términos y condiciones',
    desc:   'Condiciones de uso de la plataforma Kimeru.',
  },
  {
    to:     '/eliminar-datos',
    icon:   <Trash2 size={22} />,
    titulo: 'Eliminar mis datos',
    desc:   'Solicita la eliminación permanente de tu información.',
  },
]

function SeccionLegal() {
  const { ref, animate } = useScrollAnimation()

  return (
    <section id="legal" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={animate}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="text-kimeru-naranja text-sm font-semibold uppercase tracking-widest">
              Transparencia
            </span>
            <h2 className="text-3xl font-bold text-kimeru-verde-profundo mt-3">
              Información legal
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {legalItems.map(item => (
              <motion.div key={item.to} variants={fadeUp}>
                <Link
                  to={item.to}
                  className="block bg-white hover:bg-kimeru-verde-profundo group rounded-2xl p-7 border border-gray-100 transition-colors duration-300 shadow-sm"
                >
                  <div className="text-kimeru-verde-profundo group-hover:text-kimeru-verde-claro mb-4 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-kimeru-verde-profundo group-hover:text-white transition-colors mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-gray-500 group-hover:text-white/60 text-sm transition-colors">
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Kimeru — Tecnología para el campo colombiano</title>
      </Helmet>
      <Navbar />
      <main>
        <HeroParallax />
        <div className="relative z-10 bg-white" style={{ overflowX: 'clip' }}>
          {/* ── Flores decorativas rotantes ───────────────────────────────── */}
          <SpinFlower src={flor2} size={400} style={{ top: '-0%',  right: -130 }} />
          <SpinFlower src={flor2} size={520} style={{ top: '17%', left:  -140 }} />
          <SpinFlower src={flor1} size={600} style={{ top: '28%', right: -110 }} />
          <SpinFlower src={flor1} size={280} style={{ top: '58%', left:  -110 }} />
          <SpinFlower src={flor2} size={310} style={{ top: '72%', right: -130 }} />
          <SpinFlower src={flor2} size={300} style={{ top: '89%', left:  -130 }} />

          <QuienesSomos />
          <Logros />
          <ComoFunciona />
          <SeccionLegal />
          <Contacto />
        </div>
      </main>
      <Footer />
    </>
  )
}
