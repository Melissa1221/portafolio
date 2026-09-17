/**
 * Logo de marca sobre el fondo vino del sitio.
 *
 * Los logos vienen en tres sabores y cada uno necesita algo distinto:
 *  - monocromo sin color propio (WhatsApp, LangChain, LangGraph): se tintan
 *    de color cookie con una mascara, asi acompanan al texto.
 *  - a color y oscuros (Next.js, C++, AWS): necesitan pastilla clara detras
 *    o se pierden contra el vino.
 *  - ya claros o con transparencia (escudo UNI, Alberta): van tal cual.
 */

type Trato = 'tinte' | 'pastilla' | 'directo'

const TRATO: Record<string, Trato> = {
  '/icons/whatsapp.svg': 'tinte',
  '/icons/langchain.svg': 'tinte',
  '/icons/langgraph.svg': 'tinte',
  '/icons/nttdata.svg': 'tinte',
  '/icons/cofoundy.svg': 'tinte',
  '/icons/nextjs.svg': 'pastilla',
  '/icons/cpp.svg': 'pastilla',
  '/icons/aws.svg': 'pastilla',
  '/icons/alberta.png': 'pastilla',
  '/icons/uni.png': 'directo',
}

export function Logo({ src, size = 'sm' }: { src: string; size?: 'sm' | 'md' | 'lg' }) {
  const trato = TRATO[src] ?? 'directo'
  const caja =
    size === 'lg' ? 'h-9 w-9 sm:h-11 sm:w-11' : size === 'md' ? 'h-8 w-8' : 'h-4 w-4'

  if (trato === 'tinte') {
    // La mascara pinta la silueta del logo con el color del texto.
    return (
      <span
        aria-hidden="true"
        className={`${caja} shrink-0 bg-cookie/80`}
        style={{
          maskImage: `url(${src})`,
          WebkitMaskImage: `url(${src})`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
        }}
      />
    )
  }

  if (trato === 'pastilla') {
    return (
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className={`${caja} shrink-0 rounded-sm bg-cookie object-contain p-0.5`}
      />
    )
  }

  return <img src={src} alt="" aria-hidden="true" className={`${caja} shrink-0 object-contain`} />
}
