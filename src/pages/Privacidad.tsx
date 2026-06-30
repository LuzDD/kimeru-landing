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
                1. ¿Qué es Kimeru?
              </h2>
              <p>
                Kimeru es una iniciativa tecnológica que organiza información agroproductiva para
                generar datos útiles para productores, asociaciones, empresas e instituciones del
                sector agroalimentario.
              </p>
              <p className="mt-2">
                A través de herramientas digitales como WhatsApp, Kimeru permite registrar información
                relacionada con la producción agrícola y transformarla en información estructurada que
                facilite la organización de la oferta productiva, el análisis territorial y la toma de
                decisiones.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                2. Responsable del tratamiento
              </h2>
              <p>El responsable del tratamiento de los datos personales es:</p>
              <p className="mt-2">
                <strong>Kimeru — {EMPRESA.razonSocial}</strong>
                <br />
                Contacto:{' '}
                <a href={`mailto:${EMPRESA.contacto.email}`} className="text-kimeru-naranja underline">
                  {EMPRESA.contacto.email}
                </a>
                <br />
                Medellín, Colombia
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                3. ¿Qué información recopilamos?
              </h2>
              <p>Durante el registro y uso del chatbot, Kimeru podrá solicitar:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Identificación y datos de contacto</li>
                <li>Ubicación territorial</li>
                <li>Productos cultivados o transformados</li>
                <li>Meses de cosecha o disponibilidad</li>
                <li>Volumen aproximado de producción</li>
                <li>Información básica de comercialización y logística</li>
              </ul>
              <p className="mt-3">
                Dependiendo del avance del registro, también podrán solicitarse datos sobre costos de
                producción, infraestructura, formalización o necesidades del territorio.
              </p>
              <p className="mt-3 bg-kimeru-verde-claro/10 border-l-2 border-kimeru-verde-profundo rounded px-4 py-3 text-sm">
                Algunas preguntas relacionadas con género, grupo poblacional o rango de edad son
                opcionales y se tratan con especial protección conforme a la legislación colombiana.
                No responderlas no impide el uso del servicio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                4. ¿Para qué usamos la información?
              </h2>
              <p>
                La información compartida permite organizar la oferta productiva del territorio,
                generar reportes agregados, identificar tendencias productivas y comerciales, y enviar
                información útil como precios, alertas y análisis de mercado.
              </p>
              <p className="mt-2">
                También puede usarse para fortalecer la articulación entre productores, asociaciones,
                empresas e instituciones, y apoyar ejercicios de planeación territorial y sectorial.
              </p>
              <p className="mt-3 bg-kimeru-verde-claro/10 border-l-2 border-kimeru-verde-profundo rounded px-4 py-3 text-sm">
                Los datos personales individuales no serán vendidos ni compartidos con terceros sin
                autorización del titular, salvo obligación legal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                5. ¿Qué NO hace Kimeru?
              </h2>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>No compra ni vende productos</li>
                <li>No garantiza ventas ni negocios</li>
                <li>No actúa como intermediario comercial</li>
                <li>No opera transporte ni logística</li>
                <li>No reemplaza los acuerdos comerciales entre productores y compradores</li>
              </ul>
              <p className="mt-3">Las decisiones comerciales son responsabilidad exclusiva de cada parte.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                6. Uso compartido de información
              </h2>
              <p>
                Kimeru podrá compartir información agregada, estadística o anonimizada con empresas,
                asociaciones, instituciones, entidades públicas y aliados estratégicos.
              </p>
              <p className="mt-3 bg-kimeru-verde-claro/10 border-l-2 border-kimeru-verde-profundo rounded px-4 py-3 text-sm">
                Esta información se comparte únicamente con fines analíticos o de planeación y no
                incluye datos personales identificables sin autorización previa del titular.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                7. Derechos de los titulares
              </h2>
              <p>Conforme a la {EMPRESA.legal.ley}, los titulares tienen derecho a:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li><strong>Conocer</strong> la información registrada</li>
                <li><strong>Solicitar actualización o corrección</strong> de datos</li>
                <li><strong>Solicitar la eliminación</strong> de su información</li>
                <li><strong>Revocar</strong> la autorización otorgada</li>
                <li><strong>Solicitar información</strong> sobre el uso de sus datos</li>
              </ul>
              <p className="mt-4">
                Las solicitudes pueden realizarse escribiendo a{' '}
                <a href={`mailto:${EMPRESA.contacto.email}`} className="text-kimeru-naranja underline">
                  {EMPRESA.contacto.email}
                </a>{' '}
                o por WhatsApp al{' '}
                <a
                  href={`https://wa.me/${EMPRESA.contacto.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-kimeru-naranja underline"
                >
                  +57 313 697 6123
                </a>
                . Conoce el detalle del proceso en{' '}
                <a href="/kimeru/eliminar-datos" className="text-kimeru-naranja underline">
                  Eliminar mis datos
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                8. Seguridad de la información
              </h2>
              <p>
                Kimeru adopta medidas razonables de protección para prevenir el acceso no autorizado,
                la pérdida, alteración o uso indebido de la información. Sin embargo, ningún sistema
                tecnológico puede garantizar seguridad absoluta.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                9. Uso de plataformas de terceros
              </h2>
              <p>
                El chatbot de Kimeru opera a través de WhatsApp, plataforma con políticas y condiciones
                propias sobre las cuales Kimeru no tiene control directo. El uso del chatbot implica
                también la aceptación de las condiciones de uso y privacidad de WhatsApp / Meta.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                10. Conservación de la información
              </h2>
              <p>
                La información será conservada durante el tiempo necesario para cumplir las finalidades
                descritas, o mientras exista relación activa con el usuario, salvo solicitud de
                eliminación o disposición legal diferente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                11. Cambios en esta política
              </h2>
              <p>
                Kimeru podrá actualizar esta política cuando sea necesario. Las versiones actualizadas
                estarán disponibles a través de los canales oficiales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-kimeru-verde-profundo mb-3">
                12. Aceptación
              </h2>
              <p className="bg-kimeru-verde-claro/10 border-l-2 border-kimeru-verde-profundo rounded px-4 py-3 text-sm">
                Al interactuar con el chatbot y continuar con el registro, el usuario declara que ha
                leído esta política y autoriza el tratamiento de sus datos conforme a las condiciones
                aquí descritas.
              </p>
            </section>
          </div>
        </div>
      </motion.main>

      <Footer />
    </>
  )
}
