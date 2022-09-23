import React from 'react'

const Button = ({name,click, greetparent}) => {
  return (
    <div>
        <button onClick={() => greetparent("Israel")}>{name}</button>
    </div>
  )
}

export default Button