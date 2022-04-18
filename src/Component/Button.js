
const Button = ({bgcolor, fgcolor, click, text}) => {
  // const {onClick} = state
  // const{color} = props
  return (
    <div>
        <button style={{backgroundColor: bgcolor, color: fgcolor}} onClick={ click}> {text}</button>
    </div>
  )
}

export default Button