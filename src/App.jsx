import Nav from "./components/Nav"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Objectives from "./sections/Objectives"
import Gallery from "./sections/Gallery"
import Contact from "./sections/Contact"
import TeamSection from "./sections/TeamSection"

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

      <TeamSection/>
      <section className="w-full bg-[#FCFCFA] max-tablet:scroll-mt-[45px]" id="contact-us">
      <Contact/>

      </section>
    </main>
  )
}