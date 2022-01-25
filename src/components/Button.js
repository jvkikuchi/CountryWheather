const Button = ({text, showInfo}) => {
  return(
    <button onClick={showInfo}>{text}</button>
  )
}

export default Button