import { useTranslation } from '../i18n'
import { Etiqueta } from './Etiqueta'
import { Reveal } from './Reveal'

export function Contacto() {
  const { t } = useTranslation()
  const { CONTACTO, HERO, SOCIAL } = t
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-cookie/15 pt-24 sm:pt-36"
    >
      <div className="marco">
      <Reveal>
        <Etiqueta>{CONTACTO.etiqueta}</Etiqueta>
      </Reveal>

      <Reveal delay={100}>
        <h2
          className="mt-8 max-w-4xl font-display text-3xl font-bold leading-[1.15] text-cookie sm:text-5xl"
          style={{ fontVariationSettings: '"SOFT" 50, "WONK" 1, "opsz" 96' }}
        >
          {CONTACTO.titular}
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <a
          href={`mailto:${CONTACTO.email}`}
          className="mt-10 inline-block border-b border-cookie/40 pb-1 font-hn text-lg text-cookie transition-opacity duration-300 hover:opacity-60 sm:text-2xl"
        >
          {CONTACTO.email}
        </a>
      </Reveal>

      <Reveal delay={280}>
        <p className="mt-6 max-w-xl font-hn text-sm leading-relaxed text-cookie/70">
          {CONTACTO.nota}
        </p>
      </Reveal>

      <Reveal delay={360}>
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          {SOCIAL.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                className="font-hn text-sm text-cookie transition-opacity duration-300 hover:opacity-60"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

        {/* nombre gigante de cierre, recortado por abajo */}
        <Reveal delay={200}>
          <p
            className="mt-20 select-none overflow-hidden whitespace-nowrap font-display text-[17vw] font-black leading-[0.85] text-cookie/[0.12] sm:mt-28"
            style={{ fontVariationSettings: '"SOFT" 50, "WONK" 1, "opsz" 144' }}
            aria-hidden="true"
          >
            {HERO.nombre} &mdash; {HERO.apellido}
          </p>
        </Reveal>

        <div className="flex items-center justify-between border-t border-cookie/15 py-6 font-hn text-xs text-cookie/45">
          <p>
            &copy; {HERO.anio} {HERO.nombre} Iman Noriega
          </p>
          <a href="#inicio" className="transition-opacity duration-300 hover:opacity-60">
            {t.ui.backToTop}
          </a>
        </div>
      </div>
    </section>
  )
}
