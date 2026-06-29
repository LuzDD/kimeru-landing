import { useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useRef } from 'react'

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return { ref, animate: isInView ? 'visible' : 'hidden' }
}
