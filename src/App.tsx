import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Sobre } from './components/Sobre'
import { Trabajo } from './components/Trabajo'
import { Camino } from './components/Camino'
import { Contacto } from './components/Contacto'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Trabajo />
        <Camino />
        <Contacto />
      </main>
    </>
  )
}
