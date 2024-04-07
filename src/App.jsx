import Nav from "./components/Nav"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Objectives from "./sections/Objectives"
import Gallery from "./sections/Gallery"

export default function App() {
  return (
    <main>
      <Nav/>

      <section className="w-full bg-light-green">
        <Hero/>
      </section>

      <About/>
      
      <Objectives/>

      <Gallery/>
    </main>
  )
}