import React from 'react'
import Button from './Button'


const Child = (props) => {
  return (
    <div>
        <Button click={() => props.greatHandler('Child')} text={'Click Me'}/>

    </div>
  )
}

export default Child