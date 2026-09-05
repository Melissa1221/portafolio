import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
}

/** Envuelve contenido para que aparezca cuando entra en pantalla. */
export function Reveal({ children, delay = 0, className = '' }: Props) {
  const { ref, shown } = useReveal()

  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ${className}`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: `${delay}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(32px)',
      }}
    >
      {children}
    </div>
  )
}
