import { useEffect, useRef, useState } from 'react'

/**
 * Marca un elemento como visible la primera vez que entra en pantalla.
 * Si el usuario pidio menos movimiento, lo da por visible de entrada.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  rootMargin = '-12% 0px -12% 0px',
) {
  const ref = useRef<T | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (quieto || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true)
            obs.disconnect()
          }
        }
      },
      { rootMargin, threshold: 0.01 },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [rootMargin])

  return { ref, shown }
}
