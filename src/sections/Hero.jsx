// import childrenbg from "../assets/images/children-bg.jpg"
// import boy from '../assets/images/boy.jpg'
import { boys } from "../assets/images"

const Hero = () => {
  return (
    <section className="max-container pt-4 max-xl:p-10">

        <div className="flex flex-row w-full justify-between items-center max-lg:flex-col">

        <div className="flex flex-col w-1/2 lg:mt-10 max-lg:w-full">
            <p className="text-hero-txt">Hannatu Halan Foundation</p>
            <h1 className="text-5xl max-sm:text-4xl max-sm:leading-10 font-black font-outfit leading-normal text-hero-txt">Empowering <span className="text-bright-yellow">widows</span> <br/> and <span className="text-dark-green">orphans</span>, building brighter futures.</h1>
            <p className='text-hero-txt opacity-50 w-9/12 text-left mt-3 max-sm:text-sm max-lg:w-full'>dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex eacilisis at vero eros et accumsan et iusto odio dignissim qui ugait nulla facilisi.</p>
           
            <button className='bg-[#63B676] text-white w-max py-3 px-8 mt-5 rounded-md font-medium cursor-pointer'>Contact us</button>
        </div>
        
        <img  src={boys} alt="" className=' relative flex-1 w-1/2 h-[600px] object-cover object-top justify-self-end max-lg:w-full max-lg:hidden'/>
        </div>


        
    </section>
  )
}

export default Hero