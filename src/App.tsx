import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const NAV = [
  { label: 'Historia', href: '#' },
  { label: 'Trabajo', href: '#' },
  { label: 'Mensaje', href: '#' },
]

const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/Melissa1221' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
]

export default function App() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-ink">
      {/* fondo full-bleed */}
      <img
        src="/img/bg.jpg"
        alt=""
        className="anim-fade-in absolute inset-0 h-full w-full object-cover"
      />

      {/* marquee del nombre */}
      <div
        className="anim-fade-up absolute inset-x-0 top-[22vh] z-10 overflow-hidden sm:top-[13vh]"
        style={{ animationDelay: '500ms' }}
      >
        <div
          className="marquee flex w-max whitespace-nowrap font-display text-[9vh] font-black leading-none text-cookie sm:text-[23vh]"
          style={{ fontVariationSettings: '"SOFT" 50, "WONK" 1, "opsz" 144' }}
        >
          <span className="pr-[6vw]">Melissa &mdash; Iman&nbsp;</span>
          <span className="pr-[6vw]">Melissa &mdash; Iman&nbsp;</span>
        </div>
      </div>

      {/* retrato recortado, encima del marquee */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center">
        <img
          src="/img/melissa.webp"
          alt="Retrato"
          className="anim-rise-in h-[62vh] w-auto max-w-none object-contain object-bottom sm:h-[86vh]"
          style={{ animationDelay: '300ms' }}
        />
      </div>

      {/* degradado de pie para legibilidad */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-52 bg-gradient-to-t from-ink via-ink/70 to-transparent" />

      {/* regla horizontal */}
      <div
        className="anim-line absolute inset-x-6 bottom-[5.5rem] z-30 h-0.5 bg-cookie sm:inset-x-10 sm:bottom-28"
        style={{ animationDelay: '1200ms', transformOrigin: 'left' }}
      />

      {/* header */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <a
          href="#"
          className="anim-fade-up font-display text-xl font-bold tracking-wide text-cookie transition-opacity duration-300 hover:opacity-60"
          style={{ animationDelay: '800ms' }}
        >
          Melissa
        </a>

        <div className="hidden items-start gap-16 sm:flex lg:gap-24">
          <span
            className="anim-fade-up font-hn text-sm text-cookie"
            style={{ animationDelay: '900ms' }}
          >
            2026
          </span>

          <nav className="flex flex-col gap-0.5 font-hn text-sm text-cookie">
            {NAV.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className="anim-fade-up transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1000 + i * 80}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-0.5 font-hn text-sm text-cookie">
            {SOCIAL.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="anim-fade-up transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1150 + i * 80}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* hamburguesa (mobile) */}
        <button
          type="button"
          aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="anim-fade-up relative z-50 flex h-10 w-10 items-center justify-center sm:hidden"
          style={{ animationDelay: '900ms' }}
        >
          <span className="relative flex h-4 w-6 flex-col justify-between">
            <span
              className="block h-0.5 w-full bg-cookie transition-transform duration-500"
              style={{
                transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
                transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block h-0.5 w-full bg-cookie transition-opacity duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-0.5 w-full bg-cookie transition-transform duration-500"
              style={{
                transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
                transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </span>
        </button>
      </header>

      {/* footer */}
      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between gap-6 px-6 pb-5 font-hn text-xs leading-relaxed text-cookie sm:px-10 sm:pb-8 sm:text-sm">
        <div className="anim-fade-up" style={{ animationDelay: '1400ms' }}>
          <p>Ciencia de la Computacion</p>
          <p>Constructora de software</p>
          <p>Obsesionada con los sistemas que se explican solos</p>
        </div>
        <div className="anim-fade-up text-right" style={{ animationDelay: '1550ms' }}>
          <p>Lima, Peru</p>
          <p>UNI &mdash; FC</p>
        </div>
      </footer>

      {/* backdrop del drawer */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 sm:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-40 w-[80%] max-w-sm bg-[#2B1013] px-8 py-10 sm:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          transition: 'transform 600ms cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      >
        <button
          type="button"
          aria-label="Cerrar menu"
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 z-50 text-cookie transition-all duration-300"
          style={{
            transform: open ? 'rotate(0deg)' : 'rotate(90deg)',
            opacity: open ? 1 : 0,
            transitionDelay: open ? '300ms' : '0ms',
          }}
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        <p
          className="mt-10 font-hn text-xs uppercase tracking-[0.2em] text-cookie/50 transition-all duration-500"
          style={{
            transform: open ? 'translateY(0)' : 'translateY(16px)',
            opacity: open ? 1 : 0,
            transitionDelay: open ? '250ms' : '0ms',
          }}
        >
          Indice
        </p>

        <nav className="mt-4 flex flex-col gap-1">
          {NAV.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-bold text-cookie transition-all duration-500"
              style={{
                transform: open ? 'translateY(0)' : 'translateY(24px)',
                opacity: open ? 1 : 0,
                transitionDelay: open ? `${300 + i * 80}ms` : '0ms',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p
          className="mt-12 font-hn text-xs uppercase tracking-[0.2em] text-cookie/50 transition-all duration-500"
          style={{
            transform: open ? 'translateY(0)' : 'translateY(16px)',
            opacity: open ? 1 : 0,
            transitionDelay: open ? '500ms' : '0ms',
          }}
        >
          Encuentrame
        </p>

        <nav className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {SOCIAL.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="font-hn text-sm text-cookie transition-all duration-500"
              style={{
                transform: open ? 'translateY(0)' : 'translateY(16px)',
                opacity: open ? 1 : 0,
                transitionDelay: open ? `${550 + i * 60}ms` : '0ms',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </section>
  )
}
