import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail } from 'lucide-react'
import { useScrollAnimation, fadeUp, stagger } from '../../hooks/useScrollAnimation'
import { EMPRESA } from '../../lib/constants'
import Button from '../ui/Button'

const WEB3FORMS_KEY = '4c7272ae-c1c3-47a0-8bd8-bedc4f51c7f5'

export default function Contacto() {
  const { ref, animate } = useScrollAnimation()
  const [form, setForm]       = useState({ nombre: '', correo: '', mensaje: '' })
  const [status, setStatus]   = useState<'idle' | 'loading' | 'ok' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject:    `Contacto Kimeru — ${form.nombre}`,
          name:       form.nombre,
          email:      form.correo,
          message:    form.mensaje,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={animate}
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-start"
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
              <motion.div variants={fadeUp} className="mb-3">
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

            <motion.div variants={fadeUp} className="mb-6">
              <Button
                href={`https://wa.me/${EMPRESA.contacto.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                <MessageCircle size={18} />
                Escríbenos para dudas
              </Button>
            </motion.div>

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
            {status === 'ok' && (
              <p className="text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-sm">
                ¡Mensaje enviado! Te respondemos pronto.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm">
                Hubo un error al enviar. Intenta de nuevo o escríbenos directamente al correo.
              </p>
            )}
            <Button type="submit" variant="primary" disabled={status === 'loading' || status === 'ok'}>
              {status === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
