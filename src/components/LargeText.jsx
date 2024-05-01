

const LargeText = (props) => {
  return (
    <p className="sm:max-w-[80%] lg:max-w-[50%] text-dark-txt text-lg sm:text-xl md:text-2xl font-poppins">
        {props.text}
    </p>
  )
}

export default LargeText