/**
 * Este es el unico archivo que necesitas tocar para cambiar los textos.
 * El layout se acomoda solo, sin importar que tan largo escribas.
 */

export const NAV = [
  { label: 'Sobre mi', href: '#sobre' },
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
    'Ingenieria de software y producto',
    'Ciencia de la Computacion, UNI',
    'Escucho problemas y construyo la salida',
  ],
  derecha: ['Lima, Peru', 'UNI — FC'],
}

export const SOBRE = {
  etiqueta: 'Sobre mi',

  // OPCION A (la que esta activa). Apunta a tu manera de trabajar.
  titular:
    'Me interesa menos la tecnologia que la persona del otro lado. Escucho un problema, entiendo a quien le duele, y recien ahi decido que construir.',

  // OPCION B — si preferis esta, borra la de arriba y descomenta:
  // titular:
  //   'Construyo software para problemas que le importan a alguien. Empiezo escuchando, y el codigo viene despues.',

  // OPCION C — mas corta y directa:
  // titular:
  //   'Escucho problemas. Construyo la salida. En ese orden.',

  parrafos: [
    'Naci en Lima y estudio Ciencia de la Computacion en la Universidad Nacional de Ingenieria. Entre a la carrera con una beca del BCP y desde los primeros ciclos me meti a competir en hackathons: llegue a finalista nacional del Hult Prize, y esa costumbre de armar algo funcionando contra reloj me llevo a la hackathon de Platanus en Chile, a Suiza, y a una pasantia de investigacion con financiamiento completo en la Universidad de Alberta, en Canada.',
    'Hoy hago ingenieria de software y gestion de producto. Lo que de verdad me mueve es crear empresas y resolver problemas de gente real, sobre todo los sociales: finanzas personales para quien nunca llevo un registro de sus gastos, o pequenos emprendedores que necesitan digitalizarse y ordenarse para poder crecer. Me gusta sentarme a escuchar un problema complejo y encontrar por donde la tecnologia lo destraba.',
  ],

  datos: [
    { clave: 'Estudio', valor: 'Ciencia de la Computacion, UNI' },
    { clave: 'Enfoque', valor: 'Producto e ingenieria de software' },
    { clave: 'Base', valor: 'Lima, Peru' },
  ],
}

export const TRABAJO = {
  etiqueta: 'Trabajo',
  titular: 'Investigacion, sistemas legados y producto: tres formas de atacar el mismo problema.',
  proyectos: [
    {
      titulo: 'Evaluacion automatica de usabilidad web',
      rol: 'Tesis',
      anio: '2026',
      descripcion:
        'Framework que evalua la usabilidad de una interfaz web usando agentes inteligentes multimodales. Auditar usabilidad hoy exige horas de un especialista; la propuesta es que un agente lea la pantalla como la leeria una persona y reporte donde se traba.',
      tags: ['Agentes multimodales', 'Usabilidad', 'Investigacion'],
      href: '#',
    },
    {
      titulo: 'Cofoundy',
      rol: 'Co-fundadora',
      anio: '2024 — presente',
      descripcion:
        'Consultora de software e IA a medida para empresas. Detectamos procesos manuales y repetitivos, y los automatizamos. Trabajo de punta a punta: entender donde se pierde el tiempo, disenar la solucion y llevarla a produccion.',
      tags: ['Next.js', 'LangGraph', 'AWS', 'Automatizacion'],
      href: '#',
    },
    {
      titulo: 'Sistema RAG multimodal — U. de Alberta',
      rol: 'Investigadora',
      anio: '2025',
      descripcion:
        'Pasantia de investigacion con beca completa en el Departamento de Ingenieria Civil. Migre un sistema de 15 anios y 11,000 lineas de una estructura monolitica a arquitectura modular en C++, y construi un sistema RAG multimodal que lee PDFs, hojas de calculo e imagenes para que el equipo encuentre en segundos lo que antes buscaba a mano.',
      tags: ['LangChain', 'Bases vectoriales', 'C++', 'RAG'],
      href: '#',
    },
    {
      titulo: 'Bilio',
      rol: 'Creadora',
      anio: '2025',
      descripcion:
        'Chatbot de finanzas personales que corre sobre WhatsApp: registras un gasto escribiendolo como le escribirias a un amigo. Nacio de una idea simple: la gente no lleva sus cuentas porque abrir una app y llenar un formulario es demasiada friccion.',
      tags: ['WhatsApp', 'IA conversacional', 'Finanzas'],
      href: '#',
    },
  ],
}

export const CAMINO = {
  etiqueta: 'Camino',
  titular: 'De un hackathon en Lima a un laboratorio en Canada, sin soltar la misma pregunta: a quien le sirve esto.',
  hitos: [
    {
      periodo: '2022 — presente',
      titulo: 'Ciencia de la Computacion, UNI',
      detalle:
        'Entre con beca del BCP. Desde los primeros ciclos compiti en hackathons dentro y fuera del pais, y llegue a finalista nacional del Hult Prize.',
    },
    {
      periodo: '2024 — presente',
      titulo: 'Cofoundy — Co-fundadora',
      detalle:
        'Consultora de software e IA a medida. Automatizamos procesos manuales y repetitivos para empresas, de la deteccion a la produccion.',
    },
    {
      periodo: '2025',
      titulo: 'Universidad de Alberta, Canada',
      detalle:
        'Pasantia de investigacion con financiamiento completo, otorgada por excelencia academica. Modernizacion de sistemas y asistentes de IA para investigacion.',
    },
    {
      periodo: '2024 — 2025',
      titulo: 'NTT DATA, Acecom, Innovation Cleverly',
      detalle:
        'Desarrollo full stack en entornos de empresa. En Acecom pase a liderar el area web, coordinando a mas de diez desarrolladores.',
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
        'Seleccionada para una comunidad de desarrolladores menores de 24 anios, tras construir una plataforma con IA en 24 horas.',
    },
  ],
}

export const CONTACTO = {
  etiqueta: 'Contacto',
  titular: 'Si tenes un problema que te importa resolver, escribime.',
  email: 'melissa@cofoundy.dev',
  nota:
    'Me interesan las colaboraciones: proyectos con impacto social, productos en etapa temprana, o simplemente un problema dificil que quieras pensar en voz alta.',
}
