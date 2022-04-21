import React from 'react'
import './myStyle.css'

const Stylesheet = ({primary}) => {
    let classname = primary ? 'primary' : ''
  return (
    <div>
        <h1 className={`${classname} font-xl`}>Stylesheets</h1>
    </div>
  )
}

export default Stylesheet