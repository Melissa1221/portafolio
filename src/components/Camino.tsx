import { useTranslation } from '../i18n'
import { Etiqueta } from './Etiqueta'
import { Reveal } from './Reveal'

export function Camino() {
  const { t } = useTranslation()
  const { CAMINO } = t
  return (
    <section id="camino" className="border-t border-cookie/15 px-6 py-24 sm:px-10 sm:py-36">
      <Reveal>
        <Etiqueta>{CAMINO.etiqueta}</Etiqueta>
      </Reveal>

      <Reveal delay={100}>
        <h2
          className="mt-8 max-w-4xl font-display text-3xl font-bold leading-[1.15] text-cookie sm:text-5xl"
          style={{ fontVariationSettings: '"SOFT" 50, "WONK" 1, "opsz" 96' }}
        >
          {CAMINO.titular}
        </h2>
      </Reveal>

      <ol className="mt-16 max-w-3xl">
        {CAMINO.hitos.map((h, i) => (
          <Reveal key={h.titulo + i} delay={i * 90} className="relative border-l border-cookie/20">
            <li className="grid grid-cols-1 gap-x-8 gap-y-2 pb-16 pl-8 sm:grid-cols-[9rem_1fr] sm:pl-10">
              {/* punto del hito, alineado con la primera linea de texto */}
              <span className="absolute -left-[calc(0.25rem+1px)] top-2 h-2 w-2 rounded-full bg-opal" />

              <p className="font-hn text-xs uppercase leading-7 tracking-[0.15em] text-cookie/45">
                {h.periodo}
              </p>

              <div className="sm:pt-0">
                <h3 className="font-hn text-lg leading-7 text-cookie sm:text-xl">{h.titulo}</h3>
                <p className="mt-2 max-w-xl font-hn text-sm leading-relaxed text-cookie/70">
                  {h.detalle}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
