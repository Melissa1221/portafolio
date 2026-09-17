import { useTranslation } from '../i18n'

export function Hero() {
  const { t } = useTranslation()
  const { HERO } = t
  return (
    <section id="inicio" className="relative h-[100dvh] w-full overflow-hidden">
      {/* fondo full-bleed */}
      <img
        src="/img/bg.jpg"
        alt=""
        className="anim-fade-in absolute inset-0 h-full w-full object-cover"
      />

      {/* Nombre. En telefono se lee completo y quieto: el marquee desbordaba
          la pantalla y solo dejaba ver un pedazo ("a — Iman"). Desde sm,
          donde si hay ancho, vuelve la cinta en movimiento. */}
      <div
        className="anim-fade-up absolute inset-x-0 top-[16vh] z-10 px-6 sm:hidden"
        style={{ animationDelay: '500ms' }}
      >
        <h1
          className="font-display text-[15vw] font-black leading-[0.95] text-cookie"
          style={{ fontVariationSettings: '"SOFT" 50, "WONK" 1, "opsz" 144' }}
        >
          {HERO.nombre}
          <br />
          {HERO.apellido}
        </h1>
      </div>

      <div
        className="anim-fade-up absolute inset-x-0 top-[13vh] z-10 hidden overflow-hidden sm:block"
        style={{ animationDelay: '500ms' }}
      >
        <div
          className="marquee flex w-max whitespace-nowrap font-display text-[23vh] font-black leading-none text-cookie"
          style={{ fontVariationSettings: '"SOFT" 50, "WONK" 1, "opsz" 144' }}
        >
          <span className="pr-[6vw]">
            {HERO.nombre} &mdash; {HERO.apellido}&nbsp;
          </span>
          <span className="pr-[6vw]">
            {HERO.nombre} &mdash; {HERO.apellido}&nbsp;
          </span>
        </div>
      </div>

      {/* retrato recortado, encima del marquee */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center">
        <img
          src="/img/melissa.webp"
          alt={t.ui.portraitAlt}
          className="anim-rise-in h-[58vh] w-auto max-w-none object-contain object-bottom sm:h-[86vh]"
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

      {/* footer del hero */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between gap-6 px-6 pb-5 font-hn text-xs leading-relaxed text-cookie sm:px-10 sm:pb-8 sm:text-sm">
        <div className="anim-fade-up" style={{ animationDelay: '1400ms' }}>
          {HERO.izquierda.map((linea) => (
            <p key={linea}>{linea}</p>
          ))}
        </div>
        <div className="anim-fade-up text-right" style={{ animationDelay: '1550ms' }}>
          {HERO.derecha.map((linea) => (
            <p key={linea}>{linea}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
