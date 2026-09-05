/**
 * Este es el unico archivo que necesitas tocar para cambiar los textos.
 * El layout se acomoda solo, sin importar que tan largo escribas.
 */

export const NAV = [
  { label: 'Sobre mí', href: '#sobre' },
  { label: 'Trabajo', href: '#trabajo' },
  { label: 'Camino', href: '#camino' },
  { label: 'Contacto', href: '#contacto' },
]

export const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/Melissa1221' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/melissa-iman' },
  { label: 'Instagram', href: '#' },
]

export const HERO = {
  nombre: 'Melissa',
  apellido: 'Iman',
  anio: '2026',
  izquierda: [
    'Ingeniería de software y producto',
    'Ciencia de la Computación, UNI',
    'Escucho problemas y construyo la salida',
  ],
  derecha: ['Lima, Perú', 'UNI — FC'],
}

export const SOBRE = {
  etiqueta: 'Sobre mí',

  // OPCION A (activa). Corta, con ritmo de tres tiempos.
  titular:
    'Escucho el problema. Entiendo a quién le duele. Recién ahí decido qué construir.',

  // OPCION B — la mas corta de todas:
  // titular: 'Primero escucho. Después construyo.',

  // OPCION C — pone el foco en la persona, sin restarle a lo tecnico:
  // titular:
  //   'Construyo para alguien concreto. Primero entiendo a quién le duele el problema, y recién ahí escribo la primera línea.',

  // OPCION D — declarativa, dice a que te dedicas:
  // titular:
  //   'Hago software para problemas que le importan a alguien.',

  // OPCION E — con la tension entre escuchar y construir:
  // titular:
  //   'Me paso más tiempo entendiendo el problema que escribiendo la solución. Por eso la solución funciona.',

  parrafos: [
    'Nací en Lima y estudio Ciencia de la Computación en la Universidad Nacional de Ingeniería. Entré a la carrera con una beca del BCP y desde los primeros ciclos me metí a competir en hackathons: llegué a finalista nacional del Hult Prize, y esa costumbre de armar algo funcionando contra reloj me llevó a la hackathon de Platanus en Chile, a Suiza, y a una pasantía de investigación con financiamiento completo en la Universidad de Alberta, en Canadá.',
    'Hoy hago ingeniería de software y gestión de producto. Lo que de verdad me mueve es crear empresas y resolver problemas de gente real, sobre todo los sociales: finanzas personales para quien nunca llevó un registro de sus gastos, o pequeños emprendedores que necesitan digitalizarse y ordenarse para poder crecer. Me gusta sentarme a escuchar un problema complejo y encontrar por dónde la tecnología lo destraba.',
  ],

  datos: [
    { clave: 'Estudio', valor: 'Ciencia de la Computación, UNI' },
    { clave: 'Enfoque', valor: 'Producto e ingeniería de software' },
    { clave: 'Base', valor: 'Lima, Perú' },
  ],
}

export const TRABAJO = {
  etiqueta: 'Trabajo',
  titular: 'Investigación, sistemas legados y producto: tres formas de atacar el mismo problema.',
  proyectos: [
    {
      titulo: 'Evaluación automática de usabilidad web',
      rol: 'Tesis',
      anio: '2026',
      descripcion:
        'Framework que evalúa la usabilidad de una interfaz web usando agentes inteligentes multimodales. Auditar usabilidad hoy exige horas de un especialista; la propuesta es que un agente lea la pantalla como la leería una persona y reporte dónde se traba.',
      tags: ['Agentes multimodales', 'Usabilidad', 'Investigación'],
      href: '#',
    },
    {
      titulo: 'Cofoundy',
      rol: 'Co-fundadora',
      anio: '2024 — presente',
      descripcion:
        'Consultora de software e IA a medida para empresas. Detectamos procesos manuales y repetitivos, y los automatizamos. Trabajo de punta a punta: entender dónde se pierde el tiempo, diseñar la solución y llevarla a producción.',
      tags: ['Next.js', 'LangGraph', 'AWS', 'Automatización'],
      href: '#',
    },
    {
      titulo: 'Sistema RAG multimodal — U. de Alberta',
      rol: 'Investigadora',
      anio: '2025',
      descripcion:
        'Pasantía de investigación con beca completa en el Departamento de Ingeniería Civil. Migré un sistema de 15 años y 11,000 líneas de una estructura monolítica a arquitectura modular en C++, y construí un sistema RAG multimodal que lee PDFs, hojas de cálculo e imágenes para que el equipo encuentre en segundos lo que antes buscaba a mano.',
      tags: ['LangChain', 'Bases vectoriales', 'C++', 'RAG'],
      href: '#',
    },
    {
      titulo: 'Bilio',
      rol: 'Creadora',
      anio: '2025',
      descripcion:
        'Chatbot de finanzas personales que corre sobre WhatsApp: registras un gasto escribiéndolo como le escribirías a un amigo. Nació de una idea simple: la gente no lleva sus cuentas porque abrir una app y llenar un formulario es demasiada fricción.',
      tags: ['WhatsApp', 'IA conversacional', 'Finanzas'],
      href: '#',
    },
  ],
}

export const CAMINO = {
  etiqueta: 'Camino',
  titular: 'De un hackathon en Lima a un laboratorio en Canadá, sin soltar la misma pregunta: a quién le sirve esto.',
  hitos: [
    {
      periodo: '2022 — presente',
      titulo: 'Ciencia de la Computación, UNI',
      detalle:
        'Entré con beca del BCP. Desde los primeros ciclos competí en hackathons dentro y fuera del país, y llegué a finalista nacional del Hult Prize.',
    },
    {
      periodo: '2024 — presente',
      titulo: 'Cofoundy — Co-fundadora',
      detalle:
        'Consultora de software e IA a medida. Automatizamos procesos manuales y repetitivos para empresas, de la detección a la producción.',
    },
    {
      periodo: '2025',
      titulo: 'Universidad de Alberta, Canadá',
      detalle:
        'Pasantía de investigación con financiamiento completo, otorgada por excelencia académica. Modernización de sistemas y asistentes de IA para investigación.',
    },
    {
      periodo: '2024 — 2025',
      titulo: 'NTT DATA, Acecom, Innovation Cleverly',
      detalle:
        'Desarrollo full stack en entornos de empresa. En Acecom pasé a liderar el área web, coordinando a más de diez desarrolladores.',
    },
    {
      periodo: '2025',
      titulo: 'Hackathon de Platanus, Chile',
      detalle:
        'Nos eligieron para competir en la hackathon de Platanus, la aceleradora chilena, en Santiago.',
    },
    {
      periodo: '2025',
      titulo: 'Makers Fellowship',
      detalle:
        'Seleccionada para una comunidad de desarrolladores menores de 24 años, tras construir una plataforma con IA en 24 horas.',
    },
  ],
}

export const CONTACTO = {
  etiqueta: 'Contacto',
  titular: 'Si tienes un problema que te importa resolver, escríbeme.',
  email: 'melissa@cofoundy.dev',
  nota:
    'Me interesan las colaboraciones: proyectos con impacto social, productos en etapa temprana, o simplemente un problema difícil que quieras pensar en voz alta.',
}
