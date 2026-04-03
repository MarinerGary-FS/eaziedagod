'use client'

import { motion } from 'framer-motion'

interface AnimatedRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'none'
}

export default function AnimatedReveal({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: AnimatedRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'up' ? 24 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
