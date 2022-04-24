import React, { PureComponent } from 'react'
import PureComp from './PureComponent'
import RegulerComp from './RegulerComp'

class ParentComponent extends PureComponent {
    
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Israel'
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'israel'
            })
        }, 2000)
    }
  render() {
      console.log('*******Parent Component Render*******')
    return (
      <div>
        Parent Component
        <PureComp name={this.state.name}/>
        <RegulerComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComponent