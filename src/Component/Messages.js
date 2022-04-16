import React from 'react'
// import { useState } from 'react'

const Messages = (props) => {
    const {greet} = props;
  return (
    <div>
      <h1>Hello, User {greet}</h1>
    </div>
  )
}

export default Messages