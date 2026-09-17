/**
 * Resalta los tramos escritos entre ** dentro de un parrafo.
 * Sirve para que el ojo tenga donde engancharse sin romper la lectura:
 * el texto sigue siendo texto plano en content.ts.
 */
export function Texto({ children }: { children: string }) {
  const partes = children.split(/(\*\*[^*]+\*\*)/g)

  return (
    <>
      {partes.map((parte, i) => {
        if (parte.startsWith('**') && parte.endsWith('**')) {
          return (
            <strong key={i} className="font-normal text-cookie">
              {parte.slice(2, -2)}
            </strong>
          )
        }
        return <span key={i}>{parte}</span>
      })}
    </>
  )
}
