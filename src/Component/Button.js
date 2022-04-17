
const Button = ({bgcolor, fgcolor, click}) => {
  // const {onClick} = state
  // const{color} = props
  return (
    <div>
        <button style={{backgroundColor: bgcolor, color: fgcolor}} onClick={ click}> Subscribe</button>
    </div>
  )
}

export default Button