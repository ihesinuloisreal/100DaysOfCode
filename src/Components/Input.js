import React from 'react'

const Input = ({type,value, onchange}) => {
  return (
    <div>
        <input type={type} value={value} onChange={onchange} />
    </div>
  )
}

export default Input