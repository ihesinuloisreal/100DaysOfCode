
import React, { Component } from 'react'
import Button from '../Components/Button'
import Input from '../Components/Input'
import Message3 from './Message3'
class Message4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         ParentName: 'Amos',
         isLog: false

      }
    }

    greetParent = (child) =>{
      // alert(`Hello ${this.state.ParentName} it is ${child}`);
      this.setState(prevState => ({
                isLog: !prevState.isLog
            }))
    }
    // textHandler = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }
    // handleClick = (e) => {
    //   e.preventDefault();
    //   console.log(this.state.name)
    // }

  render() {
    if (this.state.isLog) {
      return (
        <div>

          <h1>Welcome Israel</h1>
          <Button name="Logout" greetparent={this.greetParent} click={this.handleClick}/>

        </div>
      )
    } else {
      return (
        <div>
          
            <h1>Welcome Guest</h1>
              {/* <Input type="text" change={ this.textHandler } value={this.state.name}/> */}
              <Button name="Login" greetparent={this.greetParent} click={this.handleClick}/>
         
          {/* <h1>{this.state.name}</h1> */}
  
          {/* <Message3 out={this.state.name}/> */}
        </div>
      )
    }
    
  }
}

export default Message4