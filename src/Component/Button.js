
const Button = (state,props) => {
  const {onClick} = state
  const{color} = props
  return (
    <div>
        <button style={ {color: {color}}} onClick={onClick}> Subscribe</button>
    </div>
  )
}

export default Button