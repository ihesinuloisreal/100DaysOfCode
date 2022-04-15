import React, { Component } from 'react'
import Button from './Button'


class Message extends Component {
    constructor(){
        super()
        this.state={
            message: 'Welcome visitor'
        }
    }
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

  render() {
    return (
        <div>
            <h1>
                {this.state.message}
            </h1>
            <Button click={() => this.changeMessage()}/>
            {/* <button onClick={() => this.changeMessage}>Subscribe</button> */}
        </div>
    )
  }
}
export default Message