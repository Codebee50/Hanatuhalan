
const ContactCard = (props) => {
const classes  = 'card ' + props.className
  return (
    <div className={classes}>
        <h2 className="font-bold capitalize">{props.title}</h2>
        <div className="flex flex-col items-start mt-2 max-w-72 gap-2">
            {
                props.children
            }
        </div>
    </div>
  )
}

export default ContactCard