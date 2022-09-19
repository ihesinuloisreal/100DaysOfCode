import React, { Component } from 'react'
import Message3 from './Message3'

export class Message4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: ''
      }
    }
    textHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleClick(e){
        console.log(this.state.name)
        e.preventDefault();
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
            <input type="text" value={this.state.name} onChange={ this.textHandler } />
            <button>Click</button>
        </form>
        {/* <h1>{this.state.name}</h1> */}

        <Message3 out={this.state.name}/>
      </div>
    )
  }
}

export default Message4