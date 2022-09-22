import React from 'react'

const Button = ({name,click}) => {
  return (
    <div>
        <button onClick={click}>{name}</button>
    </div>
  )
}

export default Button