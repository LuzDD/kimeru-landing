import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { EMPRESA } from '../lib/constants'
import Button from '../components/ui/Button'

export default function EliminarDatos() {
  const [form, setForm]       = useState({ nombre: '', telefono: '', correo: '' })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Solicitud de eliminación de datos — Kimeru')
    const body    = encodeURIComponent(
      `Solicito la eliminación de mis datos personales de la plataforma Kimeru.\n\nNombre: ${form.nombre}\nTeléfono WhatsApp: ${form.telefono}\nCorreo: ${form.correo}\n\nConfirmo que soy el titular de los datos y solicito su eliminación permanente conforme a la ${EMPRESA.legal.ley}.`
    )
    window.location.href = `mailto:${EMPRESA.contacto.email}?subject=${subject}&body=${body}`
    setEnviado(true)
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
              Conforme al artículo 8 de la <strong>{EMPRESA.legal.ley}</strong> (régimen general
              de protección de datos personales — HABEAS DATA) de la República de Colombia, tienes
              derecho a solicitar la eliminación permanente de tus datos personales de la plataforma
              Kimeru.
            </p>

            <div>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                ¿Qué datos se eliminan?
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Nombre y número de teléfono (WhatsApp)</li>
                <li>Ubicación geográfica registrada</li>
                <li>Datos de cultivos e historial agrícola</li>
                <li>Historial de interacciones con la plataforma</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                Cómo solicitar la eliminación
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Completa el formulario a continuación con tus datos de identificación.</li>
                <li>
                  Haz clic en <strong>"Enviar solicitud"</strong> — se abrirá tu cliente de correo
                  con el mensaje prellenado.
                </li>
                <li>
                  Envía el correo a{' '}
                  <a href={`mailto:${EMPRESA.contacto.email}`} className="text-kimeru-naranja underline">
                    {EMPRESA.contacto.email}
                  </a>.
                </li>
                <li>Recibirás confirmación de recepción en un plazo de <strong>2 días hábiles</strong>.</li>
                <li>
                  La eliminación se completará en un máximo de{' '}
                  <strong>{EMPRESA.legal.plazoEliminacion}</strong> desde la recepción de la solicitud.
                </li>
              </ol>
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
          {!enviado ? (
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

              <Button type="submit" variant="primary">
                Enviar solicitud de eliminación
              </Button>
            </form>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <p className="text-green-800 font-semibold text-lg mb-2">Solicitud preparada</p>
              <p className="text-green-700 text-sm">
                Se abrió tu cliente de correo con la solicitud prellenada. Envía el correo para
                completar el proceso. Recibirás confirmación en máximo{' '}
                {EMPRESA.legal.plazoEliminacion}.
              </p>
            </div>
          )}
        </div>
      </motion.main>

      <Footer />
    </>
  )
}
