import ContactCard from "../components/ContactCard"
import { socials } from "../constants"

const Contact = () => {
  return (
    <section className="padding-x padding-y max-container min-h-screen">
        <div>
            <p className="font-bold text-sm">CONTACT</p>
            <h1 className="font-bold text-4xl sm:text-5xl font-outfit">Want to make a difference? We can do it together! </h1>
            <p className="mt-3 opacity-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nemo rerum modi temporibus, nam fugit ea molestias esse nesciunt omnis, dolore architecto eligendi similique labore consequatur natus ut suscipit pariatur!</p>
        </div>

        <div className="mt-8 w-full flex flex-wrap flex-row gap-16 justify-between">
            <ContactCard title='LOCATION'>
                <p className="font-light">093 Jerrell Lakes, Apt. 986, 16146-9246, East Jalynview, Texas, United States</p>
            </ContactCard>

            <ContactCard title='EMAIL'>
                <a href="mailto:hanatuhalanfoundation@gmail.com" className="font-light underline">hanatuhalan@gmail.com</a>
            </ContactCard>


            <ContactCard title='PHONE'>
                <a href="tel:09128168542" className="font-light">09128168542</a>
                <a href="tel:09128168542" className="font-light">08143015512</a>

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