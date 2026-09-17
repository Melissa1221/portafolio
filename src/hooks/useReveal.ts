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
      { rootMargin, threshold: 0 },
    )

    obs.observe(el)

    // Red de seguridad: si el elemento ya esta dentro de la pantalla al montar
    // (salto por ancla, scroll restaurado, o un bloque mas alto que el margen
    // del observer), el observer puede no disparar nunca y el contenido se
    // quedaria invisible para siempre. Nada de esto puede ocultar texto real.
    const yaVisible = () => {
      const r = el.getBoundingClientRect()
      return r.top < window.innerHeight && r.bottom > 0
    }
    if (yaVisible()) setShown(true)

    const alScrollear = () => {
      if (yaVisible()) setShown(true)
    }
    window.addEventListener('scroll', alScrollear, { passive: true })
    window.addEventListener('resize', alScrollear, { passive: true })

    return () => {
      obs.disconnect()
      window.removeEventListener('scroll', alScrollear)
      window.removeEventListener('resize', alScrollear)
    }
  }, [rootMargin])

  return { ref, shown }
}
