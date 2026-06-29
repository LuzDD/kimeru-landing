import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { EMPRESA } from '../../lib/constants'

const hashLinks = [
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Contacto',      href: '#contacto' },
]

export default function Navbar() {
  const { scrollY } = useScroll()
  const bg     = useTransform(scrollY, [0, 80], ['rgba(45,70,64,0)',    'rgba(45,70,64,0.97)'])
  const shadow = useTransform(scrollY, [0, 80], ['none', '0 2px 20px rgba(0,0,0,0.18)'])
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      style={{ backgroundColor: bg, boxShadow: shadow }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo — placeholder hasta que Lucy provea el SVG */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-kimeru-naranja rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">{EMPRESA.nombre}</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link to="/" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              Inicio
            </Link>
          </li>
          {hashLinks.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(o => !o)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 pb-4 border-t border-white/20"
        >
          <ul className="flex flex-col gap-4 pt-4 px-2">
            <li>
              <Link
                to="/"
                className="text-white/90 hover:text-white text-base font-medium"
                onClick={() => setOpen(false)}
              >
                Inicio
              </Link>
            </li>
            {hashLinks.map(l => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-white/90 hover:text-white text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
