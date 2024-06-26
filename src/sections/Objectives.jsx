import ObjectiveCard from "../components/ObjectiveCard"
import { objectivesList } from "../constants"
import {motion} from 'framer-motion'

const objectiveCardContainerVariants ={
  hidden: { 
    opacity: 0,
  },
  show:{
    opacity:1,
    transition: {
      staggerChildren: 0.5, //allows for each box in the grid to show up one after the other 
      delayChildren: 0.5
    }
  } 
}
const Objectives = () => {
  return (
    <section className="w-full flex flex-col padding-x scroll-mt-[60px] " id="objectives">
        <h1 className="text-center font-bold text-2xl font-outfit text-dark-txt">Objectives Of The Hannatu <br /> Halan Foundation</h1>

        <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m gap-10 items-stretch mt-20 justify-stretch"
        variants={objectiveCardContainerVariants}
        initial="hidden"
        whileInView="show">
            {
                objectivesList.map((obj, index)=>(
                    <ObjectiveCard key={obj.label} {...obj} index={index}/>
                ))
            }
        </motion.div>
    </section>
  )
}

export default Objectives