// import {logo} from '../assets/icons'
import { navLinks } from '../constants'
import { hamburger } from "../assets/icons"



const Nav = () => {
  return (
    <section>
        <header className="w-full  py-4 sticky top-0 bg-light-green z-10">
            <nav className="flex padding-x w-full justify-between max-container" aria-label='main'>
                <p className='font-dancingscript text-hero-text font-bold text-3xl'>Hannatu Halan</p>

                    <div className='max-tablet:block hidden'>
                        <img src={hamburger} alt="hamburger" width={25} height={25}/>
                    </div>

                    {/* <ul className='flex-row items-center gap-16 hidden tablet:flex max-tablet:absolute max-tablet:top-0 max-tablet:flex max-tablet:w-full max-tablet:min-h-screen max-tablet:bg-black'> */}
                    <ul className='flex-row items-center gap-16 hidden tablet:flex max-tablet:absolute'>
                        {
                            navLinks.map((link)=> (
                                <li key={link.label}>
                                <a href={link.href} className='font-poppins hover:text-slate-500 text-hero-txt'>{link.label}</a>
                            </li>

                            ))
                        }
                    </ul>
            </nav>

            <nav className=" w-full flex-col absolute min-h-screen justify-between bg-black hidden" aria-label='mobile'>
                <ul className='flex-col items-center gap-16 tablet:flex '>
                    {
                        navLinks.map((link)=> (
                            <li key={link.label}>
                            <a href={link.href} className='font-poppins hover:text-slate-500 text-hero-txt'>{link.label}</a>
                        </li>

                        ))
                    }
                </ul>

                   
            </nav>


        </header>
        


    </section>
   



  )
}

export default Nav