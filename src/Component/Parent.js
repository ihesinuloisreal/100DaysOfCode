
import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parent: 'Parent'
      }
    this.greatParent = this.greatParent.bind(this);

    }

    greatParent(childName){
        alert(`Hello ${this.state.parent} from ${childName}`)
    }

  render() {
    return (
      <div>
        <Child greatHandler = {this.greatParent}/>
      </div>
    )
  }
}

export default Parent