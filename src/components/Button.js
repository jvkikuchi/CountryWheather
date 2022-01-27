const Button = ({text, showInfo}) => {
  return(
    <div className="self-center pt-4">
      <button className="py-1 text-sm w-24 text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:text-white hover:bg-blue-600 hover:border-transparent ease-in duration-100"onClick={showInfo}>{text}</button>
    </div>
  )
}

export default Button