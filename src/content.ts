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

export const ES = { NAV, SOCIAL, HERO, SOBRE, TRABAJO, CAMINO, CONTACTO, ui: { index: 'Índice', findMe: 'Encuéntrame', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', portraitAlt: 'Retrato de Melissa Iman Noriega', backToTop: 'Volver arriba' } }

export const EN = {
  NAV: [
    { label: 'About', href: '#sobre' },
    { label: 'Work', href: '#trabajo' },
    { label: 'Path', href: '#camino' },
    { label: 'Contact', href: '#contacto' },
  ],
  SOCIAL,
  HERO: {
    nombre: 'Melissa', apellido: 'Iman', anio: '2026',
    izquierda: ['Software engineering and product', 'Computer Science, UNI', 'I listen to problems and build the way forward'],
    derecha: ['Lima, Peru', 'UNI — FC'],
  },
  SOBRE: {
    etiqueta: 'About',
    titular: 'I listen to the problem. I understand who it hurts. Only then do I decide what to build.',
    parrafos: [
      'I was born in Lima and study Computer Science at the National University of Engineering. I entered the program on a BCP scholarship and began competing in hackathons early on: I became a national Hult Prize finalist, and the habit of building working products against the clock took me to Platanus’ hackathon in Chile, Switzerland, and a fully funded research internship at the University of Alberta in Canada.',
      'Today I work in software engineering and product management. What truly drives me is building companies and solving real people’s problems, especially social ones: personal finance for people who have never tracked their expenses, or small business owners who need to digitize and organize to grow. I like sitting with a complex problem and finding where technology can unlock it.',
    ],
    datos: [
      { clave: 'Education', valor: 'Computer Science, UNI' },
      { clave: 'Focus', valor: 'Product and software engineering' },
      { clave: 'Based in', valor: 'Lima, Peru' },
    ],
  },
  TRABAJO: {
    etiqueta: 'Work',
    titular: 'Research, legacy systems, and product: three ways to tackle the same problem.',
    proyectos: [
      { titulo: 'Automated web usability evaluation', rol: 'Thesis', anio: '2026', descripcion: 'A framework that evaluates a web interface’s usability using multimodal intelligent agents. A usability audit currently demands hours from a specialist; the proposal is for an agent to read the screen as a person would and report where people get stuck.', tags: ['Multimodal agents', 'Usability', 'Research'], href: '#' },
      { titulo: 'Cofoundy', rol: 'Co-founder', anio: '2024 — present', descripcion: 'A custom software and AI consultancy for companies. We identify manual, repetitive processes and automate them. End-to-end work: understand where time is lost, design the solution, and take it to production.', tags: ['Next.js', 'LangGraph', 'AWS', 'Automation'], href: '#' },
      { titulo: 'Multimodal RAG system — U. of Alberta', rol: 'Researcher', anio: '2025', descripcion: 'Fully funded research internship in the Department of Civil Engineering. I migrated a 15-year-old, 11,000-line system from a monolithic structure to a modular C++ architecture, and built a multimodal RAG system that reads PDFs, spreadsheets, and images so the team can find in seconds what they previously searched for manually.', tags: ['LangChain', 'Vector databases', 'C++', 'RAG'], href: '#' },
      { titulo: 'Bilio', rol: 'Creator', anio: '2025', descripcion: 'A personal-finance chatbot on WhatsApp: record an expense by writing it as you would to a friend. It came from a simple idea: people do not keep track of their money because opening an app and filling out a form creates too much friction.', tags: ['WhatsApp', 'Conversational AI', 'Finance'], href: '#' },
    ],
  },
  CAMINO: {
    etiqueta: 'Path',
    titular: 'From a hackathon in Lima to a lab in Canada, without letting go of the same question: who does this help?',
    hitos: [
      { periodo: '2022 — present', titulo: 'Computer Science, UNI', detalle: 'I entered with a BCP scholarship. From my first terms I competed in hackathons in Peru and abroad, becoming a national Hult Prize finalist.' },
      { periodo: '2024 — present', titulo: 'Cofoundy — Co-founder', detalle: 'Custom software and AI consultancy. We automate companies’ manual, repetitive processes, from discovery through production.' },
      { periodo: '2025', titulo: 'University of Alberta, Canada', detalle: 'Fully funded research internship awarded for academic excellence. Systems modernization and AI assistants for research.' },
      { periodo: '2024 — 2025', titulo: 'NTT DATA, Acecom, Innovation Cleverly', detalle: 'Full-stack development in enterprise environments. At Acecom I went on to lead the web area, coordinating more than ten developers.' },
      { periodo: '2025', titulo: 'Platanus Hackathon, Chile', detalle: 'Selected to compete at the hackathon organized by Platanus, the Chilean accelerator, in Santiago.' },
      { periodo: '2025', titulo: 'Makers Fellowship', detalle: 'Selected for a community of developers under 24 after building an AI platform in 24 hours.' },
    ],
  },
  CONTACTO: {
    etiqueta: 'Contact', titular: 'If you have a problem you care about solving, write to me.', email: 'melissa@cofoundy.dev',
    nota: 'I am interested in collaborations: projects with social impact, early-stage products, or simply a hard problem you would like to think through out loud.',
  },
  ui: { index: 'Index', findMe: 'Find me', openMenu: 'Open menu', closeMenu: 'Close menu', portraitAlt: 'Portrait of Melissa Iman Noriega', backToTop: 'Back to top' },
}

export const content = { en: EN, es: ES }
export type Language = keyof typeof content
