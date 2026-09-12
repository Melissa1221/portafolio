import { useTranslation } from '../i18n'
import { Etiqueta } from './Etiqueta'
import { Reveal } from './Reveal'

export function Sobre() {
  const { t } = useTranslation()
  const { SOBRE } = t
  return (
    <section id="sobre" className="border-t border-cookie/15 px-6 py-24 sm:px-10 sm:py-36">
      <Reveal>
        <Etiqueta>{SOBRE.etiqueta}</Etiqueta>
      </Reveal>

      <Reveal delay={100}>
        <h2
          className="mt-8 max-w-5xl font-display text-3xl font-bold leading-[1.15] text-cookie sm:text-5xl lg:text-6xl"
          style={{ fontVariationSettings: '"SOFT" 50, "WONK" 1, "opsz" 96' }}
        >
          {SOBRE.titular}
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 sm:grid-cols-[1fr_auto] sm:gap-20">
        <div className="max-w-2xl space-y-5">
          {SOBRE.parrafos.map((p, i) => (
            <Reveal key={p} delay={200 + i * 80}>
              <p className="font-hn text-base leading-relaxed text-cookie/80 sm:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360}>
          <dl className="space-y-5 sm:min-w-[15rem]">
            {SOBRE.datos.map((d) => (
              <div key={d.clave} className="border-t border-cookie/15 pt-3">
                <dt className="font-hn text-xs uppercase tracking-[0.15em] text-cookie/45">
                  {d.clave}
                </dt>
                <dd className="mt-1 font-hn text-sm text-cookie">{d.valor}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
