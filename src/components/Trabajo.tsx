import { useTranslation } from '../i18n'
import { Etiqueta } from './Etiqueta'
import { Logo } from './Logo'
import { Reveal } from './Reveal'

export function Trabajo() {
  const { t } = useTranslation()
  const { TRABAJO } = t
  return (
    <section id="trabajo" className="border-t border-cookie/15 py-24 sm:py-36">
      <div className="marco">
        <Reveal>
          <Etiqueta>{TRABAJO.etiqueta}</Etiqueta>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="mt-8 max-w-4xl font-display text-3xl font-bold leading-[1.15] text-cookie sm:text-5xl"
            style={{ fontVariationSettings: '"SOFT" 50, "WONK" 1, "opsz" 96' }}
          >
            {TRABAJO.titular}
          </h2>
        </Reveal>

        <ul className="mt-16">
          {TRABAJO.proyectos.map((p, i) => (
            <Reveal key={p.titulo + i} delay={i * 90}>
              <li className="group border-t border-cookie/15 last:border-b">
                <div className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-8">
                  <span className="font-hn text-xs text-cookie/45">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <h3
                      className="flex items-center gap-3 font-display text-2xl font-bold text-cookie sm:text-4xl"
                      style={{ fontVariationSettings: '"SOFT" 50, "WONK" 1, "opsz" 72' }}
                    >
                      {p.logo && <Logo src={p.logo} size="lg" />}
                      {p.titulo}
                    </h3>
                    <p className="mt-3 max-w-xl font-hn text-sm leading-relaxed text-cookie/75">
                      {p.descripcion}
                    </p>
                    <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                      {p.tags.map((tag) => (
                        <li
                          key={typeof tag === 'string' ? tag : tag.nombre}
                          className="flex items-center gap-1.5 font-hn text-xs text-cookie/55"
                        >
                          {typeof tag !== 'string' && tag.icono && <Logo src={tag.icono} />}
                          {typeof tag === 'string' ? tag : tag.nombre}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="font-hn text-xs text-cookie/60 sm:text-right">
                    <p>{p.rol}</p>
                    <p className="mt-1 text-cookie/40">{p.anio}</p>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
