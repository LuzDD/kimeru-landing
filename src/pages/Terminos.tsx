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
                1. Aceptación de los términos
              </h2>
              <p>
                Al registrarse en la plataforma Kimeru o al utilizar cualquiera de sus servicios,
                el usuario acepta de forma expresa estos Términos y condiciones, así como la{' '}
                <a href="/kimeru/privacidad" className="text-kimeru-naranja underline">
                  Política de privacidad
                </a>{' '}
                de {EMPRESA.razonSocial}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                2. Descripción del servicio
              </h2>
              <p>
                Kimeru es una plataforma digital de información agrícola que opera a través de
                WhatsApp Business. El servicio provee a pequeños y medianos agricultores colombianos
                información actualizada sobre precios de mercado, análisis de tendencias y
                recomendaciones comerciales, con el fin de mejorar sus decisiones de venta.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                3. Registro y acceso
              </h2>
              <p>
                El acceso a Kimeru se realiza a través de WhatsApp mediante el número de teléfono
                del usuario. El usuario es responsable de mantener la confidencialidad de su cuenta
                y de todas las actividades que ocurran a través de ella.{' '}
                {EMPRESA.razonSocial} no se hace responsable por accesos no autorizados derivados
                de negligencia del usuario.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                4. Uso aceptable
              </h2>
              <p>El usuario se compromete a:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Usar el servicio exclusivamente para fines lícitos y conforme a estos términos</li>
                <li>No compartir información falsa o engañosa a través de la plataforma</li>
                <li>No intentar acceder de forma no autorizada a sistemas o datos de la plataforma</li>
                <li>No usar el servicio para actividades comerciales no autorizadas por {EMPRESA.razonSocial}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                5. Información y exactitud
              </h2>
              <p>
                La información de precios y mercados provista por Kimeru tiene carácter informativo
                y orientativo. {EMPRESA.razonSocial} realiza esfuerzos razonables para garantizar
                la exactitud de la información, pero no garantiza que sea completa, actualizada o
                libre de errores. El usuario debe contrastar la información con otras fuentes antes
                de tomar decisiones comerciales definitivas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                6. Limitación de responsabilidad
              </h2>
              <p>
                {EMPRESA.razonSocial} no será responsable por pérdidas económicas, lucro cesante o
                daños directos o indirectos derivados del uso o la imposibilidad de uso del servicio
                Kimeru, ni por decisiones comerciales tomadas con base en la información provista por
                la plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                7. Propiedad intelectual
              </h2>
              <p>
                Todos los contenidos, marcas, logos, algoritmos y desarrollos tecnológicos de la
                plataforma Kimeru son propiedad exclusiva de {EMPRESA.razonSocial}. El usuario no
                adquiere ningún derecho sobre ellos por el uso del servicio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                8. Modificaciones del servicio
              </h2>
              <p>
                {EMPRESA.razonSocial} se reserva el derecho de modificar, suspender o discontinuar
                el servicio Kimeru en cualquier momento. Nos esforzaremos por comunicar cambios
                importantes con anticipación razonable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                9. Ley aplicable y jurisdicción
              </h2>
              <p>
                Estos términos se rigen por la legislación de la República de{' '}
                {EMPRESA.legal.jurisdiccion}. Cualquier controversia derivada de su interpretación
                o aplicación será resuelta por los tribunales competentes de{' '}
                {EMPRESA.legal.jurisdiccion}, con renuncia expresa a cualquier otro fuero.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                10. Contacto
              </h2>
              <p>
                Para consultas sobre estos términos, escríbenos a{' '}
                <a href={`mailto:${EMPRESA.contacto.email}`} className="text-kimeru-naranja underline">
                  {EMPRESA.contacto.email}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </motion.main>

      <Footer />
    </>
  )
}
