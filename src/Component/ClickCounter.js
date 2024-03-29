import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
    
  render() {
      const {count, increamentCount} = this.props
    return (
      <div>
          <button onClick={increamentCount}> Clicked {count} Times</button>
      </div>
    )
  }
}

export default withCounter( ClickCounter, 5)