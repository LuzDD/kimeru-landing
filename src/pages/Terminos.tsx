import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { EMPRESA } from '../lib/constants'

export default function Terminos() {
  return (
    <>
      <Helmet>
        <title>Términos y condiciones — Kimeru</title>
        <meta
          name="description"
          content="Términos y condiciones del servicio Kimeru. Condiciones de uso de la plataforma de información agrícola vía WhatsApp."
        />
        <link rel="canonical" href={EMPRESA.urls.terminos} />
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
            Términos y condiciones
          </h1>
          <p className="text-gray-400 text-sm mb-12">
            Última actualización: {EMPRESA.legal.ultimaActualizacion}
          </p>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                1. Descripción del servicio
              </h2>
              <p>
                Kimeru es una plataforma de organización y análisis de información agroproductiva
                territorial. Su función principal es consolidar datos de productores agrícolas,
                generar inteligencia territorial agregada y facilitar la articulación entre actores
                del sistema agroalimentario.
              </p>
              <p className="mt-2">
                El servicio opera principalmente a través de un chatbot en WhatsApp y puede incluir
                canales adicionales en el futuro.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                2. Aceptación de condiciones
              </h2>
              <p>
                El uso del chatbot implica la aceptación plena de estas condiciones, así como de la{' '}
                <a href="/kimeru/privacidad" className="text-kimeru-naranja underline">
                  Política de privacidad
                </a>{' '}
                de {EMPRESA.razonSocial}. Si el usuario no está de acuerdo con alguna de ellas, debe
                abstenerse de usar el servicio.
              </p>
              <p className="mt-2">
                Kimeru se reserva el derecho de modificar estas condiciones en cualquier momento. Los
                cambios serán comunicados a través de los canales oficiales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                3. Compromisos de Kimeru
              </h2>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Mantener el servicio disponible en la medida de lo técnicamente posible</li>
                <li>Tratar la información del usuario conforme a la política de privacidad</li>
                <li>No compartir datos personales identificables sin autorización</li>
                <li>Informar al usuario sobre cambios relevantes en el servicio</li>
                <li>Responder solicitudes de los titulares en los tiempos establecidos por la ley</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                4. Compromisos del usuario
              </h2>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Proporcionar información veraz y actualizada</li>
                <li>No usar el servicio para fines distintos a los establecidos</li>
                <li>No enviar información falsa, engañosa o que perjudique a terceros</li>
                <li>No intentar vulnerar la seguridad o integridad del sistema</li>
                <li>Notificar a Kimeru si detecta errores o inconsistencias en su información</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                5. Limitación de responsabilidad
              </h2>
              <p>
                Kimeru no garantiza resultados comerciales derivados del uso de la plataforma. La
                información proporcionada tiene carácter orientativo y analítico.
              </p>
              <p className="mt-2">Kimeru no es responsable por:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Decisiones comerciales tomadas por los usuarios basadas en la información del sistema</li>
                <li>Interrupciones del servicio por causas ajenas a su control (fallas de WhatsApp, internet, fuerza mayor)</li>
                <li>Inexactitudes derivadas de información incorrecta proporcionada por el propio usuario</li>
                <li>Pérdidas económicas derivadas del uso o imposibilidad de uso del servicio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                6. Propiedad intelectual
              </h2>
              <p>
                Los algoritmos, metodologías, modelos de análisis, reportes y cualquier producto
                intelectual generado por Kimeru son propiedad de {EMPRESA.razonSocial}.
              </p>
              <p className="mt-2">
                El usuario conserva la propiedad de sus datos productivos. Al registrarlos en Kimeru,
                otorga autorización para su uso agregado y anonimizado conforme a la{' '}
                <a href="/kimeru/privacidad" className="text-kimeru-naranja underline">
                  Política de privacidad
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                7. Suspensión del servicio
              </h2>
              <p>Kimeru podrá suspender el acceso de un usuario sin previo aviso en caso de:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Uso indebido o fraudulento del servicio</li>
                <li>Envío de información deliberadamente falsa</li>
                <li>Conductas que afecten la integridad del sistema o de otros usuarios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                8. Ley aplicable
              </h2>
              <p>
                Estas condiciones se rigen por las leyes de la República de{' '}
                {EMPRESA.legal.jurisdiccion}. Cualquier controversia será resuelta conforme a la
                legislación colombiana vigente, incluyendo la Ley 1480 de 2011 (Estatuto del
                Consumidor) y la {EMPRESA.legal.ley} (Protección de Datos Personales).
              </p>
              <p className="mt-3">
                Contacto:{' '}
                <a href={`mailto:${EMPRESA.contacto.email}`} className="text-kimeru-naranja underline">
                  {EMPRESA.contacto.email}
                </a>{' '}
                · Medellín, Colombia
              </p>
            </section>
          </div>
        </div>
      </motion.main>

      <Footer />
    </>
  )
}
