import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { EMPRESA } from '../lib/constants'
import Button from '../components/ui/Button'

const WEB3FORMS_KEY = '4c7272ae-c1c3-47a0-8bd8-bedc4f51c7f5'

export default function EliminarDatos() {
  const [form, setForm]     = useState({ nombre: '', telefono: '', correo: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          subject:    'Solicitud de eliminación de datos — Kimeru',
          name:       form.nombre,
          email:      form.correo || 'no-email@kimeru.co',
          message:    `Solicito la eliminación de mis datos personales de la plataforma Kimeru.\n\nNombre: ${form.nombre}\nTeléfono WhatsApp: ${form.telefono}\nCorreo: ${form.correo}\n\nConfirmo que soy el titular de los datos y solicito su eliminación permanente conforme a la ${EMPRESA.legal.ley}.`,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Helmet>
        <title>Eliminar mis datos — Kimeru</title>
        <meta
          name="description"
          content="Solicita la eliminación permanente de tus datos personales de la plataforma Kimeru conforme a la Ley 1581 de 2012."
        />
        <link rel="canonical" href={EMPRESA.urls.eliminarDatos} />
      </Helmet>

      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="pt-32 pb-24 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-kimeru-verde-profundo mb-2">
            Eliminación de datos personales
          </h1>
          <p className="text-gray-400 text-sm mb-12">
            Última actualización: {EMPRESA.legal.ultimaActualizacion}
          </p>

          <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
            <p>
              Conforme a la <strong>{EMPRESA.legal.ley}</strong> de Colombia, tienes derecho a
              solicitar en cualquier momento la eliminación de tus datos personales de los sistemas
              de Kimeru.
            </p>
            <p className="bg-kimeru-verde-claro/10 border-l-2 border-kimeru-verde-profundo rounded px-4 py-3 text-sm">
              Una vez procesada tu solicitud, tus datos personales identificables serán eliminados de
              nuestras bases de datos activas en un plazo máximo de{' '}
              <strong>{EMPRESA.legal.plazoEliminacion}</strong>.
            </p>

            <div>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                ¿Qué se elimina?
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Datos de identificación y contacto</li>
                <li>Información productiva registrada a tu nombre</li>
                <li>Historial de interacciones en el chatbot</li>
              </ul>
              <p className="mt-3 text-sm text-gray-500">
                La información agregada y anonimizada (estadísticas territoriales sin identificación
                personal) puede conservarse, ya que no permite identificarte individualmente.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                Cómo solicitar la eliminación
              </h2>
              <p>Puedes hacerlo completando el formulario a continuación, o directamente por:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>
                  Correo a{' '}
                  <a href={`mailto:${EMPRESA.contacto.email}`} className="text-kimeru-naranja underline">
                    {EMPRESA.contacto.email}
                  </a>{' '}
                  con el asunto "Solicitud de eliminación de datos", tu nombre completo y el número
                  con el que te registraste.
                </li>
                <li>
                  WhatsApp al{' '}
                  <a
                    href={`https://wa.me/${EMPRESA.contacto.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-kimeru-naranja underline"
                  >
                    +57 313 697 6123
                  </a>{' '}
                  indicando "Quiero eliminar mis datos de Kimeru" junto con tu nombre y número registrado.
                </li>
              </ul>
              <ol className="list-decimal list-inside space-y-2 mt-4">
                <li>Recibirás confirmación de recepción en un plazo máximo de <strong>2 días hábiles</strong>.</li>
                <li>
                  La eliminación se completará en un máximo de{' '}
                  <strong>{EMPRESA.legal.plazoEliminacion}</strong> desde la confirmación.
                </li>
                <li>Te avisaremos cuando el proceso esté completo.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                Consecuencias de la eliminación
              </h2>
              <p>
                Al eliminar tus datos, tu perfil dejará de estar activo en Kimeru y no podrás recibir
                información de mercado, alertas ni análisis territoriales a través del chatbot. Si en
                el futuro deseas volver a usar el servicio, deberás registrarte nuevamente.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-amber-800 text-sm">
                <strong>Importante:</strong> la eliminación de datos es permanente e irreversible.
                Una vez completada, perderás acceso a la plataforma Kimeru y no podrás recuperar
                tu historial de interacciones.
              </p>
            </div>
          </div>

          {/* Formulario */}
          {status === 'ok' ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <p className="text-green-800 font-semibold text-lg mb-2">Solicitud enviada</p>
              <p className="text-green-700 text-sm">
                Recibimos tu solicitud. Recibirás confirmación en máximo{' '}
                {EMPRESA.legal.plazoEliminacion}.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-2xl p-8 flex flex-col gap-5 border border-gray-100"
            >
              <h2 className="text-xl font-bold text-kimeru-verde-profundo">
                Formulario de solicitud
              </h2>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Nombre completo *
                </label>
                <input
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-kimeru-verde-profundo"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Número de WhatsApp registrado *
                </label>
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  required
                  type="tel"
                  placeholder="+57 300 000 0000"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-kimeru-verde-profundo"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Correo electrónico (para recibir confirmación)
                </label>
                <input
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-kimeru-verde-profundo"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm">
                  Hubo un error al enviar. Intenta de nuevo o contáctanos directamente.
                </p>
              )}

              <Button type="submit" variant="primary" disabled={status === 'loading'}>
                {status === 'loading' ? 'Enviando…' : 'Enviar solicitud de eliminación'}
              </Button>
            </form>
          )}
        </div>
      </motion.main>

      <Footer />
    </>
  )
}
