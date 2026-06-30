import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail } from 'lucide-react'
import { useScrollAnimation, fadeUp, stagger } from '../../hooks/useScrollAnimation'
import { EMPRESA } from '../../lib/constants'
import Button from '../ui/Button'

export default function Contacto() {
  const { ref, animate } = useScrollAnimation()
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contacto Kimeru — ${form.nombre}`)
    const body    = encodeURIComponent(`Nombre: ${form.nombre}\nCorreo: ${form.correo}\n\n${form.mensaje}`)
    window.location.href = `mailto:${EMPRESA.contacto.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contacto" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={animate}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Info */}
          <div>
            <motion.span variants={fadeUp} className="text-kimeru-naranja text-sm font-semibold uppercase tracking-widest">
              Hablemos
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-kimeru-verde-profundo mt-3 mb-6">
              ¿Tienes preguntas?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8">
              Escríbenos y te respondemos a la brevedad. También puedes seguirnos
              en nuestro canal de WhatsApp para enterarte de las novedades.
            </motion.p>

            {EMPRESA.redes.whatsappCanal && (
              <motion.div variants={fadeUp} className="mb-6">
                <Button
                  href={EMPRESA.redes.whatsappCanal}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  <MessageCircle size={18} />
                  Síguenos por WhatsApp
                </Button>
              </motion.div>
            )}

            <motion.div variants={fadeUp} className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail size={15} />
              <a
                href={`mailto:${EMPRESA.contacto.email}`}
                className="hover:text-kimeru-verde-profundo transition-colors"
              >
                {EMPRESA.contacto.email}
              </a>
            </motion.div>
          </div>

          {/* Formulario */}
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Nombre</label>
              <input
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kimeru-verde-profundo"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Correo electrónico</label>
              <input
                name="correo"
                type="email"
                value={form.correo}
                onChange={handleChange}
                required
                placeholder="tu@correo.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kimeru-verde-profundo"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Mensaje</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                required
                rows={5}
                placeholder="¿En qué podemos ayudarte?"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kimeru-verde-profundo resize-none"
              />
            </div>
            <Button type="submit" variant="primary">
              Enviar mensaje
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
