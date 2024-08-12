import { RiWhatsappLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";


const EmployeeCard = (props) => {
  return (
    <div className="bg-[#FAFAFA] shadow-sm rounded-md min-w-[280px]  max-w-[300px] flex flex-col items-center p-4">

        <div>
            <img src={props.image} alt="" width={200} height={200} className="" />
        </div>

        <p className="mt-5 font-semibold text-black font-outfit">{props.name}</p>
        <p className="mt-[3px] font-light font-poppins text-[0.9rem]">{props.role}</p>

        <div className="flex-row flex-wrap items-center mt-5 gap-1 hidden">
            <a href={props.contactLinks.whatsapp}><RiWhatsappLine fill="#9AA2B0"size={'1.5em'} className="hover:fill-[#128C7E]" /></a>
            <a href={props.contactLinks.whatsapp}><RiFacebookCircleLine fill="#9AA2B0" size={'1.5em'} className="hover:fill-[#17A9FD]"/></a>
        </div>
    </div>
  )
}

export default EmployeeCard