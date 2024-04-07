
const AboutItem = ({img, label, description}) => {
  return (
    <article className="flex flex-col mr-10 lg:mx-10 mb-20">
        <img src={img} alt="img" width={20} height={20}/>
        <h3 className="mt-2 font-poppins font-medium">{label}</h3>
        <p className="text-dark-txt opacity-50 text-sm max-w-64 max-md:max-w-[90%] max-sm:max-w-[100%]">{description}</p>
    </article>
  )
}

export default AboutItem