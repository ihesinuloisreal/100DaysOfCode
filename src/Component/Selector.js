import React from 'react'
import Button from './Button'
import { useState } from 'react'

const Selector = () => {
    const [num, setnum] = useState(0);
    

    const createDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++){
          digits.push(

            <Button click={() => setnum(i.toString())} text={i} key={i}></Button>
          )
        //   onClick={() => updateCalc(i.toString())}
        }
        return digits;
    }
    return (
        <div>
            <div>
            {createDigits()}
            </div>
            <h2>You just Clicked {num} Button</h2>
            
        </div>
    )
}

export default Selector