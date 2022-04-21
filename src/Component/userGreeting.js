import React, { Component } from 'react'

class userGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }
  }
  render() {
    return this.state.isLoggedIn && <div>Welcome Israel</div> 

    // *Short Circle Approach* //

    // *Tenary Conditional Approach* //
    // return(
    //   this.state.isLoggedIn ? (
    //   <div>Welcome Israel</div> 
    //  ) : (
    //   <div>Welcome Guest</div>)
    // )

    // ** Element Variable Approach ** //
    // let message
    // if (this.state.isLoggedIn){
    //   message = <div>Welcome Israel</div>
    // }
    // else {
    //   message = <div> Welcome Guest</div>
    // }
    // return <div>{message}</div>

    // ** The If/Else ** //
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Israel</div>
    // }else{
    //   return <div> Welcome Guest</div>
    // }
  }
}

export default userGreeting