import { motion } from 'framer-motion'
import { EMPRESA } from '../../lib/constants'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={EMPRESA.redes.whatsappCanal}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Síguenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12.001 2C6.477 2 2 6.477 2 12c0 1.99.586 3.84 1.594 5.396L2 22l4.735-1.55A9.953 9.953 0 0012.001 22C17.524 22 22 17.523 22 12S17.524 2 12.001 2zm5.835 14.029c-.249.696-1.451 1.327-2.005 1.413-.516.082-1.171.117-1.886-.119-.434-.137-.99-.32-1.701-.626-2.997-1.293-4.952-4.305-5.1-4.504-.149-.198-1.215-1.614-1.215-3.077 0-1.464.768-2.183 1.04-2.481.272-.297.595-.371.793-.371.198 0 .396.002.569.01.182.01.427-.069.669.51.247.595.84 2.057.916 2.207.075.149.124.322.025.521-.1.198-.148.322-.297.495-.149.174-.314.388-.448.521-.149.149-.305.31-.13.608.173.297.769 1.271 1.652 2.059 1.135 1.012 2.093 1.325 2.39 1.475.297.149.471.124.644-.075.173-.198.743-.867.94-1.165.198-.297.396-.247.669-.149.273.1 1.734.818 2.031.967.297.149.495.224.57.347.074.124.074.719-.175 1.414z" />
      </svg>
    </motion.a>
  )
}
