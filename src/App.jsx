import Nav from "./components/Nav"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Objectives from "./sections/Objectives"

export default function App() {
  return (
    <main>
      <Nav/>

      <section className="w-full bg-light-green">
        <Hero/>
      </section>

      <About/>
      
      <Objectives/>
    </main>
  )
}