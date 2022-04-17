import React from 'react'
// import Button from './Button'

const Selector = () => {
    const createDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++){
          digits.push(
            <button  key={i}>{i}</button>
          )
        //   onClick={() => updateCalc(i.toString())}
        }
        return digits;
    }
    return (
        <div>
            {createDigits()}
        </div>
    )
}

export default Selector