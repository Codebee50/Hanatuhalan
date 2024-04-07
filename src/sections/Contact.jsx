import ContactCard from "../components/ContactCard"
import { socials } from "../constants"
import {motion} from 'framer-motion'

const Contact = () => {
 
  return (
    <section className="padding-x padding-y max-container min-h-[70vh]">
        <div>
            <p className="font-bold text-sm">CONTACT</p>
            <motion.h1 className="font-bold text-4xl sm:text-5xl font-outfit"
           
            >Want to make a difference? We can do it together! </motion.h1>
            <p className="mt-3 opacity-50 w-[90%]"
            >
                Do you share our passion for supporting widows and orphans? with your help, we can truly make a lasting impact. {"We're"} currently seeking donations of clothes, food, and any financial support you can offer.
                Call, email, or visit us - every bit counts.
            </p>
        </div>

        <div className="mt-8 w-full flex flex-wrap flex-row gap-16 justify-between">
            <ContactCard title='LOCATION'>
                <p className="font-light">093 Jerrell Lakes, Apt. 986, 16146-9246, East Jalynview, Abuja Nigeria</p>
            </ContactCard>

            <ContactCard title='EMAIL'>
                <a href="mailto:hanatuhalanfoundation@gmail.com" className="font-light underline">hanatuhalan@gmail.com</a>
            </ContactCard>


            <ContactCard title='PHONE'>
                <a href="tel:09128168542" className="font-light underline">09128168542</a>
                <a href="tel:09128168542" className="font-light underline">08143015512</a>

            </ContactCard>

            <ContactCard title='SOCIALS'>
                {
                    socials.map((social)=>(
                        <a key={social.label} href={social.link} className="flex flex-row items-center gap-2">
                            {social.image && <img src={social.image} alt="icon" width={20} height={20}/>}
                            <p className="font-light underline">{social.label}</p>
                        </a>
                        
                    ))
                }

            </ContactCard>

          
        </div>

    </section>
  )
}

export default Contact