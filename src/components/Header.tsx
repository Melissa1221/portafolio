import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { useTranslation } from '../i18n'

export function Header() {
  const { language, setLanguage, t } = useTranslation()
  const { HERO, NAV, SOCIAL } = t
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // A partir de que salimos del hero, el header se apoya en un fondo solido.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-start justify-between px-6 pt-6 transition-colors duration-500 sm:px-10 sm:pt-8 ${
          scrolled ? 'bg-ink/85 pb-4 backdrop-blur-md sm:pb-5' : ''
        }`}
      >
        <a
          href="#inicio"
          className="anim-fade-up font-display text-xl font-bold tracking-wide text-cookie transition-opacity duration-300 hover:opacity-60"
          style={{ animationDelay: '800ms' }}
        >
          {HERO.nombre}
        </a>

        <div className="hidden items-start gap-16 sm:flex lg:gap-24">
          <span
            className="anim-fade-up font-hn text-sm text-cookie"
            style={{ animationDelay: '900ms' }}
          >
            {HERO.anio}
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

          <div className="flex gap-2 font-hn text-xs text-cookie" aria-label="Language selector">
            {(['en', 'es'] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLanguage(option)}
                aria-pressed={language === option}
                className={`transition-opacity hover:opacity-60 ${language === option ? 'underline underline-offset-4' : 'opacity-55'}`}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
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

      {/* backdrop del drawer */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 sm:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-40 w-[80%] max-w-sm overflow-y-auto bg-[#2B1013] px-8 py-10 sm:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transition: 'transform 600ms cubic-bezier(0.76, 0, 0.24, 1)' }}
      >
        <button
          type="button"
          aria-label={t.ui.closeMenu}
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
          {t.ui.index}
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
          {t.ui.findMe}
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

        <div className="mt-12 flex gap-4 font-hn text-sm text-cookie">
          {(['en', 'es'] as const).map((option) => (
            <button key={option} type="button" onClick={() => setLanguage(option)} aria-pressed={language === option} className={language === option ? 'underline underline-offset-4' : 'opacity-55'}>
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      </aside>
    </>
  )
}
