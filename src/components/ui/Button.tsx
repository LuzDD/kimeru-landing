import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children:  ReactNode
  variant?:  'primary' | 'secondary' | 'outline'
  onClick?:  () => void
  href?:     string
  target?:   string
  rel?:      string
  className?: string
  type?:     'button' | 'submit'
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  target,
  rel,
  className = '',
  type = 'button',
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200 cursor-pointer'

  const variants = {
    primary:   'bg-kimeru-naranja text-white hover:bg-orange-600',
    secondary: 'bg-kimeru-verde-claro text-kimeru-verde-profundo hover:bg-green-300',
    outline:   'border-2 border-kimeru-naranja text-kimeru-naranja hover:bg-kimeru-naranja hover:text-white',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}
