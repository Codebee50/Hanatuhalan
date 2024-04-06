// import {logo} from '../assets/icons'
import { navLinks } from '../constants'
import { hamburger, xmark } from "../assets/icons"
import { useState } from 'react'




const Nav = () => {
    const [navVisible, setNavVisible] = useState(false)
    const navClickHandler = ()=>{
        setNavVisible(!navVisible)
    }
  return (
    <section className='sticky top-0 bg-light-green z-50'>
        <header className="w-full flex flex-col py-4 sticky top-0 bg-light-green z-50">
            <nav className="flex padding-x w-full justify-between max-container" aria-label='main'>
                <p className='font-dancingscript text-hero-text font-bold text-3xl'>Hannatu Halan</p>

                    <div className='max-tablet:block hidden' onClick={navClickHandler}>
                        <img src={navVisible? xmark: hamburger} alt="hamburger" width={25} height={25}/>
                    </div>

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
            
            
            <nav className={`${navVisible? 'py-12 h-[400px]': 'closed-h py-0'} flex w-full flex-col justify-center items-center transition-all duration-300 ease-linear overflow-hidden`} aria-label='mobile'>
                <ul className='flex flex-col padding-x gap-16 tablet:flex w-full'>
                    {
                        navLinks.map((link)=> (
                            <li key={link.label} className='border-b-2 pb-2'>
                            <a href={link.href} onClick={navClickHandler} className='font-poppins hover:text-slate-500 text-dark-txt'>{link.label}</a>
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