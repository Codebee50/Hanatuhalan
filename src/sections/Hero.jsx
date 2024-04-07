// import childrenbg from "../assets/images/children-bg.jpg"
// import boy from '../assets/images/boy.jpg'
import { boys } from "../assets/images"
import { logo } from "../assets/icons"
import { useState } from "react"

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <section className="max-container pt-4 max-xl:p-10 max-tablet:scroll-mt-[600px]" id="home">

        <div className="flex flex-row w-full justify-between items-center max-lg:flex-col">

        <div className="flex flex-col w-1/2 lg:mt-10 max-lg:w-full">
            <img src={logo} alt="" width={100} className="rounded-full"/>
            {/* <p className="text-hero-txt">Hannatu Halan Foundation</p> */}
            <h1 className="text-5xl max-md:text-4xl max-sm:text-3xl max-sm:leading-10 font-black font-outfit leading-normal text-hero-txt">Empowering <span className="text-bright-yellow">widows</span> <br/> and <span className="text-dark-green">orphans</span>, building brighter futures.</h1>
            <article className='text-hero-txt opacity-50 w-9/12 text-left mt-3 max-sm:text-sm max-lg:w-full'>To provide holistic support and empowerment to widows and orphans, ensuring their socio-economic well-being, educational advancement, and emotional resilience through various programs and initiatives.</article>
           
            <button className='bg-[#63B676] text-white w-max py-3 px-8 mt-5 rounded-md font-medium cursor-pointer'>Contact us</button>
        </div>
        
        <div className="w-1/2 h-[600px] max-lg:hidden bg-hero-small bg-cover bg-top bg-no-repeat">
        <img  src={boys} onLoad={()=>{setImageLoaded(true)}} alt="Hannatu Halan Foundation"  className={`relative flex-1 w-full h-[600px] object-cover object-top justify-self-end max-lg:w-full ${imageLoaded?'block':'hidden'}  max-lg:hidden `}/>
        </div>
        </div>


        
    </section>
  )
}

export default Hero