import React, { useState } from 'react'

const Regulator = () => {
    const [out, setOut] = useState(0)

    const num = () => {
        const digit = []
        for(let i = 0; i <= 20; i++) {
            digit.push(<button onClick={() => setOut(i.toString())} className='btn btn-primary'>{i}</button>)
        }
        return digit
    }
  return (
    <div>
        {num()}
        <h2>{out*2}</h2>
    </div>
  )
}

export default Regulator