# Portafolio — Melissa Iman Noriega

Hero editorial de un solo viewport. Vite + React + TypeScript + Tailwind.

## Correr

```bash
npm install
npm run dev
```

## Estructura

```
src/
  App.tsx      hero completo (header, marquee, retrato, footer, drawer)
  index.css    keyframes de entrada + marquee + reduced-motion
public/img/
  bg.jpg       fondo generado (gradiente ruby con grano)
  melissa.webp retrato recortado con transparencia
```

## Paleta

| Rol | Hex | Uso |
|---|---|---|
| Ruby | `#AB3940` | acento del fondo |
| Rhodonite | `#AC515F` | secundario |
| Pink Opal | `#FE9DA7` | acento claro |
| Cookie Batter | `#E4D1C0` | todo el texto |
| Jeans | `#5A7A99` | frio, contrapunto |
| Ink | `#2B1013` | base oscura |

## Tipografia

- **Fraunces** (Google Fonts, variable con ejes `SOFT` y `WONK`) para display: el nombre gigante, el brand y los links del drawer.
- **Helvetica Neue ME** para el chrome: nav, footer, labels.

## Animaciones

| Clase | Duracion | Aplica a |
|---|---|---|
| `anim-fade-in` | 1.2s ease-out | fondo |
| `anim-rise-in` | 1.4s | retrato (delay 300ms) |
| `anim-fade-up` | 0.9s | chrome, escalonado 500→1550ms |
| `anim-line` | 1.1s | regla horizontal (delay 1200ms) |
| `.marquee` | 30s linear infinite | nombre |

Todas se colapsan bajo `prefers-reduced-motion: reduce`.

## Pendiente

- Links reales de LinkedIn e Instagram (hoy `#`)
- Secciones de Historia / Trabajo / Mensaje
