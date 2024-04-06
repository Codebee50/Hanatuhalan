import ObjectiveCard from "../components/ObjectiveCard"
import { objectivesList } from "../constants"

const Objectives = () => {
  return (
    <section className="w-full flex flex-col padding-x ">
        <h1 className="text-center font-bold text-2xl font-outfit text-dark-txt">Objectives Of The Hannatu <br /> Halan Foundation</h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m gap-10 items-start mt-20">
            {
                objectivesList.map((obj)=>(
                    <ObjectiveCard key={obj.label} {...obj}/>
                ))
            }
        </div>
    </section>
  )
}

export default Objectives