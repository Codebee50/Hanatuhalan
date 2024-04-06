import AboutItem from "../components/AboutItem"
import { aboutItemList } from "../constants"

const About = () => {
  return (
    <section className="w-full max-container flex flex-row pt-20 padding-x justify-between max-lg:flex-col scroll-mt-[400px]" id="about">
        <div>
            <h1 className="font-bold font-outfit text-4xl text-dark-txt">About us</h1>
            <p className="max-w-64 mt-2 text-dark-txt opacity-50">Honoring a selfless Mother While giving hope to the Community <br /> <br /> Our support services cover a diverse set of needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between flex-1 lg:max-w-[650px] max-lg:mt-20">
            {
                aboutItemList.map((aboutItem)=> (
                    <AboutItem key={aboutItem.label} {...aboutItem}/>
                ))
            }
        </div>
    </section>
  )
}

export default About