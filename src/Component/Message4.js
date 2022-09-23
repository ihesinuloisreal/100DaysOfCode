
import React, { Component } from 'react'
import Button from '../Components/Button'
import Input from '../Components/Input'
import Message3 from './Message3'
class Message4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         ParentName: 'Amos'

      }
    }

    greetParent = (child) =>{
      alert(`Hello ${this.state.ParentName} it is ${child}`)
    }
    textHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleClick = (e) => {
      e.preventDefault();
      console.log(this.state.name)
    }

  render() {
    return (
      <div>
        

            <Input type="text" change={ this.textHandler } value={this.state.name}/>
            <Button name="Click" greetparent={this.greetParent} click={this.handleClick}/>
       
        <h1>{this.state.name}</h1>

        <Message3 out={this.state.name}/>
      </div>
    )
  }
}

export default Message4