import React, { Component } from 'react'
import { UserConsumer } from '../Contex/userContext'

class Message3 extends Component {
  
  
  render() {
    return (
      <div>
        <UserConsumer>
          {
            username => {
              return <div>Hello {username}</div>
            }
          }
        </UserConsumer>
        <h1>{this.props.out}</h1>
      </div>
    )
  }
}

export default Message3