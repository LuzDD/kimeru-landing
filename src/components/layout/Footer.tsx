import { Link } from 'react-router-dom'
import { Instagram, Linkedin } from 'lucide-react'
import { EMPRESA } from '../../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-kimeru-negro text-white py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-10">
          {/* Logo + razón social */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 bg-kimeru-naranja rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">K</span>
              </div>
              <span className="font-bold text-lg">{EMPRESA.nombre}</span>
            </div>
            <p className="text-white/40 text-sm">{EMPRESA.razonSocial}</p>
          </div>

          {/* Links legales — obligatorios para Meta */}
          <div className="flex flex-col gap-2">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Legal</p>
            <Link to="/privacidad"     className="text-white/70 hover:text-white text-sm transition-colors">Política de privacidad</Link>
            <Link to="/terminos"       className="text-white/70 hover:text-white text-sm transition-colors">Términos y condiciones</Link>
            <Link to="/eliminar-datos" className="text-white/70 hover:text-white text-sm transition-colors">Eliminar mis datos</Link>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col gap-2">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Redes</p>
            <a
              href={EMPRESA.redes.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <Instagram size={15} /> @kimeru_agro
            </a>
            <a
              href={EMPRESA.redes.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/30 text-xs">
          © 2025 {EMPRESA.razonSocial}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
