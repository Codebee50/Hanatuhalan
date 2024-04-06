
const ObjectiveCard = ({imgURL, label, body}) => {
  return (
    <div className={`flex flex-col-reverse items-center w-full shadow-md`}>
        <article className="w-full max-w-lg p-10 flex flex-col relative">
            <h2 className="font-outfit font-bold">{label}</h2>
            {
                body.map((item)=>(
                    <p key={item} className="mt-5 text-sm opacity-70 ">{item}</p>
                ))
            }
        </article>

        <div className="w-full md:max-w-lg">
            <img src={imgURL} alt=""  className="w-full"/>
        </div>
    </div>
  )
}

export default ObjectiveCard