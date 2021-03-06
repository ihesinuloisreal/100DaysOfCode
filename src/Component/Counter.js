import React, { Component } from 'react'
import Button from './Button'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    increment() {
        // this.setState({
        // count: this.state.count + 1
        // }, 
        // () => ('Callback value', console.log(this.state.count)))

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
        <div>
            <div>count - {this.state.count}</div>
            {/* <button }>Increment</button> */}
            <Button bgcolor = "blue" fgcolor="white" click={()=>this.incrementFive()}/>
        </div>
        )
  }
}

export default Counter