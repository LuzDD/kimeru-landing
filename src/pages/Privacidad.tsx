import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { EMPRESA } from '../lib/constants'

export default function Privacidad() {
  return (
    <>
      <Helmet>
        <title>Política de privacidad — Kimeru</title>
        <meta
          name="description"
          content="Política de privacidad de Kimeru y Atlas Intelligence S.A.S. Conoce cómo tratamos tus datos conforme a la Ley 1581 de 2012."
        />
        <link rel="canonical" href={EMPRESA.urls.privacidad} />
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
            Política de privacidad
          </h1>
          <p className="text-gray-400 text-sm mb-12">
            Última actualización: {EMPRESA.legal.ultimaActualizacion}
          </p>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                1. Responsable del tratamiento
              </h2>
              <p>
                <strong>{EMPRESA.razonSocial}</strong>, identificada bajo las leyes de la República
                de Colombia, es la responsable del tratamiento de los datos personales recolectados
                a través de la plataforma Kimeru y del presente sitio web.
              </p>
              <p className="mt-2">
                Contacto:{' '}
                <a href={`mailto:${EMPRESA.contacto.email}`} className="text-kimeru-naranja underline">
                  {EMPRESA.contacto.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                2. Datos que recopilamos
              </h2>
              <p>Recopilamos los siguientes datos personales:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Nombre completo</li>
                <li>Número de teléfono (WhatsApp)</li>
                <li>Ubicación geográfica aproximada (municipio y departamento)</li>
                <li>Información sobre cultivos y actividad agrícola</li>
                <li>Historial de interacciones con la plataforma vía WhatsApp</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                3. Finalidad del tratamiento
              </h2>
              <p>Los datos recopilados se utilizan para:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Prestar el servicio de análisis de precios y mercados agrícolas vía WhatsApp</li>
                <li>Personalizar la información según la región y el tipo de cultivo del usuario</li>
                <li>Mejorar la plataforma y los algoritmos de análisis</li>
                <li>Comunicar novedades, actualizaciones y alertas del servicio</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                4. Base legal del tratamiento
              </h2>
              <p>
                El tratamiento de datos personales se realiza con base en el consentimiento libre,
                previo, expreso e informado del titular, conforme a lo establecido en la{' '}
                <strong>{EMPRESA.legal.ley}</strong> y el Decreto 1377 de 2013 de la República de
                Colombia (régimen general de protección de datos personales — HABEAS DATA).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                5. Derechos del titular
              </h2>
              <p>Conforme a la {EMPRESA.legal.ley}, el titular de los datos tiene derecho a:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li><strong>Acceder</strong> a sus datos personales de forma gratuita</li>
                <li><strong>Actualizar y rectificar</strong> información inexacta o incompleta</li>
                <li><strong>Solicitar la supresión</strong> de sus datos cuando no sean necesarios para la finalidad del tratamiento</li>
                <li><strong>Revocar la autorización</strong> de tratamiento en cualquier momento</li>
                <li><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio (SIC)</li>
              </ul>
              <p className="mt-4">
                Para ejercer cualquiera de estos derechos, escríbenos a{' '}
                <a href={`mailto:${EMPRESA.contacto.email}`} className="text-kimeru-naranja underline">
                  {EMPRESA.contacto.email}
                </a>
                . Daremos respuesta en un plazo máximo de {EMPRESA.legal.plazoEliminacion}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                6. Conservación de datos
              </h2>
              <p>
                Los datos personales se conservarán durante el tiempo necesario para cumplir con la
                finalidad para la que fueron recopilados, o mientras el titular mantenga activa su
                cuenta en la plataforma Kimeru. Transcurrido este período, los datos serán eliminados
                de forma segura e irreversible.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                7. Transferencia de datos a terceros
              </h2>
              <p>
                {EMPRESA.razonSocial} no vende, alquila ni cede datos personales a terceros sin el
                consentimiento del titular. Los datos podrán ser compartidos únicamente con proveedores
                de servicios tecnológicos que actúen como encargados del tratamiento bajo estrictas
                condiciones de confidencialidad.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                8. Seguridad
              </h2>
              <p>
                Implementamos medidas técnicas y organizativas adecuadas para proteger los datos
                personales contra acceso no autorizado, alteración, divulgación o destrucción accidental.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                9. Cambios a esta política
              </h2>
              <p>
                Nos reservamos el derecho de actualizar esta política en cualquier momento. Los cambios
                sustanciales serán comunicados a los titulares a través de los canales registrados en la
                plataforma.
              </p>
            </section>
          </div>
        </div>
      </motion.main>

      <Footer />
    </>
  )
}
