const Button = ({text, showInfo}) => {
  return(
    <div className="self-center ">
      <button className="p-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-300 hover:text-white hover:bg-blue-600 hover:border-transparent"onClick={showInfo}>{text}</button>
    </div>
  )
}

export default Button