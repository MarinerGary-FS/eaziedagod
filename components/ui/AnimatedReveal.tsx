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
      initial={{
        opacity: 0,
        y: direction === 'up' ? 40 : 0,
        filter: 'blur(3px)',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
