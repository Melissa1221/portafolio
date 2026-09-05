/**
 * TODO Melissa: este archivo es el unico que necesitas tocar para
 * cambiar los textos. El layout no depende de que tan largos sean.
 */

export const NAV = [
  { label: 'Sobre mi', href: '#sobre' },
  { label: 'Trabajo', href: '#trabajo' },
  { label: 'Camino', href: '#camino' },
  { label: 'Contacto', href: '#contacto' },
]

export const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/Melissa1221' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
]

export const HERO = {
  nombre: 'Melissa',
  apellido: 'Iman',
  anio: '2026',
  izquierda: [
    '[UNA LINEA: que estudias o que haces]',
    '[UNA LINEA: como te describis profesionalmente]',
    '[UNA LINEA: algo tuyo, con personalidad]',
  ],
  derecha: ['Lima, Peru', 'UNI — FC'],
}

export const SOBRE = {
  etiqueta: 'Sobre mi',
  // El parrafo grande que abre la seccion. Que sea una sola idea fuerte.
  titular:
    '[ESCRIBI ACA TU FRASE DE APERTURA. Una sola idea, en primera persona, que diga a que le dedicas la cabeza. Puede ser larga: la tipografia grande la sostiene.]',
  parrafos: [
    '[PRIMER PARRAFO: de donde venis y que estudias. Contexto.]',
    '[SEGUNDO PARRAFO: que te interesa de verdad, en que te estas metiendo ahora.]',
  ],
  datos: [
    { clave: 'Estudio', valor: '[Tu carrera / universidad]' },
    { clave: 'Enfoque', valor: '[En que te especializas]' },
    { clave: 'Base', valor: 'Lima, Peru' },
  ],
}

export const TRABAJO = {
  etiqueta: 'Trabajo',
  titular: '[UNA FRASE que enmarque lo que mostras abajo]',
  proyectos: [
    {
      titulo: '[NOMBRE DEL PROYECTO]',
      rol: '[TU ROL]',
      anio: '[ANIO]',
      descripcion:
        '[DOS O TRES LINEAS: que problema resuelve y que hiciste vos. Concreto, sin adjetivos de relleno.]',
      tags: ['[tecnologia]', '[tecnologia]', '[area]'],
      href: '#',
    },
    {
      titulo: '[NOMBRE DEL PROYECTO]',
      rol: '[TU ROL]',
      anio: '[ANIO]',
      descripcion: '[DOS O TRES LINEAS sobre este proyecto.]',
      tags: ['[tecnologia]', '[tecnologia]'],
      href: '#',
    },
    {
      titulo: '[NOMBRE DEL PROYECTO]',
      rol: '[TU ROL]',
      anio: '[ANIO]',
      descripcion: '[DOS O TRES LINEAS sobre este proyecto.]',
      tags: ['[tecnologia]', '[area]'],
      href: '#',
    },
  ],
}

export const CAMINO = {
  etiqueta: 'Camino',
  titular: '[UNA FRASE sobre tu recorrido hasta ahora]',
  hitos: [
    {
      periodo: '[ANIO — ANIO]',
      titulo: '[QUE HICISTE / DONDE]',
      detalle: '[UNA O DOS LINEAS de contexto.]',
    },
    {
      periodo: '[ANIO — ANIO]',
      titulo: '[QUE HICISTE / DONDE]',
      detalle: '[UNA O DOS LINEAS de contexto.]',
    },
    {
      periodo: '[ANIO — ANIO]',
      titulo: '[QUE HICISTE / DONDE]',
      detalle: '[UNA O DOS LINEAS de contexto.]',
    },
    {
      periodo: '[ANIO]',
      titulo: '[QUE HICISTE / DONDE]',
      detalle: '[UNA O DOS LINEAS de contexto.]',
    },
  ],
}

export const CONTACTO = {
  etiqueta: 'Contacto',
  titular: '[UNA INVITACION: para que te escriban. Corta y directa.]',
  email: '[tu-email@dominio.com]',
  nota: '[UNA LINEA: que tipo de mensajes te interesan.]',
}
