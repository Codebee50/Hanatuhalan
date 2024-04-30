import EmployeeCard from "../components/EmployeeCard"
import { teamList } from "../constants"

const TeamSection = () => {
  return (
    <section className="w-full min-h-screen max-container scroll-mt-[55px] padding-x" id="team">
        <div className="w-full flex flex-col items-center">
            <p className="text-dark-green font-medium text-sm font-poppins">Management staff</p>
            <h1 className="font-bold text-4xl font-outfit">Meet our team</h1>
        </div>

        <div className="w-full mt-10 grid grid-auto-con items-center justify-center justify-items-center gap-7">
            {
                teamList.map((staff)=>(
                    <EmployeeCard key={staff.name} {...staff} />
                ))
            }
        </div>
    </section>
  )
}

export default TeamSection