/** Rotulo chico que abre cada seccion. */
export function Etiqueta({ children }: { children: string }) {
  return (
    <p className="font-hn text-xs uppercase tracking-[0.2em] text-cookie/50">{children}</p>
  )
}
