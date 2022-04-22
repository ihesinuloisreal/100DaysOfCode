import React, { Component } from 'react'

class formControl extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comment: ''
      }
    }
    inputHandler = (event) => {
        this.setState ({
            username: event.target.value
        })
    }
    textAreaHandler = (event) => {
        this.setState ({
            comment: event.target.value
        })
    }
    onSubmit = (e) => {
        alert(`${this.state.username} ${this.state.comment}`);
        e.preventDefault()
    }

  render() {
    return (
      <div>
        <div>
            <h2>Form Control</h2>
        </div>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.inputHandler}/>
            </div>
            <div>
                <label>Comment</label>
                <textarea value={this.state.comment} onChange={this.textAreaHandler} ></textarea>
            </div>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default formControl