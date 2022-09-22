import React from 'react'

const Input = ({type,value, change}) => {
  return (
    <div>
        <input type={type} value={value} onChange={change} />
    </div>
  )
}

export default Input